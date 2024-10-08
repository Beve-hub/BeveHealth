import { Box } from "@mantine/core";
import ChatMenu from "../../../../utilites/reusable/ChatMenu";
import ChatField from "../../../../utilites/reusable/ChatField";
import { useMediaQuery } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState, useEffect } from "react";

const BodyMes = () => {
  const isSmallScreen = useMediaQuery("(min-width: 768px)");
  const selectedUser = useSelector((state: RootState) => state.chat.selectedUser);
  const [view, setView] = useState<'menu' | 'chat'>('menu'); // track current view

  useEffect(() => {
    if (!isSmallScreen && selectedUser) {
      setView('chat');
    } 
  }, [isSmallScreen, selectedUser]); // Depend on screen size and selected user

  return (
    <Box
      mt="10"
      style={{
        display: "flex",
        maxWidth: "100%",
        height: "38rem",
        justifyContent: "center",
      }}
    >
       {isSmallScreen ? (
          // On large screens, show both the ChatMenu and ChatField
          <>
            <ChatMenu onUserSelect={() => setView('chat')} />
            <ChatField onUserSelect={() => setView('menu')} />
          </>
        ) : (
          // On small screens, toggle between ChatMenu and ChatField
          view === 'menu' ? (
            <ChatMenu onUserSelect={() => setView('chat')} />
          ) : (
            <ChatField onUserSelect={() => setView('menu')} />
          )
        )}
    </Box>
  );
};

export default BodyMes;
