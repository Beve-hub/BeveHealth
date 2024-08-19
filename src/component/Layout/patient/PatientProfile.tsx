import { Card,  Group,  Text,  Avatar, SimpleGrid} from '@mantine/core';

const PatientProfile = () => {
    return (
        <Card
        style={{   
            maxWidth:'35rem',             
          height: 'auto',
          background: '#F1F1F1',
          borderRadius: '2rem',
          padding: '1rem 2rem',
        }}
      >
        <Text fz="18" fw="500" my="lg">Membership ID</Text>
        <Group display="grid" justify='center'>
        <Avatar size="xl" src="/src/assets/user.png" alt="user" />
        </Group>
        <SimpleGrid cols={{base:1, sm:1, lg:2}}  my="md">    
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Name:</span>    Victor Okeke</Text>
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>ID Num:</span>    BH12344</Text> 
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Phone:</span>    09020000001</Text>       
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Sex:</span>    Male</Text>
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Blood group:</span>    O</Text>                    
            <Text style={{gap:10, display:'flex'}}> <span style={{fontSize:'18px', fontWeight:500}}>Genotype:</span>    AA</Text>
                        
        </SimpleGrid>
      </Card>
    )
}

export default PatientProfile
