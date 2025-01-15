import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TopProperties } from './Data2.js'; // Replace with the actual path to your data file
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCalendarAlt,  FaDoorOpen } from 'react-icons/fa';
import '../PopularDetails.css';

const PopularDetails = () => {
  const { id } = useParams(); // Extract the id from the URL
  const property = TopProperties.find((prop) => prop.id === parseInt(id));

  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  if (!property) {
    return <div>Property not found</div>;
  }

  const nextRoom = () => {
    setCurrentRoomIndex((prevIndex) => (prevIndex + 1) % property.rooms.length);
  };

  const prevRoom = () => {
    setCurrentRoomIndex(
      (prevIndex) => (prevIndex - 1 + property.rooms.length) % property.rooms.length
    );
  };

  const details = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: property.location },
    { icon: <FaBed />, label: 'Bedrooms', value: property.bedrooms },
    { icon: <FaBath />, label: 'Bathrooms', value: property.bathrooms },
    { icon: <FaRulerCombined />, label: 'Size', value: `${property.size} sqft` },
    { icon: <FaCalendarAlt />, label: 'Year Built', value: property.yearBuilt },
   
    { icon: <FaDoorOpen />, label: 'Rooms', value: property.rooms.length },
  ];

  return (
    <div className="popular-property-details">
      {/* Property Title and Price */}
      <div className="property-header">
        <h1 className="property-detail-title">{property.title}</h1>
        <h2 className="property-price">${property.price.toLocaleString()}</h2>
      </div>

      {/* Rooms Slideshow */}
      <div className="property-slideshow">
        <div className="room-slideshow">
          <button className="prev" onClick={prevRoom}>❮</button>
          <img
            src={property.rooms[currentRoomIndex].url}
            alt={`Room ${currentRoomIndex + 1}`}
            className="room-image"
          />
          <button className="next" onClick={nextRoom}>❯</button>
        </div>
        <div className="room-indicators">
          {property.rooms.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentRoomIndex ? 'active' : ''}`}
              onClick={() => setCurrentRoomIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="property-details-grid">
        {details.map((detail, index) => (
          <div className="detail-box" key={index}>
            <div className="detail-icon">{detail.icon}</div>
            <div className="detail-label">{detail.label}</div>
            <div className="detail-value">{detail.value}</div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="property-description">
        <p>{property.description}</p>
      </div>
    </div>
  );
};

export default PopularDetails;


