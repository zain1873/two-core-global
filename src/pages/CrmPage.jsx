import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import StatsCounter from "../components/StatsCounter";
import crmBanner from "../assets/crm-banner.png";
import "../css/PagesCss/crm.css";
import {
  Zap, Users, BarChart3, Mail, RefreshCw,
  ShieldCheck, HeadphonesIcon, Globe, Database,
  Workflow, PieChart, Bell
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate repetitive tasks, approvals, and multi-step processes with visual builders.",
  },
  {
    icon: Users,
    title: "Contact & Lead Management",
    desc: "Centralize every prospect and client interaction for smarter sales pipelines.",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    desc: "Real-time dashboards for pipeline tracking, conversion rates, and revenue forecasting.",
  },
  {
    icon: Mail,
    title: "Email & Marketing Automation",
    desc: "Triggered campaigns, drip sequences, and personalized customer journeys.",
  },
  {
    icon: Database,
    title: "Centralized Data Hub",
    desc: "Unify customer data from sales, support, and marketing into one source of truth.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    desc: "Granular permissions and team hierarchies to keep your data secure.",
  },
  {
    icon: Globe,
    title: "Multi-Channel Integration",
    desc: "Connect email, SMS, social media, and telephony in a single inbox.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support & Training",
    desc: "Dedicated onboarding and round-the-clock technical support for your team.",
  },
  {
    icon: PieChart,
    title: "Custom Reporting",
    desc: "Drag-and-drop report builder with exportable insights for stakeholders.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Real-time alerts for deal updates, task reminders, and system triggers.",
  },
  {
    icon: RefreshCw,
    title: "Data Sync & Migration",
    desc: "Seamless migration from legacy systems with continuous bi-directional sync.",
  },
  {
    icon: Zap,
    title: "API & Custom Extensions",
    desc: "Extend your CRM with custom modules, webhooks, and third-party integrations.",
  },
];

const benefits = [
  { stat: "45%", label: "Increase in Productivity" },
  { stat: "30%", label: "Faster Sales Cycles" },
  { stat: "60%", label: "Automation of Repetitive Tasks" },
  { stat: "99.9%", label: "Data Accuracy" },
];

function CrmPage() {
  return (
    <div className="crm-page">
      <Navbar />

      {/* Banner Section */}
      <section
        className="crm-banner"
        style={{
          backgroundImage: `url(${crmBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="crm-banner-overlay" />
        <div className="crm-banner-glass">
          <div className="crm-banner-content">
            <Breadcrumb
              items={[{ label: "Home", to: "/" }, { label: "CRM & Automation" }]}
            />
            <h1 className="crm-banner-title">
              Supercharge Your Business with <span className="crm-neon">CRM & Automation</span>
            </h1>
            <p className="crm-banner-sub">
              Streamline operations, nurture leads, and scale effortlessly with custom CRM
              solutions and intelligent workflow automation tailored to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Benefits Strip */}
      <section className="crm-benefits">
        <div className="crm-benefits-grid">
          {benefits.map(({ stat, label }) => (
            <div className="crm-benefit-card" key={label}>
              <span className="crm-benefit-stat">{stat}</span>
              <span className="crm-benefit-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="crm-features">
        <div className="crm-section-label">What We Deliver</div>
        <h2 className="crm-section-title">
          Powerful <span className="crm-neon">CRM & Automation</span> Tools
        </h2>
        <p className="crm-section-desc">
          We build and integrate enterprise-grade CRM systems with intelligent automation to help you work smarter, not harder.
        </p>

        <div className="crm-features-grid">
          {features.map(({ icon: Icon, title, desc }) => (
            <div className="crm-feature-card" key={title}>
              <div className="crm-feature-icon">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="crm-feature-title">{title}</h3>
              <p className="crm-feature-desc">{desc}</p>
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

export default CrmPage;