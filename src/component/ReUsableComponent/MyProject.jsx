import { useState } from "react";
import img1 from "../../assets/projects/1.jpg"
import img2 from "../../assets/projects/2.jpg"
import img3 from "../../assets/projects/3.jpg"
import img4 from "../../assets/projects/4.jpg"
import img5 from "../../assets/projects/5.jpg";
import img6 from "../../assets/projects/6.jpg";
import img7 from "../../assets/projects/7.jpg";
import img8 from "../../assets/projects/8.jpg";
import img9 from "../../assets/projects/9.jpg";
import "./Projects.css";

// ✏️ Add / edit your completed projects here. Nothing else needs to change.
const projects = [
  {
    id: 1,
    title: "Golden Leaf Motel",
    category: "Bootstrap",
    description:
      "Responsive website for an Australian motel with room details, amenities and easy booking enquiries.",
    image: img1,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://www.goldenleafmotel.com.au/",
  },
  {
    id: 2,
    title: "Archie's Kids",
    category: "Bootstrap",
    description:
      "Colourful, family-friendly website for a New Zealand kids' business, built to be fast and mobile-first.",
    image: img2,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://www.archieskids.co.nz/",
    
  },
  {
    id: 3,
    title: "Electric L",
    category: "Bootstrap",
    description:
      "Professional services website presenting the company's work, expertise and contact details clearly.",
    image: img3,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://www.electricl.co.nz/",
    
  },
  {
    id: 4,
    title: "Natural Honey Ltd",
    category: "Bootstrap",
    description:
      "Clean product-focused website showcasing natural honey products with a warm, trustworthy design.",
    image: img4,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://www.naturalhoneyltd.com/",
    
  },
  {
    id: 5,
    title: "NZMSA",
    category: "Wordpress",
    description:
      "Organisation website with structured pages for services, information and member enquiries.",
    image: img5,
    tech: ["WordPress", "Elementor", "CSS"],
    live: "https://nzmsa.co.nz/",
    
  },
  {
    id: 6,
    title: "Go Waste",
    category: "Wordpress",
    description: "Website showcasing waste bin rental, leasing, and waste collection services.",
    image: img6,
    tech: ["WordPress", "Beaver Builder", "CSS"],
    live: "https://www.gowaste.co.nz/",
    
  },
  {
    id: 7,
    title: "KMCG Constructions",
    category: "Wordpress",
    description:
      "Corporate website for a construction company featuring services, projects and a clear contact flow.",
    image: img7,
    tech: ["WordPress", "Beaver Builder", "CSS"],
    live: "https://kmcgconstructions.com/",
    
  },
  {
    id: 8,
    title: "McKinney Marine",
    category: "Wordpress",
    description:
      "Marine business website with a strong visual layout, service pages and mobile-friendly navigation.",
    image: img8,
    tech: ["WordPress", "Beaver Builder", "CSS"],
    live: "https://mckinneymarine.com/",
    
  },
  {
    id: 9,
    title: "Shanah's",
    category: "Wordpress",
    description:
      "Responsive business website with a clean layout, clear content sections and easy customer contact.",
    image: img9,
    tech: ["WordPress", "Elementor", "WooCommerce"],
    live: "https://www.shanahs.com/",
    
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <h2 className="projects__title">My Projects</h2>
        <p className="projects__subtitle">
          A selection of websites and applications I have designed and built for
          clients and personal practice.
        </p>

        <div className="projects__tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`projects__tab ${active === cat ? "is-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map((p) => (
            <article className="project-card" key={p.id}>
              <div className="project-card__media">
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                {/* <span className="project-card__badge">{p.category}</span> */}
              </div>

              <div className="project-card__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <ul className="project-card__tech">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-card__links">
                  {p.live && (
                    <a
                      className="btn btn--primary"
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}