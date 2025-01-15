import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Recommended.css';
import { properties } from './Data.js';

const Recommended = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-on-scroll">
      <div className="recommended">
       
        <h2 className="recommended-title">Recommended Properties</h2>
        <h4 className="recommended-sub-title"> These are our Recommended Properties</h4>
      
        <div className="recommended-grid">
          {properties.map((property) => (
            <div
              key={property.id}
              className="recommended-property-card"
              onClick={() => navigate(`/property/${property.id}`)}
            >
              <img
                src={property.image}
                alt={property.location}
                className="recommended-property-image"
              />
              <div className="recommended-property-info">
                <h3 className="recommended-property-title">{property.location}</h3>
                <p className="recommended-property-meta">
                  <i className="fas fa-bed"></i> {property.bedrooms} Beds
                  <span> | </span>
                  <i className="fas fa-bath"></i> {property.bathrooms} Baths
                  <span> | </span>
                  <i className="fas fa-expand"></i> {property.size} Sqft
                </p>
                <p className="recommended-property-location">
                  <i className="fas fa-map-marker-alt"></i> {property.location}
                </p>
              </div>
              <hr className="recommended-property-divider" />
              <div className="recommended-agent-info">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="recommended-agent-image"
                />
                <div className="recommended-agent-details">
                  <p className="recommended-agent-name">{property.agent.name}</p>
                  <p className="recommended-property-price">
                    ${property.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Recommended;

