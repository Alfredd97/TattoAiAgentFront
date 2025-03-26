import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const Appointment = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Book Your Appointment
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
            Select a convenient time slot for your tattoo consultation and appointment.
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: '700px',
              overflow: 'hidden',
              borderRadius: 2,
            }}
          >
            <iframe
              src="https://calendly.com/alfreddaguilar97"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduling Page"
              style={{ border: 'none' }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Appointment; 