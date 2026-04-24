import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AnimalsSection from "./sections/AnimalsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <a
        href="#main-content"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "0";
          e.currentTarget.style.width = "auto";
          e.currentTarget.style.height = "auto";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
          e.currentTarget.style.width = "1px";
          e.currentTarget.style.height = "1px";
        }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AnimalsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
