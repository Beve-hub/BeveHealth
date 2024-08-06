import { Table, Box, ScrollArea, Group, ActionIcon, rem } from '@mantine/core';
import { MdOutlineCheckBox } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
  

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

const BodyPro = () => {
    const rows = data.map((element) => (
        <Table.Tr key={element.provider}>
          <Table.Td fz="18">{element.provider}</Table.Td>
          <Table.Td fz="18">{element.practice}</Table.Td>
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
      <div>
        <Box my="100" style={{    
            maxWidth:'100%',
            height: 'auto',
            background: '#F1F1F1',
            borderRadius: '1rem',
            padding: '1rem 2rem',
          }}>
            <ScrollArea  >
            <Table miw={1000} verticalSpacing="sm">
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
        </div>  
    )
}

export default BodyPro
