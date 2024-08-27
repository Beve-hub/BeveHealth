
import { Avatar, Paper, Modal, Group, Box, Text,Button, Image, SimpleGrid,  } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Img from '../../../assets/doc_img.png'


const ProfessionalBoard = () => {
       const [opened, { open, close }] = useDisclosure(false);
    
    return (
        <Box
        style={{       
            maxWidth:'55rem',         
          height: 'auto',
          background: 'linear-gradient(90deg, #4ECBB480, #01937965,gray)',
          borderRadius: '1rem',
          padding: '1rem 2rem',
        }}
      >
        <Group justify='space-between'>
        <Group display="grid" my ="lg" >
        <Text  >
          Welcome,  
        </Text>
        <Text fw="bold" fz="30">
          Dr.Victor Okeke
        </Text>
        <Text  >
          Your health is our Priority,  stay alive
        </Text>
        <Group>
        <Button onClick={open} variant="filled" size="sm" color="#006250" radius="md">Membership ID</Button>
        </Group>
        <Modal opened={opened} onClose={close} title="Membership ID" centered>
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} >
      Victor Okeke
      </Text>
     
      <Text ta="center" c="dimmed" fz="sm">
       BHD02244 • VictorOkeke@gmail.com  • surgeon
      </Text>

      <SimpleGrid cols={2}  my="md">    
        
        <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Phone:</span>    09020000001</Text>       
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Sex:</span>    Male</Text>
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Blood group:</span>    O</Text>
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>State:</span>    Lagos</Text>                     
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Genotype:</span>    AA</Text>
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Nationality:</span>    Nigeria</Text>
                        
        </SimpleGrid>
    </Paper>
      </Modal>
        </Group>
  
        <Group style={{position:"absolute", right:"30rem"}}>
          <Image src={Img} alt="Avatar" style={{width:'13rem'}} />
        </Group>
        </Group>
      </Box>
    )
}

export default ProfessionalBoard
