import { useState } from 'react';
import {TextInput ,ActionIcon, UnstyledButton,Avatar, Group,Text, } from '@mantine/core';
import { IoNotificationsOutline } from "react-icons/io5";
import { useMediaQuery,} from '@mantine/hooks';


const HeaderMes = () => {
    const isSmallScreen = useMediaQuery('(min-width: 768px)');
    const [search, setSearch] = useState('');
      return (
          <Group display="flex" justify='space-between' >
              <Text fz="30" fw="600">Messages</Text>
  
  
              { isSmallScreen && (<Group >
              <TextInput
              size="md"
                placeholder="Search..."
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                radius="xl"
              />
  
              <Group>
              <ActionIcon variant="filled" color="#12121210"  size="xl" radius="xl">
               <IoNotificationsOutline  size={30} color='#121212' />
              </ActionIcon>
              </Group>
              
  
                  <UnstyledButton display="grid">
                  <Group >
                    <Avatar size="lg" src="/src/assets/user.png" alt="user" />
                    <Text fw="400" fz="20" ml="2">User Name</Text>                 
                    </Group>                  
                  </UnstyledButton>   
                               
              </Group>
              
          )}
              
          </Group>
      )
}

export default HeaderMes
