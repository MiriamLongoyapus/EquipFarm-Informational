import React from "react";
import { servicesData } from "../../Constants/services-data";
import "./style.css";

const ServicesSection = () => {
  return (
    <div className="services_section">
      <div className="headers">
<h1>Our Services</h1>
      </div>     


      <div className="service_cards-container">
        {servicesData.map((service) => (
          <div className="service_card" key={service.id} role="contentinfo">
            <h2 className="service_card-title" aria-label="title">{service.title}</h2>
            <div className="service_card-content">
              <img
                src={service.icon}
                alt={service.title}
                className="service_card-image"
              />
              <div className="service_card-description">
                <p className="pr">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
