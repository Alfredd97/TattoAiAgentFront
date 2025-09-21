import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Gallery', sectionId: 'gallery' },
  { label: 'Cost Estimator', sectionId: 'cost-estimator' },
  { label: 'Appointment', sectionId: 'appointment' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false); // Close mobile drawer after navigation
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton onClick={() => scrollToSection(item.sectionId)}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            onClick={() => scrollToSection('home')}
            sx={{
              flexGrow: 1,
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Tattoo Studio
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.sectionId)}
                  color="primary"
                >
                  {item.label}
                </Button>
              ))}
              <LanguageSwitcher />
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            bgcolor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 