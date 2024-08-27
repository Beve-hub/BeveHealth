import { Card,  Text,Progress, Box } from '@mantine/core';
import classes from './style.module.css';


const Attendant = () => {
    
    return (
        <Box 
       
        style={{            
            maxWidth: '35rem',
            height: 'auto',
            background: '#F1F1F1',
            borderRadius: '2rem',
            padding: '1rem 2rem',
          }}>

            <Text fz="20" fw="600" mb="10">Attended Appointment</Text>
            <Card my='20'>
        <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
        New Patient (2/10)
        </Text>
      
      <Progress
        value={20}
        mt="md"
        size="lg"
        radius="xl"
        classNames={{
          root: classes.progressTrack,
          section: classes.progressSection,
        }}
      />
      </Card>

      <Card my='20'>
        <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
        Frequent Patient (7/10)
        </Text>
      
      <Progress
        value={70}
        mt="md"
        size="lg"
        radius="xl"
        classNames={{
          root: classes.progressTrack,
          section: classes.progressSection,
        }}
      />
      </Card>
     
      </Box>
    )
}

export default Attendant
