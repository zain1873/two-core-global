import React, { useEffect, useRef, useState } from "react";
import "../css/UiUxStats.css";

const stats = [
  { value: 150, suffix: "+", label: "Designs Delivered",   desc: "Across web, mobile & SaaS" },
  { value: 98,  suffix: "%", label: "Client Satisfaction", desc: "Based on post-project surveys" },
  { value: 8,   suffix: "+", label: "Years in Design",     desc: "Enterprise & startup experience" },
  { value: 40,  suffix: "+", label: "Industries Served",   desc: "From fintech to healthcare" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, suffix, label, desc, animate }) {
  const count = useCountUp(value, 1600, animate);
  return (
    <div className="uiux-stat-item">
      <div className="uiux-stat-number">
        {animate ? count : 0}{suffix}
      </div>
      <div className="uiux-stat-label">{label}</div>
      <div className="uiux-stat-desc">{desc}</div>
    </div>
  );
}

export default function UiUxStats() {
  const ref = useRef(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setFired(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="uiux-stats-section" ref={ref}>
      <div className="uiux-stats-top-line" />
      <div className="uiux-stats-grid">
        {stats.map((s, i) => (
          <StatItem key={i} {...s} animate={fired} />
        ))}
      </div>
      <div className="uiux-stats-bottom-line" />
    </div>
  );
}
