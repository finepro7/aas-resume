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

    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
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
            {[1, 2].map((i) => (
              <div
                className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-muted"
                key={i}
              >
                <img
                  src="/lovable-uploads/ebc115e1-483b-42cf-9185-31eb45b574cb.png"
                  alt={`Araku Coffee Branding ${i}`}
                  className="w-full h-full object-cover"
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
                Araku Coffee is a premium coffee brand with a commitment to
                sustainability and quality. The branding project aimed to
                reflect their unique identity and values while creating a
                distinctive visual language.
              </p>
              <p className="text-muted-foreground">
                The project encompassed a comprehensive brand identity system
                including logo design, packaging, color palette development,
                typography selection, and brand guidelines that would resonate
                with their target audience.
              </p>
              <p className="text-muted-foreground">
                The design approach focused on combining contemporary aesthetics
                with organic elements that represent the coffee's origin and the
                brand's sustainable practices.
              </p>
            </div>
            <div className="lg:col-span-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <img
                src="/assets/coffee.png"
                alt="Araku Coffee Branding"
                className="w-48 sm:w-56 h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Two Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 reveal stagger-5">
            {["/assets/box-under.png", "/assets/moe.png"].map((src, i) => (
              <div
                className="aspect-[4/3] md:aspect-[4/2.5] bg-white rounded-lg overflow-hidden flex items-center justify-center p-4"
                key={i}
              >
                <img
                  src={src}
                  alt={`Araku branding ${i}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-16 reveal stagger-6 space-y-6">
            <h2 className="text-2xl font-serif font-medium">The Process</h2>
            <p className="text-muted-foreground">
              The project began with an extensive research phase that involved
              understanding Araku Coffee's unique story, values, and market
              positioning. This included analyzing competitors and identifying
              opportunities to create a distinctive brand identity.
            </p>
            <p className="text-muted-foreground">
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
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div
                  className="aspect-[4/5] bg-muted rounded-lg overflow-hidden"
                  key={i}
                >
                  <img
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
                    alt={`Process step ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-16 reveal stagger-7">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Project Details</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["Client", "Araku Coffee"],
                  ["Timeline", "3 months"],
                  ["Year", "2022"],
                  ["Category", "Branding"],
                  ["Role", "Lead Designer"],
                ].map(([label, value]) => (
                  <li className="flex justify-between" key={label}>
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 360 Image Viewer */}
          <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-8">
            <img
              ref={rotatingImageRef}
              src="/"
              alt="Araku coffee branding 360 showcase"
              className="w-full h-full object-contain pointer-events-none"
            />
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
