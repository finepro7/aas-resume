import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ZineProject = () => {
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

      <main className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
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

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-medium mb-6 reveal">
              Zine | Editorial Design
            </h1>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 reveal stagger-1">
              {["Editorial", "Print Design", "Typography"].map((tag, i) => (
                <span
                  key={i}
                  className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mb-16 reveal stagger-2">
            <div className="w-full bg-muted rounded-lg overflow-hidden flex items-center justify-center ">
              <img
                src="/assets/zine/artboard.jpg"
                alt="Zine Editorial Design"
                className="w-full h-auto object-contain "
              />
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-4">
              <h2 className="text-xl sm:text-2xl font-serif font-medium mb-6">
                Project Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                This zine was created in collaboration with Therpaize, a
                platform that connects individuals with therapists, with the aim
                of visually articulating the often-invisible struggles of mental
                health. The concept draws inspiration from the emotional tone of
                BoJack Horseman—not directly referencing the show, but
                channeling its ability to depict complex internal states in a
                nuanced, relatable way.
              </p>
              <p className="text-muted-foreground">
                Design Language: The zine uses a dual-layered material approach
                to represent the split between emotional and physical realities.
              </p>
            </div>
          </div>

          {/* Image Grid 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 reveal stagger-3 mb-16">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="w-full bg-white rounded-lg overflow-hidden flex items-center justify-center"
              >
                <img
                  src={`/assets/zine/w${num}.jpg`}
                  alt={`Preview ${num}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Additional Text + Image Grid 2 */}
          <div className="grid grid-cols-1 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-4">
              <p className="text-muted-foreground mb-6">
                Butter paper (translucent layer): Represents the visible,
                physical self—the version others often see. 350 GSM printed
                sheet (base layer): Reveals the emotional reality—the internal
                state that remains hidden beneath the surface. Together, these
                layers create a powerful metaphor for the disconnect between how
                we appear and how we actually feel.
              </p>
              <p className="text-muted-foreground">
                Design Intention: This zine is not diagnostic or
                prescriptive—it’s a quiet companion, designed to sit with the
                reader in their emotional reality, gently nudging them toward
                self-compassion and action. It reflects the belief that mental
                health support doesn't always begin in therapy; sometimes, it
                starts with recognizing what we feel and taking one small step
                forward.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 reveal stagger-5">
              {[5, 6, 7, 8].map((num) => (
                <div
                  key={num}
                  className="w-full bg-white rounded-lg overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={`/assets/zine/c${num}.jpg`}
                    alt={`Preview ${num}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground mb-16">
            Content Narrative: The zine is structured as a gentle self-check-in
            guide. Each spread illustrates a familiar emotional state and
            proposes a small, tangible coping action: When the day slips by in
            bed – Try building a simple routine or to-do list. When your mind
            feels cluttered – Start by organizing your physical space. When
            you're stuck in comparison loops on social media – Reconnect with
            yourself by tending to a plant or revisiting a forgotten hobby. When
            you feel deeply alone, even in company – Reach out to a therapist
            through Therpaize
          </p>
          {/* Final Full-Width Image */}
          <div className="w-full bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-7 flex items-center justify-center">
            <img
              src="/assets/zine/artboard.jpg"
              alt="Zine complete spread"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Project Details */}
          <div className="mb-16 reveal stagger-7">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Project Details</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["Client", "Zine"],
                  ["Timeline", "1 month"],
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

          {/* Next Project */}
          <div className="text-center reveal stagger-8">
            <h2 className="text-xl sm:text-2xl font-serif font-medium mb-6">
              Next Project
            </h2>
            <div className="inline-block">
              <Link
                to="/project/museum-emotions"
                className="group inline-flex items-center space-x-2 text-lg hover:text-primary transition-colors"
              >
                <span>Museum Emotions</span>
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

export default ZineProject;
