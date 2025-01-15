import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../PropertyDetail.css';
import { properties } from './Data.js';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const propertyData = properties.find((p) => p.id === parseInt(id));
    setProperty(propertyData);
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-detail">
      <div className="property-header">
        <div className="property-title-price">
          <h1>{property.title}</h1>
          <h2>${property.price.toLocaleString()}</h2>
        </div>
        <hr className="header-divider" />
        <div className="property-meta">
          <p>
            <i className="fas fa-bed"></i> {property.bedrooms} Bedrooms
          </p>
          <p>
            <i className="fas fa-bath"></i> {property.bathrooms} Bathrooms
          </p>
          <p>
            <i className="fas fa-expand"></i> {property.size} Sqft
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> {property.location}
          </p>
        </div>
      </div>
      <div className="property-images">
        <img
          className="main-property-image"
          src={property.image}
          alt={property.title}
        />
        {property.images?.map((img, index) => (
          <img key={index} src={img.url} alt={`${property.title} - ${index}`} />
        ))}
      </div>
      <div className="property-overview">
        <h2>Overview</h2>
        <p>{property.description}</p>
        <p>Category: {property.category}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
