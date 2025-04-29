import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Project } from "@/components/ProjectCard";
import { Link } from "react-router-dom";

// Project data
const designProjects: Project[] = [
  {
    id: "araku",
    title: "Araku Coffee | Branding",
    description:
      "A comprehensive brand identity system for Araku Coffee, focusing on sustainability and premium aesthetics.",
    imageUrl: "/lovable-uploads/ebc115e1-483b-42cf-9185-31eb45b574cb.png",
    category: "Branding",
    tags: ["Branding", "Logo Design", "Packaging"],
    year: "2022",
  },
  {
    id: "zine",
    title: "Zine | Editorial Design",
    description:
      "A creative editorial design project showcasing modern typography and layout techniques for print media.",
    imageUrl: "/assets/zine/artboard.jpg",
    category: "Editorial",
    tags: ["Editorial", "Print Design", "Typography"],
    year: "2022",
  },
  {
    id: "museum-emotions",
    title: "Museum of Emotions | Exhibition",
    description:
      "An immersive exhibition design that explores human emotions through interactive installations and visual storytelling.",
    imageUrl: "/assets/musuem/outro.jpg",
    category: "Exhibition",
    tags: ["Exhibition", "Interactive", "Experience Design"],
    year: "2023",
  },
];

const ProjectCategories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6 reveal">
              Projects Portfolio
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto reveal stagger-1">
              A comprehensive collection of my work across various disciplines,
              including personal design projects and professional internship
              experiences.
            </p>
          </div>

          <div className="space-y-20 reveal stagger-3">
            <h2 className="text-2xl font-serif font-medium mb-8">
              All Projects
            </h2>

            {designProjects.map((project, index) => (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className={`order-2 lg:order-${(index % 2) + 1}`}>
                  <span className="inline-block text-sm text-muted-foreground mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif font-medium mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-sm hover:text-primary group transition-colors"
                  >
                    <span>View Project</span>
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
                <div className={`order-1 lg:order-${2 - (index % 2)}`}>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectCategories;
