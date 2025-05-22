import Footer from "../../common_components/footer/footer";
import HeroSection from "../homepage/heroSection";
import ContactInfo from "./contact_info";
import ContactForm from "./contact_us_form";
import "./contact_us_page.css";
import ClinicLocation from "./google_maps";
export default function ContactUs() {
  return (
    <section className="contact-us">
      <section className="contact">
        <ContactForm />
        <ContactInfo />
      </section>
      {/* <ClinicLocation /> */}
      {/* <HeroSection /> */}
      <Footer />
    </section>
  );
}
