// import { useEffect, useRef } from "react";
// import '../css/servicecards.css'

// const CARDS = [
//   {
//     tag: "Brand Identity",
//     title: "Logo Design",
//     desc: "We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 19l7-7 3 3-7 7-3-3z" />
//         <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
//         <path d="M2 2l7.586 7.586" />
//         <circle cx="11" cy="11" r="2" />
//       </svg>
//     ),
//   },
//   {
//     tag: "Visual Strategy",
//     title: "Brand Identity Development",
//     desc: "A brand is more than a logo. We help you show up the same way everywhere — online, offline and everything between.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//       </svg>
//     ),
//   },
//   {
//     tag: "Print & Physical",
//     title: "Packaging Design",
//     desc: "Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="1" y="3" width="15" height="13" rx="2" />
//         <path d="M16 8h4l3 3v5h-7V8z" />
//         <circle cx="5.5" cy="18.5" r="2.5" />
//         <circle cx="18.5" cy="18.5" r="2.5" />
//       </svg>
//     ),
//   },
//   {
//     tag: "Web & Digital",
//     title: "Website Design & Development",
//     desc: "Your website should work hard and look good. We design sites that are easy to use and built to grow with you.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="3" width="20" height="14" rx="2" />
//         <path d="M8 21h8m-4-4v4" />
//         <path d="M9 8l2 2 4-4" />
//       </svg>
//     ),
//   },
//   {
//     tag: "Social & Content",
//     title: "Social Media Design",
//     desc: "Scroll-stopping visuals for every platform. We create content that looks consistent, on-brand and gets noticed.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="18" cy="5" r="3" />
//         <circle cx="6" cy="12" r="3" />
//         <circle cx="18" cy="19" r="3" />
//         <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
//         <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
//       </svg>
//     ),
//   },
//   {
//     tag: "Motion & Video",
//     title: "Motion Graphics",
//     desc: "We bring your brand to life with animation. From short reels to full explainer videos — motion that moves people.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
//         <polygon points="23 7 16 12 23 17 23 7" />
//         <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
//       </svg>
//     ),
//   },
// ];

// const N = CARDS.length;
// const lerp = (a, b, t) => a + (b - a) * t;
// const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
// const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

// // 6 cards: enter in first 55% of scroll, exit in last 40%
// const ENTER_START = (i) => (i / N) * 0.55;
// const ENTER_END   = (i) => ((i + 1) / N) * 0.55;
// const EXIT_START  = (i) => 0.6 + (i / N) * 0.4;
// const EXIT_END    = (i) => 0.6 + ((i + 1) / N) * 0.4;

// const isMobile = () => window.innerWidth <= 640;

// export default function ServicesCards() {
//   const sectionRef = useRef(null);
//   const cardRefs   = useRef([]);
//   const hintRef    = useRef(null);
//   const rafRef     = useRef(null);

//   useEffect(() => {
//     if (isMobile()) {
//       cardRefs.current.forEach((card) => {
//         if (!card) return;
//         card.style.transform = "none";
//         card.style.opacity   = "1";
//       });
//       if (hintRef.current) hintRef.current.style.display = "none";
//       return;
//     }

//     const update = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect  = section.getBoundingClientRect();
//       const vh    = window.innerHeight;
//       const total = section.offsetHeight - vh;
//       const raw   = clamp(-rect.top / total, 0, 1);

//       cardRefs.current.forEach((card, i) => {
//         if (!card) return;
//         let ty = 110, opacity = 0;

//         if (raw >= EXIT_END(i)) {
//           ty = -110; opacity = 0;
//         } else if (raw >= EXIT_START(i)) {
//           const t = ease((raw - EXIT_START(i)) / (EXIT_END(i) - EXIT_START(i)));
//           ty      = lerp(0, -110, t);
//           opacity = lerp(1, 0, t);
//         } else if (raw >= ENTER_END(i)) {
//           ty = 0; opacity = 1;
//         } else if (raw >= ENTER_START(i)) {
//           const t = ease((raw - ENTER_START(i)) / (ENTER_END(i) - ENTER_START(i)));
//           ty      = lerp(110, 0, t);
//           opacity = lerp(0, 1, t);
//         }

//         card.style.transform = `translateY(${ty}px)`;
//         card.style.opacity   = opacity;
//       });

//       if (hintRef.current)
//         hintRef.current.style.opacity = clamp(1 - raw * 10, 0, 1);

//       rafRef.current = requestAnimationFrame(update);
//     };

