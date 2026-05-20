import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CtaSection";
import TestimonialSlider from "../components/Testimonials";
import "../css/PagesCss/Services.css";

import {
  Code, Smartphone, ShoppingCart, Package, Settings, CheckCircle,
  Paintbrush, Monitor, Search, Megaphone, Share2,
  ArrowRight, Zap,
} from "lucide-react";

const SERVICE_CATEGORIES = [
  {
    id: "development",
    label: "Development",
    eyebrow: "Build",
    accent: "primary",
    services: [
      {
        icon: Code,
        title: "Website Development",
        description:
          "Custom, high-performance websites built with modern technologies. From landing pages to complex web applications that scale.",
        link: "/website-development",
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
          "Native and cross-platform mobile apps for iOS and Android that deliver seamless, intuitive user experiences.",
        link: "/mobile-app-development",
      },
      {
        icon: ShoppingCart,
        title: "Ecommerce Development",
        description:
          "Scalable online stores with robust payment integration, inventory management, and conversion optimization built in.",
        link: null,
        badge: "Coming Soon",
      },
      {
        icon: Package,
        title: "Product Development",
        description:
          "End-to-end product development from concept to launch — research, design, development, and iteration.",
        link: null,
        badge: "Coming Soon",
      },
      {
        icon: Settings,
        title: "Software Development",
        description:
          "Bespoke software solutions tailored to your business — automation, integrations, and enterprise-grade tools.",
        link: null,
        badge: "Coming Soon",
      },
      {
        icon: CheckCircle,
        title: "Quality Assurance",
        description:
          "Rigorous testing and QA processes to ensure your product is bug-free, performant, and production-ready.",
        link: null,
        badge: "Coming Soon",
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    eyebrow: "Create",
    accent: "accent",
    services: [
      {
        icon: Paintbrush,
        title: "Graphic Design",
        description:
          "Brand identities, logos, print materials, and visual assets that communicate your story and leave a lasting impression.",
        link: null,
        badge: "Coming Soon",
      },
      {
        icon: Monitor,
        title: "UI/UX Design",
        description:
          "User-centered interface and experience design that converts visitors into loyal customers through intuitive flows.",
        link: null,
        badge: "Coming Soon",
      },
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    eyebrow: "Grow",
    accent: "pink",
    services: [
      {
        icon: Search,
        title: "SEO Services",
        description:
          "Data-driven search engine optimization to rank higher, drive organic traffic, and grow your online presence sustainably.",
        link: "/seo-services",
      },
      {
        icon: Megaphone,
        title: "SEM Services",
        description:
          "Strategic paid search campaigns on Google & Bing that maximize ROI and drive highly qualified leads to your business.",
        link: "/sem-services",
      },
      {
        icon: Share2,
        title: "Social Media Marketing",
        description:
          "Build your brand across social platforms with targeted content strategy, community management, and paid advertising.",
        link: "/social-media-services",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Navbar />

      {/* ── Banner ─────────────────────────────────────── */}
      <section className="sp-banner">
        <div className="sp-banner-overlay" />
        <div className="sp-banner-glow sp-banner-glow--left" />
        <div className="sp-banner-glow sp-banner-glow--right" />

        <div className="sp-banner-content">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }]} className="sp-breadcrumb" />
          <h1 className="sp-banner-title">
            Explore All Our <span>Services</span>
          </h1>
          <p className="sp-banner-sub">
            From design to development to digital marketing — everything your brand needs to grow, all in one place.
          </p>
          <Link to="/contact" className="sp-banner-cta">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────── */}
      <section className="sp-stats-bar">
        <div className="sp-stats-inner">
          <div className="sp-stat">
            <span className="sp-stat-num">11+</span>
            <span className="sp-stat-label">Services Offered</span>
          </div>
          <div className="sp-stat-divider" />
          <div className="sp-stat">
            <span className="sp-stat-num">200+</span>
            <span className="sp-stat-label">Projects Completed</span>
          </div>
          <div className="sp-stat-divider" />
          <div className="sp-stat">
            <span className="sp-stat-num">50+</span>
            <span className="sp-stat-label">Happy Clients</span>
          </div>
          <div className="sp-stat-divider" />
          <div className="sp-stat">
            <span className="sp-stat-num">5+</span>
            <span className="sp-stat-label">Years Experience</span>
          </div>
        </div>
      </section>

      {/* ── Service Category Sections ───────────────────── */}
      {SERVICE_CATEGORIES.map((category) => (
        <section key={category.id} className={`sp-category sp-category--${category.accent}`}>
          <div className="sp-category-inner">
            <div className="sp-category-header">
              <span className="sp-category-eyebrow">
                <Zap size={11} />
                {category.eyebrow}
              </span>
              <h2 className="sp-category-title">{category.label}</h2>
            </div>

            <div className={`sp-cards-grid${category.services.length === 2 ? " sp-cards-grid--two" : ""}`}>
              {category.services.map((svc) => (
                <div
                  key={svc.title}
                  className={`sp-card${svc.badge ? " sp-card--coming-soon" : ""}`}
                >

                  <div className={`sp-card-icon sp-card-icon--${category.accent}`}>
                    <svc.icon size={26} strokeWidth={1.6} />
                  </div>

                  <h3 className="sp-card-title">{svc.title}</h3>
                  <p className="sp-card-desc">{svc.description}</p>

                  {svc.link ? (
                    <Link
                      to={svc.link}
                      className={`sp-card-link sp-card-link--${category.accent}`}
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <span className="sp-card-link sp-card-link--disabled">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}
