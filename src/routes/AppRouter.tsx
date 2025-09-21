import React from 'react';
import Box from '@mui/material/Box';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Pages
import LandingPage from '../pages/LandingPage';

const AppRouter: React.FC = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'background.default'
    }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <LandingPage />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppRouter; 