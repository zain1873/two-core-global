const steps = [
  {
    number: "1",
    title: "MARKET & KEYWORD RESEARCH",
    description:
      "We analyze your industry, competitors, and target audience to identify high-converting keywords and opportunities that maximize paid search performance.",
  },
  {
    number: "2",
    title: "CAMPAIGN STRATEGY & SETUP",
    description:
      "Our team creates a custom SEM strategy with optimized ad groups, audience targeting, bidding strategies, and conversion tracking tailored to your goals.",
  },
  {
    number: "3",
    title: "HIGH-CONVERTING AD CREATION",
    description:
      "We craft compelling ad copy and creatives designed to increase click-through rates, improve quality scores, and generate qualified leads.",
  },
  {
    number: "4",
    title: "LANDING PAGE OPTIMIZATION",
    description:
      "We optimize landing pages for better user experience, faster loading speed, and higher conversion rates to maximize your advertising ROI.",
  },
  {
    number: "5",
    title: "CONTINUOUS MONITORING & REPORTING",
    description:
      "Our experts continuously monitor campaign performance, optimize budgets, refine targeting, and provide transparent reports with measurable results.",
  },
];

function StepItem({ number, title, description }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#111",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "800",
            fontSize: "15px",
            flexShrink: 0,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          {number}.
        </div>
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: "800",
            fontSize: "18px",
            color: "#111",
            margin: 0,
            letterSpacing: "0.04em",
          }}
        >
          {title}
        </h3>
      </div>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "15px",
          color: "#333",
          lineHeight: "1.7",
          margin: "0 0 0 48px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function SemProcess() {
  return (
    <>
      <style>{`

        .seo-wrapper {
          display: flex;
          flex-direction: row;
          gap: 48px;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 32px;
          font-family: 'DM Sans', sans-serif;
          background: #fff;
        }
        .seo-left { flex: 1; min-width: 0; }
        .seo-right {
          width: 340px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .seo-right img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          border-radius: 4px;
          display: block;
        }
        .talk-btn {
          display: block;
          width: 100%;
          background: #00bcd4;
          color: #fff;
          text-align: center;
          padding: 18px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 16px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          margin-top: 12px;
          letter-spacing: 0.02em;
          transition: background 0.2s ease;
        }
        .talk-btn:hover { background: #00acc1; }

        @media (max-width: 768px) {
          .seo-wrapper {
            flex-direction: column;
            padding: 40px 20px;
            gap: 36px;
          }
          .seo-right {
            width: 100%;
          }
          .seo-right img {
            height: 280px;
          }
        }
      `}</style>

      <div className="seo-wrapper sem-wrapper">
        {/* LEFT */}
        <div className="seo-left">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: "800",
              fontSize: "clamp(26px, 4vw, 36px)",
              color: "#111",
              margin: "0 0 14px 0",
              letterSpacing: "0.02em",
            }}
          >
            OUR SEM PROCESS
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "36px",
              maxWidth: "620px",
            }}
          >
            We create data-driven search engine marketing campaigns that
            increase visibility, generate quality leads, and deliver measurable
            business growth.
          </p>

          {steps.map((step) => (
            <StepItem key={step.number} {...step} />
          ))}
        </div>

        {/* RIGHT */}
        <div className="seo-right">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&auto=format&fit=crop&q=80"
            alt="SEO team planning with sticky notes"
          />
          <button className="talk-btn">Talk To An Expert</button>
        </div>
      </div>
    </>
  );
}
