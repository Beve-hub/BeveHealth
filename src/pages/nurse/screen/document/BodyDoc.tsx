import { ActionIcon,Table, Box, ScrollArea, Group, Modal,rem, Paper, Text, Avatar, Button, Menu, Pagination } from '@mantine/core';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks'; 
import { IconDownload, IconNote } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';


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
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        patient: 'David A',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Status: 'failed',    
      },
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
  },
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  },
  {
    provider: 'Dr David A',
    practice: 'Lab Tech',
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
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
];

const BodyDoc = () => {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState(1);
    const rowsPerPage = 10;
    const [professional, { open: openProFolder, close: closeProFolder }] = useDisclosure(false);
    const [patient, { open: openPatFolder, close: closePatFolder }] = useDisclosure(false);
    const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);
      
    const handleClick = () => {
        navigate('/patBioData')
      };

      const rows = paginationData.map((element, index) => (
          <Table.Tr key={index}>  
          <Table.Td onClick={openProFolder} fz="14" style={{cursor: "pointer" }}>{element.provider}</Table.Td>        
            <Table.Td onClick={openPatFolder} fz="14" style={{cursor: "pointer" }}>{element.patient}</Table.Td>
            <Table.Td fz="14">{element.Reason}</Table.Td>
            <Table.Td fz="14">{element.Time}</Table.Td>
            <Table.Td fz="14">{element.Date}</Table.Td>
            <Table.Td fz="16">
              <ActionIcon variant="subtle" color="black" onClick={handleClick}>
                <IconNote style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="black">
                <IconDownload style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
              </ActionIcon>
              
          
          </Table.Td>
          </Table.Tr>
        ));
  
  
          return (
            <Box 
            my="80" style={{    
                maxWidth:'100%',
                height: 'auto',
                background: '#F1F1F1',
                borderRadius: '1rem',
                padding: '1rem 2rem',
              }}>
              <ScrollArea >
              <Table miw={600}>
            <Table.Thead  >
              <Table.Tr my='lg'>  
              <Table.Th fz="16">Provider</Table.Th>            
                <Table.Th fz="16">Patient</Table.Th>
                <Table.Th fz="16">Reason</Table.Th>
                <Table.Th fz="16">Time</Table.Th>
                <Table.Th fz="16">Date</Table.Th>
                <Table.Th fz="16">Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody fz="18" mt="lg">{rows}</Table.Tbody>
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
  <Modal opened={professional} onClose={closeProFolder} title="Patient info" centered>
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
          </Box>
          )
}

export default BodyDoc
