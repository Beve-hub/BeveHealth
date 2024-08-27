import { useRef,useState } from 'react';
import { Textarea,ActionIcon,Pagination, rem, Modal, NativeSelect, TextInput, UnstyledButton,Button, Group,Table, Box, ScrollArea, Paper, Avatar, Text } from "@mantine/core"
import { IconDownload,IconClock } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { DateInput,TimeInput } from '@mantine/dates';

const data = [
    {
      provider: 'Dr David A',
      practice: 'Lab Tech',
      Reason: 'DNA Test',
      Time: '10:30am',
      Date: '23/03/2024',
      Action: <IconDownload/>,    
    },
    {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },
      {
        provider: 'Dr David A',
        practice: 'Lab Tech',
        Reason: 'DNA Test',
        Time: '10:30am',
        Date: '23/03/2024',
        Action: <IconDownload/>,    
      },  
  ];


const BodyDoc = () => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 10;
  
  const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);

  
    
  const [provider, setProvider] = useState('');
  const [practice, setPractice] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  const [opened, { open: openFolder, close: closeFolder }] = useDisclosure(false);
  const [viewImage, { open: openImage, close: closeImage }] = useDisclosure(false);
  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  const rows = paginationData.map((element) => (
    <Table.Tr key={element.provider}>
      <Table.Td onClick={openImage} fz="16" style={{cursor: "pointer" }}>{element.provider}</Table.Td>
      <Table.Td fz="16">{element.practice}</Table.Td>
      <Table.Td fz="16">{element.Reason}</Table.Td>
      <Table.Td fz="16">{element.Time}</Table.Td>
      <Table.Td fz="16">{element.Date}</Table.Td>
      <Table.Td fz="16"><ActionIcon variant='transparent' color='black'>{element.Action}</ActionIcon> </Table.Td>
    </Table.Tr>
  ));
    return (
        <div>
            <Group my="50" justify="flex-end">
                <Button  onClick={openFolder} size="md" color="#008C73">Book Session</Button>
                <Modal opened={opened} onClose={closeFolder} title="Schedule Appointment" centered>
        <form>
        
        <NativeSelect
          label="Practice"
          value={practice}
          onChange={(event) => setPractice(event.currentTarget.value)}
          data={['General','Surgeon', 'Radiographer', 'Pediatrics', 'Dentist', 'Pharmacist']}
        />
        <DateInput       
      value={date}
      onChange={setDate}
      label="Appointment Date"
      placeholder="Date input"
      />
     <TimeInput
      label="Appointment Time"
      placeholder="Input placeholder"
      ref={ref}
      rightSection={pickerControl}
      />
       <Textarea
      label="Reason"      
      placeholder="Input placeholder"
      />
    
    <Group justify='flex-end' my="20">
    <UnstyledButton onClick={close} variant="filled" size="sm" color="gray" >Cancel</UnstyledButton>
      <Button type="submit" variant="filled" size="sm" color="#006250" radius="md">Schedule</Button>
     
     
    </Group>
        </form>
               </Modal>
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
          <Table.Th fz="18">Provider</Table.Th>
          <Table.Th fz="18">Practice</Table.Th>
          <Table.Th fz="18">Reason</Table.Th>
          <Table.Th fz="18">Time</Table.Th>
          <Table.Th fz="18">Date</Table.Th>
          <Table.Th fz="18">Action</Table.Th>
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
       <Modal opened={viewImage} onClose={closeImage} title="Doctor info" centered>
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
        </div>
    )
}

export default BodyDoc
