import React from 'react';
import '../Neighbourhoods.css';
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
    <div className="neighbourhoods-container">
      <div className="section-header">
        <h2>Our Neighbourhoods</h2>
        <p>Explore our beautiful communities</p>
      </div>
      <div className="neighbourhoods-grid">
        {neighbourhoods.map((neighbourhood) => (
          <div key={neighbourhood.id} className="neighbourhood-card">
            <div
              className="neighbourhood-image"
              style={{ backgroundImage: `url(${neighbourhood.image})` }}
            ></div>
            <div className="neighbourhood-overlay">
              <h3>{neighbourhood.name}</h3>
              <p>{neighbourhood.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Neighbourhoods;
