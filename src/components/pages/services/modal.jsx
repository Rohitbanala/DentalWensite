import "./modal.css";
function Modal({ service, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation(); // Prevent modal close on inner click
        }}
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{service.title}</h2>
        <p>
          <strong>Description:</strong> {service.description}
        </p>
        <p>
          <strong>Details:</strong> {service.details}
        </p>
        <ul>
          <li>
            🛠️ <strong>Benefits:</strong> Improve oral health and appearance.
          </li>
          <li>
            📋 <strong>Procedure:</strong> A step-by-step treatment designed for
            safety and efficiency.
          </li>
          <li>
            ❓ <strong>FAQs:</strong> Contact us to know more at
            todaysdentals@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;
