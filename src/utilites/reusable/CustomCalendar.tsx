import { useRef, useState } from 'react';
import { DateInput, DatePicker, DatePickerProps, TimeInput } from '@mantine/dates';
import {  ActionIcon, Box, Button, Group,Indicator,Modal, NativeSelect, rem, Textarea, UnstyledButton } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { IconClock } from '@tabler/icons-react';


const CustomCalendar = () => {
    const [value, setValue] = useState<Date[]>([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [selected, setSelectedDate] = useState<Date | null>(null)
    const [provider, setProvider] = useState('');
    const [practice, setPractice] = useState('');
    const [date, setDate] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);    
    const pickerControl = (
      <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
        <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
      </ActionIcon>
    );
    
    const getDayProps: DatePickerProps['getDayProps'] = (date) => {
        if (date.getDay() === 5 && date.getDate() === 13) {
          return {
            style: {
              backgroundColor: '#008C73',
              color: '#008C73',
            },
          };
        }      
        return {};
      };

      const handleDateChange = (dates: Date[]) => {
        setValue(dates);
        setSelectedDate(dates[dates.length - 1]);
        open()
      }
    return (
        <Box 
        style={{  
          display:'grid',
          justifyContent: 'center',            
          height: 'auto',
          background: '#F1F1F1',
          borderRadius: '1rem',
          padding: '1rem 2rem',
        }}
        >          
          <Group>         
          <DatePicker            
          type="multiple"
          size="sm"           
          value={value}
          onChange={handleDateChange}
          getDayProps={getDayProps}
          renderDay={(date) => {
            const day = date.getDate();
            return (
              <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
                <div>{day}</div>
              </Indicator>
            );
          }}
        />
        <Modal opened={opened} onClose={close} title="Authentication">
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
        </Box>
    )
}

export default CustomCalendar
