import "../css/industries.css";
import automotiveIcon from "../assets/impact-indistries/AUTOMOTIVE.png";
import beautyWellnessIcon from "../assets/impact-indistries/BEAUTY AND WELLNESS.png";
import ecommerceIcon from "../assets/impact-indistries/ECOMMERCE.png";
import healthcareIcon from "../assets/impact-indistries/HEALTHCARE AND PHARMACEUTICALS.png";
import homeServiceIcon from "../assets/impact-indistries/HOME SERVICE.png";
import lawFirmsIcon from "../assets/impact-indistries/LAW FIRMS & LEGAL SERVICES.png";
import publicSectorIcon from "../assets/impact-indistries/PUBLIC SECTOR.png";
import realEstateIcon from "../assets/impact-indistries/REAL ESTATE.png";
import restaurantsCafesIcon from "../assets/impact-indistries/RESTURENTS AND CAFES.png";
import startupsIcon from "../assets/impact-indistries/STARTUPS.png";

const INDUSTRIES = [
  { label: "Automotive", icon: automotiveIcon },
  { label: "Beauty & Wellness", icon: beautyWellnessIcon },
  { label: "E-commerce", icon: ecommerceIcon },
  { label: "Healthcare & Pharmaceuticals", icon: healthcareIcon },
  { label: "Home Services", icon: homeServiceIcon },
  { label: "Law Firms & Legal Services", icon: lawFirmsIcon },
  { label: "Public Sector", icon: publicSectorIcon },
  { label: "Real Estate", icon: realEstateIcon },
  { label: "Restaurants & Cafes", icon: restaurantsCafesIcon },
  { label: "Startups", icon: startupsIcon },
];

export default function IndustriesSection() {
  return (
    <section className="ind-section">
      <div className="ind-inner">
        <p className="ind-eyebrow">Industries We Serve</p>
        <h2 className="ind-heading">Discover our Impact<br />Across Industries</h2>

        <div className="ind-grid">
          {INDUSTRIES.map((item, i) => (
            <div className="ind-item" key={i}>
              <span className="ind-icon">
                <img src={item.icon} alt={item.label} width="40" height="40" />
              </span>
              <span className="ind-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="ind-cta-wrap">
          <a href="/contact" className="ind-cta-btn">Let's Talk Business</a>
        </div>
      </div>
    </section>
  );
}
