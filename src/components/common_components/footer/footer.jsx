import "./Footer.css";
import Facebook from "../../../assets/fb.png";
import Insta from "../../../assets/insta.png";
import Twitter from "../../../assets/twitter.png";
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-logo">
          <h2>Todays Dental</h2>
          <div className="social-icons">
            <img src={Insta} alt="Instagram" className="icon" />
            <img src={Facebook} alt="Facebook" className="icon" />
            <img src={Twitter} alt="Twitter" className="icon" />
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact us</h3>
          <p>
            456 Banjara Hills Rd.,
            <br />
            Banjara Hills, Hyderabad, Telangana 500034
          </p>
          <p>+91 9059939</p>
          <p>contact@dentacare.com</p>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Teeth Whitening</li>
            <li>Orthodontics</li>
            <li>Dental Implants</li>
            <li>Cosmetic Dentistry</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        © Todays Dentals. All rights reserved.
      </div>
    </footer>
  );
}
