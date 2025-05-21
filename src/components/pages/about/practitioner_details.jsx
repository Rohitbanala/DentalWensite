import "./practititioner_details.css";
import MaleDoctor from "../../../assets/maledoctor.jpg";
import FemaleDoctor from "../../../assets/femaledoctor.png";
const practitioners = [
  {
    name: "Dr. Venkatesh Reddy",
    title: "General Dentist",
    qualifications: "BDS, Osmania University, 14 years experience",
    bio: "Dr. Reddy provides compassionate preventive and restorative dental care, serving Hyderabad’s families with dedication.",
    photo: MaleDoctor,
  },
  {
    name: "Dr. Srinivas Rao",
    title: "Orthodontist",
    qualifications:
      "MDS (Orthodontics), NTR University of Health Sciences, 9 years experience",
    bio: "Dr. Rao specializes in orthodontics, offering advanced braces and aligner treatments to create perfect smiles.",
    photo: MaleDoctor,
  },
  {
    name: "Dr. Priya Sharma",
    title: "Periodontist",
    qualifications:
      "MDS (Periodontology), Osmania University, 11 years experience",
    bio: "Dr. Sharma focuses on gum health and dental implants, delivering expert care with a patient-centered approach.",
    photo: FemaleDoctor,
  },
];
export default function Practitioners() {
  return (
    <section className="practitioners-section">
      <h2>Meet Our Practitioners</h2>
      <div className="practitioners-grid">
        {practitioners.map((practitioner, index) => (
          <div key={index} className="practitioner-card">
            <img
              src={practitioner.photo}
              alt={practitioner.name}
              className="practitioner-photo"
            />
            <h3>{practitioner.name}</h3>
            <p className="practitioner-title">{practitioner.title}</p>
            <p className="practitioner-qualifications">
              {practitioner.qualifications}
            </p>
            <p className="practitioner-bio">{practitioner.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
