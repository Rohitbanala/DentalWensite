import "./services_overview.css";

const services = [
  {
    icon: "🦷",
    title: "Teeth Cleaning",
    description: "Professional cleaning to maintain oral health.",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    description: "Safe and effective teeth whitening solutions.",
  },
  {
    icon: "🦷",
    title: "Dental Implants",
    description: "Restore missing teeth with durable implants.",
  },
  {
    icon: "📏",
    title: "Orthodontics",
    description: "Straighten teeth with our orthodontic treatments.",
  },
  {
    icon: "🌸",
    title: "Gum Care",
    description: "Comprehensive treatments for healthy gums.",
  },
  {
    icon: "🛠️",
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
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
