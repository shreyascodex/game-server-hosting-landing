import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Globe, Server, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const stats = [
    { label: "Uptime SLA", value: 99.99, suffix: "%", icon: <Shield className="w-8 h-8 text-brand-cyan" /> },
    { label: "Global Latency", value: 10, suffix: "ms", icon: <Activity className="w-8 h-8 text-brand-cyan" /> },
    { label: "Active Servers", value: 47000, suffix: "+", icon: <Server className="w-8 h-8 text-brand-cyan" /> },
    { label: "Server Locations", value: 150, suffix: "+", icon: <Globe className="w-8 h-8 text-brand-cyan" /> }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      // Counter animation
      const counters = document.querySelectorAll('.stat-counter');
      counters.forEach((counter: any) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          snap: { innerHTML: 1 },
          onUpdate: function() {
            // format with commas if large number
            const val = Math.round(parseFloat(counter.innerHTML));
            if (val > 1000) {
              counter.innerHTML = val.toLocaleString();
            }
          }
        });
      });
      
      // Reveal animation
      gsap.fromTo(".stat-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-page-bg relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card flex flex-col items-center text-center p-6 relative overflow-hidden group">
              
              <div className="mb-8 p-5 bg-brand-cyan-light rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              
              <div className="flex items-baseline justify-center font-black text-5xl md:text-7xl lg:text-8xl text-text-primary mb-3">
                <span className="stat-counter" data-target={stat.value}>0</span>
                <span className="text-brand-cyan">{stat.suffix}</span>
              </div>
              
              <div className="text-sm md:text-base font-bold text-text-muted tracking-[0.15em] uppercase">
                {stat.label}
              </div>
              
              {/* Vertical divider for non-last items (desktop) */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-border-subtle"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

