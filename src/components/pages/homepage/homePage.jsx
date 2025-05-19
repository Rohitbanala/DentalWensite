import Faq from "../../common_components/faq/faq";
import Footer from "../../common_components/footer/footer";
import Header from "../../common_components/header/header";
import CallToAction from "./call_to_action";
import ClinicIntro from "./clinic_intro";
import HeroSection from "./heroSection";
import "./homePage.css";
import ServicesOverview from "./services_overview";
export default function HomePage() {
  return (
    <section className="home-page">
      <Header />
      <HeroSection />
      <ClinicIntro />
      <ServicesOverview />
      <CallToAction />
      <Faq />
      <Footer />
    </section>
  );
}
