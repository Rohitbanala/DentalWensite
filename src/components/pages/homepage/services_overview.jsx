import "./services_overview.css";
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
  },
  {
    icon: TeethWhitening,
    title: "Teeth Whitening",
    description: "Safe and effective teeth whitening solutions.",
  },
  {
    icon: DentalImplants,
    title: "Dental Implants",
    description: "Restore missing teeth with durable implants.",
  },
  {
    icon: Orthodontics,
    title: "Orthodontics",
    description: "Straighten teeth with our orthodontic treatments.",
  },
  {
    icon: GumCare,
    title: "Gum Care",
    description: "Comprehensive treatments for healthy gums.",
  },
  {
    icon: RootCanalTherapy,
    title: "Root Canal Therapy",
    description: "Save infected teeth with precision treatments.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="services-overview">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
