import { useState } from "react";

const faqs = [
  {
    q: "What services does your software house offer?",
    a: "We provide full-stack web development, mobile app development, UI/UX design, custom software solutions, and SaaS product development tailored to your business needs.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients worldwide. Our team is experienced in remote collaboration across different time zones with smooth communication and project management.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "Project timelines depend on complexity. A basic website may take 1–3 weeks, while larger systems or SaaS platforms can take 1–3 months or more.",
  },
  {
    q: "What is your development process?",
    a: "We follow an agile development process including requirement gathering, UI/UX design, development, testing, deployment, and ongoing support.",
  },
  {
    q: "Do you provide ongoing support after project delivery?",
    a: "Yes, we offer maintenance and support packages to ensure your product runs smoothly, including bug fixes, updates, and feature enhancements.",
  },
  {
    q: "How much does a website or app cost?",
    a: "Pricing depends on project requirements, features, and complexity. We provide custom quotes after understanding your needs in detail.",
  },
  {
    q: "Can you redesign or improve an existing website?",
    a: "Absolutely. We specialize in modernizing outdated websites with better UI/UX, improved performance, and mobile responsiveness.",
  },
  {
    q: "What technologies do you use?",
    a: "We work with modern technologies like React, Next.js, Node.js, Django, Laravel, React Native, and cloud platforms like AWS and Firebase.",
  },
  {
    q: "Will I be involved during the development process?",
    a: "Yes, we keep clients involved at every stage through regular updates, demos, and feedback sessions to ensure the final product matches expectations.",
  },
  {
    q: "Do you sign NDA agreements for projects?",
    a: "Yes, we respect confidentiality and are happy to sign NDA agreements to protect your business ideas and project details.",
  }
];

const styles = `

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .faq-page {
    min-height: 100vh;
    background: #f5f4f0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.5rem;
  }

  .faq-card {
    display: grid;
    grid-template-columns: 300px 1fr;
    width: 100%;
    max-width: 90%;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 24px 80px rgba(0,0,0,0.12);
  }

  /* ── LEFT PANEL ── */
  .faq-left {
    background: linear-gradient(160deg, #1a1828 0%, #2e1f52 100%);
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
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: rgba(127,119,221,0.13);
    top: -70px;
    right: -70px;
  }

  .faq-left::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(29,158,117,0.09);
    bottom: 30px;
    left: -50px;
  }

  .left-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(127,119,221,0.18);
    border: 1px solid rgba(175,169,236,0.25);
    color: #b0a9f0;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    padding: 5px 13px;
    border-radius: 100px;
    margin-bottom: 1.5rem;
    width: fit-content;
    position: relative;
    z-index: 1;
  }

  .left-dot {
    width: 6px;
    height: 6px;
    background: #7f77dd;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .left-heading {
    font-family: 'Playfair Display', serif;
    font-size: 2.1rem;
    font-weight: 600;
    color: #fff;
    line-height: 1.22;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  .left-heading span {
    color: #8f87e8;
  }

  .left-desc {
    font-size: 13px;
    color: rgba(255,255,255,0.45);
    line-height: 1.75;
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 1;
  }

  .left-stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 1;
  }

  .stat-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .stat-label {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255,255,255,0.82);
    display: block;
    margin-bottom: 1px;
  }

  .stat-sub {
    font-size: 11.5px;
    color: rgba(255,255,255,0.38);
  }

  /* ── RIGHT PANEL ── */
  .faq-right {
    background: #ffffff;
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
    font-size: 12px;
    color: #999;
    font-weight: 400;
  }

  .faq-search {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    padding: 7px 14px;
    border-radius: 100px;
    border: 1px solid #e8e6f0;
    background: #f9f8fc;
    color: #333;
    outline: none;
    width: 160px;
    transition: border-color 0.2s;
  }

  .faq-search:focus {
    border-color: #7f77dd;
  }

  .faq-list {
    flex: 1;
    overflow-y: auto;
  }

  .faq-item {
    border-bottom: 1px solid #f0eef8;
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
    font-family: 'DM Sans', sans-serif;
  }

  .faq-question:hover .faq-q-text {
    color: #7f77dd;
  }

  .faq-q-inner {
    display: flex;
    align-items: flex-start;
    gap: 0;
    flex: 1;
  }

  .faq-num {
    font-size: 10.5px;
    font-weight: 500;
    color: #7f77dd;
    background: #f0eeff;
    border-radius: 5px;
    padding: 2px 7px;
    margin-right: 10px;
    margin-top: 2px;
    flex-shrink: 0;
    letter-spacing: 0.03em;
    font-variant-numeric: tabular-nums;
  }

  .faq-q-text {
    font-size: 14px;
    font-weight: 500;
    color: #1c1a2e;
    line-height: 1.5;
    flex: 1;
    transition: color 0.2s;
  }

  .faq-toggle {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #f5f3ff;
    border: 1px solid #e4e0f7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
    transition: background 0.25s, border-color 0.25s, transform 0.3s;
    font-size: 15px;
    color: #8a84c8;
    line-height: 1;
    font-weight: 300;
  }

  .faq-toggle.open {
    background: #7f77dd;
    border-color: #7f77dd;
    color: #fff;
    transform: rotate(45deg);
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
    font-size: 13.5px;
    color: #6b6880;
    line-height: 1.78;
    padding-left: 0;
  }

  /* ── CONTACT STRIP ── */
  .contact-strip {
    margin-top: 1.75rem;
    padding: 1rem 1.25rem;
    background: #f9f8fc;
    border-radius: 12px;
    border: 1px solid #eeecf8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-shrink: 0;
  }

  .contact-strip-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .contact-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7f77dd, #5dcaa5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    flex-shrink: 0;
  }

  .contact-text strong {
    font-size: 13px;
    font-weight: 500;
    color: #1c1a2e;
    display: block;
  }

  .contact-text span {
    font-size: 11.5px;
    color: #a09eb8;
  }

  .contact-btn {
    font-family: 'DM Sans', sans-serif;
    background: #7f77dd;
    color: #fff;
    border: none;
    padding: 8px 18px;
    border-radius: 100px;
    font-size: 12.5px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .contact-btn:hover {
    background: #6b63cc;
    transform: translateY(-1px);
  }

  .contact-btn:active {
    transform: translateY(0);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .faq-card {
      grid-template-columns: 1fr;
      border-radius: 16px;
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
            </div>
            <div className="left-stats">
              <div className="stat-row">
                <div>
                  <span className="stat-label">Instant answers</span>
                  <span className="stat-sub">8 curated topics</span>
                </div>
              </div>
              <div className="stat-row">
                <div>
                  <span className="stat-label">24/7 availability</span>
                  <span className="stat-sub">Always here for you</span>
                </div>
              </div>
              <div className="stat-row">
                <div>
                  <span className="stat-label">Verified by experts</span>
                  <span className="stat-sub">Reviewed monthly</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="faq-right">
            <div className="faq-list">
              {filtered.length === 0 && (
                <p style={{ fontSize: 13, color: "#aaa", padding: "1rem 0" }}>
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