//     rafRef.current = requestAnimationFrame(update);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   return (
//     <div className="sc-wrap">
//       <div className="sc-section" ref={sectionRef}>
//         <div className="sc-sticky">
//           <div className="sc-head">
//             <p className="sc-eyebrow">What We Do</p>
//             <h2 className="sc-title theme-title">Our Design <span>Services</span></h2>
//           </div>

//           <div className="sc-grid">
//             {CARDS.map((card, i) => (
//               <div
//                 key={i}
//                 className="sc-card"
//                 ref={(el) => (cardRefs.current[i] = el)}
//               >
//                 <div className="sc-icon">{card.icon}</div>
//                 <div className="sc-ctitle">{card.title}</div>
//                 <p className="sc-desc">{card.desc}</p>
//                 <div className="sc-tag">
//                   <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor">
//                     <circle cx="12" cy="12" r="10" />
//                   </svg>
//                   {card.tag}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="sc-hint" ref={hintRef}>
//             <span>Scroll</span>
//             <div className="sc-hint-line" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useEffect, useRef } from 'react';
 import '../css/servicecards.css'

/* ─── Data ───────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 1,
    eyebrow: 'Services — 01',
    title: ['Logo', 'Design'],
    body: 'We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80&auto=format&fit=crop',
    alt: 'Logo design process',
  },
  {
    id: 2,
    eyebrow: 'Services — 02',
    title: ['Brand Identity', 'Development'],
    body: 'A brand is more than a logo. We help you show up the same way everywhere — online, offline and everything between.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&q=80&auto=format&fit=crop',
    alt: 'Brand identity development',
  },
  {
    id: 3,
    eyebrow: 'Services — 03',
    title: ['Packaging', 'Design'],
    body: 'Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=900&q=80&auto=format&fit=crop',
    alt: 'Packaging design',
  },
  {
    id: 4,
    eyebrow: 'Services — 04',
    title: ['Website Design', '& Development'],
    body: 'Your website should work hard and look good. We design sites that are easy to use and built to grow with you.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80&auto=format&fit=crop',
    alt: 'Website design and development',
  },
  {
    id: 5,
    eyebrow: 'Services — 05',
    title: ['Social Media', 'Design'],
    body: 'Scroll-stopping visuals for every platform. We create content that looks consistent, on-brand and gets noticed.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80&auto=format&fit=crop',
    alt: 'Social media design',
  },
  {
    id: 6,
    eyebrow: 'Services — 06',
    title: ['Motion', 'Graphics'],
    body: 'We bring your brand to life with animation. From short reels to full explainer videos — motion that moves people.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80&auto=format&fit=crop',
    alt: 'Motion graphics and animation',
  },
];

const CARD_COUNT = SERVICES.length;

/* ─── Component ──────────────────────────────────────────────── */
export default function ServicesStack() {
  const wrapperRefs = useRef([]);

  // IntersectionObserver: when the next card's wrapper enters the sticky zone,
  // add .is-covered to the current card to scale it down slightly.
  useEffect(() => {
    const observers = [];

    wrapperRefs.current.forEach((el, i) => {
      if (!el || i === CARD_COUNT - 1) return;
      const nextWrapper = wrapperRefs.current[i + 1];
      if (!nextWrapper) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          // Mark the current card as covered when the next one enters view
          const card = el.querySelector('.ss-card');
          if (card) card.classList.toggle('is-covered', entry.isIntersecting);
        },
        {
          rootMargin: '-58px 0px 0px 0px',
          threshold: 0,
        }
      );

      obs.observe(nextWrapper);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="ss-section">
      <div className="ss-inner">

        {/* ── Sticky "Services" label ─────────────────────── */}
        <div className="ss-label">
          <h2>Services</h2>
        </div>

        {/* ── Cards column ────────────────────────────────── */}
        <div className="ss-col">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              className="ss-wrapper"
              ref={(el) => (wrapperRefs.current[i] = el)}
              style={{
                zIndex: i + 1,
                top: `${60 + i * 4}px`,
                marginBottom: i < CARD_COUNT - 1 ? '20px' : 0,
              }}
            >
              <article
                className="ss-card"
                aria-label={svc.title.join(' ')}
              >
                {/* Left: text */}
                <div className="ss-text">
                  <span className="ss-eyebrow">{svc.eyebrow}</span>
                  <h3 className="ss-title">
                    {svc.title.map((line, idx) => (
                      <span key={idx}>{line}</span>
                    ))}
                  </h3>
                  <p className="ss-body">{svc.body}</p>
                </div>

                {/* Right: image */}
                <div className="ss-image">
                  <img src={svc.image} alt={svc.alt} loading="lazy" />
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}