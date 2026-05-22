import "../css/PagesCss/PaidAds.css";

const platforms = [
  {
    name: "Google Search Ads",
    desc:
      "Capture high-intent buyers the moment they search. We craft tightly themed ad groups, match types, and bidding strategies that maximize your Quality Score and drive qualified leads.",
    badge: "Search Intent",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    name: "Meta (Facebook & Instagram) Ads",
    desc:
      "Reach your ideal audience with laser-precise targeting across Facebook and Instagram. We build scroll-stopping creatives, retargeting funnels, and lookalike audiences that convert.",
    badge: "Social Targeting",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "YouTube & Display Ads",
    desc:
      "Tell your brand story with video. We produce and manage YouTube pre-roll and Google Display Network ads that build awareness, retarget warm audiences, and drive action at scale.",
    badge: "Video & Visual",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    name: "TikTok Ads",
    desc:
      "Tap into one of the fastest-growing ad platforms. We create native-feeling TikTok campaigns that blend into the feed, drive traffic, and convert younger, high-engagement audiences.",
    badge: "Short-Form Video",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
];

export default function PaidAdsServices() {
  return (
    <section className="paid-platforms-section">
      <div className="paid-platforms-inner">
        <span className="paid-platforms-label">Ad Platforms We Manage</span>
        <h2 className="paid-platforms-heading">
          Every Major Platform,<br />One Expert Team
        </h2>
        <p className="paid-platforms-sub">
          We manage paid campaigns across all major advertising platforms —
          delivering consistent results whether your audience is searching,
          scrolling, or watching.
        </p>

        <div className="paid-platforms-grid">
          {platforms.map((p) => (
            <div key={p.name} className="paid-platform-card">
              <div className="paid-platform-icon">{p.icon}</div>
              <div className="paid-platform-name">{p.name}</div>
              <p className="paid-platform-desc">{p.desc}</p>
              <span className="paid-platform-badge">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="var(--color-primary)">
                  <circle cx="4" cy="4" r="4" />
                </svg>
                {p.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
