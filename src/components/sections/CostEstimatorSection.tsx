import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Slider,
  TextField,
  MenuItem,
  Grid,
  Button,
} from '@mui/material';

const bodyLocations = [
  'Arm',
  'Forearm',
  'Back',
  'Chest',
  'Leg',
  'Ankle',
  'Shoulder',
  'Neck',
];

const styles = [
  'Black and Grey',
  'Color',
  'Traditional',
  'Realistic',
  'Minimalist',
  'Custom Design',
];

const CostEstimatorSection: React.FC = () => {
  const [size, setSize] = useState<number>(5);
  const [location, setLocation] = useState<string>('');
  const [style, setStyle] = useState<string>('');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateEstimate = () => {
    const basePrice = 100;
    const sizeMultiplier = size * 10;
    const styleMultiplier = style === 'Color' ? 1.5 : 1;
    const locationMultiplier = location === 'Back' || location === 'Chest' ? 1.3 : 1;

    const estimate = basePrice + (sizeMultiplier * styleMultiplier * locationMultiplier);
    setEstimatedCost(Math.round(estimate));
  };

  return (
    <Box id="cost-estimator" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Tattoo Cost Estimator
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography gutterBottom>
                Approximate Size (inches)
              </Typography>
              <Slider
                value={size}
                onChange={(_, newValue) => setSize(newValue as number)}
                min={1}
                max={24}
                valueLabelDisplay="auto"
                marks={[
                  { value: 1, label: '1"' },
                  { value: 12, label: '12"' },
                  { value: 24, label: '24"' },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Body Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                {bodyLocations.map((loc) => (
                  <MenuItem key={loc} value={loc}>
                    {loc}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              >
                {styles.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={calculateEstimate}
                disabled={!location || !style}
              >
                Calculate Estimate
              </Button>
            </Grid>
            {estimatedCost && (
              <Grid item xs={12}>
                <Paper sx={{ p: 3, mt: 2, textAlign: 'center', bgcolor: 'primary.main' }}>
                  <Typography variant="h4" sx={{ color: 'white' }}>
                    Estimated Cost: ${estimatedCost}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
                    *This is a rough estimate. Final price may vary based on design complexity and consultation.
                  </Typography>
                </Paper>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default CostEstimatorSection;
