import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useGSAP';

export function Testimonials() {
  useScrollReveal('.test-reveal');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [
    {
      name: "Marcus Vane",
      role: "Lead DevOps",
      company: "Velocity Esports",
      initials: "MV",
      color: "bg-blue-500",
      quote: "We moved 400 tournament servers to NexusForge last year. Ping dropped by 40% across the board and we haven't had a single DDoS outage since."
    },
    {
      name: "Sarah Chen",
      role: "Studio Director",
      company: "GameCraft Studios",
      initials: "SC",
      color: "bg-emerald-500",
      quote: "The auto-scaling saved our launch day. When we hit 100k concurrent players, the infrastructure expanded seamlessly. Absolute lifesavers."
    },
    {
      name: "David Kross",
      role: "Community Manager",
      company: "ShadowByte RP",
      initials: "DK",
      color: "bg-brand-violet",
      quote: "The control panel is the best I've ever used. Managing mods across 50 different instances used to take days. Now it takes 3 clicks."
    },
    {
      name: "Elena Rostova",
      role: "CTO",
      company: "Apex Networks",
      initials: "ER",
      color: "bg-orange-500",
      quote: "Their NVMe arrays are absurdly fast. Server boot times went from 4 minutes on our old host to 28 seconds on NexusForge."
    },
    {
      name: "James Holden",
      role: "Server Admin",
      company: "Titan Play",
      initials: "JH",
      color: "bg-brand-cyan",
      quote: "Support actually knows what they're talking about. I had a complex BGP routing issue at 3 AM and they fixed it in 15 minutes."
    }
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth > 768 ? 400 : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350); // check after animation
    }
  };

  return (
    <section className="py-24 bg-page-bg test-reveal overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-violet-light rounded-full blur-[120px] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">Reviews</span>
            <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6 tracking-tight">Trusted by Game Studios Worldwide</h2>
            <p className="text-xl text-text-secondary font-medium">Don't just take our word for it. Here's what the engineers running the biggest communities have to say.</p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-4 rounded-full border transition-all ${canScrollLeft ? 'border-border-subtle bg-white shadow-sm text-text-primary hover:bg-surface hover:border-brand-cyan/50' : 'border-border-subtle text-text-muted/30 cursor-not-allowed bg-surface'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-4 rounded-full border transition-all ${canScrollRight ? 'border-border-subtle bg-white shadow-sm text-text-primary hover:bg-surface hover:border-brand-cyan/50' : 'border-border-subtle text-text-muted/30 cursor-not-allowed bg-surface'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="snap-center shrink-0 w-[85vw] md:w-[450px] bg-surface border border-border-subtle shadow-md p-10 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-brand-cyan/30 mb-8" />
                <p className="text-text-primary font-medium leading-relaxed text-xl mb-10">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center gap-5 pt-8 border-t border-border-subtle">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-black text-lg text-text-primary">{t.name}</div>
                  <div className="text-sm font-semibold text-text-muted">{t.role} @ <span className="text-brand-cyan">{t.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

