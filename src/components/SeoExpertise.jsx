import { useEffect, useRef } from "react";
import {
  MapPin,
  Globe,
  Code2,
  PenLine,
  Link2,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    title: "LOCAL SEO",
    description:
      "If your business serves a local audience, our local SEO services boost location-based search visibility & optimize your Google My Business(GMB) profile to attract customers.",
    Icon: MapPin,
  },
  {
    title: "OFF-SITE SEO",
    description:
      "Boost brand trust and reach with off-page SEO tactics. We enhance your online reputation through social marketing, link building, and influencer partnerships.",
    Icon: Globe,
  },
  {
    title: "TECHNICAL SEO",
    description:
      "Enhance rankings by optimizing your website's back-end. Our experts improve page speed and fix technical issues, making crawling easier for search engines.",
    Icon: Code2,
  },
  {
    title: "CONTENT WRITING",
    description:
      "Our writers create SEO-friendly content, from blogs to service pages. Regular updates boost rankings—let us manage your content needs effectively.",
    Icon: PenLine,
  },
  {
    title: "LINK BUILDING",
    description:
      "Backlinks are key to higher rankings, but quality matters. We secure trusted, high-authority links, ensuring the right connections for better visibility.",
    Icon: Link2,
  },
  {
    title: "E-COMMERCE SEO",
    description:
      "Enhance customer experience 24/7 and boost loyalty. We craft targeted email campaigns and optimize for mobile & voice search to drive engagement.",
    Icon: ShoppingCart,
  },
];

function ServiceCard({ title, description, Icon, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 110 + 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      ref={ref}
      className="
        group flex flex-col items-center text-center
        px-6 py-8 rounded-2xl border border-transparent
        cursor-default
        transition-all duration-300 ease-in-out
        hover:-translate-y-2
        hover:border-violet-500/40
        hover:bg-violet-600/10
      "
    >
      {/* Icon circle */}
      <div
        className="
          mb-6 w-[72px] h-[72px] rounded-full flex items-center justify-center
          bg-violet-600/10
          transition-all duration-300
          group-hover:bg-violet-600/25
          group-hover:scale-110
          group-hover:rotate-[-4deg]
        "
      >
        <Icon
          size={30}
          className="text-violet-400 transition-colors duration-300 group-hover:text-violet-300"
          strokeWidth={1.7}
        />
      </div>

      {/* Title */}
      <h3
        className="
          text-white font-extrabold text-[13px] tracking-[0.14em]
          uppercase mb-3
          transition-colors duration-300
          group-hover:text-violet-300
        "
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed max-w-xs transition-colors duration-300 group-hover:text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default function SeoExpertise() {
  return (
    <section
      className="w-full bg-[#1c1c1e] py-16 px-4"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
      `}</style>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[0.1em] uppercase mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Our Expertise in SEO Services
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Increase your web traffic with our expert SEO services. Here's how we can help:
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.title} {...service} index={i} />
        ))}
      </div>
    </section>
  );
}