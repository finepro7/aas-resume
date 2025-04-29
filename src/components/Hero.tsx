import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const [consciousnessLetters, setConsciousnessLetters] = useState<string[]>([]);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Create animated letters for "consciousness"
    const word = "consciousness";
    setConsciousnessLetters(word.split(''));

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const mask = maskRef.current;

    if (!hero || !mask) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      mask.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
      mask.style.clipPath = `circle(120px at ${x}px ${y}px)`;
    };

    const handleMouseLeave = () => {
      mask.style.clipPath = 'circle(0px at 50% 50%)';
    };

    const handleMouseEnter = (e: MouseEvent) => {
      handleMouseMove(e);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);
    hero.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      hero.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* 🎯 Hover Background Mask */}
      <div 
        ref={maskRef}
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-100 ease-out"
        style={{
          backgroundImage: 'url("/hover-img.jpg")',
          backgroundSize: '200% 200%',  // important!
          backgroundPosition: '50% 50%',
          clipPath: 'circle(0px at 50% 50%)',
        }}
      ></div>

      {/* Background Decorative Layer */}
      <div className="absolute inset-0 opacity-5 parallax" data-speed="-0.1">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/5 parallax" data-speed="0.2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full border border-primary/10 parallax" data-speed="0.15"></div>
      <div className="absolute top-1/3 right-1/5 w-16 h-16 bg-secondary/80 rotate-45 parallax" data-speed="-0.1"></div>

      {/* Text Content */}
      <div 
        ref={textRef}
        className="max-w-4xl mx-auto text-center z-20 pt-16"
      >
        <span className="inline-block mb-4 text-sm font-medium tracking-widest uppercase reveal font-century letter-space">
          Portfolio
        </span>
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-century font-medium leading-tight mb-8 md:mb-10 reveal stagger-1 typography-display ${showTagline ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <div className="split-text-container">
            <span className="split-text">Design as a quest for</span>
          </div>
          <br className="hidden md:block" /> 
          <div className="flex items-center justify-center flex-wrap">
            {consciousnessLetters.map((letter, index) => (
              <span 
                key={index} 
                className="letter-float italic"
                style={{ '--index': index } as React.CSSProperties}
              >
                {letter}
              </span>
            ))}
          </div>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 reveal stagger-2">
          <span className="text-reveal">I'm a designer who combines aesthetics with functionality</span> <br/>
          <span className="text-reveal">to create memorable digital solutions.</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 reveal stagger-3">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-border rounded-full hover:bg-muted transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-muted-foreground" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

