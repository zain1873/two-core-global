const stats = [
  { value: "200+", label: "Clients Worldwide", accent: "primary" },
  { value: "5+",   label: "Years of Experience", accent: "accent" },
  { value: "98%",  label: "Client Satisfaction", accent: "primary" },
  { value: "50+",  label: "Projects Delivered", accent: "accent" },
];

export default function ContactStats() {
  return (
    <section className="cstats-section">
      <style>{`
        .cstats-section {
          background: var(--color-bg);
          padding: 72px 48px;
          position: relative;
          overflow: hidden;
        }

        .cstats-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 245, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .cstats-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .cstats-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border: 1px solid rgba(0, 245, 255, 0.35);
          border-radius: 50px;
          background: rgba(0, 245, 255, 0.07);
          color: var(--color-accent);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          margin-bottom: 48px;
        }

        .cstats-label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 8px rgba(0, 245, 255, 0.9);
          animation: cstats-pulse 2s ease-in-out infinite;
        }

        @keyframes cstats-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.8); }
        }

        .cstats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(0, 245, 255, 0.08);
          border: 1px solid rgba(0, 245, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
        }

        .cstat-card {
          background: rgba(255, 255, 255, 0.02);
          padding: 48px 36px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          position: relative;
          transition: background 0.3s ease;
        }

        .cstat-card:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .cstat-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cstat-card.primary::after {
          background: var(--color-primary);
          box-shadow: var(--glow-primary);
        }

        .cstat-card.accent::after {
          background: var(--color-accent);
          box-shadow: var(--glow-accent);
        }

        .cstat-card:hover::after {
          opacity: 1;
        }

        .cstat-value {
          font-family: 'Syne', sans-serif;
          font-size: 52px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -2px;
        }

        .cstat-card.primary .cstat-value {
          color: var(--color-primary);
          text-shadow: var(--glow-primary);
        }

        .cstat-card.accent .cstat-value {
          color: var(--color-accent);
          text-shadow: var(--glow-accent);
        }

        .cstat-label-text {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-muted);
          letter-spacing: 0.5px;
        }

        .cstat-divider {
          width: 32px;
          height: 2px;
          border-radius: 1px;
        }

        .cstat-card.primary .cstat-divider {
          background: rgba(124, 255, 0, 0.4);
        }

        .cstat-card.accent .cstat-divider {
          background: rgba(0, 245, 255, 0.4);
        }

        @media (max-width: 900px) {
          .cstats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cstats-section {
            padding: 56px 32px;
          }

          .cstat-value {
            font-size: 42px;
          }
        }

        @media (max-width: 540px) {
          .cstats-section {
            padding: 48px 20px;
          }

          .cstats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .cstat-card {
            padding: 32px 20px;
          }

          .cstat-value {
            font-size: 36px;
          }
        }
      `}</style>

      <div className="cstats-inner">
        <div className="cstats-label">
          <span className="cstats-label-dot" />
          By The Numbers
        </div>

        <div className="cstats-grid">
          {stats.map((s) => (
            <div key={s.label} className={`cstat-card ${s.accent}`}>
              <div className="cstat-value">{s.value}</div>
              <div className="cstat-divider" />
              <div className="cstat-label-text">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
