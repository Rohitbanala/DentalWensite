import Footer from "../../common_components/footer/footer";
import Header from "../../common_components/header/header";
import ContactInfo from "./contact_info";
import ContactForm from "./contact_us_form";

import "./contact_us_page.css";
import ClinicLocation from "./google_maps";
export default function ContactUs() {
  return (
    <section className="contact-us">
      <Header />
      <section className="contact">
        <ContactForm />
        <ContactInfo />
      </section>
      {/* <ClinicLocation /> */}
      <Footer />
    </section>
  );
}
