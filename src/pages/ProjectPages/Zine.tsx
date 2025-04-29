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

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
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
                xmlns="http://www.w3.org/2000/svg"
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
              Zine | Editorial Design
            </h1>

            <div className="flex flex-wrap gap-3 mb-8 reveal stagger-1">
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
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/zine/artboard.jpg"
                alt="Zine Editorial Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-4">
              <h2 className="text-2xl font-serif font-medium mb-6">
                Project Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                This editorial design project focused on creating a contemporary
                zine that showcases modern typography and innovative layout
                techniques. The project aimed to push the boundaries of print
                design while maintaining readability and visual harmony.
              </p>
              <p className="text-muted-foreground">
                Special attention was given to paper selection, binding methods,
                and print finishes to enhance the tactile experience of the
                zine, complementing the visual design with physical elements.
              </p>
            </div>
          </div>

          {/* Image Grid 1 (Responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 reveal stagger-3 mb-16">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="w-full aspect-[4/3] bg-white rounded-lg overflow-hidden"
              >
                <img
                  src={`/assets/zine/w${num}.jpg`}
                  alt={`Preview ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Additional Text and Image Grid 2 */}
          <div className="grid grid-cols-1 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-4">
              <p className="text-muted-foreground mb-6">
                This editorial design project focused on creating a contemporary
                zine that showcases modern typography and innovative layout
                techniques. The project aimed to push the boundaries of print
                design while maintaining readability and visual harmony.
              </p>
              <p className="text-muted-foreground">
                Special attention was given to paper selection, binding methods,
                and print finishes to enhance the tactile experience of the
                zine, complementing the visual design with physical elements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 reveal stagger-5">
              {[5, 6, 7, 8].map((num) => (
                <div
                  key={num}
                  className="w-full aspect-[4/3] bg-white rounded-lg overflow-hidden"
                >
                  <img
                    src={`/assets/zine/c${num}.jpg`}
                    alt={`Preview ${num}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Final Full-Width Image */}
          <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-7">
            <img
              src="/assets/zine/artboard.jpg"
              alt="Zine complete spread"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="reveal stagger-5 lg:col-span-2">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Project Details</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Client</span>
                    <span className="font-medium">Independent Publication</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-medium">2 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-medium">2022</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">Editorial</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-medium">Art Director & Designer</span>
                  </li>
                </ul>
              </div>
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

export default ZineProject;
