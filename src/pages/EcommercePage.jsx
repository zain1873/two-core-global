import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import StatsCounter from "../components/StatsCounter";
import ecommerceBanner from "../assets/ecommerce-banner.png";
import "../css/PagesCss/ecommerce.css";
import { ShoppingCart, TrendingUp, BarChart3, Smartphone, CreditCard, Truck, HeadphonesIcon, Globe, ShieldCheck, RefreshCw } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Custom Store Design",
    desc: "Tailored UI/UX designed to match your brand identity and maximize conversions.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    desc: "Fully responsive stores that deliver seamless shopping on any device.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    desc: "Secure multi-currency payment support with Stripe, PayPal, and local gateways.",
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    desc: "Real-time shipping rates, order tracking, and automated fulfillment workflows.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Advanced dashboards to track sales, customer behavior, and inventory performance.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "SSL encryption, PCI-DSS compliance, and fraud protection built into every store.",
  },
  {
    icon: Globe,
    title: "Multi-Vendor Support",
    desc: "Marketplace-ready architecture enabling multiple sellers on a single platform.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support & Maintenance",
    desc: "Round-the-clock technical support and regular platform updates.",
  },
  {
    icon: RefreshCw,
    title: "Automated Workflows",
    desc: "Inventory sync, order processing, and email automation for hands-free operations.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing Tools",
    desc: "Built-in SEO optimization, abandoned cart recovery, and promotional tools.",
  },
];

const platforms = [
  { name: "Shopify", desc: "Quick-start stores with custom Liquid themes." },
  { name: "WooCommerce", desc: "WordPress-powered stores with full flexibility." },
  { name: "Magento", desc: "Enterprise-grade solutions for large catalogs." },
  { name: "Custom", desc: "Headless or fully bespoke from scratch." },
];

function EcommercePage() {
  return (
    <div className="ecommerce-page">
      <Navbar />

      {/* Banner Section */}
      <section
        className="ecom-banner"
        style={{
          backgroundImage: `url(${ecommerceBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ecom-banner-overlay" />
        <div className="ecom-banner-glass">
          <div className="ecom-banner-content">
            <Breadcrumb
              items={[{ label: "Home", to: "/" }, { label: "Ecommerce Solutions" }]}
            />
            <h1 className="ecom-banner-title">
              Build Your <span className="neon-text">Ecommerce Empire</span>
            </h1>
            <p className="ecom-banner-sub">
              Launch high-converting online stores with our end-to-end ecommerce
              development services — from custom storefronts to automated workflows.
            </p>
            
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Features Grid */}
      <section className="ecom-features">
        <div className="ecom-section-label">What We Build</div>
        <h2 className="ecom-section-title">
          Everything You Need to <span className="neon-text">Sell Online</span>
        </h2>
        <p className="ecom-section-desc">
          From storefront to checkout, we engineer every touchpoint for maximum conversions.
        </p>

        <div className="ecom-features-grid">
          {features.map(({ icon: Icon, title, desc }) => (
            <div className="ecom-feature-card" key={title}>
              <div className="ecom-feature-icon">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="ecom-feature-title">{title}</h3>
              <p className="ecom-feature-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="ecom-platforms">
        <div className="ecom-section-label">Platforms We Master</div>
        <h2 className="ecom-section-title">
          Choose Your <span className="neon-text">Tech Stack</span>
        </h2>
        <p className="ecom-section-desc">
          We work across the most powerful ecommerce platforms to deliver the perfect fit for your business.
        </p>

        <div className="ecom-platform-grid">
          {platforms.map(({ name, desc }) => (
            <div className="ecom-platform-card" key={name}>
              <h3 className="ecom-platform-name">{name}</h3>
              <p className="ecom-platform-desc">{desc}</p>
              <span className="ecom-platform-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default EcommercePage;