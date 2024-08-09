import { FileInput,Table, Box, ScrollArea, Group, Button, Modal, Input, Textarea, Text, Image} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import img from '../../../assets/patient_img.png'


const data = [
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
        
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
         
    }
  ];
const LabReport = () => {
    const [newFileModal, { open: openNewFile, close: closeNewFile }] = useDisclosure(false);
    const [viewModal, { open: openView, close: closeView }] = useDisclosure(false);
    const [viewImage, { open: openImage, close: closeImage }] = useDisclosure(false);


    

    const rows = data.map((element) => (
        <Table.Tr key={element.provider}>
          <Table.Td fz="18">{element.provider}</Table.Td>
          <Table.Td fz="18">{element.practice}</Table.Td>
          <Table.Td fz="18">{element.Reason}</Table.Td>
          <Table.Td fz="18">
            <Group>
                <Button onClick={openView} variant='outline' color='#121212'> View</Button>
                <Modal opened={viewModal} onClose={closeView} overlayProps={{
                    backgroundOpacity: 0.25,       
                    blur: 5,                     
                }} title="Lab Report" centered>
                     <Box 
                     style={{
                        display:'grid',
                        gap: '1rem',
                        width: '100%',
                       
                     }}>
                        <Group display="flex" >
                            <Text fw="500" fz="18">Specialist Name :</Text>
                            <Text fz="18">Dr.David</Text>
                        </Group>
                        <Group display="flex" >
                            <Text fw="500" fz="16">Report Type :</Text>
                            <Text fz="16">X-ray scan</Text>
                        </Group>
                        <Group display="flex" justify='space-between'>
                            <Group display="flex">
                            <Text fw="500" fz="16">Image :</Text>
                            <Text fz="16">X-ray scan</Text>
                            </Group>
                            
                            <Button onClick={openImage} variant='outline' fz="16" >
                               view 
                                </Button>
                                <Modal opened={viewImage} onClose={closeImage} centered>
                                    <Image src={img} alt=''/>
                                </Modal>
                        </Group>
                        <Group  >
                            <Text fw="500" fz="16">Observation</Text>
                            <Text fz="16">The heart is healthy and no  signs detected and patient  is in perfect condition</Text>                            
                        </Group>
                     </Box>
                </Modal>
            </Group>
            
          </Table.Td>
        </Table.Tr>
      ));
        return (
          <Box style={{    
             height: 'auto',
            background: '#F1F1F1',
            borderRadius: '1rem',
            padding: '1rem 2rem',
          }}>
                 <Group justify='flex-end'>
                    <Button onClick={openNewFile} variant='filled' color='#008C73'>
                        New File
                    </Button>
                    <Modal opened={newFileModal} onClose={closeNewFile} overlayProps={{
          backgroundOpacity: 0.25,       
          blur: 5,                     
        }} title="New Book" centered>
                     <form style={{
                        display:'grid',
                        gap: '1rem',
                        width: '100%',
                       
                     }}>
                            <div>
                                <label>Specialist Name:</label>
                                <Input type="text" name="specialistName" />
                            </div>
                            <div>
                                <label>Report Type:</label>
                                <Input type="text" name="reportType" />
                            </div>
                            <div>
                            <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
                            </div>
                            <div>
                            <Textarea
                             label="Observation"
                             placeholder="Input placeholder"
                           />
                            </div>

                            <Group justify='flex-end'>
                                <Button onClick={close} variant='filled' color='#008C73'>
                                    Save
                                </Button>                               
                            </Group>
                     </form>
                    </Modal>
                </Group>
            <ScrollArea  h="auto">
            <Table miw={700}>
          <Table.Thead  >
            <Table.Tr my='lg'>
              <Table.Th fz="20">Provider</Table.Th>
              <Table.Th fz="20">Practice</Table.Th>
              <Table.Th fz="20">Reason</Table.Th>              
              <Table.Th fz="20">Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody fz="18" mt="lg">{rows}</Table.Tbody>
        </Table>
        </ScrollArea>
        </Box>
        )
}

export default LabReport
