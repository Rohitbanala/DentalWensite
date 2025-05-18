import "./header.css";
import Logo from "../../../assets/todaysdentallogo.png";
export default function Header() {
  return (
    <>
      <nav className="navigation-section">
        <div className="logo-container">
          <img src={Logo} alt="Company Logo" className="nav-logo" />
        </div>
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
