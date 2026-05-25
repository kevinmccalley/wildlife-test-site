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
          top: "0",
          zIndex: 100,
          padding: "8px 16px",
          background: "#fff",
          color: "#000",
          textDecoration: "none",
          fontWeight: 600,
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "0";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
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
