import { Table, Box, ScrollArea, Group, ActionIcon,Pagination, rem, Button, Menu, Modal, Paper, Avatar, Text, NativeSelect } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { MdOutlineAssignmentTurnedIn, MdOutlineCancel } from "react-icons/md";
import { CiRedo } from "react-icons/ci";
  



const data = [
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'pending',    
  },
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'confirm',    
  },
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
];

const BodyAd = () => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 10;
  const [assign, { open: openAssign, close: closeAssign }] = useDisclosure(false);
  const [patient, { open: openPatFolder, close: closePatFolder }] = useDisclosure(false);
  const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);
  const handleAssign = () => {
    openAssign();
  }
    const rows = paginationData.map((element) => (
        <Table.Tr key={element.provider}>
          <Table.Td onClick={openPatFolder} fz="16" style={{cursor: "pointer" }}>{element.patient}</Table.Td>
          <Table.Td fz="16">{element.Reason}</Table.Td>
          <Table.Td fz="16">{element.Time}</Table.Td>
          <Table.Td fz="16">{element.Date}</Table.Td>
          <Table.Td fz="16">{element.Status ? (<Group>
            <Menu
            transitionProps={{ transition: 'pop' }}
            withArrow
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <Button variant="outline" color="gray">
               Assign
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={
                  <MdOutlineAssignmentTurnedIn/>
                }
                onClick={handleAssign}
              >
                Assign
              </Menu.Item>
              <Menu.Item
                leftSection={<MdOutlineCancel />}
              >
                Reject
              </Menu.Item>
              <Menu.Item
                leftSection={<CiRedo  />}
              >
                ReSchedule
              </Menu.Item>
           
            </Menu.Dropdown>
          </Menu>
          </Group>) : (<Group>
            
          </Group>)}</Table.Td>
        </Table.Tr>
      ));
        return (
          <Box 
            mt="100"
          style={{ 
            height: 'auto',
            background: '#F1F1F1',
            borderRadius: '1rem',
            padding: '2rem 3rem',                    
          }}>
            <ScrollArea  >
            <Table miw={600} verticalSpacing="sm">
          <Table.Thead  >
            <Table.Tr my='lg'>
              <Table.Th fz="16">Patient</Table.Th>
              <Table.Th fz="16">Reason</Table.Th>
              <Table.Th fz="16">Time</Table.Th>
              <Table.Th fz="16">Date</Table.Th>
              <Table.Th fz="16">Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody fz="16" mt="lg">{rows}</Table.Tbody>
        </Table>
        </ScrollArea>
        <Pagination
          onChange={setActivePage}
          total={Math.ceil(data.length / rowsPerPage)}
          color='#008C73'
      />
      <Modal opened={patient} onClose={closePatFolder} title="Patient info" centered>
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
patient
</Text>
<Group justify='center' mt="20">
<Button variant='filled' color='#019379' >Send a Message</Button>
</Group> 

  </Paper>
</Modal>

<Modal opened={assign} onClose={closeAssign} title="Assign Doctor" centered>
<Box>
<NativeSelect label="Select Doctor"  data={['General doctor','Surgeon', 'Radiographer', 'Pediatrics', 'Dentist', 'Pharmacist']} />
<NativeSelect label="Available Doctor"  data={['Dr.David','Dr.Ruth', 'Dr.Daniel', 'Dr.Dope', 'Dr.Denis', 'Dr.phil']} />
<Group>
  <Button variant='filled' color='#019379' my="lg">Submit</Button>

</Group>
</Box>
</Modal>
        </Box>
        )
}

export default BodyAd
