import { useState } from "react";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Enter your name";

    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.message.trim()) newErrors.message = "Enter your message";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <img
          src="src\assets\images\contact-hero-01.jpg"
          alt="Fresh Groceries"
          className="contact-hero-img"
        />

        <div className="contact-overlay"></div>

        <div className="contact-hero-text">
          <h1>Fresh Conversations Start Here</h1>
          <p>We’re here to help you shop smarter</p>
        </div>
      </section>

      {/* HEADING */}
      <section className="contact-heading app-container">
        <h2 className="app-section-title center">Contact Us</h2>
        <p className="app-text-muted">We’d love to hear from you</p>
      </section>

      {/* MAIN */}
      <section className="contact-main app-container">

        {submitted && (
          <div className="contact-success">
            Message sent successfully. We’ll get back to you soon.
          </div>
        )}

        <div className="contact-grid">

          {/* INFO */}
          <div className="contact-info app-shadow-md app-radius-lg hover-lift">
            <h3>Get in touch</h3>

            <div className="info-item">
              <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
              <span>Kozhikode, Kerala</span>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              <span>+91 00000 00000</span>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <span>info@budgetbasket.com</span>
            </div>

            <div className="hours">
              <h4>
                <FontAwesomeIcon icon={faClock} className="info-icon" /> Working Hours
              </h4>
              <p>Mon - Fri: 9AM - 8PM</p>
              <p>Sat - Sun: 10AM - 6PM</p>
            </div>
          </div>

          {/* FORM */}
          <form
            className="contact-form app-shadow-md app-radius-lg"
            onSubmit={handleSubmit}
          >
            <h3>Send Message</h3>

            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Name</label>
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Email</label>
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
              ></textarea>
              <label>Message</label>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn-primary-custom">
              Send Message
            </button>
          </form>

        </div>
      </section>
    </div>
  );
};

export default Contact;