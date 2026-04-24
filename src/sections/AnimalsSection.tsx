import { useState } from "react";

// Inline SVG placeholders — no external image requests so networkidle is reached quickly
const ANIMAL_SVGS: Record<string, string> = {
  aardvark:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23c8a97e' width='400' height='200'/%3E%3Cellipse cx='200' cy='130' rx='90' ry='55' fill='%23a07850'/%3E%3Cellipse cx='290' cy='110' rx='30' ry='20' fill='%23a07850'/%3E%3Cellipse cx='320' cy='95' rx='8' ry='22' fill='%238b6340'/%3E%3Ccircle cx='305' cy='108' r='5' fill='%23333'/%3E%3Cellipse cx='140' cy='175' rx='15' ry='8' fill='%238b6340'/%3E%3Cellipse cx='170' cy='178' rx='15' ry='8' fill='%238b6340'/%3E%3Cellipse cx='230' cy='178' rx='15' ry='8' fill='%238b6340'/%3E%3Cellipse cx='260' cy='175' rx='15' ry='8' fill='%238b6340'/%3E%3C/svg%3E",
  rhino:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%238fa89e' width='400' height='200'/%3E%3Cellipse cx='200' cy='130' rx='110' ry='60' fill='%236e8880'/%3E%3Cellipse cx='310' cy='115' rx='45' ry='35' fill='%236e8880'/%3E%3Crect x='305' y='85' width='10' height='25' fill='%234a5c58' rx='3'/%3E%3Ccircle cx='330' cy='110' r='6' fill='%23333'/%3E%3Cellipse cx='130' cy='175' rx='18' ry='10' fill='%235a706a'/%3E%3Cellipse cx='165' cy='178' rx='18' ry='10' fill='%235a706a'/%3E%3Cellipse cx='235' cy='178' rx='18' ry='10' fill='%235a706a'/%3E%3Cellipse cx='270' cy='175' rx='18' ry='10' fill='%235a706a'/%3E%3C/svg%3E",
  "sea-turtle":
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%2327648a' width='400' height='200'/%3E%3Cellipse cx='200' cy='115' rx='80' ry='55' fill='%233d8c5e'/%3E%3Cellipse cx='200' cy='115' rx='60' ry='42' fill='%232d7a50'/%3E%3Ccircle cx='290' cy='95' rx='22' ry='14' fill='%233d8c5e'/%3E%3Ccircle cx='305' cy='92' r='4' fill='%23111'/%3E%3Cellipse cx='130' cy='105' rx='35' ry='12' fill='%233d8c5e' transform='rotate(-20 130 105)'/%3E%3Cellipse cx='270' cy='105' rx='35' ry='12' fill='%233d8c5e' transform='rotate(20 270 105)'/%3E%3Cellipse cx='145' cy='155' rx='25' ry='10' fill='%233d8c5e' transform='rotate(15 145 155)'/%3E%3Cellipse cx='255' cy='155' rx='25' ry='10' fill='%233d8c5e' transform='rotate(-15 255 155)'/%3E%3C/svg%3E",
};

const ANIMALS = [
  {
    id: "aardvark",
    name: "Aardvark",
    status: "Least Concern",
    statusColor: "#2d8a55",
    description:
      "The aardvark is a nocturnal mammal native to Africa. Despite its pig-like snout and rabbit-like ears, it is the only living species in its order. It digs burrows with powerful claws and feeds almost exclusively on ants and termites.",
    fact: "An aardvark can eat up to 50,000 insects in a single night.",
  },
  {
    id: "rhino",
    name: "White Rhinoceros",
    status: "Near Threatened",
    statusColor: "#c47d0e",
    description:
      "The white rhinoceros is the largest rhino species and the second-largest land mammal on Earth. Found in southern Africa, it is a grazer that lives in grasslands and savanna. Its horn is made of keratin — the same protein as human fingernails.",
    fact: "Rhinos can run up to 30 mph (48 km/h) despite weighing over 5,000 lbs.",
  },
  {
    id: "sea-turtle",
    name: "Leatherback Sea Turtle",
    status: "Vulnerable",
    statusColor: "#b94444",
    description:
      "The leatherback is the largest turtle in the world, capable of growing over 6 feet long and weighing up to 2,000 lbs. Unlike other sea turtles, it has a leathery shell rather than a hard one. It travels thousands of miles between nesting beaches and feeding grounds.",
    fact: "Leatherbacks can dive deeper than 4,000 feet — deeper than most marine mammals.",
  },
];

export default function AnimalsSection() {
  return (
    <section id="animals" style={{ padding: "80px 24px", background: "#f5f9f6" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: "800", color: "#1a3a2a", marginBottom: "12px" }}>
          Our Animals
        </h2>
        <p style={{ textAlign: "center", color: "#4a7060", fontSize: "16px", marginBottom: "24px" }}>
          Meet the remarkable species we work to protect every day.
        </p>

        {/* Fixed: select-name — added associated <label> for the status filter select */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <label htmlFor="status-filter" style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>
            Filter by conservation status
          </label>
          <select
            id="status-filter"
            style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "14px" }}
          >
            <option value="all">All conservation statuses</option>
            <option value="concern">Least Concern</option>
            <option value="threatened">Near Threatened</option>
            <option value="vulnerable">Vulnerable</option>
          </select>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "28px" }}>
          {ANIMALS.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        {/* Fixed: label — added visually-hidden label for search input */}
        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <label htmlFor="animal-search" style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>
            Search animals
          </label>
          <input
            id="animal-search"
            type="search"
            placeholder="Search animals..."
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "15px",
              width: "300px",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function AnimalCard({ animal }: { animal: typeof ANIMALS[0] }) {
  const [saved, setSaved] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* Fixed: image-alt — added descriptive alt text for each animal image */}
      <img
        src={ANIMAL_SVGS[animal.id]}
        alt={`Illustration of a ${animal.name}`}
        style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
      />

      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1a3a2a", margin: 0 }}>
            {animal.name}
          </h3>
          <span
            style={{
              fontSize: "12px",
              fontWeight: "600",
              padding: "3px 8px",
              borderRadius: "12px",
              background: animal.statusColor + "22",
              color: animal.statusColor,
            }}
          >
            {animal.status}
          </span>
        </div>

        <p style={{ color: "#4a7060", fontSize: "14px", lineHeight: "1.6", marginBottom: "12px" }}>
          {animal.description}
        </p>

        <div style={{ background: "#f0f7f2", borderRadius: "8px", padding: "10px 12px", marginBottom: "16px" }}>
          <p style={{ fontSize: "13px", color: "#2d6e48", margin: 0 }}>
            <strong>Did you know?</strong> {animal.fact}
          </p>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          {/* Fixed: button-name — added aria-label to icon-only save button */}
          <button
            onClick={() => setSaved(!saved)}
            aria-label={saved ? `Remove ${animal.name} from saved` : `Save ${animal.name}`}
            aria-pressed={saved}
            style={{
              background: saved ? "#2d8a55" : "#f0f7f2",
              border: "none",
              borderRadius: "6px",
              padding: "8px 10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill={saved ? "white" : "none"} stroke={saved ? "white" : "#2d6e48"} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <a
            href={`#${animal.id}`}
            style={{
              flex: 1,
              display: "inline-block",
              textAlign: "center",
              background: "#2d8a55",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
