import { useState, useRef, useEffect } from "react";
import '../css/navbar.css'
import logo from "../assets/nav-logo.png"
import { Link, NavLink } from "react-router-dom";

import {
  Code, Smartphone, ShoppingCart, Zap,
  Paintbrush, Monitor, Video,
  Search, Share2, Megaphone, Mail,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const SERVICES = {
  Development: [
    { icon: Code, label: "Web Development", link: "/website-development" },
    { icon: Smartphone, label: "Mobile Apps", link: "/mobile-app-development" },
    { icon: ShoppingCart, label: "Ecommerce" },
    { icon: Zap, label: "CRM & Automation" },
  ],
  Creative: [
    { icon: Paintbrush, label: "Brand & Identity" },
    { icon: Monitor, label: "UI/UX Design" },
    { icon: Video, label: "Video Production" },
  ],
  Marketing: [
    { icon: Search, label: "SEO Services", link: "/seo-services" },
    { icon: Share2, label: "Social Media Management", link: "/social-media-services" },
    { icon: Megaphone, label: "Paid Advertising" },
    { icon: Mail, label: "Email Marketing" },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const dropdownRef = useRef(null);
  const servicesRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const viewportH = window.innerHeight;
      if (currentY < viewportH) {
        setHidden(false);
      } else if (currentY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        servicesRef.current && !servicesRef.current.contains(e.target)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* NAVBAR BAR — sticky, never changes height */}
      <nav className={`navbar ${hidden ? "navbar--hidden" : ""}`}>
        <div className="nav-inner">

          <Link className="logo" to="/" onClick={closeAll}>
            <img src={logo} alt="Logo" width="150" height="60" />
          </Link>

          <div className="desktop-nav">
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {label}
              </NavLink>
            ))}

            <div
              className="services-wrapper"
              ref={servicesRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link services-btn-active"
                onClick={() => setServicesOpen((p) => !p)}
                aria-expanded={servicesOpen}
              >
                Services
                <svg className={`chevron ${servicesOpen ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div ref={dropdownRef} className={`mega-dropdown ${servicesOpen ? "visible" : ""}`}>
                {Object.entries(SERVICES).map(([category, items]) => (
                  <div key={category}>
                    <div className={`dd-col-title ${category === "Marketing" ? "marketing" : ""}`}>
                      {category === "Marketing" && <span className="pink-dot" />}
                      {category}
                    </div>
                    {items.map(({ icon: Icon, label, link }) =>
                      link ? (
                        <Link key={label} to={link} className="dd-item" onClick={() => setServicesOpen(false)}>
                          <span className="dd-item-icon"><Icon size={15} strokeWidth={1.8} /></span>
                          {label}
                        </Link>
                      ) : (
                        <span key={label} className="dd-item">
                          <span className="dd-item-icon"><Icon size={15} strokeWidth={1.8} /></span>
                          {label}
                        </span>
                      )
                    )}
                  </div>
                ))}
                <div className="explore-row">
                  <Link to="/services" className="explore-link" onClick={() => setServicesOpen(false)}>
                    Explore All Services →
                  </Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/portfolio"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={closeAll}
            >
              Portfolio
            </NavLink>
          </div>

          <Link to="/contact" className="cta-btn" onClick={closeAll}>
            <span className="cta-dot" />
            Lets Work
          </Link>

          <button
            className="hamburger"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span className={`ham-bar ${mobileOpen ? "open-1" : ""}`} />
            <span className={`ham-bar ${mobileOpen ? "open-2" : ""}`} />
            <span className={`ham-bar ${mobileOpen ? "open-3" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU — completely outside navbar, fixed overlay */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {NAV_LINKS.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
            onClick={closeAll}
          >
            {label}
          </NavLink>
        ))}

        <button className="mobile-link" onClick={() => setMobileServicesOpen((p) => !p)}>
          Services
          <svg className={`chevron ${mobileServicesOpen ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div className={`mobile-services-panel ${mobileServicesOpen ? "open" : ""}`}>
          {Object.entries(SERVICES).map(([category, items]) => (
            <div key={category} className="mobile-dd-section">
              <div className="mobile-dd-title">{category}</div>
              {items.map(({ icon: Icon, label, link }) =>
                link ? (
                  <Link key={label} to={link} className="mobile-dd-item" onClick={closeAll}>
                    <span className="mobile-dd-item-icon"><Icon size={14} strokeWidth={1.8} /></span>
                    {label}
                  </Link>
                ) : (
                  <span key={label} className="mobile-dd-item">
                    <span className="mobile-dd-item-icon"><Icon size={14} strokeWidth={1.8} /></span>
                    {label}
                  </span>
                )
              )}
            </div>
          ))}
          <div className="mobile-explore-row">
            <Link to="/services" className="mobile-explore-link" onClick={closeAll}>
              Explore All Services →
            </Link>
          </div>
        </div>

        <NavLink
          to="/portfolio"
          className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
          onClick={closeAll}
        >
          Portfolio
        </NavLink>

        <Link to="/contact" className="mobile-cta" onClick={closeAll}>
          <span className="cta-dot" />
          Lets Work
        </Link>
      </div>
    </>
  );
}