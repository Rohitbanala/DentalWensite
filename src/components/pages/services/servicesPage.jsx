import Footer from "../../common_components/footer/footer";

import ServicesList from "./servicesList";

import "./servicesPage.css";

const ServicesPage = () => {
  return (
    <section className="services-page">
      <ServicesList />
      <Footer />
    </section>
  );
};

export default ServicesPage;
