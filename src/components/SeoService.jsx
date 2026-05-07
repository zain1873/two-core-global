import React from "react";
import "../css/PagesCss/Seo.css";

function SEOMarketingSection() {
  return (
    <section className="seomark-section">
      <div className="seomark-wrapper">

        {/* ── LEFT: Text Content ── */}
        <div className="seomark-left">
          <h2 className="seomark-heading">
            AN SEO MARKETING COMPANY<br />
            THAT GETS IT
          </h2>

          <p className="seomark-intro">
            Struggling to get found online? We hear it all the time. At Two Core Global,
             we help businesses fix issues like:
          </p>

          <ul className="seomark-list">
            <li>Website not showing up on Google</li>
            <li>Traffic suddenly dropped</li>
            <li>Leads and calls dried up</li>
            <li>New website needs fast visibility</li>
          </ul>

          <p className="seomark-trust">
            We're trusted by hundreds of businesses to stay ahead of Google's
            changes and deliver real results.
          </p>

          <p className="seomark-cta-line">
            <strong>Why wait? Talk to our expert, and let's fix your SEO.</strong>
          </p>

          <button className="seomark-button">Talk To An Expert</button>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="seomark-right">
          <div className="seomark-img-frame">
            <div className="seomark-img-backdrop"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
              alt="SEO Marketing Analytics"
              className="seomark-img"
            />
            <div className="seomark-stat-card">
              <span className="seomark-stat-num">1,234,542,300</span>
              <span className="seomark-stat-label">results — your business can be here!</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SEOMarketingSection;