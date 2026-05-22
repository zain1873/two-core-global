import "../css/PagesCss/EmailMarketing.css";

const services = [
  {
    name: "Newsletter Campaigns",
    desc:
      "Keep your audience engaged with beautifully designed newsletters delivered consistently. We handle copy, design, scheduling, and list management — you focus on your business.",
    badge: "Engagement",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    name: "Automated Drip Sequences",
    desc:
      "Turn new subscribers into loyal customers with trigger-based email sequences. Welcome flows, onboarding series, cart abandonment — automated journeys that nurture on autopilot.",
    badge: "Automation",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    name: "Promotional Campaigns",
    desc:
      "Launch products, run sales, and promote events with high-converting promotional emails. We craft urgency-driven copy and eye-catching designs that move your audience to act.",
    badge: "Conversions",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: "List Growth & Segmentation",
    desc:
      "Build a quality subscriber base and segment it by behaviour, interests, and purchase history. Targeted emails to the right segments mean higher open rates and more revenue.",
    badge: "Targeting",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

export default function EmailServices() {
  return (
    <section className="email-services-section">
      <div className="email-services-inner">
        <span className="email-services-label">What We Offer</span>
        <h2 className="email-services-heading">
          Email Services That<br />Drive Revenue
        </h2>
        <p className="email-services-sub">
          From one-off campaigns to fully automated email ecosystems, we deliver
          everything your brand needs to turn subscribers into paying customers.
        </p>

        <div className="email-services-grid">
          {services.map((s) => (
            <div key={s.name} className="email-service-card">
              <div className="email-service-icon">{s.icon}</div>
              <div className="email-service-name">{s.name}</div>
              <p className="email-service-desc">{s.desc}</p>
              <span className="email-service-badge">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="var(--color-accent)">
                  <circle cx="4" cy="4" r="4" />
                </svg>
                {s.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
