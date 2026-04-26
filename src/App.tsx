import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AnimalsSection from "./sections/AnimalsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
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
