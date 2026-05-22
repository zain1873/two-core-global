import { CheckCircle } from "lucide-react";
import "../css/SeoPakages.css";

const plans = [
  {
    name: "Starter List",
    price: "35k / month",
    subscribers: "Up to 5,000 Subscribers",
  },
  {
    name: "Growth Engine",
    price: "60k / month",
    subscribers: "Up to 20,000 Subscribers",
  },
  {
    name: "Enterprise Scale",
    price: "95k / month",
    subscribers: "Unlimited Subscribers",
  },
];

const features = [
  "Email List Setup & Management",
  "Monthly Newsletter Design",
  "Promotional Campaign Emails",
  "Welcome & Onboarding Sequence",
  "Audience Segmentation",
  "A/B Subject Line Testing",
  "GDPR Compliance Setup",
  "Detailed Performance Reports",
  "Dedicated Email Strategist",
];

export default function EmailPakages() {
  return (
    <div className="seo-wrapper">
      <div className="seo-container">

        <span className="seo-label">Transparent Pricing</span>

        {/* Title */}
        <div className="seo-title-wrapper">
          <div className="seo-title-box">
            <h1>Email Marketing Packages</h1>
          </div>
        </div>

        {/* ── Desktop Table (768px+) ── */}
        <div className="seo-plans-header">
          {plans.map((plan) => (
            <div key={plan.name} className="seo-plan-card">
              <h2>{plan.name}</h2>
              <p className="price">{plan.price}</p>
            </div>
          ))}
        </div>

        <div className="seo-plans-with-border">
          {/* Subscribers row */}
          <div className="seo-keyword-row">
            {plans.map((plan) => (
              <div key={plan.name} className="seo-keyword-cell">
                {plan.subscribers}
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {features.map((feature) => (
            <div key={feature} className="seo-feature-row">
              {plans.map((plan) => (
                <div key={plan.name} className="seo-feature-cell">
                  <CheckCircle className="seo-check-icon" strokeWidth={2} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Mobile Cards (below 768px) ── */}
        <div className="seo-mobile-cards">
          {plans.map((plan) => (
            <div key={plan.name} className="seo-mobile-card">
              <div className="seo-mobile-card-header">
                <h2>{plan.name}</h2>
                <p className="price">{plan.price}</p>
              </div>

              <div className="seo-mobile-keyword">{plan.subscribers}</div>

              {features.map((feature) => (
                <div key={feature} className="seo-mobile-feature">
                  <CheckCircle className="seo-mobile-check" strokeWidth={2} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="seo-cta-row">
          <a href="/contact" className="seo-cta-btn">
            Get a Custom Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}
