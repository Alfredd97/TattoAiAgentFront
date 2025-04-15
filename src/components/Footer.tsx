import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1 }} color="primary" />
              <Link href="tel:+1234567890" color="inherit" underline="hover">
                (123) 456-7890
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 1 }} color="primary" />
              <Link href="mailto:info@tattoostudio.com" color="inherit" underline="hover">
                info@tattoostudio.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1 }} color="primary" />
              <Typography variant="body2">
                123 Tattoo Street, Art City, AC 12345
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Hours
            </Typography>
            <Typography variant="body2" paragraph>
              Monday - Friday: 10:00 AM - 8:00 PM
            </Typography>
            <Typography variant="body2" paragraph>
              Saturday: 11:00 AM - 6:00 PM
            </Typography>
            <Typography variant="body2">
              Sunday: Closed
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                color="primary"
                component="a"
                href="https://instagram.com/tattoostudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="primary"
                component="a"
                href="https://facebook.com/tattoostudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                component="a"
                href="https://twitter.com/tattoostudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} Tattoo Studio.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 