import { Box } from "@mantine/core";
import ChatMenu from "../../../../utilites/reusable/ChatMenu";
import ChatField from "../../../../utilites/reusable/ChatField";
import { useMediaQuery } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
const BodyMes = () => {
    const isSmallScreen = useMediaQuery("(min-width: 768px)");
    const selectedUser = useSelector((state: RootState) => state.chat.selectedUser);
    const [view, setView] = useState<'menu' | 'chat'>('menu'); // track current view

    if (isSmallScreen && selectedUser && view === 'menu') {
      setView('chat'); // switch to chat view if small screen and user is selected
    }

  return (
    <div>
       <Box
          mt="10"
          style={{
            display: "flex",
            maxWidth: "100%",
            height: "38rem",
            justifyContent: "center"
          }}
        >
          
          {isSmallScreen || view === 'menu' ? (
            <ChatMenu onUserSelect={() => setView('chat')} />
            ) : (
            <ChatField onUserSelect={() => setView('menu')} />)}
        </Box>
    </div>
    )
}

export default BodyMes
