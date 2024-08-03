import { Card,Avatar, Group,  Text, UnstyledButton,} from '@mantine/core';

import {MdKeyboardArrowRight} from 'react-icons/md'


const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  
  
];

const Specialist = () => {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
    return (
        <Card
        style={{   
            maxWidth:'35rem',             
          height: 'auto',
          background: '#F1F1F1',
          borderRadius: '1rem',
          padding: '1rem 2rem',
        }}
      >
        <Group justify='space-between'>
        <Text fz="20" fw="bold">Specialist</Text>
        <UnstyledButton style={{display:'flex', alignItems:'center', gap:10}}> <Text color="#006250" >view All </Text> <MdKeyboardArrowRight size={20} /> </UnstyledButton>
        </Group>
  
        <Group justify='space-between' my="md" style={{borderBottom:"2px solid #12121250", paddingBottom:10}}>
          <Group>          
          <Text fz="18">Surgeon</Text>
          </Group>  
          <Group>
          <Group gap={-40}>{avatars}</Group>
            <MdKeyboardArrowRight size={20} /> 
          </Group>      
          
        </Group>
        <Group justify='space-between' my="xs" style={{borderBottom:"2px solid #12121250", paddingBottom:10}}>
          <Group>          
          <Text fz="18">Radiographer</Text>
          </Group>  
          <Group>
          <Group gap={-40}>{avatars}</Group>
            <MdKeyboardArrowRight size={20} /> 
          </Group>      
          
        </Group>
        <Group justify='space-between' my="lg" style={{borderBottom:"2px solid #12121250", paddingBottom:10}}>
          <Group>          
          <Text fz="18">Optician</Text>
          </Group>  
          <Group>
          <Group gap={-40}>{avatars}</Group>
            <MdKeyboardArrowRight size={20} /> 
          </Group>      
          
        </Group>
  
     
        
      </Card>
    )
}

export default Specialist
