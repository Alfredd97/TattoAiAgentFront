import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  onBookAppointment: () => void;
  onViewGallery: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookAppointment, onViewGallery }) => {
  const { t } = useTranslation();

  return (
    <Box
      id="home"
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
            {t('home.title')}
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
            Transform your ideas into stunning tattoo art with our expert artists
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={onBookAppointment}
            >
              Book Appointment
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={onViewGallery}
            >
              View Gallery
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
