import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
  Avatar,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const artists = [
  {
    name: 'John Doe',
    role: 'Lead Artist',
    specialties: ['Japanese', 'Traditional'],
    experience: '15+ years',
    image: '/artists/john-doe.jpg',
    instagram: 'johndoetattoo',
    facebook: 'johndoetattoo',
    twitter: 'johndoetattoo',
  },
  // Add more artists as needed
];

const About = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
          Meet Our Artists
        </Typography>
        
        <Grid container spacing={4}>
          {artists.map((artist) => (
            <Grid item xs={12} md={6} key={artist.name}>
              <Paper sx={{ p: 4 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <Avatar
                      src={artist.image}
                      alt={artist.name}
                      sx={{ width: 200, height: 200, mx: 'auto' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h4" gutterBottom>
                      {artist.name}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {artist.role}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Experience: {artist.experience}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Specialties: {artist.specialties.join(', ')}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <IconButton
                        color="primary"
                        component="a"
                        href={`https://instagram.com/${artist.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        component="a"
                        href={`https://facebook.com/${artist.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        component="a"
                        href={`https://twitter.com/${artist.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom>
              About Our Studio
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to our premier tattoo studio, where art meets skin in perfect harmony. With over 15 years of experience in the industry, we pride ourselves on delivering exceptional tattoo artistry in a clean, professional, and welcoming environment.
            </Typography>
            <Typography variant="body1" paragraph>
              Our studio maintains the highest standards of safety and hygiene, using only premium quality equipment and inks. We believe in creating unique, personalized designs that tell your story and reflect your individuality.
            </Typography>
            <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
              Our Values
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom color="primary">
                  Artistry
                </Typography>
                <Typography variant="body2">
                  We treat every tattoo as a unique piece of art, crafted to perfection.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom color="primary">
                  Safety
                </Typography>
                <Typography variant="body2">
                  Your safety is our top priority, with strict sterilization protocols.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom color="primary">
                  Customer Service
                </Typography>
                <Typography variant="body2">
                  We ensure a comfortable and professional experience from consultation to aftercare.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 