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
          top: "8px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          zIndex: 9999,
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "8px";
          e.currentTarget.style.width = "auto";
          e.currentTarget.style.height = "auto";
          e.currentTarget.style.overflow = "visible";
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.color = "#1a3a2a";
          e.currentTarget.style.padding = "8px 16px";
          e.currentTarget.style.borderRadius = "4px";
          e.currentTarget.style.fontWeight = "600";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
          e.currentTarget.style.width = "1px";
          e.currentTarget.style.height = "1px";
          e.currentTarget.style.overflow = "hidden";
          e.currentTarget.style.background = "";
          e.currentTarget.style.color = "";
          e.currentTarget.style.padding = "";
          e.currentTarget.style.borderRadius = "";
          e.currentTarget.style.fontWeight = "";
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
