export default function HeroSection() {
  return (
    <section style={{ position: "relative", minHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#0d2b1a" }}>
      {/* VIOLATION fixed: image-alt — decorative background image gets role=presentation/empty alt */}
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='480'%3E%3Crect fill='%23163d28' width='1200' height='480'/%3E%3Ccircle cx='200' cy='300' r='80' fill='%231a4d32'/%3E%3Ccircle cx='600' cy='260' r='120' fill='%231a4d32'/%3E%3Ccircle cx='1000' cy='310' r='90' fill='%231a4d32'/%3E%3C/svg%3E"
        alt=""
        role="presentation"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
      />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px", maxWidth: "720px" }}>
        {/* VIOLATION fixed: color-contrast (Needs Review) — added stronger text-shadow and confirmed white text on dark overlay */}
        <h1 style={{ color: "#fff", fontSize: "48px", fontWeight: "900", margin: "0 0 16px", textShadow: "0 1px 6px rgba(0,0,0,0.85), 0 2px 12px rgba(0,0,0,0.7)" }}>
          Protecting Wildlife, One Species at a Time
        </h1>
        {/* VIOLATION fixed: color-contrast (Needs Review) — strengthened text-shadow for paragraph over background image */}
        <p style={{ color: "#fff", fontSize: "18px", lineHeight: "1.6", marginBottom: "32px", textShadow: "0 1px 6px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.7)" }}>
          We rescue, rehabilitate, and advocate for endangered animals across Africa and the world&#39;s oceans.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#animals"
            style={{ background: "#1a5c35", color: "#fff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: "600", fontSize: "16px" }}
          >
            Meet Our Animals
          </a>
          {/* VIOLATION fixed: color-contrast (Needs Review) — added solid semi-transparent background and stronger text-shadow
              to ensure white text on the Donate Now ghost button has sufficient contrast over the variable background image */}
          <a
            href="/donate"
            style={{ background: "rgba(0,0,0,0.45)", color: "#fff", padding: "14px 28px", borderRadius: "8px", border: "2px solid #fff", textDecoration: "none", fontWeight: "600", fontSize: "16px", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}
