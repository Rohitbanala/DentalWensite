import "./servicesList.css";

import "./servicesList.css";
import { useState } from "react";
import Modal from "./modal.jsx"; // Assumes you have a Modal component for details.
import DentalImplants from "../../../assets/dentalimplants.jpeg";
import GumCare from "../../../assets/gumcare.jpeg";
import Orthodontics from "../../../assets/Orthodontics.jpeg";
import RootCanalTherapy from "../../../assets/rootcanaltherapy.jpeg";
import TeethCleaning from "../../../assets/teethcleaning.jpeg";
import TeethWhitening from "../../../assets/teethwhitening.jpeg";
const services = [
  {
    icon: TeethCleaning,
    title: "Teeth Cleaning",
    description: "Professional cleaning to maintain oral health.",
    details:
      "Teeth cleaning involves removing plaque, tartar, and stains for optimal oral health.",
  },
  {
    icon: TeethWhitening,
    title: "Teeth Whitening",
    description: "Safe and effective teeth whitening solutions.",
    details:
      "We use advanced techniques to safely whiten teeth, ensuring a brighter smile.",
  },
  {
    icon: DentalImplants,
    title: "Dental Implants",
    description: "Restore missing teeth with durable implants.",
    details:
      "Dental implants replace missing teeth with durable and natural-looking alternatives.",
  },
  {
    icon: Orthodontics,
    title: "Orthodontics",
    description: "Straighten teeth with our orthodontic treatments.",
    details:
      "We offer braces and aligners to correct misaligned teeth and enhance your smile.",
  },
  {
    icon: GumCare,
    title: "Gum Care",
    description: "Comprehensive treatments for healthy gums.",
    details:
      "Our gum care services address gingivitis, periodontal disease, and other gum issues.",
  },
  {
    icon: RootCanalTherapy,
    title: "Root Canal Therapy",
    description: "Save infected teeth with precision treatments.",
    details:
      "Root canal therapy removes infected pulp, cleans, and seals the tooth to prevent further damage.",
  },
];

export default function ServicesList() {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="services-overview">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            onClick={() => handleCardClick(service)}
          >
            <div className="service-image">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <Modal service={selectedService} onClose={handleCloseModal} />
      )}
    </section>
  );
}
