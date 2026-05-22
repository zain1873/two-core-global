import React from "react";
import { Search, Lightbulb, LayoutGrid, Code2, PenTool, Rocket } from "lucide-react";
import "../css/UiUxProcess.css";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "Stakeholder workshops, goals, KPIs, and competitive landscape mapping.",
    Icon: Search,
  },
  {
    number: 2,
    title: "Research",
    description:
      "User interviews, surveys, persona building, and journey mapping.",
    Icon: Lightbulb,
  },
  {
    number: 3,
    title: "Wireframe",
    description:
      "Information architecture, flows, and low-fidelity wireframes.",
    Icon: LayoutGrid,
  },
  {
    number: 4,
    title: "Prototype",
    description:
      "Interactive high-fidelity prototypes ready for stakeholder review.",
    Icon: Code2,
  },
  {
    number: 5,
    title: "Testing",
    description:
      "Usability testing, heatmap analysis, and iteration cycles.",
    Icon: PenTool,
  },
  {
    number: 6,
    title: "Launch",
    description:
      "Developer handoff, design QA, and post-launch optimisation.",
    Icon: Rocket,
  },
];

export default function UiUxProcess() {
  return (
    <section className="uiux-process">
      <div className="uiux-process-header">
        <span className="uiux-process-badge">HOW WE WORK</span>
        <h2 className="uiux-process-title">
          Our{" "}
          <span className="uiux-process-title-accent">Design Process</span>
        </h2>
        <p className="uiux-process-subtitle">
          A battle-tested six-phase framework that gets complex products
          <br className="uiux-process-br" />
          from vague idea to polished, validated design — every time.
        </p>
      </div>

      <div className="uiux-process-timeline">
        <div className="uiux-process-line" />
        <div className="uiux-process-steps">
          {steps.map(({ number, title, description, Icon }) => (
            <div key={number} className="uiux-process-step">
              <div className="uiux-process-circle-wrap">
                <div className="uiux-process-circle">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <span className="uiux-process-number">{number}</span>
              </div>
              <h3 className="uiux-process-step-title">{title}</h3>
              <p className="uiux-process-step-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
