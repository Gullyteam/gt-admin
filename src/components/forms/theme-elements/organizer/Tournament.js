import React, { useState } from 'react';
import { Container, Box, TextField, Button } from '@mui/material';

const Tournament = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    // Handle the start and end dates as needed
  };

  return (
    <Container maxWidth="sm">
      <Box mt={3}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box mt={3}>
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Tournament;
