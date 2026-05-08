import { Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Home from "./pages/home";
import WebsiteDevelopment from "./pages/websiteDevelopment";
import SeoPage from "./pages/SeoPage";
import ContactPage from "./pages/ContactPage";
import SemPage from "./pages/SemPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <AboutPage/>} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/seo-services" element={<SeoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sem-services" element={<SemPage />} />
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