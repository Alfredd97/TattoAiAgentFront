import React from 'react';
import { Box } from '@mui/material';

// Section Components
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import GallerySection from '../components/sections/GallerySection';
import CostEstimatorSection from '../components/sections/CostEstimatorSection';
import AppointmentSection from '../components/sections/AppointmentSection';

const LandingPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      <HeroSection
        onBookAppointment={() => scrollToSection('appointment')}
        onViewGallery={() => scrollToSection('gallery')}
      />
      <AboutSection />
      <GallerySection />
      <CostEstimatorSection />
      <AppointmentSection />
    </Box>
  );
};

export default LandingPage;
