import { Table, Box, ScrollArea, ActionIcon, rem,Pagination, Modal, Text, Group, Avatar, Paper, Button, } from "@mantine/core"
import { IconDots, IconDownload, IconNote, } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDisclosure } from "@mantine/hooks";


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

const BodyDoc = () => {
    const navigate = useNavigate();
    const [doctor, { open: openDocFolder, close: closeDocFolder }] = useDisclosure(false);
    const [patient, { open: openPatFolder, close: closePatFolder }] = useDisclosure(false);
    const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 10;

  const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);

    const handleClick = () => {
      navigate('/patientBio')
    };
    
    const rows = paginationData.map((element) => (
          <Table.Tr key={element.provider}>
            <Table.Td onClick={openDocFolder} fz="18" style={{cursor: "pointer" }}>{element.provider}</Table.Td>
            <Table.Td fz="18">{element.practice}</Table.Td>
            <Table.Td onClick={openPatFolder} fz="18" style={{cursor: "pointer" }}>{element.patient}</Table.Td>
            <Table.Td fz="18">{element.Reason}</Table.Td>
            <Table.Td fz="18">{element.Time}</Table.Td>
            <Table.Td fz="18">{element.Date}</Table.Td>
            <Table.Td fz="18">
                <ActionIcon variant="subtle" color="black" onClick={handleClick}>
                  <IconNote style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="black">
                  <IconDownload style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                </ActionIcon>
                
            
            </Table.Td>
          </Table.Tr>
        ));
    
      return (
          <div> 
              <Box mt="100" style={{    
          maxWidth:'100%',
          height: 'auto',
          background: '#F1F1F1',
          borderRadius: '1rem',
          padding: '2rem 2rem',
        }}>
          <ScrollArea   >
          <Table miw={700} horizontalSpacing="xl" verticalSpacing="sm">
        <Table.Thead  >
          <Table.Tr mb='lg'>
            <Table.Th fz="20">Provider</Table.Th>
            <Table.Th fz="20">Practice</Table.Th>
            <Table.Th fz="20">Patient</Table.Th>
            <Table.Th fz="20">Reason</Table.Th>
            <Table.Th fz="20">Time</Table.Th>
            <Table.Th fz="20">Date</Table.Th>
            <Table.Th fz="20">Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody fz="18" >{rows}</Table.Tbody>
      </Table>
      </ScrollArea>
      <Pagination
          onChange={setActivePage}
          total={Math.ceil(data.length / rowsPerPage)}
          color='#008C73'
      />
         <Modal opened={doctor} onClose={closeDocFolder} title="Doctor info" centered>
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
      surgeon
      </Text>
      <Group justify='center' mt="20">
      <Button variant='filled' color='#019379' >Send a Message</Button>
      </Group> 
      
          </Paper>
      </Modal>

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
      </Box>
          </div>
      )
}

export default BodyDoc
