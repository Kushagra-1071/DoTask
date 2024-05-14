import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const today = dayjs();
const tomorrow = dayjs().add(1, 'day');
const todayEndOfTheDay = today.endOf('day');

export default function CalendarTime() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'TimePicker',
        ]}
      >
        <DemoItem label="DatePicker">
          <DatePicker
            defaultValue={tomorrow}
            
            views={['year', 'month', 'day']}
          />
        </DemoItem>
        <DemoItem label="TimePicker">
          <TimePicker defaultValue={todayEndOfTheDay}  />
        </DemoItem>
        
      </DemoContainer>
    </LocalizationProvider>
  );
}