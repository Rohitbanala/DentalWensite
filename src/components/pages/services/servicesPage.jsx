import Footer from "../../common_components/footer/footer";
import Header from "../../common_components/header/header";

import ServicesList from "./servicesList";

import "./servicesPage.css";

const ServicesPage = () => {
  return (
    <section className="services-page">
      <Header />
      <ServicesList />
      <Footer />
    </section>
  );
};

export default ServicesPage;
