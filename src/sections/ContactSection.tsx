import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" style={{ padding: "80px 24px", background: "#1a3a2a", color: "#fff" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "12px", textAlign: "center" }}>
          Get Involved
        </h2>
        <p style={{ color: "#9ec8b0", fontSize: "16px", textAlign: "center", marginBottom: "40px" }}>
          Volunteer with us, sponsor an animal, or just say hello. Every message matters.
        </p>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px", background: "#0d2b1a", borderRadius: "12px" }}>
            <p style={{ fontSize: "24px", marginBottom: "8px" }}>🌿</p>
            <p style={{ fontSize: "18px", fontWeight: "600" }}>Thank you for reaching out!</p>
            <p style={{ color: "#9ec8b0", marginTop: "8px" }}>We'll be in touch within 2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* VIOLATION: label — input with no associated label (placeholder only) */}
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #2d5c3a",
                background: "#0d2b1a",
                color: "#fff",
                fontSize: "15px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />

            {/* VIOLATION: label — input with no associated label (placeholder only) */}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #2d5c3a",
                background: "#0d2b1a",
                color: "#fff",
                fontSize: "15px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />

            {/* VIOLATION: label — select with no associated label */}
            <select
              name="interest"
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #2d5c3a",
                background: "#0d2b1a",
                color: "#fff",
                fontSize: "15px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <option value="">How would you like to help?</option>
              <option value="volunteer">Volunteer on-site</option>
              <option value="sponsor">Sponsor an animal</option>
              <option value="donate">Make a donation</option>
              <option value="media">Media & press inquiry</option>
            </select>

            {/* VIOLATION: label — textarea with no associated label (placeholder only) */}
            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #2d5c3a",
                background: "#0d2b1a",
                color: "#fff",
                fontSize: "15px",
                width: "100%",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />

            {/* VIOLATION: button-name — submit button contains only an SVG with no text or aria-label */}
            <button
              type="submit"
              style={{
                background: "#2d8a55",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "14px 28px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>

            {/* VIOLATION: frame-title — iframe embedded with no title attribute */}
            <div style={{ marginTop: "16px", borderRadius: "8px", overflow: "hidden" }}>
              <p style={{ color: "#9ec8b0", fontSize: "14px", marginBottom: "8px" }}>Find us here:</p>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-2.5%2C51.4%2C-2.3%2C51.5&amp;layer=mapnik"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
