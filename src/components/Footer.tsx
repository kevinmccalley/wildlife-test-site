export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#888", padding: "32px 24px", textAlign: "center" }}>
      <p style={{ marginBottom: "12px" }}>© 2025 Wildlife Sanctuary. All rights reserved.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        {/* VIOLATION: link-name — social icon links with no accessible text */}
        <a href="https://twitter.com" style={{ color: "#888", fontSize: "20px" }}>🐦</a>
        <a href="https://instagram.com" style={{ color: "#888", fontSize: "20px" }}>📸</a>
        <a href="https://facebook.com" style={{ color: "#888", fontSize: "20px" }}>👥</a>
      </div>
    </footer>
  );
}
