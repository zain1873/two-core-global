import { Routes, Route } from "react-router-dom";
import "./css/global.css";
import { FaWhatsapp } from "react-icons/fa";
import Home from "./pages/home";
import WebsiteDevelopment from "./pages/websiteDevelopment";
import SeoPage from "./pages/SeoPage";
import ContactPage from "./pages/ContactPage";
import SemPage from "./pages/SemPage";
import AboutPage from "./pages/AboutPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import MobileDevelopmentPage from "./pages/MobileDevelopmentPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={ <AboutPage/>} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/seo-services" element={<SeoPage />} />
        <Route path="/sem-services" element={<SemPage />} />
        <Route path="/social-media-services" element={<SocialMediaPage />} />
        <Route path="/mobile-app-development" element={<MobileDevelopmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>








      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}