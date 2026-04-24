import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ background: "#1a3a2a", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
      <a href="/" style={{ color: "#fff", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
        🌿 Wildlife Sanctuary
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <a href="#animals" style={{ color: "#cde8d8", textDecoration: "none", fontSize: "15px" }}>Animals</a>
        <a href="#contact" style={{ color: "#cde8d8", textDecoration: "none", fontSize: "15px" }}>Contact</a>
        <a href="/donate" style={{ color: "#cde8d8", textDecoration: "none", fontSize: "15px" }}>Donate</a>

        {/* VIOLATION: button-name — icon-only button with no aria-label or accessible text */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "#fff", fontSize: "22px", cursor: "pointer", padding: "8px" }}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div style={{ position: "absolute", top: "64px", right: "24px", background: "#1a3a2a", padding: "16px", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <a href="#animals" style={{ color: "#cde8d8" }}>Animals</a>
          <a href="#contact" style={{ color: "#cde8d8" }}>Contact</a>

          {/* VIOLATION: link-name — anchor with no accessible text content */}
          <a href="/newsletter" style={{ color: "#cde8d8" }}>
            {/* empty link — no text, no aria-label */}
          </a>
        </div>
      )}
    </nav>
  );
}
