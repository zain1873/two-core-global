import { useEffect, useRef, useState } from "react";
import "../css/statsCounter.css";

const STATS = [
  { target: 3000, suffix: "+", label: "Successful Projects" },
  { target: 23, suffix: "+", label: "Countries Supported" },
  { target: 250, suffix: "+", label: "Active Clients" },
  { target: 15, suffix: "+", label: "Years of Enablement Experience" },
];

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ target, suffix, label, started }) {
  const count = useCountUp(target, 1800, started);
  return (
    <div className="stat-item">
      <span className="stat-number">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function StatsCounter() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-header">
        <h2 className="stats-title">Our Achievements</h2>
        <p className="stats-subtitle">
          Over a decade of delivering excellence — here's a glimpse of the
          impact we've made for clients and partners across the globe.
        </p>
      </div>
      <div className="stats-container">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} started={started} />
        ))}
      </div>
    </section>
  );
}
