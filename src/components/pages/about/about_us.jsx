import Footer from "../../common_components/footer/footer";
import Header from "../../common_components/header/header";

import "./about_us.css";
import ClinicalBackground from "./clinical_background";
import MissionStatement from "./philosphy";
import Practitioners from "./practitioner_details";
export default function AboutUs() {
  return (
    <section className="about-us">
      <Header />
      <ClinicalBackground />
      <Practitioners />
      <MissionStatement />
      <Footer />
    </section>
  );
}
