import clinicImage from "../../../assets/about us head.jpeg";
import "./clinical_background.css";

export default function ClinicalBackground() {
  return (
    <div className="about-page">
      <section className="clinic-background">
        <h2>Our Clinic's Background</h2>
        <img src={clinicImage} alt="Our Clinic" className="clinic-image" />
        <p>
          Founded in 2010, Todays Dental has been a cornerstone of healthcare in
          Hyderabad, providing compassionate and cutting-edge medical care. Our
          team of dedicated professionals is committed to improving lives
          through personalized treatment plans and innovative practices. Over
          the past 15 years, we have grown to serve thousands of patients,
          earning trust through our patient-centered approach and
          state-of-the-art facilities. We strive to make healthcare accessible
          and inclusive, offering Teeth Cleaning, Teeth Whitening, Dental
          Implants, Orthodontics, Gum Care, Root Canal Therapy and fostering
          wellness in our community.
        </p>
      </section>
    </div>
  );
}
