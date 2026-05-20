import React, { useState } from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import "../css/PagesCss/webDev.css";
import "../css/PagesCss/Portfolio.css";

const PROJECTS = [
  {
    id: 1,
    title: "Nova Finance",
    year: "2025",
    category: "Web Development",
    tags: ["Fintech", "Web Development"],
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80&fit=crop",
  },
  {
    id: 2,
    title: "Pixel Studio",
    year: "2025",
    category: "Design & Branding",
    tags: ["UI/UX", "Brand Identity"],
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80&fit=crop",
  },
  {
    id: 3,
    title: "CloudSync",
    year: "2024",
    category: "Web Development",
    tags: ["SaaS Platform", "Dashboard"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&fit=crop",
  },
  {
    id: 4,
    title: "Vision Tech",
    year: "2024",
    category: "Mobile App",
    tags: ["Development", "Mobile App"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop",
  },
  {
    id: 5,
    title: "EcoMarket",
    year: "2025",
    category: "Web Development",
    tags: ["Ecommerce", "Web Development"],
    image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&q=80&fit=crop",
  },
  {
    id: 6,
    title: "BrandPulse",
    year: "2024",
    category: "Digital Marketing",
    tags: ["Social Media", "Marketing"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80&fit=crop",
  },
  {
    id: 7,
    title: "RankUp Agency",
    year: "2025",
    category: "Digital Marketing",
    tags: ["SEO", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&q=80&fit=crop",
  },
  {
    id: 8,
    title: "ByteForge",
    year: "2024",
    category: "Mobile App",
    tags: ["Mobile App", "UI/UX"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&fit=crop",
  },
  {
    id: 9,
    title: "TrustLayer",
    year: "2023",
    category: "Web Development",
    tags: ["Software Dev", "Security"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
  },
  {
    id: 10,
    title: "NeonKicks",
    year: "2025",
    category: "Design & Branding",
    tags: ["Ecommerce", "Brand Identity"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&fit=crop",
  },
  {
    id: 11,
    title: "DataFlow",
    year: "2024",
    category: "Web Development",
    tags: ["Analytics", "Dashboard"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80&fit=crop",
  },
  {
    id: 12,
    title: "LocalPro",
    year: "2023",
    category: "Digital Marketing",
    tags: ["SEO", "Local Business"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&fit=crop",
  },
];

const CATEGORIES = [
  "All",
  "Web Development",
  "Mobile App",
  "Digital Marketing",
  "Design & Branding",
];

const STATS = [
  { number: "120+", label: "Projects Delivered" },
  { number: "85+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "15+", label: "Team Members" },
];

function ProjectCard({ project }) {
  return (
    <div className="pf-card">
      <div className="pf-card-image-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="pf-card-overlay" />
        <span className="pf-card-year">{project.year}</span>
      </div>
      <div className="pf-card-body">
        <div className="pf-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="pf-card-tag">{tag}</span>
          ))}
        </div>
        <div className="pf-card-footer">
          <h3 className="pf-card-title">{project.title}</h3>
          <div className="pf-card-arrow" aria-label="View project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      <Navbar />

      {/* Banner */}
      <section className="portfolio-banner web-banner">
        <div className="banner-dark-overlay" />
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Portfolio" }]} />
            <h1>Our Work Speaks for Itself</h1>
            <button className="banner-btn">Start Your Project</button>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="pf-stats">
        {STATS.map((s) => (
          <div key={s.label} className="pf-stat-item">
            <div className="pf-stat-number">{s.number}</div>
            <div className="pf-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <section className="pf-projects-section">
        <div className="pf-section-header">
          <span className="pf-eyebrow">Selected Work</span>
          <h2 className="pf-section-title">
            Projects That <span>Drive Results</span>
          </h2>
          <p className="pf-section-desc">
            From startups to enterprises — here's a look at the digital
            experiences we've crafted across industries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="pf-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pf-filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="pf-grid">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="pf-no-results">No projects found in this category.</p>
          )}
        </div>
      </section>

      <CTASection />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}
