import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const labelStyle: React.CSSProperties = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    whiteSpace: "nowrap",
    border: 0,
  };

  return (
    <section id="contact" style={{ padding: "80px 24px", background: "#1a3a2a", color: "#fff" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "12px", textAlign: "center" }}>
          Get Involved
        </h2>
        <p style={{ color: "#c8e8d4", fontSize: "16px", textAlign: "center", marginBottom: "40px" }}>
          Volunteer with us, sponsor an animal, or just say hello. Every message matters.
        </p>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px", background: "#0d2b1a", borderRadius: "12px" }}>
            <p style={{ fontSize: "24px", marginBottom: "8px" }}>🌿</p>
            <p style={{ fontSize: "18px", fontWeight: "600" }}>Thank you for reaching out!</p>
            <p style={{ color: "#c8e8d4", marginTop: "8px" }}>We'll be in touch within 2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Fixed: label — added visually-hidden label for name input */}
            <label htmlFor="contact-name" style={labelStyle}>Your full name</label>
            <input
              id="contact-name"
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

            {/* Fixed: label — added visually-hidden label for email input */}
            <label htmlFor="contact-email" style={labelStyle}>Email address</label>
            <input
              id="contact-email"
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

            {/* Fixed: select-name — added associated label for interest select */}
            <label htmlFor="contact-interest" style={labelStyle}>How would you like to help?</label>
            <select
              id="contact-interest"
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
              <option value="media">Media &amp; press inquiry</option>
            </select>

            {/* Fixed: label — added visually-hidden label for message textarea */}
            <label htmlFor="contact-message" style={labelStyle}>Your message</label>
            <textarea
              id="contact-message"
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

            {/* Fixed: button-name — added visible text to submit button */}
            <button
              type="submit"
              style={{
                background: "#1a5c35",
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
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </button>

            {/* Fixed: frame-title — added title attribute to iframe */}
            <div style={{ marginTop: "16px", borderRadius: "8px", overflow: "hidden" }}>
              <p style={{ color: "#c8e8d4", fontSize: "14px", marginBottom: "8px" }}>Find us here:</p>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-2.5%2C51.4%2C-2.3%2C51.5&amp;layer=mapnik"
                width="100%"
                height="200"
                title="Map showing Wildlife Sanctuary location"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
