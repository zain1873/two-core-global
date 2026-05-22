import React, { useState } from "react";
import {
  PenTool, Layers, Navigation, Activity,
  Code2, Share2, Zap, RefreshCw,
} from "lucide-react";
import "../css/UiUxTools.css";

const tools = [
  {
    number: "01",
    color: "#a259ff",
    name: "Figma",
    category: "UI Design",
    desc: "Our primary workspace for every UI project. Figma's collaborative environment means designers, developers and stakeholders all work from a single source of truth — in real time, no version conflicts.",
    features: [
      "Component libraries & scalable design systems",
      "Real-time multi-user collaboration",
      "Auto-layout & responsive constraints",
    ],
    Icon: PenTool,
  },
  {
    number: "02",
    color: "#0055ff",
    name: "Framer",
    category: "Prototyping",
    desc: "We build high-fidelity interactive prototypes in Framer that feel like the real product. Stakeholders click through complete flows before a single line of code is written — reducing costly surprises.",
    features: [
      "Code-quality interactions & micro-transitions",
      "CMS-connected prototype screens",
      "Shareable links for async stakeholder review",
    ],
    Icon: Layers,
  },
  {
    number: "03",
    color: "#ff5533",
    name: "Maze",
    category: "User Testing",
    desc: "Maze lets us run unmoderated usability tests on real users around the world and get back quantitative data — heatmaps, task-completion rates, misclick analytics — within hours, not weeks.",
    features: [
      "Remote unmoderated usability testing",
      "Click heatmaps & path analysis",
      "Automatic scoring & test reporting",
    ],
    Icon: Navigation,
  },
  {
    number: "04",
    color: "#ff3c00",
    name: "Hotjar",
    category: "Analytics",
    desc: "Post-launch we instrument every product with Hotjar to watch real sessions, analyse heatmaps and surface friction points — then feed those insights directly back into the next design iteration.",
    features: [
      "Session recordings & rage-click alerts",
      "Click, scroll & move heatmaps",
      "On-page survey & feedback widgets",
    ],
    Icon: Activity,
  },
  {
    number: "05",
    color: "#ffbc3b",
    name: "Zeplin",
    category: "Dev Handoff",
    desc: "Every finished design is published to Zeplin so developers get pixel-perfect specs — measurements, colour tokens, typography, and assets — without needing to dig through Figma layers manually.",
    features: [
      "Auto-generated CSS / iOS / Android specs",
      "Version history & change notifications",
      "Annotated interaction notes for complex flows",
    ],
    Icon: Code2,
  },
  {
    number: "06",
    color: "#ffd02f",
    name: "Miro",
    category: "Collaboration",
    desc: "Discovery workshops, journey-mapping sessions and IA planning all happen live on a Miro board — letting the entire team and client contribute in real time, whether in a room or across continents.",
    features: [
      "Live collaborative digital whiteboards",
      "Pre-built UX research & journey templates",
      "Voting, prioritisation & sticky-note tools",
    ],
    Icon: Share2,
  },
  {
    number: "07",
    color: "#00c3ff",
    name: "Lottie",
    category: "Motion",
    desc: "Complex micro-animations are exported as lightweight Lottie JSON files. Developers drop them in with a single import — no custom animation code, full playback control, tiny file sizes on every platform.",
    features: [
      "Vector-based JSON, tiny file size",
      "Runs on web, iOS and Android natively",
      "After Effects source for complete editorial control",
    ],
    Icon: Zap,
  },
  {
    number: "08",
    color: "#4285f4",
    name: "Principle",
    category: "Interaction",
    desc: "For timeline-based interactions — multi-step transitions, scroll-linked animations and gesture sequences — Principle gives us frame-perfect control that no click-through prototype tool can match.",
    features: [
      "Timeline & driver-based animation design",
      "Scroll and gesture interaction sequences",
      "Video export for high-fidelity stakeholder reviews",
    ],
    Icon: RefreshCw,
  },
];

export default function UiUxTools() {
  const [active, setActive] = useState(0);
  const tool = tools[active];

  return (
    <section className="uiux-tools-section">
      <div className="uiux-tools-inner">

        {/* ── Header ── */}
        <div className="uiux-tools-header">
          <span className="uiux-tools-label">Our Toolkit</span>
          <h2 className="uiux-tools-heading">
            Tools We <span className="uiux-tools-accent">Design With</span>
          </h2>
          <p className="uiux-tools-sub">
            Industry-standard tools chosen for precision, collaboration and
            developer-ready output — not just aesthetics.
          </p>
        </div>

        {/* ── Explorer ── */}
        <div className="uiux-tools-explorer">

          {/* Left: list */}
          <nav className="uiux-tools-list">
            {tools.map((t, i) => (
              <button
                key={t.name}
                className={`uiux-tli ${i === active ? "uiux-tli--active" : ""}`}
                onClick={() => setActive(i)}
                style={{ "--tc": t.color }}
              >
                <span className="uiux-tli-num">{t.number}</span>
                <span className="uiux-tli-name">{t.name}</span>
                <span
                  className="uiux-tli-badge"
                  style={{
                    color: t.color,
                    background: `${t.color}15`,
                    borderColor: `${t.color}30`,
                  }}
                >
                  {t.category}
                </span>
                <span className="uiux-tli-arrow">›</span>
              </button>
            ))}
          </nav>

          {/* Right: detail */}
          <div
            className="uiux-tools-detail"
            key={active}
            style={{ "--tc": tool.color }}
          >
            {/* Radial colour glow */}
            <div
              className="uiux-detail-glow"
              style={{
                background: `radial-gradient(ellipse at 15% 20%, ${tool.color}28 0%, transparent 62%)`,
              }}
            />

            <div className="uiux-detail-body">
              {/* Icon */}
              <div
                className="uiux-detail-icon"
                style={{
                  background: `${tool.color}14`,
                  border: `2px solid ${tool.color}45`,
                  color: tool.color,
                  boxShadow: `0 0 40px ${tool.color}28`,
                }}
              >
                <tool.Icon size={34} strokeWidth={1.4} />
              </div>

              {/* Name + category */}
              <div className="uiux-detail-meta">
                <span
                  className="uiux-detail-cat"
                  style={{
                    color: tool.color,
                    background: `${tool.color}14`,
                    borderColor: `${tool.color}38`,
                  }}
                >
                  {tool.category}
                </span>
                <h3 className="uiux-detail-name">{tool.name}</h3>
              </div>

              {/* Description */}
              <p className="uiux-detail-desc">{tool.desc}</p>

              {/* Features */}
              <ul className="uiux-detail-features">
                {tool.features.map((f) => (
                  <li key={f} className="uiux-detail-feature">
                    <span
                      className="uiux-detail-check"
                      style={{
                        color: tool.color,
                        background: `${tool.color}12`,
                        borderColor: `${tool.color}45`,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Big watermark number */}
            <div className="uiux-detail-watermark">{tool.number}</div>

            {/* Bottom gradient bar */}
            <div
              className="uiux-detail-bar"
              style={{ background: `linear-gradient(to right, ${tool.color}, ${tool.color}00)` }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
