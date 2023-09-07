import React from "react";
import { servicesData } from "../../Constants/services-data";
import "./style.css";

const ServicesSection = () => {
  return (
    <div className="services_section">
      <h1 className="services_section-heading">Our Services</h1>

      <div className="service_cards-container">
        {servicesData.map((service) => (
          <div className="service_card" key={service.id}>
            <h2 className="service_card-title">{service.title}</h2>
            <div className="service_card-content">
              <img
                src={service.icon}
                alt={service.title}
                className="service_card-image"
              />
              <p className="service_card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
