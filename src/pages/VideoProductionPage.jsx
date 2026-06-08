import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import StatsCounter from "../components/StatsCounter";
import videoBanner from "../assets/video-protection-banner.png";
import "../css/PagesCss/video-production.css";
import {
  Video, Film, Clapperboard, Camera, Play,
  Music, Edit, Layers, Image, Globe,
  HeadphonesIcon, Sparkles
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Commercial Videography",
    desc: "High-quality product shoots, brand films, and commercial ads that captivate your audience.",
  },
  {
    icon: Film,
    title: "Corporate Videos",
    desc: "Professional company profiles, internal comms, training videos, and event coverage.",
  },
  {
    icon: Clapperboard,
    title: "Explainer & Animated Videos",
    desc: "Engaging 2D/3D animations and motion graphics that simplify complex ideas.",
  },
  {
    icon: Music,
    title: "Music Videos",
    desc: "Creative direction and production for artist music videos with cinematic visuals.",
  },
  {
    icon: Edit,
    title: "Post-Production & Editing",
    desc: "Professional color grading, sound design, visual effects, and seamless editing.",
  },
  {
    icon: Sparkles,
    title: "Social Media Content",
    desc: "Short-form videos, reels, and stories optimized for TikTok, Instagram, and LinkedIn.",
  },
  {
    icon: Layers,
    title: "Motion Graphics & VFX",
    desc: "Stunning visual effects, kinetic typography, and dynamic motion design.",
  },
  {
    icon: Image,
    title: "Product Photography",
    desc: "E-commerce product shoots with 360-degree views and lifestyle imagery.",
  },
  {
    icon: Globe,
    title: "Virtual Tours & 360° Video",
    desc: "Immersive virtual experiences for real estate, hospitality, and events.",
  },
  {
    icon: HeadphonesIcon,
    title: "Audio Production",
    desc: "Voiceovers, soundtracks, foley, and audio mixing for any video medium.",
  },
  {
    icon: Play,
    title: "Live Streaming",
    desc: "Professional live event streaming with multi-camera setups and real-time switching.",
  },
  {
    icon: Video,
    title: "Drone & Aerial Footage",
    desc: "Stunning aerial cinematography and drone footage for breathtaking perspectives.",
  },
];

function VideoProductionPage() {
  return (
    <div className="video-page">
      <Navbar />

      {/* Banner Section */}
      <section
        className="video-banner"
        style={{
          backgroundImage: `url(${videoBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="video-banner-overlay" />
        <div className="video-banner-glass">
          <div className="video-banner-content">
            <Breadcrumb
              items={[{ label: "Home", to: "/" }, { label: "Video Production" }]}
            />
            <h1 className="video-banner-title">
              Bring Your Story to <span className="video-neon">Life</span>
            </h1>
            <p className="video-banner-sub">
              From concept to final cut — we produce cinematic videos that elevate your brand,
              engage your audience, and drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Features Grid */}
      <section className="video-features">
        <div className="video-section-label">What We Produce</div>
        <h2 className="video-section-title">
          Full-Service <span className="video-neon">Video Production</span>
        </h2>
        <p className="video-section-desc">
          Every frame matters. We handle pre-production, filming, post-production, and delivery — all under one roof.
        </p>

        <div className="video-features-grid">
          {features.map(({ icon: Icon, title, desc }) => (
            <div className="video-feature-card" key={title}>
              <div className="video-feature-icon">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="video-feature-title">{title}</h3>
              <p className="video-feature-desc">{desc}</p>
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

export default VideoProductionPage;