import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setMenuOpen(false);
    }
  }

  return (
    <>
      <a
        href="#main-content"
        style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden", zIndex: 9999 }}
        onFocus={e => { e.currentTarget.style.left = "0"; e.currentTarget.style.width = "auto"; e.currentTarget.style.height = "auto"; }}
        onBlur={e => { e.currentTarget.style.left = "-9999px"; e.currentTarget.style.width = "1px"; e.currentTarget.style.height = "1px"; }}
      >
        Skip to main content
      </a>
      <nav style={{ background: "#1a3a2a", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", position: "relative" }} onKeyDown={handleKeyDown}>
        <a href="/" style={{ color: "#fff", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
          Wildlife Sanctuary
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="#animals" style={{ color: "#cde8d8", textDecoration: "none", fontSize: "15px" }}>Animals</a>
          <a href="#contact" style={{ color: "#cde8d8", textDecoration: "none", fontSize: "15px" }}>Contact</a>

          <a href="/donate" aria-label="Donate" style={{ color: "#cde8d8", textDecoration: "none", fontSize: "15px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "8px", display: "flex", alignItems: "center" }}
          >
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div style={{ position: "absolute", top: "64px", right: "24px", background: "#1a3a2a", padding: "16px", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "12px", zIndex: 10 }}>
            <a href="#animals" style={{ color: "#cde8d8" }}>Animals</a>
            <a href="#contact" style={{ color: "#cde8d8" }}>Contact Us</a>
            <a href="/newsletter" aria-label="Subscribe to newsletter" style={{ display: "block", width: "100%", height: "20px" }} />
          </div>
        )}
      </nav>
    </>
  );
}
