import { useEffect, useState } from "react";
import {
  Code, Smartphone, ShoppingCart, Package, Settings, CheckCircle,
  Paintbrush, Monitor, Search, Megaphone, Share2,
} from "lucide-react";

const SERVICES = [
  { icon: Code, label: "Website Development" },
  { icon: Smartphone, label: "Mobile App Development" },
  { icon: ShoppingCart, label: "Ecommerce Development" },
  { icon: Package, label: "Product Development" },
  { icon: Settings, label: "Software Development" },
  { icon: CheckCircle, label: "Quality Assurance" },
  { icon: Paintbrush, label: "Graphic Design" },
  { icon: Monitor, label: "UI/UX Design" },
  { icon: Search, label: "SEO Services" },
  { icon: Megaphone, label: "SEM Services" },
  { icon: Share2, label: "Social Media" },
];

export default function HeroBannerText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | exit | enter

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("exit");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
        setPhase("enter");
        setTimeout(() => setPhase("idle"), 400);
      }, 380);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const current = SERVICES[currentIndex];
  const Icon = current.icon;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

        .hbt-wrap {
          font-family: 'Inter', sans-serif;
          background: #fff;
          width: 100%;
          padding: 10vw 6vw 8vw;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* ── Pink dot ── */
        .hbt-dot {
          width: clamp(10px, 1.5vw, 16px);
          height: clamp(10px, 1.5vw, 16px);
          border-radius: 50%;
          background: #ff1f71;
          margin-bottom: clamp(10px, 2vw, 20px);
        }
          @media (min-width: 768px) {
          .hbt-wrap {
              height: 68vh;
            }
          }
        /* ── Top static line ── */
        .hbt-top {
          font-size: clamp(32px, 6.5vw, 100px);
          font-weight: 400;
          color: #0a0a0a;
          line-height: 1.05;
          letter-spacing: -0.025em;
          white-space: nowrap;
        }

        /* ── Animated bottom row ── */
        .hbt-bottom-row {
          // height: clamp(44px, 7.5vw, 112px);
          overflow: hidden;
          margin-top: clamp(2px, 0.4vw, 6px);
          position: relative;
        }

        .hbt-service-slot {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1.2vw, 18px);
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
          opacity 0.38s ease;
          transform: translateY(0%);
          opacity: 1;
        }
          @media (max-width: 768px) {
             .hbt-service-slot {
              top:-24px;
            }
            .hbt-dots-row {
            margin-top:0
          }
          }

        .hbt-service-slot.exit {
          transform: translateY(-110%);
          opacity: 0;
        }

        .hbt-service-slot.enter {
          transform: translateY(110%);
          opacity: 0;
          transition: none;
        }

        /* ── Icon circle ── */
        .hbt-icon-wrap {
          flex-shrink: 0;
          width: clamp(34px, 5vw, 72px);
          height: clamp(34px, 5vw, 72px);
          border-radius: 50%;
          border: 1.5px solid #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hbt-icon-wrap svg {
          width: clamp(14px, 2vw, 28px);
          height: clamp(14px, 2vw, 28px);
          color: #0a0a0a;
          stroke-width: 1.8;
        }

        /* ── Service label ── */
        .hbt-service-label {
          font-size: 96px;
          font-weight: 400;
          color: #0a0a0a;
          line-height: 1.05;
          letter-spacing: -0.025em;
          white-space: nowrap;
          /* shrink on very narrow screens */
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        /* ── Progress dots ── */
        .hbt-dots-row {
          display: flex;
          gap: clamp(4px, 0.6vw, 8px);
          margin-top: clamp(20px, 3vw, 40px);
          flex-wrap: wrap;
        }

        .hbt-tick {
          width: clamp(5px, 0.5vw, 7px);
          height: clamp(5px, 0.5vw, 7px);
          border-radius: 50%;
          background: #ddd;
          transition: background 0.3s ease, width 0.3s ease, border-radius 0.3s ease;
        }

        .hbt-tick.active {
          background: #0a0a0a;
          width: clamp(14px, 1.6vw, 22px);
          border-radius: 4px;
        }

        /* ── Mobile ≤ 480px: allow label to wrap ── */
        @media (max-width: 480px) {
          .hbt-wrap {
            padding: 14vw 5vw 10vw;
          }
          .hbt-top {
            white-space: normal;
            line-height: 1.1;
          }
          .hbt-bottom-row {
            height: clamp(80px, 24vw, 130px);
            align-items: flex-start;
          }
          .hbt-service-slot {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
          }
          .hbt-service-label {
            white-space: normal;
            line-height: 1.1;
          }
        }

        /* ── Tablet 481–768px ── */
        @media (min-width: 481px) and (max-width: 768px) {
          .hbt-wrap { padding: 10vw 5vw 8vw; }
          .hbt-bottom-row { height: clamp(52px, 9vw, 80px); }
        }

        /* ── Large desktop ≥ 1440px ── */
        @media (min-width: 1440px) {
          .hbt-wrap { padding: 120px 80px 100px; }
          .hbt-top { font-size: 96px; }
          .hbt-service-label { font-size: 96px; }
          .hbt-bottom-row { height: 110px; }
          .hbt-icon-wrap { width: 72px; height: 72px; }
          .hbt-icon-wrap svg { width: 28px; height: 28px; }
        }
      `}</style>

      <div className="hbt-wrap">
        <div className="hbt-dot" />

        <div className="hbt-top">Leading Full-Service</div>

        <div className="hbt-bottom-row">
          <div className={`hbt-service-slot${phase === "exit" ? " exit" : phase === "enter" ? " enter" : ""}`}>
            <div className="hbt-icon-wrap">
              <Icon />
            </div>
            <span className="hbt-service-label">{current.label}</span>
          </div>
        </div>

        <div className="hbt-dots-row">
          {SERVICES.map((_, i) => (
            <div key={i} className={`hbt-tick${i === currentIndex ? " active" : ""}`} />
          ))}
        </div>
      </div>
    </>
  );
}