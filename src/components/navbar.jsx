import { useState, useRef, useEffect } from "react";
import '../css/navbar.css'
import logo from "../assets/nav-logo.png"
import { Link, NavLink } from "react-router-dom";

import {
  Code, Smartphone, ShoppingCart, Package, Settings, CheckCircle,
  Paintbrush, Monitor, Search, Megaphone, Share2,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const SERVICES = {
  Development: [
    { icon: Code, label: "Website Development", link: "/website-development" },
    { icon: Smartphone, label: "Mobile App Development" },
    { icon: ShoppingCart, label: "Ecommerce Development" },
    { icon: Package, label: "Product Development" },
    { icon: Settings, label: "Software Development" },
    { icon: CheckCircle, label: "Quality Assurance" },
  ],
  Design: [
    { icon: Paintbrush, label: "Graphic Design" },
    { icon: Monitor, label: "UI/UX Design" },
  ],
  "Digital Marketing": [
    { icon: Search, label: "SEO Services" },
    { icon: Megaphone, label: "SEM Services" },
    { icon: Share2, label: "Social Media" },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesRef = useRef(null);

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
      <nav className="navbar">
        <div className="nav-inner">

          {/* Logo */}
          <Link className="logo" to="/" onClick={closeAll}>
            <img src={logo} alt="Logo" />
          </Link>

          {/* Desktop Nav */}
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

            {/* Services Dropdown */}
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
                    <div className={`dd-col-title ${category === "Digital Marketing" ? "marketing" : ""}`}>
                      {category === "Digital Marketing" && <span className="pink-dot" />}
                      {category}
                    </div>
                    {items.map(({ icon: Icon, label, link }) =>
                      link ? (
                        <Link
                          key={label}
                          to={link}
                          className="dd-item"
                          onClick={() => setServicesOpen(false)}
                        >
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
          </div>

          {/* CTA Button */}
          <Link to="/contact" className="cta-btn" onClick={closeAll}>
            <span className="cta-dot" />
            Lets Work
          </Link>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMobileOpen((p) => !p)} aria-label="Toggle menu">
            <span className={`ham-bar ${mobileOpen ? "open-1" : ""}`} />
            <span className={`ham-bar ${mobileOpen ? "open-2" : ""}`} />
            <span className={`ham-bar ${mobileOpen ? "open-3" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
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
                    <Link
                      key={label}
                      to={link}
                      className="mobile-dd-item"
                      onClick={closeAll}
                    >
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
          </div>

          <Link to="/contact" className="mobile-cta" onClick={closeAll}>
            <span className="cta-dot" />
            Lets Work
          </Link>
        </div>
      </nav>
    </>
  );
}