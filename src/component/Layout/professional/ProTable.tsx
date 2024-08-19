import { Table, Box, ScrollArea, Group, ActionIcon,rem, Modal, Paper, Avatar, Text, Button } from '@mantine/core';
import { MdOutlineCheckBox } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { useState } from 'react';  
import { useDisclosure } from '@mantine/hooks';


const data = [
  {
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'pending',    
  },
  {
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'confirm',    
  },
  {
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    patient: 'David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
  ,
  {
    patient: 'Dr David A',
    Reason: 'DNA Test',
    Time: '10:30am',
    Date: '23/03/2024',
    Status: 'failed',    
  }
];


const ProTable = () => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 5;
  const [opened, { open, close }] = useDisclosure(false);
  const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);

  const rows = paginationData.map((element) => (
    <Table.Tr key={element.patient}>
      <Table.Td onClick={open} fz="18" style={{cursor: "pointer" }}>{element.patient}</Table.Td>
      <Table.Td fz="18">{element.Reason}</Table.Td>
      <Table.Td fz="18">{element.Time}</Table.Td>
      <Table.Td fz="18">{element.Date}</Table.Td>
      <Table.Td fz="18">{element.Status ? (<Group>
        <ActionIcon variant="subtle" color="gray">
            <MdOutlineCheckBox style={{ width: rem(24), height: rem(24) }} color='#008C73' />
          </ActionIcon>
          <ActionIcon variant="subtle" color="gray">
                <MdCancelPresentation style={{ width: rem(24), height: rem(24) }} color='#FF0000' />
              </ActionIcon>
      </Group>) : (<Group>
        
      </Group>)}</Table.Td>
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
        <ScrollArea  h={300}>
        <Table miw={700}>
      <Table.Thead  >
        <Table.Tr my='lg'>
          <Table.Th fz="18">Patient</Table.Th>
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
       patient
      </Text>
      <Group justify='center' mt="20">
      <Button variant='filled' color='#019379' >Send a Message</Button>
      </Group> 
      
          </Paper>
      </Modal> 
    </Box>
    )
}

export default ProTable
