import { Box } from "@mantine/core";
import ChatMenu from "../../../../utilites/reusable/ChatMenu";
import ChatField from "../../../../utilites/reusable/ChatField";
import { useMediaQuery } from "@mantine/hooks";

const BodyMes = () => {
    const isSmallScreen = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <Box
        mt="40"
        style={{
          display: "flex",
          maxWidth: "100%",
          height: "50rem",
        }}
      >
        <ChatMenu />
        {isSmallScreen && <ChatField />}
      </Box>
    </div>
    )
}

export default BodyMes
