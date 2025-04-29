// src/pages/ArakuProject.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import arkau from "../../assets/arkau.jpg";

const ArakuProject = () => {
  const rotatingImageRef = useRef<HTMLImageElement | null>(null);
  const frameCount = 36;
  let currentFrame = 0;
  let scrollTimeout: NodeJS.Timeout;
  let is360Visible = false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateImage = (frame: number) => {
      const index = String(frame + 1).padStart(4, "0");
      if (rotatingImageRef.current) {
        rotatingImageRef.current.src = `/lovable-uploads/araku360/image${index}.png`;
      }
    };

    const onScroll = (e: WheelEvent) => {
      if (!is360Visible) return;

      clearTimeout(scrollTimeout);
      currentFrame += e.deltaY > 0 ? 1 : -1;
      if (currentFrame < 0) currentFrame = frameCount - 1;
      if (currentFrame >= frameCount) currentFrame = 0;
      updateImage(currentFrame);

      scrollTimeout = setTimeout(() => {
        currentFrame = 0;
        updateImage(currentFrame);
      }, 1000);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          is360Visible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    if (rotatingImageRef.current) {
      observer.observe(rotatingImageRef.current);
    }

    window.addEventListener("wheel", onScroll);
    return () => {
      window.removeEventListener("wheel", onScroll);
      if (rotatingImageRef.current) {
        observer.unobserve(rotatingImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        }),
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));
    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-10">
            <Link
              to="/#projects"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Projects
            </Link>

            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6 reveal">
              Araku Coffee | Branding
            </h1>

            <div className="flex flex-wrap gap-3 mb-8 reveal stagger-1">
              {["Branding", "Logo Design", "Packaging"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 reveal stagger-2">
            {["/assets/ya.png", "/assets/ya2.png"].map((src, i) => (
              <div
                className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-muted flex items-center justify-center"
                key={i}
              >
                <img
                  src={src}
                  alt={`Araku Coffee Branding ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-3 space-y-6">
              <h2 className="text-2xl font-serif font-medium">
                Project Overview
              </h2>
              <p className="text-muted-foreground">
                This project emerged from a collaboration with the Naandi
                Foundation, guided by its CEO, Manoj Kumar—an individual who has
                lived among and worked closely with the tribal communities of
                Araku Valley. His efforts were instrumental in helping the
                indigenous communities recognize the richness of their terroir
                and transform coffee cultivation into a means of self-reliance
                and pride. Through this collaboration, the Araku brand was born,
                now expanding both in India and internationally.
                <br />
                <br />
                There were two directions to be looked upon:
                <br />
                1. <strong>The backend</strong>, focusing on rebuilding
                relationships between local coffee-growing cooperatives and
                internal stakeholders such as Trivar.
                <br />
                2. <strong>The frontend</strong>, centered on redefining the
                relationship between the customer and the Araku brand.
              </p>

              <p className="text-muted-foreground">
                Design Positioning: This project quickly evolved into more than
                a branding exercise. It presented a critical reflection on the
                role of design in socio-ecological ecosystems. Working in a
                context so deeply rooted in indigenous culture raised complex
                questions: What does it mean to design for a community one is
                not a part of? Can visual design genuinely give voice or agency,
                or does it risk oversimplification? The concern was not merely
                aesthetic—it was ethical.
              </p>
              <p className="text-muted-foreground">
                Design Direction: After extensive reflection, the decision was
                made to engage with the packaging system—not as a surface-level
                branding tool, but as a vehicle for storytelling. The intent was
                to craft a sensory, narrative-rich packaging experience that
                would bridge the emotional and ecological gap between the
                consumer and the land of Araku. .
              </p>
            </div>
          </div>

          {/* Two Images Section (Updated) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 reveal stagger-5">
            {["/assets/box-under.png", "/assets/i-1.png"].map((src, i) => (
              <div
                key={i}
                className="w-full rounded-lg overflow-hidden bg-white"
              >
                <img
                  src={src}
                  alt={`Araku branding ${i}`}
                  className="w-full h-auto object-cover bg-white"
                />
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-16 reveal stagger-6 space-y-6">
            <h2 className="text-2xl font-serif font-medium">The Process</h2>
            <p className="text-muted-foreground">
              Immersive Research: A study of Araku’s terroir, tribal histories,
              and the socio-economic transformation led by Naandi. Ethnographic
              Insights: Extracted from conversations and case studies shared by
              Manoj Kumar, offering a lens into the intimate connection between
              land, labor, and livelihood. Design Exploration: Focused on
              developing a visual language rooted in the soil, climate, and
              culture of Araku—translating these elements into colors, textures,
              materials, and forms. Material Choices: Prioritized sustainable,
              tactile materials that evoke a connection to the earth and signal
              the ecological ethos of the community. Narrative Integration:
              Designed with layered storytelling in mind—allowing the consumer
              to not only consume, but also connect, understand, and appreciate
              the origin of what’s in their hands
            </p>
            {/* <p className="text-muted-foreground">
              Following the research, multiple design concepts were developed
              and refined based on client feedback. The selected direction
              emphasizes clean, modern aesthetics with organic elements that
              highlight the brand's connection to nature and sustainability.
            </p>
            <p className="text-muted-foreground">
              The final deliverables included a comprehensive brand identity
              system with logo variations, packaging designs, typography
              guidelines, and a color palette that reflects the premium nature
              of the product while connecting to its origins.
            </p> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "/assets/araku/p1.jpg",
                "/assets/araku/p2.jpg",
                "/assets/araku/p3.jpg",
                "/assets/araku/p4.jpg",
                "/assets/araku/p5.jpg",
                "/assets/araku/p6.jpg",
                "/assets/araku/p7.jpg",
                "/assets/araku/p8.jpg",
              ].map((src, i) => (
                <div
                  className="aspect-[4/5] bg-muted rounded-lg overflow-hidden flex items-center justify-center"
                  key={i}
                >
                  <img
                    src={src}
                    alt={`Process step ${i + 1}`}
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 360 Image Viewer */}
          {/* <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-8">
            <img
              ref={rotatingImageRef}
              src="/assets/pg.png"
              alt="Araku coffee branding 360 showcase"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div> */}
          <p className="text-muted-foreground mb-16">
            The final packaging concept was positioned as a bridge—a vessel of
            memory, place, and purpose. It served not just to house a product,
            but to embody a story of regeneration, dignity, and
            interconnectedness. It offered a quiet, respectful invitation for
            the consumer to become part of a larger ecosystem of change.
          </p>
          <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-7 flex items-center justify-center">
            <img
              src="/assets/pg.png"
              alt="Zine complete spread"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Project Details */}
          <div className="mb-16 reveal stagger-7">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Project Details</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["Client", "Araku Coffee"],
                  ["Timeline", "1 month"],
                  ["Year", "2022"],
                  ["Category", "Branding"],
                  ["Role", "Designer"],
                ].map(([label, value]) => (
                  <li className="flex justify-between" key={label}>
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Project */}
          <div className="text-center reveal stagger-9">
            <h2 className="text-2xl font-serif font-medium mb-6">
              Next Project
            </h2>
            <div className="inline-block">
              <Link
                to="/project/zine"
                className="group inline-flex items-center space-x-2 text-lg hover:text-primary transition-colors"
              >
                <span>Zine</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArakuProject;
