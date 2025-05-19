import "./heroSection.css";
import HerosectionImage from "../../../assets/herosectonimage.png";
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Your Trusted Partner in Oral Health</h1>
        <p className="hero-subtitle">
          Providing exceptional dental care for a brighter, healthier smile.
        </p>
      </div>
      <div className="image">
        <img src={HerosectionImage} alt="Doctor" className="hero-image" />
      </div>
    </section>
  );
}
