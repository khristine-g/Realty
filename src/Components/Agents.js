import React from 'react';
import '../Agents.css';
import agentImage1 from '../images/agent1.jpg';
import agentImage2 from '../images/agent2.jpg';
import agentImage3 from '../images/agent3.jpeg';

const agents = [
  {
    image: agentImage1,
    name: 'Leah Clement',
    title: 'Senior Real Estate Agent',
    contact: 'janedoe@example.com',
  },
  {
    image: agentImage2,
    name: 'Tina Smith',
    title: 'Real Estate Agent',
    contact: 'johnsmith@example.com',
  },
  {
    image: agentImage3,
    name: 'Emily Clark',
    title: 'Property Consultant',
    contact: 'emilyclark@example.com',
  },
];

const Agents = () => {
  return (
    <section className="agents-section">
      <div className="agents-header">
        <h2>Meet Our Expert Agents</h2>
        <p>Helping you find your dream home with trust and experience.</p>
      </div>

      <div className="agents-grid">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <div className="agent-image-wrapper">
              <img src={agent.image} alt={agent.name} className="agent-image" />
              <div className="overlay">
                <a href={`https://facebook.com/${agent.name}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={`https://twitter.com/${agent.name}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={`https://linkedin.com/in/${agent.name}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="agent-info">
              <h3>{agent.name}</h3>
              <p className="agent-title">{agent.title}</p>
              <div className="contact-icons">
                <a href={`mailto:${agent.contact}`}><i className="fas fa-envelope"></i></a>
                <a href={`tel:${agent.contact}`}><i className="fas fa-phone"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agents;
