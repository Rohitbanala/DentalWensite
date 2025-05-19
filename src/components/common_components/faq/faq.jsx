import "./faq.css";
import { useState } from "react";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a wide range of dental services, including teeth cleaning, whitening, implants, and orthodontic treatments.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance plans. Contact us for details about your specific provider.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment through our website or by calling our clinic during business hours.",
    },
    {
      question: "Is your clinic kid-friendly?",
      answer:
        "Absolutely! We strive to make our environment welcoming for patients of all ages, including children.",
    },
    {
      question: "What safety measures do you take?",
      answer:
        "We follow strict hygiene and sterilization protocols to ensure the safety of our patients and staff.",
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
