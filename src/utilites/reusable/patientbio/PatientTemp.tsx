import { Button , Box, Group, SimpleGrid, Text } from "@mantine/core"


const PatientTemp = () => {
    return (
        <Box 
        my="40"
        style={{                       
            height: 'auto',
            background: '#F1F1F1',
            borderRadius: '1rem',
            padding: '1rem 2rem',
          }}>
              <SimpleGrid cols={{base:1, xs:5}} 
              style={{
                  alignItems: 'center',
              }}>
                  <div style={{borderRight: '1px solid #121212',}}>                      
                      <Text mb="sm">Temperature</Text>
                      <Text fz="18" fw="700" >36.5 C</Text>
                  </div>

                  <div style={{borderRight: '1px solid #121212',marginLeft:10}}>                      
                      <Text mb="sm">Pulse Rate</Text>
                      <Text fz="18" fw="700" >100 B/M</Text>
                  </div>
                  <div style={{borderRight: '1px solid #121212',marginLeft:10}}>                      
                      <Text mb="sm">Respiratory Rate</Text>
                      <Text fz="18" fw="700" >16 B/M</Text>
                  </div>
                  <div style={{borderRight: '1px solid #121212',marginLeft:10}}>                      
                      <Text mb="sm">Blood Pressure</Text>
                      <Text fz="18" fw="700" >80 mmHg</Text>
                  </div>
                  <div >                      
                      <Text mb="sm">Blood saturation</Text>
                      <Text fz="18" fw="700" >100%</Text>
                  </div>                  
                  
              </SimpleGrid>
              <Group justify="flex-end" >
                    <Button variant="filled" color="#008C73"> Edit</Button>
                  </Group>
          </Box>
    )
}

export default PatientTemp
