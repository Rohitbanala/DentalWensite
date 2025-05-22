import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../../assets/todaysdentallogo.png";

export default function Header() {
  return (
    <nav className="navigation-section">
      <div className="logo-container">
        <img src={Logo} alt="Company Logo" className="nav-logo" />
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Service</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
