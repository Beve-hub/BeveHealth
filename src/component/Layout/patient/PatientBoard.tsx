import { useRef,useState } from 'react';
import { Textarea,ActionIcon, rem, Modal, Group, Box, Text,Button, Image, NativeSelect, TextInput, UnstyledButton} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DateInput,TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
import Hero from '../../../assets/patient_img.png'
const PatientBoard = ( ) => {
  const [provider, setProvider] = useState('');
  const [practice, setPractice] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );
  
  
  return (
        <Box
        style={{       
            maxWidth:'55rem',         
          height: 'auto',
          background: 'linear-gradient(90deg, #4ECBB480, #01937965,gray)',
          borderRadius: '1rem',
          padding: '1rem 2rem',
        }}
      >
        <Group justify='space-between'>
        <Group display="grid" my ="lg" >
        <Text  >
          Welcome,  
        </Text>
        <Text fw="bold" fz="30">
         Victor Okeke
        </Text>
        <Text  >
          Your health is our Priority,  stay alive
        </Text>
        <Group>
        <Button onClick={open} variant="filled" size="sm" color="#006250" radius="md">Book  Session</Button>
        </Group>
        <Modal opened={opened} onClose={close} title="Schedule Appointment" centered>
        <form>
        
        <NativeSelect
          label="Practice"
          value={practice}
          onChange={(event) => setPractice(event.currentTarget.value)}
          data={['General doctor','Surgeon', 'Radiographer', 'Pediatrics', 'Dentist', 'Pharmacist']}
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
  
        <Group style={{position:"absolute", right:"30rem"}}>
          <Image src={Hero} alt="Avatar" style={{width:'10rem'}} />
        </Group>
        </Group>
      </Box>
    )
}

export default PatientBoard
