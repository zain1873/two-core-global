import React from "react";
import "../css/UiUxServices.css";

const services = [
  {
    number: "01",
    label: "User Research",
    title: "Design Grounded in Real User Insight",
    desc: "We don't design on assumptions. Our research phase uncovers real user behaviours, goals, and frustrations — giving every design decision a solid evidence base.",
    features: [
      "Stakeholder & user interviews",
      "Competitive & heuristic analysis",
      "User persona development",
      "Journey mapping & pain point audit",
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80&auto=format&fit=crop",
    imageAlt: "UX Research & Discovery",
  },
  {
    number: "02",
    label: "UX Architecture",
    title: "Structure That Makes Sense to Users",
    desc: "Great UX is invisible — it just works. We build information architectures, user flows, and low-fidelity wireframes that ensure every screen has a clear purpose.",
    features: [
      "Information architecture (IA)",
      "User flow & task-flow mapping",
      "Low-fidelity wireframing",
      "Content hierarchy & labelling",
    ],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80&auto=format&fit=crop",
    imageAlt: "UX Wireframing & Architecture",
  },
  {
    number: "03",
    label: "UI Visual Design",
    title: "Interfaces That Stop the Scroll",
    desc: "We translate wireframes into polished, pixel-perfect interfaces. Every component is crafted with your brand DNA — colour, motion, and typography working together.",
    features: [
      "High-fidelity UI design",
      "Design system & component library",
      "Dark / light mode variants",
      "Micro-interaction specifications",
    ],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80&auto=format&fit=crop",
    imageAlt: "UI Visual Design",
  },
  {
    number: "04",
    label: "Prototyping & Testing",
    title: "Validate Before You Build",
    desc: "Interactive prototypes let you feel the product before a single line of code is written. We test, iterate, and hand off designs developers can actually ship.",
    features: [
      "Click-through interactive prototypes",
      "Usability testing sessions",
      "Heatmap & session analysis",
      "Developer-ready design handoff",
    ],
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Prototyping & Testing",
  },
];

export default function UiUxServices() {
  return (
    <section className="uiux-services">
      {/* Header */}
      <div className="uiux-services-header">
        <span className="uiux-services-label">What We Do</span>
        <h2 className="uiux-services-heading">
          UI/UX Services That{" "}
          <span className="uiux-services-heading-accent">Convert</span>
        </h2>
        <p className="uiux-services-sub">
          End-to-end design — from raw research to a developer-ready product
          that users love and businesses trust.
        </p>
      </div>

      {/* Stripes */}
      <div className="uiux-services-stripes">
        {services.map((svc, i) => (
          <div
            key={svc.number}
            className={`uiux-stripe ${i % 2 === 1 ? "uiux-stripe--reverse" : ""}`}
          >
            {/* Image */}
            <div className="uiux-stripe-img-wrap">
              <div className="uiux-stripe-img-glow" />
              <img
                src={svc.image}
                alt={svc.imageAlt}
                className="uiux-stripe-img"
              />
              <span className="uiux-stripe-img-number">{svc.number}</span>
            </div>

            {/* Content */}
            <div className="uiux-stripe-content">
              <span className="uiux-stripe-label">{svc.label}</span>
              <h3 className="uiux-stripe-title">{svc.title}</h3>
              <p className="uiux-stripe-desc">{svc.desc}</p>
              <ul className="uiux-stripe-list">
                {svc.features.map((f) => (
                  <li key={f} className="uiux-stripe-list-item">
                    <span className="uiux-stripe-tick">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
