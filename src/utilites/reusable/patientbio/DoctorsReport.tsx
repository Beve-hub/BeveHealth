import { Table, Box, ScrollArea, Group, Button } from '@mantine/core';

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

const DoctorsReport = () => {
    const rows = data.map((element) => (
        <Table.Tr key={element.provider}>
          <Table.Td fz="18">{element.provider}</Table.Td>
          <Table.Td fz="18">{element.practice}</Table.Td>
          <Table.Td fz="18">{element.Reason}</Table.Td>
          <Table.Td fz="18">
            <Group>
                <Button variant='outline' color='#121212'> View</Button>
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
                    <Button variant='filled' color='#008C73'>
                        New File
                    </Button>
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

export default DoctorsReport
