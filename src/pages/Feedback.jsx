import { useState } from "react";
import "./Feedback.css";
import GroceryImg from "../assets/images/contact-hero-01.jpg"


const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.rating) newErrors.rating = "Please provide a rating";

    if (!formData.message.trim()) {
      newErrors.message = "Feedback cannot be empty";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value.toString() });

    if (errors.rating) {
      setErrors({ ...errors, rating: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", rating: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="feedback-page">

      {/* HERO */}
      <section className="feedback-hero">
        <img
          src={GroceryImg}
          alt="Vegetables"
          className="feedback-hero-img"
        />

        <div className="feedback-overlay"></div>

        <div className="feedback-hero-text">
          <h1>Fresh Feedback. Better Experience.</h1>
          <p>Your voice helps us serve you better every day</p>
        </div>
      </section>

      {/* HEADING */}
      <section className="feedback-heading app-container">
        <h2 className="app-section-title center">Share Your Experience</h2>
        <p className="app-text-muted">
          Help us improve your grocery journey.
        </p>
      </section>

      {/* MAIN */}
      <section className="feedback-main app-container">

        {submitted && (
          <div className="feedback-success">
            Thank you for your feedback. We appreciate your time.
          </div>
        )}

        <form
          className="feedback-form app-shadow-md"
          onSubmit={handleSubmit}
        >

          <div className="feedback-grid">

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

          </div>

          {/* STAR RATING */}
          <div className="rating-group">
            <label className="rating-label">Rate your experience</label>

            <div className="star-container">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={`star-btn ${
                    Number(formData.rating) >= star ? "active" : ""
                  }`}
                  onClick={() => handleRating(star)}
                >
                  ★
                </button>
              ))}
            </div>

            {errors.rating && <span className="error">{errors.rating}</span>}
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
            ></textarea>
            <label>Your Feedback</label>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-primary-custom">
            Submit Feedback
          </button>

        </form>
      </section>
    </div>
  );
};

export default Feedback;