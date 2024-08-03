import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';
import {  Box, Group } from '@mantine/core';
import '@mantine/dates/styles.css';
const CustomCalendar = () => {
    const [value, setValue] = useState<Date[]>([]);

    const getDayProps: DatePickerProps['getDayProps'] = (date) => {
        if (date.getDay() === 5 && date.getDate() === 13) {
          return {
            style: {
              backgroundColor: 'var(--mantine-color-red-filled)',
              color: 'var(--mantine-color-white)',
            },
          };
        }
      
        return {};
      };
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
            onChange={setValue}
            getDayProps={getDayProps}
    />
    </Group>
        </Box>
    )
}

export default CustomCalendar
