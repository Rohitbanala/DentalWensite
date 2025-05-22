import "./contact_info.css";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-item">
        <Phone className="icon" />
        <span>+91 91234 56789</span>
      </div>
      <div className="info-item">
        <Mail className="icon" />
        <span>contact@yourcompany.in</span>
      </div>
      <div className="info-item">
        <MapPin className="icon" />
        <span>
          Plot No. 456, Road No. 36, Jubilee Hills, Hyderabad, Telangana, India
          - 500033
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
