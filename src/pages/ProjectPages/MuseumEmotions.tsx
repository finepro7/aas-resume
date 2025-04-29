import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MuseumEmotionsProject = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        // Play if in view on mobile
        if (entry.isIntersecting && window.innerWidth <= 768) {
          iframe.contentWindow?.postMessage('{"method":"play"}', "*");
        } else if (window.innerWidth <= 768) {
          iframe.contentWindow?.postMessage('{"method":"pause"}', "*");
        }
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);
  // Reveal animations on scroll
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
              Museum of Emotions | Exhibition
            </h1>

            <div className="flex flex-wrap gap-3 mb-8 reveal stagger-1">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                Exhibition
              </span>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                Interactive
              </span>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                Experience Design
              </span>
            </div>
          </div>

          <div className="relative mb-16 reveal stagger-2">
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/outro.jpg"
                alt="Museum of Emotions Exhibition"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-3">
              <h2 className="text-2xl font-serif font-medium mb-6">
                Project Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                Buildner is a global platform that organizes architecture
                competitions aimed at fostering innovation and creativity within
                the architectural community. With over a decade of experience,
                Buildner has successfully conducted more than 155 competitions,
                attracting a diverse network of architects and designers
                worldwide.
              </p>
              <p className="text-muted-foreground mb-6">
                Museum of Emotions Competition The Museum of Emotions is an
                annual international design competition hosted by Buildner.
                Participants are challenged to design a conceptual museum
                comprising two exhibition halls: one intended to evoke positive
                emotions and the other negative emotions. The competition
                emphasizes the use of architectural elements—such as spatial
                scale, color, lighting, and materials—to elicit emotional
                responses from visitors. Key Features: Silent Competition:
                Submissions must communicate ideas solely through visuals,
                without any accompanying text, annotations, or labels. Buildner
                Competitions & Awards Open Interpretation: Participants have the
                freedom to choose any site (real or imaginary) and define the
                specific emotions they wish to explore, such as fear, anger,
                love, or happiness. Global Participation: The competition
                attracts entries from around the world, evaluated by an
                international jury comprising architects, designers, and
                artists. Buildner Competitions & Awards
              </p>
              <p className="text-muted-foreground">
                Conceptual Framework: The Museum of Emotions invited us to
                spatially interpret two contrasting emotions through
                architectural language. Our team chose to explore Captivity and
                Freedom—not simply as opposites, but as emotional states deeply
                intertwined through human experience. Captivity was seen not
                just as physical confinement, but as a cumulative representation
                of negative emotional landscapes: fear, imprisonment,
                suppression, authoritarian power, and internal misery. Freedom,
                by contrast, was not merely the absence of restraint—it was
                redefined as emotional release, expansiveness, and lightness.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 reveal stagger-5">
            {/* frame-1 */}
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/c-front.jpg"
                alt="Museum exhibit - Joy room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/c-inside.jpg"
                alt="Museum exhibit - Interactive display"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-muted-foreground mb-6">
              Design Approach: To tie these opposing experiences together, we
              chose to use a shared architectural element—the Corinthian
              column—a form historically associated with grandeur, authority,
              and institutional power in the Roman era. By manipulating this
              single element, we aimed to show how context and composition can
              entirely transform meaning.
            </p>
            <p className="text-muted-foreground mb-6">
              Hall of Captivity: The Corinthian columns were narrow, towering,
              and densely packed, creating a claustrophobic rhythm that
              restricted movement and vision. The hall was placed in a low-lying
              terrain, evoking heaviness, suppression, and inescapability. Light
              was minimal and filtered, reinforcing the sense of confinement and
              emotional tension.
            </p>

            {/* frame-2 */}
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/e-cap.jpg"
                alt="Museum exhibit - Joy room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/f-en.jpg"
                alt="Museum exhibit - Interactive display"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-muted-foreground mb-6">
              The layout was linear, drawing the visitor inward with no clear
              exit—mirroring the mental loop of fear and control.
            </p>
            <p className="text-muted-foreground mb-6">
              Hall of Freedom: The same Corinthian columns were widened, spaced
              apart, and varied in height, creating openness, invitation, and
              movement. Positioned on a hilltop, this hall offered panoramic
              views, fresh light, and symbolic elevation—physically and
              emotionally.
            </p>

            {/* frame-3 */}
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/f-top.jpg"
                alt="Museum exhibit - Joy room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/f-r.jpg"
                alt="Museum exhibit - Interactive display"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-muted-foreground mb-6">
              The spatial narrative reversed here—movement was circular and
              open-ended, offering choice and perspective rather than
              containment.
            </p>
            <p className="text-muted-foreground mb-6">
              The final viewpoint from the Hall of Freedom was intentionally
              designed to offer a reflective gaze—allowing the visitor to look
              back upon the Hall of Captivity from above, symbolizing a
              triumphant transcendence over the emotional weight they once
              inhabited
            </p>
            {/* frame-4 */}
            {/* <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/ba664b_f8c7daf9bee94bfb836ea0bde2faa891~mv2.jpg/v1/fill/w_925,h_751,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_f8c7daf9bee94bfb836ea0bde2faa891~mv2.jpg"
                alt="Museum exhibit - Joy room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/ba664b_60c6abf43dcd412b9e2d4b427c5fc14a~mv2.jpg/v1/fill/w_925,h_751,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_60c6abf43dcd412b9e2d4b427c5fc14a~mv2.jpg"
                alt="Museum exhibit - Interactive display"
                className="w-full h-full object-cover"
              />
            </div> */}
            {/* <p className="text-muted-foreground mb-6">
              The Museum of Emotions is an immersive exhibition design that
              explores the spectrum of human emotions through interactive
              installations, sensory experiences, and thoughtful spatial design.
              The project aims to create a space where visitors can explore,
              identify, and understand different emotional states while creating
              meaningful interactions.
            </p>
            <p className="text-muted-foreground mb-6">
              Each room in the exhibition is dedicated to a specific emotion,
              featuring unique visual, auditory, and tactile elements that evoke
              and represent that particular feeling. From joy to melancholy,
              anger to serenity, the museum offers a journey through the
              complexity of human emotional experiences.
            </p> */}
          </div>
          {/* <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-7">
            <img
              src="https://static.wixstatic.com/media/ba664b_10e29d4f7f3c4d3c90f95c3f6b673386~mv2.jpg/v1/fill/w_1899,h_809,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_10e29d4f7f3c4d3c90f95c3f6b673386~mv2.jpg"
              alt="Full museum exhibition hall"
              className="w-full h-full object-cover"
            />
          </div> */}

          <div className="mb-16 reveal stagger-6">
            <h2 className="text-2xl font-serif font-medium mb-6">
              Design Philosophy
            </h2>
            <p className="text-muted-foreground mb-6">
              This project was an exercise in emotional storytelling through
              space—demonstrating how architecture, when stripped of excessive
              ornamentation, can still convey complex psychological states. It
              explored the question: How can we use repetition, placement, and
              proportion to evoke contrasting inner worlds?
            </p>
            <p className="text-muted-foreground mb-6">
              he Museum of Emotions did not merely house emotions; it
              transformed the visitor into a participant in an emotional
              journey—moving from oppression to liberation, from darkness to
              light, from captivity to freedom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 reveal stagger-5">
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/p-1.png"
                alt="Museum exhibit - Joy room"
                className="w-full h-full object-contain object-center bg-white"
              />
            </div>

            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/p-2.png"
                alt="Museum exhibit - Interactive display"
                className="w-full h-full object-contain object-center bg-white"
              />
            </div>
            {/* frame-2 */}
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/p-3.jpg"
                alt="Museum exhibit - Joy room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/assets/musuem/p-4.jpg"
                alt="Museum exhibit - Interactive display"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-16">
            Multiple iterations were crafted using thermocol models to explore
            spatial planning and emotional transitions. Through this process,
            the column emerged not just as a structural element, but as a
            central aesthetic and conceptual anchor for the museum’s narrative.
          </p>

          {/* <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <iframe
              ref={iframeRef}
              src="https://vimeo.com/1079977373"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
              title="Vimeo video"
            />
          </div> */}

          <div className="reveal stagger-4 mb-16">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Project Details</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Client</span>
                  <span className="font-medium">Buildner</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Timeline</span>
                  <span className="font-medium">3 months</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">2023</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">Exhibition</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Role</span>
                  <span className="font-medium">
                    Conceptual artist & Experience designer
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center reveal stagger-8">
            <h2 className="text-2xl font-serif font-medium mb-6">
              Next Project
            </h2>
            <div className="inline-block">
              <Link
                to="/project/manastik"
                className="group inline-flex items-center space-x-2 text-lg hover:text-primary transition-colors"
              >
                <span>Manastik</span>
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

export default MuseumEmotionsProject;
