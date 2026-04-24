export default function HeroSection() {
  return (
    <section style={{ position: "relative", minHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#0d2b1a" }}>
      {/* Fixed: image-alt — decorative background image gets role=presentation (alt="" also acceptable) */}
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='480'%3E%3Crect fill='%23163d28' width='1200' height='480'/%3E%3Ccircle cx='200' cy='300' r='80' fill='%231a4d32'/%3E%3Ccircle cx='600' cy='260' r='120' fill='%231a4d32'/%3E%3Ccircle cx='1000' cy='310' r='90' fill='%231a4d32'/%3E%3C/svg%3E"
        alt=""
        role="presentation"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
      />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px", maxWidth: "720px" }}>
        <h1 style={{ color: "#fff", fontSize: "48px", fontWeight: "900", margin: "0 0 16px" }}>
          Protecting Wildlife, One Species at a Time
        </h1>
        <p style={{ color: "#cde8d8", fontSize: "18px", lineHeight: "1.6", marginBottom: "32px" }}>
          We rescue, rehabilitate, and advocate for endangered animals across Africa and the world's oceans.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#animals"
            style={{ background: "#2d8a55", color: "#fff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: "600", fontSize: "16px" }}
          >
            Meet Our Animals
          </a>
          {/* Fixed: link-name — added visible text to the empty donate link */}
          <a
            href="/donate"
            style={{ background: "transparent", color: "#fff", padding: "14px 28px", borderRadius: "8px", border: "2px solid #fff", textDecoration: "none", fontWeight: "600", fontSize: "16px" }}
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}
