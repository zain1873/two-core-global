import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import WebsiteDevelopment from './pages/websiteDevelopment';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
      </Routes>
    </div>
  );
}