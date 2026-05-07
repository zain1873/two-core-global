import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import WebsiteDevelopment from './pages/websiteDevelopment';
import SeoPage from "./pages/SeoPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/seo-services" element={<SeoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}