import React, { useState } from 'react';
import { DatePicker, TimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Container, Box, TextField, Button } from '@mui/material';

const Tournament = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const handleSubmit = () => {
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    // Handle the selected date and time as needed
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm">
        <Box mt={3}>
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} variant="outlined" fullWidth />}
          />
        </Box>
        <Box mt={3}>
          <TimePicker
            label="Select Time"
            value={selectedTime}
            onChange={handleTimeChange}
            renderInput={(params) => <TextField {...params} variant="outlined" fullWidth />}
          />
        </Box>
        <Box mt={3}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Container>
    </LocalizationProvider>
  );
};

export default Tournament;
