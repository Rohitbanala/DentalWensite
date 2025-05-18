import Header from "../../common_components/header/header";
import HeroSection from "./heroSection";
import "./homePage.css";
export default function HomePage() {
  return (
    <section className="home-page">
      <Header />
      <HeroSection />
    </section>
  );
}
