import React from "react";
import "../css/WhyChooseUiUx.css";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "4.9★", label: "Average Rating" },
  { value: "3×",   label: "Faster Handoff" },
];

const reasons = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    title: "Research Before Pixels",
    desc: "Every design decision is backed by real user data — not trends or gut feel.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "One Unified Team",
    desc: "Research, design, prototype and test under one roof — zero handoff gaps.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Developer-Ready Files",
    desc: "Pixel-perfect Figma files with specs, tokens and a component library — ready to ship.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "Post-Launch Iteration",
    desc: "We analyse real usage after launch and keep improving until retention climbs.",
  },
];

export default function WhyChooseUiUx() {
  return (
    <section className="wcuu-section">
      <div className="wcuu-inner">

        {/* ── Visual column ── */}
        <div className="wcuu-visual">
          {/* Corner frame accents */}
          <span className="wcuu-corner wcuu-corner--tl" />
          <span className="wcuu-corner wcuu-corner--br" />

          <div className="wcuu-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop"
              alt="UI/UX Design process"
              className="wcuu-img"
            />
            <div className="wcuu-img-scrim" />
          </div>

          {/* Floating stats bar */}
          <div className="wcuu-stats-bar">
            {stats.map((s, i) => (
              <div key={i} className="wcuu-stat">
                <span className="wcuu-stat-val">{s.value}</span>
                <span className="wcuu-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Content column ── */}
        <div className="wcuu-content">
          <span className="wcuu-eyebrow">
            <span className="wcuu-eyebrow-line" />
            Why Choose Us
          </span>

          <h2 className="wcuu-heading">
            Design That Wins<br />
            <span className="wcuu-heading-accent">Users & Business</span>
          </h2>

          <p className="wcuu-body">
            We bridge the gap between how your users think and how your product
            works. Our process is research-led, outcome-driven, and built to
            deliver interfaces that convert visitors into loyal customers.
          </p>

          <div className="wcuu-reasons">
            {reasons.map((r, i) => (
              <div key={i} className="wcuu-reason">
                <div className="wcuu-reason-icon">{r.icon}</div>
                <div className="wcuu-reason-text">
                  <h4 className="wcuu-reason-title">{r.title}</h4>
                  <p className="wcuu-reason-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
