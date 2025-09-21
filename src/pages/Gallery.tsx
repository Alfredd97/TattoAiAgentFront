import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import japaneseImage from '../assets/images/Japanese.jpg';
import minimalistImage from '../assets/images/Minimalist.jpg';

// Mock data - replace with actual data from your API
const galleryItems = [
  {
    id: 1,
    title: 'Traditional Japanese',
    image: japaneseImage,
    description: 'Traditional Japanese dragon sleeve tattoo',
  },
  {
    id: 2,
    title: 'Minimalist',
    image: minimalistImage,
    description: 'Minimalist geometric design',
  },
  // Add more items as needed
];

const Gallery = () => {
    const { t } = useTranslation();
    return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
          {t('Gallery.Our Work')}
        </Typography>
        <Grid container spacing={4}>
          {galleryItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 400, // Fixed height
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery; 