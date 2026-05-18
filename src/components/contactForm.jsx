// ConnectForm.jsx
import { useState } from "react";
import "../css/contactform.css";

const INTERESTS = ["Website", "SEO", "Branding", "Google Ads", "Meta Ads", "CRM & Automation", "Other"];
const BUDGETS = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+", "Let's Discuss"];
const HEAR_OPTIONS = [
  "How did you hear about us",
  "Google Search",
  "Social Media",
  "Referral",
  "Advertisement",
  "Other",
];

export default function ConnectForm() {
  const [selectedInterests, setSelectedInterests] = useState(["Other"]);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
    hearAbout: "",
    message: "",
  });

  const toggleInterest = (item) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", { ...formData, selectedInterests, selectedBudget });
    alert("Form submitted successfully!");
  };

  return (
    <div className="connect-wrapper">
      <div className="connect-card">
        {/* Title */}
        <h1 className="connect-title theme-title">Let's Connect</h1>

        {/* Full Name */}
        <div className="field-group">
          <input
            className="connect-input"
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="field-group">
          <input
            className="connect-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="field-group">
          <input
            className="connect-input"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Company Name */}
        <div className="field-group">
          <input
            className="connect-input"
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        {/* Designation */}
        <div className="field-group">
          <input
            className="connect-input"
            type="text"
            name="designation"
            placeholder="Your designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </div>

        {/* How did you hear about us */}
        <div className="select-wrapper">
          <select
            className="connect-select"
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
          >
            {HEAR_OPTIONS.map((opt) => (
              <option key={opt} value={opt === "How did you hear about us" ? "" : opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="select-arrow">▾</span>
        </div>

        {/* Message */}
        <div className="field-group">
          <textarea
            className="connect-textarea"
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
          />
        </div>

        {/* Interested In */}
        <p className="section-label">I am interested in</p>
        <div className="tag-group">
          {INTERESTS.map((item) => (
            <button
              key={item}
              className={`tag-btn ${selectedInterests.includes(item) ? "active" : ""}`}
              onClick={() => toggleInterest(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Budget */}
        <p className="section-label">Project Budget</p>
        <div className="budget-group">
          {BUDGETS.map((item) => (
            <button
              key={item}
              className={`budget-btn ${selectedBudget === item ? "active" : ""}`}
              onClick={() => setSelectedBudget(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Submit */}
        <button className="submit-btn" onClick={handleSubmit} type="button">
          Submit
        </button>
      </div>
    </div>
  );
}