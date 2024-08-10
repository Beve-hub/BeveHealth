import { useState } from 'react';
import { Table, Box, Pagination,ScrollArea } from '@mantine/core';


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
  
  const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);

    const rows = paginationData.map((element) => (
        <Table.Tr key={element.provider}>
          <Table.Td fz="18">{element.provider}</Table.Td>
          <Table.Td fz="18">{element.practice}</Table.Td>
          <Table.Td fz="18">{element.Reason}</Table.Td>
          <Table.Td fz="18">{element.Time}</Table.Td>
          <Table.Td fz="18">{element.Date}</Table.Td>
          <Table.Td fz="18">{element.Status}</Table.Td>
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
        <ScrollArea  h={300} >
        <Table miw={700}>
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
   
    </Box>
    )
}

export default PatientTable
