import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Working with Buzz was an absolute pleasure. They brought innovative solutions to the table and executed the project flawlessly. I'm very satisfied with how everything turned out.",
    name: "Jamal Khan",
    company: "LEVEL UP VISTA",
    logo: "LEVEL·UP\nVISTA",
  },
  {
    id: 2,
    quote: "The team at Buzz exceeded every expectation. Their attention to detail and creative approach transformed our vision into something truly remarkable. Highly recommended.",
    name: "Sarah Mitchell",
    company: "NOVA DESIGN CO",
    logo: "NOVA\nDESIGN",
  },
  {
    id: 3,
    quote: "From kickoff to launch, the experience was seamless. Buzz delivered on time, on budget, and the results speak for themselves. Our engagement metrics doubled.",
    name: "Alex Torres",
    company: "PEAK VENTURES",
    logo: "PEAK\nVENTURES",
  },
  {
    id: 4,
    quote: "I was blown away by their professionalism and technical expertise. Every challenge was met with a smart solution. This is the agency you want in your corner.",
    name: "Priya Sharma",
    company: "ORBIT LABS",
    logo: "ORBIT\nLABS",
  },
  {
    id: 5,
    quote: "Buzz is simply the best. Their strategic thinking combined with stunning execution made our rebrand a massive success. We couldn't be happier.",
    name: "Daniel Lee",
    company: "FLUX STUDIO",
    logo: "FLUX\nSTUDIO",
  },
  {
    id: 6,
    quote: "Outstanding results from start to finish. The team listened carefully, adapted quickly, and delivered work that truly represented our brand.",
    name: "Mia Chen",
    company: "ARC COLLECTIVE",
    logo: "ARC\nCOLLECT",
  },
  {
    id: 7,
    quote: "Working with Buzz felt like having an in-house team that genuinely cared about our success. Their dedication is unmatched in the industry.",
    name: "Omar Hassan",
    company: "DUNE MEDIA",
    logo: "DUNE\nMEDIA",
  },
  {
    id: 8,
    quote: "The quality of work and speed of delivery were both exceptional. Buzz transformed our outdated website into a conversion machine.",
    name: "Laura Benson",
    company: "CREST DIGITAL",
    logo: "CREST\nDIGITAL",
  },
];

const TOTAL = testimonials.length;
const AUTO_INTERVAL = 4000;
const DRAG_THRESHOLD = 60;

function LogoAvatar({ text }) {
  return (
    <div className="w-14 h-14 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0 select-none">
      <span className="text-[9px] font-semibold text-gray-500 text-center leading-tight whitespace-pre-line tracking-wide pointer-events-none">
        {text}
      </span>
    </div>
  );
}

function NavButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="w-11 h-11 rounded-full bg-[#ff0080] text-white flex items-center justify-center shadow-lg hover:bg-[#cc0066] active:scale-90 transition-all duration-200 flex-shrink-0 hover:shadow-[0_0_22px_rgba(255,0,128,0.45)] z-10"
    >
      {direction === "left" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </button>
  );
}

function DotIndicators({ total, active, onDotClick }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to testimonial ${i + 1}`}
          className={`h-[5px] rounded-full transition-all duration-400 ${
            i === active ? "w-7 bg-[#ff0080]" : "w-5 bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialSlider() {
  // current index — with clones we use an extended array approach
  const [index, setIndex] = useState(0);          // real index 0..TOTAL-1
  const [offset, setOffset] = useState(0);         // pixel drag offset
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);

  // Drag state
  const dragStart = useRef(null);
  const isDragging = useRef(false);
  const trackRef = useRef(null);

  // ─── Navigation ────────────────────────────────────────────────
  const goTo = useCallback((next, skipTransition = false) => {
    const clamped = ((next % TOTAL) + TOTAL) % TOTAL;
    if (!skipTransition) setTransitioning(true);
    setIndex(clamped);
    setOffset(0);
    if (!skipTransition) setTimeout(() => setTransitioning(false), 420);
  }, []);

  const prev = useCallback(() => goTo(index - 1), [index, goTo]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);

  // ─── Auto-play ─────────────────────────────────────────────────
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(t);
  }, [paused, next]);

  // ─── Mouse drag ────────────────────────────────────────────────
  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStart.current = e.clientX;
    setPaused(true);
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    setOffset(e.clientX - dragStart.current);
  };

  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = e.clientX - dragStart.current;
    if (delta < -DRAG_THRESHOLD) next();
    else if (delta > DRAG_THRESHOLD) prev();
    else setOffset(0);
    setTimeout(() => setPaused(false), 800);
  };

  const onMouseLeave = (e) => {
    if (isDragging.current) onMouseUp(e);
    setPaused(false);
  };

  // ─── Touch drag ────────────────────────────────────────────────
  const onTouchStart = (e) => {
    dragStart.current = e.touches[0].clientX;
    isDragging.current = true;
    setPaused(true);
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    setOffset(e.touches[0].clientX - dragStart.current);
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (offset < -DRAG_THRESHOLD) next();
    else if (offset > DRAG_THRESHOLD) prev();
    else setOffset(0);
    setTimeout(() => setPaused(false), 800);
  };

  // Build a virtual strip: [last, ...all, first] for infinite feel
  // We render TOTAL slides via translateX trick
  const translateX = `calc(${-index * 100}% + ${offset}px)`;

  return (
    <section className="w-full bg-white py-16 px-0 overflow-hidden select-none">
      {/* Outer wrapper with nav arrows */}
      <div className="relative flex items-center max-w-6xl mx-auto px-6 sm:px-10">

        {/* Left nav */}
        <div className="absolute left-0 sm:left-2 z-10">
          <NavButton direction="left" onClick={() => { prev(); setPaused(true); setTimeout(() => setPaused(false), 1200); }} />
        </div>

        {/* Track viewport */}
        <div
          ref={trackRef}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing mx-10 sm:mx-12"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Slide strip */}
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX})`,
              transition: transitioning ? "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : isDragging.current ? "none" : "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="min-w-full flex flex-col items-center text-center px-2 sm:px-6 md:px-12"
                style={{ userSelect: "none" }}
              >
                {/* Quote */}
                <p
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug tracking-tight max-w-4xl pointer-events-none"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-10 pointer-events-none">
                  <LogoAvatar text={t.logo} />
                  <div className="text-left">
                    <p className="text-lg font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mt-1">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right nav */}
        <div className="absolute right-0 sm:right-2 z-10">
          <NavButton direction="right" onClick={() => { next(); setPaused(true); setTimeout(() => setPaused(false), 1200); }} />
        </div>
      </div>

      {/* Dots */}
      <DotIndicators
        total={TOTAL}
        active={index}
        onDotClick={(i) => { goTo(i); setPaused(true); setTimeout(() => setPaused(false), 1200); }}
      />

      {/* Drag hint on mobile */}
      <p className="text-center text-xs text-gray-300 mt-4 sm:hidden">drag to swipe</p>
    </section>
  );
}