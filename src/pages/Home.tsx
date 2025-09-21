import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/Minimalist.jpg'; // Import the image
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`, // Use the imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '600px' }}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              {t('Welcome to our Website')}
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