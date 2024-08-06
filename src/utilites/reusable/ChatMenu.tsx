import { Avatar, Group, ScrollArea, Text, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import CustomInput from "./CustomInput";
import { CiSearch } from "react-icons/ci";

const user = [
  {
    chat: "hello nice to meet you",
    name: "Dr. John",
    avatar: <Avatar src="avatar.png" alt="it's me" size={50} />,
  },
  {
    chat: "hello nice to meet you",
    name: "Dr. John",
    avatar: <Avatar radius="xl" size={50} />,
  },
  {
    chat: "hello nice to meet you",
    name: "Dr. John",
    avatar: <Avatar src="avatar.png" alt="it's me" size={50} />,
  },
];

const ChatMenu = () => {
  const [search, setSearch] = useState("");
  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        width: "23rem",
        borderTopLeftRadius: "1rem",
        borderBottomLeftRadius: "1rem",
      }}
    >
      <Group justify="center" my="50">
        <CustomInput
          type="text"
          iconPosition="right"
          icon={CiSearch}
          placeholder="Search a new chat"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          style={{
            backgroundColor: "none",
            borderRadius: "20rem",
            width: "16rem",
          }}
        />
      </Group>

      <ScrollArea style={{}}>
        {user
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
            <UnstyledButton
              key={index}
              style={{
                cursor: "pointer",
                display: "flex",
                gap: 20,
                marginLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              {item.avatar}
              <Text display="grid">
                <Text fz="18" fw="500">
                  {item.name}
                </Text>
                <Text color="#12121260">{item.chat}</Text>
              </Text>
            </UnstyledButton>
          ))}
      </ScrollArea>
    </div>
  );
};

export default ChatMenu;
