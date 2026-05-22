import React, { useState } from "react";
import "../css/UiUxPackages.css";

const plans = [
  {
    name: "Wireframe",
    tagline: "Validate before you design",
    price: "45,000",
    period: "/ project",
    popular: false,
    features: [
      "Discovery workshop (2 hrs)",
      "User personas (up to 3)",
      "User flow diagrams",
      "Low-fidelity wireframes",
      "Information architecture",
      "2 revision rounds",
      "PDF deliverable",
    ],
    cta: "Start Wireframing",
  },
  {
    name: "Full Design",
    tagline: "Research-led, pixel-perfect UI",
    price: "85,000",
    period: "/ project",
    popular: true,
    features: [
      "Everything in Wireframe",
      "High-fidelity UI screens",
      "Design system & tokens",
      "Component library (Figma)",
      "Interactive prototype",
      "Dark / light mode variants",
      "3 revision rounds",
      "Zeplin / dev handoff",
    ],
    cta: "Start Full Design",
  },
  {
    name: "UX Premium",
    tagline: "Full cycle — research to launch",
    price: "1,50,000",
    period: "/ project",
    popular: false,
    features: [
      "Everything in Full Design",
      "In-depth user research",
      "Usability testing (5 users)",
      "Heatmap & session analysis",
      "A/B test variant designs",
      "Motion & micro-animation specs",
      "Unlimited revisions",
      "Post-launch iteration support",
    ],
    cta: "Go Premium",
  },
];

export default function UiUxPackages() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="uiux-pkgs-section">
      <div className="uiux-pkgs-inner">

        {/* Header */}
        <div className="uiux-pkgs-header">
          <span className="uiux-pkgs-label">Transparent Pricing</span>
          <h2 className="uiux-pkgs-heading">
            UI/UX Design <span className="uiux-pkgs-accent">Packages</span>
          </h2>
          <p className="uiux-pkgs-sub">
            Flat-rate project pricing — no surprise invoices, no hourly billing.
            Pick the scope that fits your stage.
          </p>
        </div>

        {/* Cards */}
        <div className="uiux-pkgs-grid">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`uiux-pkg-card ${plan.popular ? "uiux-pkg-card--popular" : ""} ${hovered === i ? "uiux-pkg-card--hovered" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {plan.popular && (
                <div className="uiux-pkg-popular-badge">Most Popular</div>
              )}

              <div className="uiux-pkg-top">
                <span className="uiux-pkg-name">{plan.name}</span>
                <p className="uiux-pkg-tagline">{plan.tagline}</p>
              </div>

              <div className="uiux-pkg-price-row">
                <span className="uiux-pkg-currency">PKR</span>
                <span className="uiux-pkg-price">{plan.price}</span>
                <span className="uiux-pkg-period">{plan.period}</span>
              </div>

              <div className="uiux-pkg-divider" />

              <ul className="uiux-pkg-features">
                {plan.features.map((f) => (
                  <li key={f} className="uiux-pkg-feature">
                    <span className="uiux-pkg-check">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/contact" className="uiux-pkg-cta">
                {plan.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="uiux-pkgs-note">
          Need something custom?{" "}
          <a href="/contact" className="uiux-pkgs-note-link">
            Let's talk scope →
          </a>
        </p>

      </div>
    </section>
  );
}
