import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ManastikProject = () => {
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
              Manastik | Interaction Design
            </h1>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 reveal stagger-1">
              {["UI/UX"].map((tag, i) => (
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
          {/* <div className="relative mb-16 reveal stagger-2">
            <div className="w-full bg-muted rounded-lg overflow-hidden flex items-center justify-center ">
              <img
                src="/assets/manastik/artboard.jpg"
                alt="Manastik Editorial Design"
                className="w-full h-auto object-contain "
              />
            </div>
          </div> */}

          {/* Project Overview */}
          <div className="grid grid-cols-1 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-4">
              <h2 className="text-xl sm:text-2xl font-serif font-medium mb-6">
                Project Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                Manastik was conceived as a comprehensive digital support tool
                for individuals living with dementia—a condition marked by
                memory loss, confusion, and increasing difficulty with daily
                tasks. The goal was to create an app that felt less like a
                clinical utility and more like a familiar, reassuring companion,
                helping users navigate their day with clarity and ease.
              </p>
              <p className="text-muted-foreground">
                Special attention was given to paper selection, binding methods,
                and print finishes to enhance the tactile experience of the
                zine, complementing the visual design with physical elements.
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
                  src={`/assets/manastik/${num}.jpeg`}
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
                Design Philosophy: The challenge was to balance accessibility
                with empathy. Every design decision was filtered through the
                lens of cognitive comfort: Minimal Cognitive Load: The interface
                was intentionally clean, icon-driven, and color-coded to avoid
                overwhelm and aid recognition.
              </p>
              <p className="text-muted-foreground">
                Familiarity & Routine: Key features like reminders, emergency
                contacts, navigation support, and memory cues were visually and
                functionally designed to reflect routine touchpoints. Emotional
                Grounding: Visuals, language, and flow were crafted to reduce
                anxiety—creating a digital environment that remembers when they
                can’t.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 reveal stagger-5">
              {[5, 6, 7, 8].map((num) => (
                <div
                  key={num}
                  className="w-full bg-white rounded-lg overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={`/assets/manastik/${num}.jpeg`}
                    alt={`Preview ${num}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground mb-16">
            <strong>Key features</strong>
            <br />
            <br />
            1. <strong>Quick Access Dashboard:</strong> With essential tasks
            like medication, appointments, and SOS at the forefront.
            <br />
            <br />
            2. <strong>Memory Aid Module:</strong> A space where caregivers can
            upload photos, voice notes, or short texts tied to people, places,
            or objects to help trigger recognition.
            <br />
            <br />
            3. <strong>Location & Safety Tools:</strong> Simple GPS tracking and
            geofenced alerts ensure patient safety while respecting autonomy.
            <br />
            <br />
            4. <strong>Therapy & Emotion Tracker:</strong> Integrated journaling
            or emotional tagging to help track mood patterns over time, offering
            insights to caregivers and doctors.
          </p>
          <p className="text-muted-foreground mb-16">
            Designing for dementia is not about solving—it’s about supporting.
            It’s about designing for dignity, memory, and emotional anchoring in
            a world that often feels like it’s slipping away.
          </p>

          {/* Final Full-Width Image */}
          {/* <div className="w-full bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-7 flex items-center justify-center">
            <img
              src="/assets/manastik/artboard.jpg"
              alt="Manastik complete spread"
              className="w-full h-auto object-contain"
            />
          </div> */}

          {/* Project Details */}
          <div className="mb-16 reveal stagger-7">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Project Details</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["Client", "Manastik"],
                  ["Timeline", "3 months"],
                  ["Year", "2023"],
                  ["Category", "Interaction Design"],
                  ["Role", "UI/UX Designer & Researcher"],
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
            <h2 className="text-2xl font-serif font-medium mb-6">
              Next Project
            </h2>
            <div className="inline-block">
              <Link
                to="/project/araku"
                className="group inline-flex items-center space-x-2 text-lg hover:text-primary transition-colors"
              >
                <span>Araku Coffee | Branding</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManastikProject;
