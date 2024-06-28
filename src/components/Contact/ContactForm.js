import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin } from "react-icons/fa"; // Import the LinkedIn icon
import "./ContactForm.css";

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Send form data using EmailJS
      emailjs
        .send(
          "service_pv9yd2g", // Replace with your EmailJS service ID
          "template_t0pf5as", // Replace with your EmailJS template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            reply_to: formData.email,
          },
          "cGaPXWMUCUMp8AQ67" // Replace with your EmailJS public key
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setErrors({});
        })
        .catch((err) => {
          console.error("FAILED...", err);
        });
    }
  };

  return (
    <div className="contact-form-overlay">
      <div className="contact-form-modal">
        <button className="contact-form-close" onClick={onClose}>
          ×
        </button>
        <div className="contact-form-left">
          <a
            href="https://www.linkedin.com/in/danialhosseinikhah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="contact-form-right">
          <h2>Contact</h2>
          {isSubmitted && (
            <p className="success-message">Message sent successfully!</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
