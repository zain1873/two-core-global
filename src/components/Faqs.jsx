import { useState } from "react";

const faqs = [
  {
    q: "What services do you provide?",
    a: "We offer complete digital solutions including website design, SEO, social media marketing, Google Ads, branding, content creation, and business automation services.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most websites are completed within 1–4 weeks depending on the size, features, and project requirements.",
  },
  {
    q: "Do you provide SEO with website development?",
    a: "Yes, all our websites are built with SEO best practices to help improve visibility and performance on search engines.",
  },
  {
    q: "Can you manage our social media accounts?",
    a: "Absolutely. We create content, manage posting schedules, run ad campaigns, and help grow your online presence across all major platforms.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with businesses globally including clients from the UAE, UK, USA, Canada, and other international markets.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with startups, e-commerce brands, real estate companies, automotive businesses, restaurants, agencies, and many other industries.",
  },
  {
    q: "Do you offer ongoing support after project completion?",
    a: "Yes, we provide maintenance, updates, technical support, and marketing assistance after launch.",
  },
];

const styles = `

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .faq-page {
    min-height: 100vh;
    background: var(--color-bg-light);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem rem;
  }

  .faq-card {
    display: grid;
    grid-template-columns: 300px 1fr;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    overflow: hidden;
    box-shadow: var(--shadow-card-light);
    border: 1px solid var(--color-border);
  }

  /* ── LEFT PANEL ── */
  .faq-left {
    background: var(--color-bg-dark-alt);
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .faq-left::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: rgba(124, 255, 0, 0.08);
    top: -100px;
    right: -100px;
  }

  .faq-left::after {
    content: '';
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: rgba(124, 255, 0, 0.05);
    bottom: 40px;
    left: -60px;
  }

  .left-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(124, 255, 0, 0.12);
    border: 1px solid rgba(124, 255, 0, 0.25);
    color: var(--color-primary);
    font-size: 11px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 0;
    margin-bottom: 1.5rem;
    width: fit-content;
    position: relative;
    z-index: 1;
  }

  .left-dot {
    width: 6px;
    height: 6px;
    background: var(--color-primary);
    border-radius: 0;
    animation: pulse 2s infinite;
    box-shadow: var(--glow-primary);
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .left-heading {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: var(--color-heading);
    line-height: 1.2;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
    letter-spacing: -0.02em;
  }

  .left-heading span {
    color: var(--color-primary);
  }

  .left-desc {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: var(--color-text);
    line-height: 1.75;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }

  .left-tagline {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
    padding-top: 1rem;
    border-top: 2px solid rgba(124, 255, 0, 0.2);
  }

  .left-stats {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: relative;
    z-index: 1;
  }

  .stat-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .stat-label {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--color-heading);
    display: block;
    margin-bottom: 1px;
    letter-spacing: -0.01em;
  }

  .stat-sub {
    font-family: 'Inter', sans-serif;
    font-size: 11.5px;
    font-weight: 400;
    color: var(--color-text-muted);
  }

  /* ── RIGHT PANEL ── */
  .faq-right {
    background: var(--color-bg-light);
    padding: 2.5rem 2.25rem 2rem;
    display: flex;
    flex-direction: column;
  }

  .faq-right-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .faq-count {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: var(--color-text-muted);
    font-weight: 400;
  }

  .faq-search {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    padding: 7px 14px;
    border-radius: 0;
    border: 1px solid var(--color-border);
    background: var(--color-bg);
    color: var(--color-text);
    outline: none;
    width: 160px;
    transition: border-color 0.2s;
  }

  .faq-search:focus {
    border-color: var(--color-primary);
    box-shadow: var(--glow-primary);
  }

  .faq-search::placeholder {
    color: var(--color-text-muted);
  }

  .faq-list {
    flex: 1;
  }

  .faq-item {
    border-bottom: 1px solid var(--color-border-light);
  }

  .faq-item:last-child {
    border-bottom: none;
  }

  .faq-question {
    width: 100%;
    background: none;
    border: none;
    padding: 1.1rem 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    cursor: pointer;
    text-align: left;
    font-family: 'Inter', sans-serif;
  }

  .faq-question:hover .faq-q-text {
    color: var(--color-primary);
  }

  .faq-q-inner {
    display: flex;
    align-items: flex-start;
    gap: 0;
    flex: 1;
  }

  .faq-num {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: var(--color-primary);
    background: rgba(124, 255, 0, 0.08);
    border-radius: 0;
    padding: 2px 8px;
    margin-right: 12px;
    margin-top: 2px;
    flex-shrink: 0;
    letter-spacing: 0.02em;
    font-variant-numeric: tabular-nums;
  }

  .faq-q-text {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-dark);
    line-height: 1.5;
    flex: 1;
    transition: color 0.2s;
  }

  .faq-toggle {
    width: 26px;
    height: 26px;
    background: transparent;
    border: 1px solid var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
    transition: background 0.25s, border-color 0.25s, transform 0.3s;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: var(--color-primary);
    line-height: 1;
    font-weight: 300;
  }

  .faq-toggle.open {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-bg-dark-alt);
    transform: rotate(45deg);
    box-shadow: var(--glow-primary);
  }

  .faq-answer {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1);
  }

  .faq-answer.open {
    max-height: 300px;
  }

  .faq-answer-inner {
    padding-bottom: 1.1rem;
    font-family: 'Inter', sans-serif;
    font-size: 13.5px;
    font-weight: 400;
    color: var(--color-text);
    line-height: 1.78;
    padding-left: 0;
  }

  /* ── CONTACT STRIP ── */
  .contact-strip {
    margin-top: 1.75rem;
    padding: 1rem 1.25rem;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 0;
  }

  .contact-strip-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .contact-text strong {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--color-heading);
    display: block;
  }

  .contact-text span {
    font-family: 'Inter', sans-serif;
    font-size: 11.5px;
    color: var(--color-text-muted);
  }

  .contact-btn {
    font-family: 'Inter', sans-serif;
    background: var(--color-primary);
    color: var(--color-bg-dark-alt);
    border: 1px solid var(--color-primary);
    padding: 10px 22px;
    border-radius: 0;
    font-size: 12.5px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    white-space: nowrap;
    flex-shrink: 0;
    box-shadow: var(--glow-primary);
  }

  .contact-btn:hover {
    background: var(--color-primary-light);
    transform: translateY(-2px);
    box-shadow: var(--glow-primary-strong);
  }

  .contact-btn:active {
    transform: translateY(0);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .faq-card {
      grid-template-columns: 1fr;
    }

    .faq-left {
      padding: 2.5rem 1.75rem;
    }

    .left-heading {
      font-size: 1.75rem;
    }

    .left-desc {
      margin-bottom: 1.5rem;
    }

    .faq-right {
      padding: 1.75rem 1.5rem 1.5rem;
    }

    .contact-strip {
      flex-direction: column;
      align-items: flex-start;
    }

    .contact-btn {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 420px) {
    .faq-page {
      padding: 1.5rem 1rem;
    }

    .left-heading {
      font-size: 1.5rem;
    }

    .faq-right-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .faq-search {
      width: 100%;
    }
  }
`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((f) =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <style>{styles}</style>
      <div className="faq-page">
        <div className="faq-card">

          {/* ── LEFT PANEL ── */}
          <div className="faq-left">
            <div>
              <div className="left-badge">
                <span className="left-dot" />
                Faqs
              </div>
              <h1 className="left-heading">
                Got <span>questions?</span><br />We have answers.
              </h1>
              <p className="left-desc">
                Everything you need to know about our product and services.
                Browse the most common questions below.
              </p>
              <p className="left-tagline">
                Bringing Your Business To Light
              </p>
            </div>
            <div className="left-stats">
              <div className="stat-row">
                <div>
                  <span className="stat-label">7 Essential Topics</span>
                  <span className="stat-sub">Curated for you</span>
                </div>
              </div>
              <div className="stat-row">
                <div>
                  <span className="stat-label">24/7 Availability</span>
                  <span className="stat-sub">Always here for you</span>
                </div>
              </div>
              <div className="stat-row">
                <div>
                  <span className="stat-label">Verified by Experts</span>
                  <span className="stat-sub">Reviewed monthly</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="faq-right">
            <div className="faq-list">
              {filtered.length === 0 && (
                <p style={{ fontSize: 13, color: "var(--color-text-muted)", padding: "1rem 0", fontFamily: "'Inter', sans-serif" }}>
                  No results found for "{search}".
                </p>
              )}
              {filtered.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div className="faq-item" key={i}>
                    <button
                      className="faq-question"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-q-inner">
                        <span className="faq-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="faq-q-text">{item.q}</span>
                      </div>
                      <span className={`faq-toggle${isOpen ? " open" : ""}`}>
                        +
                      </span>
                    </button>
                    <div className={`faq-answer${isOpen ? " open" : ""}`}>
                      <div className="faq-answer-inner">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-strip">
              <div className="contact-strip-info">
                <div className="contact-text">
                  <strong>Still have questions?</strong>
                  <span>Our support team is ready to help.</span>
                </div>
              </div>
              <button className="contact-btn">Contact us →</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}