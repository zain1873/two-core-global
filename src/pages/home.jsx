import Navbar from "../components/navbar";
import HeroVideo from "../components/banner-video";
import HeroBannerText from "../components/HeroBannerText";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBannerText />
      <HeroVideo/>
    </div>
  );
}