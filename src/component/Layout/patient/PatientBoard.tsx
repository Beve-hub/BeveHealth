import {   Group, Box, Text,Button, Image} from '@mantine/core';

const PatientBoard = ( ) => {
    
    return (
        <Box
        style={{       
            maxWidth:'55rem',         
          height: 'auto',
          background: 'linear-gradient(90deg, #4ECBB480, #01937965,gray)',
          borderRadius: '1rem',
          padding: '2rem 2rem',
        }}
      >
        <Group justify='space-between'>
        <Group display="grid" my ="lg" >
        <Text  >
          Welcome,  
        </Text>
        <Text fw="bold" fz="30">
          Victor Okeke
        </Text>
        <Text  >
          Your health is our Priority,  stay alive
        </Text>
        <Group>
        <Button variant="filled" size="sm" color="#006250" radius="md">Book  Session</Button>
        </Group>
        </Group>
  
        <Group>
          <Image src="/src/assets/patient_img.png" alt="Avatar" style={{width:'10rem'}} />
        </Group>
        </Group>
      </Box>
    )
}

export default PatientBoard
