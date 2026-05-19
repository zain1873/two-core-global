import { CheckCircle } from "lucide-react";
import "../css/SeoPakages.css";

const plans = [
  {
    name: "Starter Growth",
    price: "60k/month",
    keywords: "No. of Platforms: 2",
  },
  {
    name: "Standard Booster",
    price: "80k/month",
    keywords: "No. of Platforms: 3",
  },
  {
    name: "Premium Dominator",
    price: "95k/month",
    keywords: "No. of Platforms: 5",
  },
];

const features = [
  "Social Media Audit & Strategy",
  "Competitor Analysis",
  "Content Calendar Planning",
  "Custom Graphic Designing",
  "Caption & Hashtag Research",
  "Post Scheduling & Publishing",
  "Facebook / Instagram Management",
  "Audience Targeting & Engagement",
  "Monthly Performance Report",
];

export default function SocialMediaPackages() {
  return (
    <div className="seo-wrapper">
      <div className="seo-container">

        {/* ── Title ─────────────────────────── */}
        <div className="seo-title-wrapper">
          <div className="seo-title-box">
            <h1>Social Media Packages</h1>
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
          {/* Platforms row */}
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

              {/* Platforms */}
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