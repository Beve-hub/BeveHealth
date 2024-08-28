import { ActionIcon, Avatar, Box, Button, Group, Image, ScrollArea, Text, Textarea } from '@mantine/core';
import { IconArrowLeft, IconMicrophone, IconPhoto, IconSend, IconVideo } from '@tabler/icons-react';
import React from 'react';
import { IoIosCall } from "react-icons/io";
import { useMediaQuery } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const ChatField = ({ onUserSelect }: { onUserSelect: () => void }) => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const selectedUser = useSelector((state: RootState) => state.chat.selectedUser);
  const messages = useSelector((state: RootState) => state.chat.messages);

  const userMessages = selectedUser ? messages[selectedUser] || [] : [];

  return (
    <div style={{ width: '40rem', padding: '0 2rem', borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }}>
      <Box style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between' }}>
        <Group>
          {isSmallScreen && (
            <ActionIcon color='#12121210' onClick={onUserSelect}>  {/* Back button for small screens */}
              <IconArrowLeft color='#121212' />
            </ActionIcon>
          )}
          {selectedUser && <Avatar size={40} />}
          <Text fz="16" fw="500">{selectedUser || ""}</Text>
        </Group>
        <Group>
          <ActionIcon color='#12121210'><IconVideo size={20} color='#121212' /></ActionIcon>
          <ActionIcon color='#12121210'><IoIosCall size={20} color='#121212' /></ActionIcon>
        </Group>
      </Box>

      <ScrollArea h="60vh" type="scroll" scrollbarSize={1} py={2}>
        <Box>
          {userMessages.length > 0 ? (
            userMessages.map((message, index) => (
              <Group key={index} justify={message.sender === 'user' ? 'flex-end' : 'flex-start'}>
                {message.type === 'text' && (
                  <Text style={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    backgroundColor: message.sender === 'user' ? '#008C73' : '#ffff',
                    color: message.sender === 'user' ? '#FFFFFF' : '#000000',
                    maxWidth: '20rem',
                    margin: '1rem 0rem',
                    borderRadius: message.sender === 'user' 
                    ? '1rem 0rem 1rem 1rem'  // Sender: zero top-right radius
                    : '0rem 1rem 1rem 1rem',  // Receiver: zero top-left radius
                    fontSize: '14px',
                    padding: '0.8rem 2rem 1rem'
                  }}>
                    {message.content}
                  </Text>
                )}
                {message.type === 'image' && (
                  <Image src={message.content} alt='image' style={{ maxHeight: '18rem', maxWidth: '18rem', margin: '1rem 0rem' }} />
                )}
                {message.type === 'audio' && (
                  <audio controls src={message.content} style={{ margin: '1rem 0rem' }} />
                )}
              </Group>
            ))
          ) : (
            <Text></Text>
          )}
        </Box>
      </ScrollArea>

      <Box style={{ padding: '1rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Group style={{ backgroundColor: '#12121210', borderRadius: 20, padding: '0.2rem 2rem' }}>
          <Textarea variant="unstyled" size="sm" placeholder="Type a message" style={{ width: '20rem' }} />
          <Group>
            <ActionIcon color='#12121210'><IconPhoto color='#121212' /></ActionIcon>
            <ActionIcon color='#12121210'><IconMicrophone size={22} color='#121212' /></ActionIcon>
          </Group>
        </Group>
        <Button variant='filled' color='#008C73'>
          <IconSend />
        </Button>
      </Box>
    </div>
  );
};

export default ChatField;
