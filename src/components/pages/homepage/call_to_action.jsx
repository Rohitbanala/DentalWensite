import "./call_to_action.css";
import DentalService from "../../../assets/call to action.jpg";
export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Book Your Free Dental Consultation Today!</h2>
        <p className="cta-description">
          Achieve a brighter, healthier smile with expert care from our dental
          professionals. Take the first step to better oral health—schedule your
          free consultation now!
        </p>
        <form className="cta-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Preferred Service</label>
            <select id="service">
              <option value="">Select a service</option>
              <option value="teeth-cleaning">Teeth Cleaning</option>
              <option value="whitening">Teeth Whitening</option>
              <option value="implants">Dental Implants</option>
              <option value="orthodontics">Orthodontics</option>
            </select>
          </div>
          <button type="submit" className="cta-button">
            Schedule Now
          </button>
        </form>
      </div>
      <div className="cta-image">
        <img src={DentalService} alt="Smiling patient at the dental clinic" />
      </div>
    </section>
  );
}
