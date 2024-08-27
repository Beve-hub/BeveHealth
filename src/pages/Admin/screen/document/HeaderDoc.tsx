import { useState } from 'react';
import {TextInput ,ActionIcon, UnstyledButton,Avatar, Group,Text, } from '@mantine/core';
import { IoNotificationsOutline } from "react-icons/io5";
import { useMediaQuery,} from '@mantine/hooks';

const HeaderDoc = () => {
    const isSmallScreen = useMediaQuery('(min-width: 768px)');
    const [search, setSearch] = useState('');
      return (
          <Group display="flex" justify='space-between' >
              <Text fz="24" fw="600">Document</Text>
  
  
              { isSmallScreen && (<Group >
              <TextInput
              size="sm"
                placeholder="Search..."
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                radius="xl"
              />
  
              <Group>
              <ActionIcon variant="filled" color="#12121210"  size="lg" radius="xl">
               <IoNotificationsOutline  size={24} color='#121212' />
              </ActionIcon>
              </Group>
              
  
                  <UnstyledButton display="grid">
                  <Group >
                    <Avatar size="md" src="/src/assets/user.png" alt="user" />
                    <Text fw="400" fz="16" >User Name</Text>                 
                    </Group>                  
                  </UnstyledButton>   
                               
              </Group>
              
          )}
              
          </Group>
      )
}

export default HeaderDoc
