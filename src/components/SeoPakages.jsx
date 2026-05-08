import { CheckCircle } from "lucide-react";
import "../css/SeoPakages.css";

const plans = [
  {
    name: "Starter Growth",
    price: "60k/month",
    keywords: "No. of Keyword: 20",
  },
  {
    name: "Standard Booster",
    price: "80k/month",
    keywords: "No. of Keyword: 30",
  },
  {
    name: "Premium Dominator",
    price: "95k/month",
    keywords: "No. of Keyword: 60",
  },
];

const features = [
  "Pre-Optimization Website",
  "Competitor Analysis",
  "Keyword Research & Analysis",
  "Baseline Ranking",
  "Duplicate Content Check",
  "Title Tag Optimization",
  "META Tags Optimization",
  "Website Canonica Check",
  "Heading Tags Optimization",
];

export default function SEOPackages() {
  return (
    <div className="seo-wrapper">
      <div className="seo-container">

        {/* ── Title ─────────────────────────── */}
        <div className="seo-title-wrapper">
          <div className="seo-title-box">
            <h1>SEO Packages</h1>
          </div>
        </div>

        {/* ══════════════════════════════════════
            DESKTOP TABLE (768px+)
        ══════════════════════════════════════ */}

        {/* Plan header cards */}
        <div className="seo-plans-header">
          {plans.map((plan) => (
            <div key={plan.name} className="seo-plan-card">
              <h2>{plan.name}</h2>
              <p className="price">{plan.price}</p>
            </div>
          ))}
        </div>

        {/* Features table */}
        <div className="seo-plans-with-border">
          {/* Keywords row */}
          <div className="seo-keyword-row">
            {plans.map((plan) => (
              <div key={plan.name} className="seo-keyword-cell">
                {plan.keywords}
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {features.map((feature) => (
            <div key={feature} className="seo-feature-row">
              {plans.map((plan) => (
                <div key={plan.name} className="seo-feature-cell">
                  <CheckCircle className="seo-check-icon" strokeWidth={2} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════
            MOBILE CARDS (below 768px)
            Each plan becomes its own full card
        ══════════════════════════════════════ */}
        <div className="seo-mobile-cards">
          {plans.map((plan) => (
            <div key={plan.name} className="seo-mobile-card">
              {/* Card header */}
              <div className="seo-mobile-card-header">
                <h2>{plan.name}</h2>
                <p className="price">{plan.price}</p>
              </div>

              {/* Keywords */}
              <div className="seo-mobile-keyword">{plan.keywords}</div>

              {/* Features list */}
              {features.map((feature) => (
                <div key={feature} className="seo-mobile-feature">
                  <CheckCircle className="seo-mobile-check" strokeWidth={2} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}