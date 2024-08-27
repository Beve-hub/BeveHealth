import { Notification,Box,Text,Group } from '@mantine/core';

const CustomNotification = () => {
    return (
        <Box style={{   
            maxWidth:'35rem',             
          height: 'auto',
          background: '#F1F1F1',
          borderRadius: '1rem',
          padding: '1rem 2rem',
        }}>
          <Text fz="18" fw="500" mb="sm">Notification</Text>
          <Group>
          <Notification color="blue" title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
    <Notification color="orange" title="We notify you that">
    You are now obligated to give a star to Mantine project on GitHub
  </Notification>
          </Group>
      
 
  </Box>
    )
}

export default CustomNotification
