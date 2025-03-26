import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Pages
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Appointment from '../pages/Appointment';
import CostEstimator from '../pages/CostEstimator';
import About from '../pages/About';

// Routes
import { routes } from './routes';

const LoadingFallback = () => (
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    minHeight: '60vh'
  }}>
    <CircularProgress />
  </Box>
);

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
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

export default AppRouter; 