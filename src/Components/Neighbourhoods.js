import React from 'react';
import { Box, Typography } from '@mui/material';
import NeighbourhoodImage1 from '../images/neighbourhood1.jpg';
import NeighbourhoodImage2 from '../images/neighbourhood2.jpg';
import NeighbourhoodImage3 from '../images/neighbourhood3.jpeg';
import NeighbourhoodImage4 from '../images/neighbourhood4.jpg';
import NeighbourhoodImage5 from '../images/neighbourhood5.jpg';
import NeighbourhoodImage6 from '../images/neighbourhood6.jpg';

const neighbourhoods = [
  { id: 1, name: "Sunny Heights", description: "A peaceful community with scenic views.", image: NeighbourhoodImage1 },
  { id: 2, name: "Green Acres", description: "Spacious homes surrounded by nature.", image: NeighbourhoodImage2 },
  { id: 3, name: "Downtown Bliss", description: "Vibrant and modern city living.", image: NeighbourhoodImage3 },
  { id: 4, name: "Hillside Haven", description: "A serene and quiet retreat on the hillside.", image: NeighbourhoodImage4 },
  { id: 5, name: "Ocean Breeze", description: "Coastal living with stunning ocean views.", image: NeighbourhoodImage5 },
  { id: 6, name: "Urban Oasis", description: "A perfect blend of city life and nature.", image: NeighbourhoodImage6 },
];

const Neighbourhoods = () => {
  return (
    <Box m={5}>
      <Box mb={4} textAlign="center">
        <Typography variant="h2" gutterBottom>
          Our Neighbourhoods
        </Typography>
        <Typography variant="body1">
          See Our Neighbourhoods
        </Typography>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap={4}
        mx={5}
      >
        {neighbourhoods.map((neighbourhood) => (
          <Box
            key={neighbourhood.id}
            position="relative"
            borderRadius={2}
            overflow="hidden"
            className="neighbourhood-card"
          >
            <Box
              height="300px"
              style={{
                backgroundImage: `url(${neighbourhood.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="neighbourhood-image"
            >
              <Box
                position="absolute"
                bottom={16}
                left={16}
                right={16}
                bgcolor="rgba(0, 0, 0, 0.5)"
                borderRadius={1}
                p={2}
                className="neighbourhood-caption"
              >
                <Typography variant="h6" color="white">
                  {neighbourhood.name}
                </Typography>
                <Typography variant="body2" color="white">
                  {neighbourhood.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Neighbourhoods;
