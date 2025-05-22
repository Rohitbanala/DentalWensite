import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import apiClient from "./../../utils/api_client.js";
import "./contact_us_form.css";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await apiClient.post("/contact", data); // Use Axios instance
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        {errors.name && <p className="error-text">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label>Subject</label>
        <input
          type="text"
          placeholder="Enter the subject"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="error-text">{errors.subject.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea
          rows="5"
          placeholder="Write your message here"
          {...register("message")}
        />
        {errors.message && (
          <p className="error-text">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className="submit-button">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
