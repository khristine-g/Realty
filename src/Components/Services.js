import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../Services.css';
import propertyImage7 from '../images/property7.jpg';
import propertyImage8 from '../images/property8.jpg';
import propertyImage9 from '../images/property9.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Buy A New Home',
      description: 'Find your dream home effortlessly with expert guidance.',
      image: propertyImage7,
    },
    {
      id: 2,
      title: 'Sell a Home',
      description: 'Sell confidently with strategic marketing and expert advice.',
      image: propertyImage8, 
    },
    {
      id: 3,
      title: 'Rent a Home',
      description: 'Discover rentals that perfectly match your lifestyle.',
      image: propertyImage9, 
    },
  ];

  return (
    <div id="services">
      <section className="services">
        <div className="container">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">What We Offer</p>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div
                  className="service-image"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="learn-more-btn">
                    Learn More <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
