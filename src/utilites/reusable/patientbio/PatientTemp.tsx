import { Button , Box, Group, SimpleGrid, Text, Input, Modal } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';

const PatientTemp = () => {
    const [newFileModal, { open: openNewFile, close: closeNewFile }] = useDisclosure(false);
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
                      <Text fz="16" fw="700" >36.5 C</Text>
                  </div>

                  <div style={{borderRight: '1px solid #121212',marginLeft:10}}>                      
                      <Text mb="sm">Pulse Rate</Text>
                      <Text fz="16" fw="700" >100 B/M</Text>
                  </div>
                  <div style={{borderRight: '1px solid #121212',marginLeft:10}}>                      
                      <Text mb="sm">Respiratory Rate</Text>
                      <Text fz="16" fw="700" >16 B/M</Text>
                  </div>
                  <div style={{borderRight: '1px solid #121212',marginLeft:10}}>                      
                      <Text mb="sm">Blood Pressure</Text>
                      <Text fz="16" fw="700" >80 mmHg</Text>
                  </div>
                  <div >                      
                      <Text mb="sm">Blood saturation</Text>
                      <Text fz="16" fw="700" >100%</Text>
                  </div>                  
                  
              </SimpleGrid>
              <Group justify="flex-end" >
                    <Button onClick={openNewFile} variant="filled" color="#008C73"> Edit</Button>
                  </Group>
                  <Modal opened={newFileModal} onClose={closeNewFile} overlayProps={{
          backgroundOpacity: 0.25,       
          blur: 5,                     
        }} title="Patient Vital" centered>
                     <form style={{
                        display:'grid',
                        gap: '1rem',
                        width: '100%',
                       
                     }}>
                            <div>
                                <label>Temperature:</label>
                                <Input type="text" name="Temperature" />
                            </div>
                            <div>
                                <label>Pulse Rate:</label>
                                <Input type="text" name="pulseRate" />
                            </div>
                            
                            <div>
                                <label>Respiratory Rate:</label>
                                <Input type="text" name="respiratoryRate" />
                            </div>
                            <div>
                                <label>Blood Pressure:</label>
                                <Input type="text" name="bloodPressure" />
                            </div>
                            <div>
                                <label>Blood Saturation:</label>
                                <Input type="text" name="bloodSaturation" />
                            </div>

                            <Group justify='flex-end'>
                                <Button onClick={close} variant='filled' color='#008C73'>
                                    Save
                                </Button>                               
                            </Group>
                     </form>
                    </Modal>
          </Box>
    )
}

export default PatientTemp
