import "./ClinicIntro.css";
import Dentist from "../../../assets/about us.jpg";
export default function ClinicIntro() {
  return (
    <section className="clinic-intro">
      <div className="intro-container">
        <div className="intro-text">
          <h2 className="intro-title">About Our Dental Clinic</h2>
          <p className="intro-description">
            At Todays Dental, we pride ourselves on delivering exceptional
            dental care in a comfortable and friendly environment. Our
            experienced team is dedicated to keeping your smile healthy, bright,
            and beautiful. We offer personalized treatments, state-of-the-art
            technology, and a patient-first approach to ensure your best dental
            experience.
          </p>
        </div>
        <div className="intro-image">
          <img src={Dentist} alt="Dental Clinic" className="clinic-photo" />
        </div>
      </div>
    </section>
  );
}
