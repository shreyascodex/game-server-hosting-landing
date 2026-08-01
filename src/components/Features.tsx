import { useRef } from 'react';
import { Zap, Globe2, HardDrive, Maximize, ShieldAlert, Cpu } from 'lucide-react';
import { useScrollReveal } from '../hooks/useGSAP';

export function Features() {
  useScrollReveal('.features-reveal', '.feature-card');
  const gridRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Instant Deploy Architecture",
      desc: "Server up in 28 seconds. One click deployment for over 50 supported game titles. Our automated orchestration pipeline skips the manual provisioning completely.",
      color: "from-blue-400 to-brand-cyan",
      wide: true
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Global Edge",
      desc: "150+ locations worldwide. Achieve sub-10ms latency for players.",
      color: "from-brand-cyan to-brand-violet",
      wide: false
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "NVMe Storage",
      desc: "Gen4 NVMe storage provides 10x faster read/write speeds.",
      color: "from-brand-violet to-purple-500",
      wide: false
    },
    {
      icon: <Maximize className="w-10 h-10" />,
      title: "Elastic Auto-Scaling",
      desc: "Handles 10x player spikes automatically. Never crash during a community event again. The infrastructure expands seamlessly as your active player count grows.",
      color: "from-emerald-400 to-green-500",
      wide: true
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "DDoS Shield",
      desc: "256Gbps mitigation. Always-on Layer 3/4/7 protection.",
      color: "from-orange-400 to-red-500",
      wide: false
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Full Mod Support",
      desc: "One-click mod installation with FTP access. 500+ mods ready.",
      color: "from-pink-400 to-rose-500",
      wide: false
    }
  ];

  return (
    <section id="features" className="py-24 bg-surface features-reveal relative overflow-hidden border-y border-border-subtle">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">Infrastructure</span>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6 tracking-tight">Everything Your Game Needs</h2>
          <p className="text-xl text-text-secondary font-medium">Built for scale. Engineered for performance. Designed for developers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={gridRef}>
          {features.map((feature, i) => (
            <div 
              key={i}
              className={`feature-card relative bg-white rounded-2xl p-8 shadow-sm border border-border-subtle transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-brand-cyan/30 group overflow-hidden ${feature.wide ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {feature.wide && (
                <div className="absolute right-0 bottom-0 opacity-[0.03] text-brand-navy pointer-events-none transform translate-x-1/4 translate-y-1/4">
                  {/* Abstract Background SVG for wide cards */}
                  <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" />
                  </svg>
                </div>
              )}
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-8 shadow-lg shadow-brand-cyan/20`}>
                  {feature.icon}
                </div>
                
                <h3 className={`font-black text-text-primary mb-4 ${feature.wide ? 'text-3xl' : 'text-2xl'}`}>{feature.title}</h3>
                <p className={`text-text-secondary leading-relaxed font-medium ${feature.wide ? 'text-lg' : 'text-base'}`}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

