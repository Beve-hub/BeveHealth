import { useState } from 'react';
import { Text, Avatar, Paper, Modal, Table, Box, ScrollArea, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const data = [
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Status: 'pending',    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Status: 'confirm',    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Status: 'failed',    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Status: 'failed',    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Status: 'failed',    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Status: 'failed',    
    },
  ];

const PatientTable = () => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 5;
  const [opened, { open, close }] = useDisclosure(false);
  const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);

    const rows = paginationData.map((element) => (
        <Table.Tr key={element.provider}>
          <Table.Td onClick={open} fz="16" style={{cursor: "pointer" }}>{element.provider}</Table.Td>
          <Table.Td fz="16">{element.practice}</Table.Td>
          <Table.Td fz="16">{element.Reason}</Table.Td>
          <Table.Td fz="16">{element.Time}</Table.Td>
          <Table.Td fz="16">{element.Date}</Table.Td>
          <Table.Td fz="16">{element.Status}</Table.Td>
        </Table.Tr>
      ));
    return (
      <Box style={{    
        maxWidth:'55rem',
        height: 'auto',
        background: '#F1F1F1',
        borderRadius: '1rem',
        padding: '1rem 2rem',
      }}>
        <ScrollArea  h={250} >
        <Table miw={600}>
      <Table.Thead  >
        <Table.Tr mb='lg'>
          <Table.Th fz="18">Provider</Table.Th>
          <Table.Th fz="18">Practice</Table.Th>
          <Table.Th fz="18">Reason</Table.Th>
          <Table.Th fz="18">Time</Table.Th>
          <Table.Th fz="18">Date</Table.Th>
          <Table.Th fz="18">Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody fz="18" mt="lg">{rows}</Table.Tbody>
    </Table>
    </ScrollArea>
    <Modal opened={opened} onClose={close} title="Doctor info" centered>
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

export default PatientTable
