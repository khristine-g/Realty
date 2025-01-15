import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { TopProperties, categories } from './Data2.js';
import '../Popular.css';

const Popular = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // State to track the selected category

  // Filter properties based on the selected category
  const filteredProperties = 
    selectedCategory === 'all'
      ? TopProperties
      : TopProperties.filter(property => property.category === selectedCategory);

  return (
    <div className="animate-on-scroll">
      <div className="top-property">
        <h4 className="top-property-sub-title">Top Properties</h4>
        <h2 className="top-property-title">Best Property Value</h2>
        <div className="top-property-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`top-property-button ${
                selectedCategory === category.id ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="top-properties-grid">
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className="top-property-card"
            >
              <img
                src={property.image}
                alt={property.title}
                className="top-property-image"
              />
              <div className="top-property-info">
                <h3 className="property-title">{property.title}</h3>
                <p className="top-property-meta">
                  <i className="fas fa-bed"></i> {property.bedrooms} Beds
                  <span> | </span>
                  <i className="fas fa-bath"></i> {property.bathrooms} Baths
                  <span> | </span>
                  <i className="fas fa-expand"></i> {property.size} Sqft
                </p>
                <p className="top-property-location">
                  <i className="fas fa-map-marker-alt"></i> {property.location}
                </p>
              </div>
              <hr className="top-property-divider" />
              <div className="top-agent-info">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="top-agent-image"
                />
                <div className="top-agent-details">
                  <p className="top-agent-name">{property.agent.name}</p>
                  <p className="top-property-price">
                    ${property.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;

