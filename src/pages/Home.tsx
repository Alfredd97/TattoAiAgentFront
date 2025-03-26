import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '600px' }}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Your Body, Our Canvas
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
              Transform your ideas into stunning tattoo art with our expert artists
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                component={Link}
                to="/appointment"
                variant="contained"
                color="primary"
                size="large"
              >
                Book Appointment
              </Button>
              <Button
                component={Link}
                to="/gallery"
                variant="outlined"
                color="primary"
                size="large"
              >
                View Gallery
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 