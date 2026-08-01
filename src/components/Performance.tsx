import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Performance() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.perf-bar-fill',
        { width: '0%' },
        {
          width: (index, target) => target.getAttribute('data-width') + '%',
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    {
      title: "CPU Performance (Single Thread)",
      bars: [
        { label: "NexusForge (Ryzen 9 7950X)", value: 98, width: 98, color: "bg-brand-cyan", highlight: true },
        { label: "Generic Host (Xeon E5)", value: 64, width: 64, color: "bg-white/20", highlight: false },
      ]
    },
    {
      title: "Disk I/O Speed (MB/s)",
      bars: [
        { label: "NexusForge (Gen4 NVMe)", value: 7400, width: 95, color: "bg-brand-violet", highlight: true },
        { label: "Generic Host (SATA SSD)", value: 550, width: 15, color: "bg-white/20", highlight: false },
      ]
    },
    {
      title: "Network Latency (Avg ms) - Lower is better",
      bars: [
        { label: "NexusForge (Premium Routing)", value: 12, width: 15, color: "bg-emerald-400", highlight: true },
        { label: "Generic Host (Standard BGP)", value: 45, width: 60, color: "bg-white/20", highlight: false },
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0A0F24] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div>
          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">Benchmarks</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Hardware Built for Competitive Gaming</h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed font-medium">
            We don't cut corners on hardware. Every NexusForge instance runs on the latest generation of enterprise processors, ECC memory, and data-center grade NVMe storage.
          </p>
          
          <ul className="space-y-5 mb-8">
            <li className="flex items-center gap-4 text-white/90 font-bold text-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,184,224,0.5)]"></div> Ryzen 9 7950X / Intel i9 14900K CPUs
            </li>
            <li className="flex items-center gap-4 text-white/90 font-bold text-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,184,224,0.5)]"></div> 4800MHz+ DDR5 ECC Memory
            </li>
            <li className="flex items-center gap-4 text-white/90 font-bold text-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,184,224,0.5)]"></div> Gen4 NVMe RAID-10 Storage
            </li>
            <li className="flex items-center gap-4 text-white/90 font-bold text-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,184,224,0.5)]"></div> 25Gbps Redundant Uplinks per Node
            </li>
          </ul>
        </div>

        <div className="glass-panel-dark rounded-2xl p-8 md:p-10 space-y-10">
          {metrics.map((metric, i) => (
            <div key={i}>
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">{metric.title}</h4>
              <div className="space-y-5">
                {metric.bars.map((bar, j) => (
                  <div key={j} className="relative">
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className={bar.highlight ? "text-white font-bold" : "text-white/50"}>{bar.label}</span>
                      <span className={bar.highlight ? "text-white font-mono font-bold" : "text-white/50 font-mono"}>{bar.value}</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`perf-bar-fill h-full rounded-full ${bar.color} ${bar.highlight ? 'shadow-[0_0_15px_currentColor]' : ''}`}
                        data-width={bar.width}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

