
import { Table, Box, ScrollArea, ActionIcon, rem, Pagination, } from "@mantine/core"
import { IconDots, IconDownload, IconNote, } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const data = [
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDots/>,    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDots/>,    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDots/>,    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDots/>,    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDots/>,    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDots/>,    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDots/>,    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDots/>,    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDots/>,    
    },
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
          
    }
    
  
  ];

const BodyDoc = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 5;
  
  const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);


  const handleClick = () => {
    navigate('/patientBio')
  };
    const rows =   paginationData.map((element) => (
        <Table.Tr key={element.provider}>
          <Table.Td fz="18">{element.provider}</Table.Td>
          <Table.Td fz="18">{element.practice}</Table.Td>
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
    </Box>
        </div>
    )
}

export default BodyDoc
