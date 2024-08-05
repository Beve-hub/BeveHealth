import { Button, Group,Table, Box, ScrollArea } from "@mantine/core"

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



const BodyApp = () => {
    const rows = data.map((element) => (
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
        <div>
            <Group my="50" justify="flex-end">
                <Button size="md" color="#008C73">Book Session</Button>
            </Group>

            <Box style={{    
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
          <Table.Th fz="20">Reason</Table.Th>
          <Table.Th fz="20">Time</Table.Th>
          <Table.Th fz="20">Date</Table.Th>
          <Table.Th fz="20">Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody fz="18" >{rows}</Table.Tbody>
    </Table>
    </ScrollArea>
    </Box>
        </div>
    )
}

export default BodyApp
