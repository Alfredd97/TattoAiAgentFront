import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme/theme';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App; 