import { useScrollReveal } from '../hooks/useGSAP';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';

export function DDoSSection() {
  useScrollReveal('.ddos-reveal', '.ddos-item');

  return (
    <section className="py-24 bg-surface border-y border-border-subtle relative overflow-hidden ddos-reveal">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="ddos-item order-2 lg:order-1 relative h-[400px] flex items-center justify-center">
          {/* Infographic */}
          <div className="absolute inset-0 flex items-center justify-center">
            
            {/* Bad traffic */}
            <div className="absolute left-0 flex flex-col gap-5">
              {[...Array(5)].map((_, i) => (
                <div key={`bad-${i}`} className="flex items-center gap-2" style={{ animation: `marquee ${2 + Math.random()}s linear infinite` }}>
                  <div className="w-20 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                </div>
              ))}
            </div>

            {/* The Shield */}
            <div className="relative z-10">
              <div className="absolute inset-0 rounded-full animate-shield-pulse"></div>
              <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center border border-brand-cyan shadow-xl">
                <div className="w-32 h-32 rounded-full bg-brand-cyan-light flex items-center justify-center">
                  <ShieldCheck className="w-16 h-16 text-brand-cyan" />
                </div>
              </div>
            </div>

            {/* Good traffic */}
            <div className="absolute right-0 flex flex-col gap-10">
              {[...Array(3)].map((_, i) => (
                <div key={`good-${i}`} className="flex items-center gap-2" style={{ animation: `marquee ${2 + Math.random()}s linear infinite`, animationDirection: 'reverse' }}>
                  <div className="w-20 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
                </div>
              ))}
            </div>
            
            {/* Server */}
            <div className="absolute right-[-40px] w-24 h-28 bg-white border border-border-subtle shadow-lg rounded-xl flex flex-col items-center justify-center gap-3 z-10">
               <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
               <div className="w-14 h-1.5 bg-border-subtle rounded-full"></div>
               <div className="w-14 h-1.5 bg-border-subtle rounded-full"></div>
               <div className="w-14 h-1.5 bg-border-subtle rounded-full"></div>
            </div>

          </div>
        </div>

        <div className="ddos-item order-1 lg:order-2">
          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">Security</span>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-600 text-sm font-bold uppercase tracking-wider mb-6">
            <ShieldAlert className="w-4 h-4" /> Inline Mitigation
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6 tracking-tight">Unbreakable DDoS Protection</h2>
          <p className="text-xl text-text-secondary mb-10 leading-relaxed font-medium">
            Attacks shouldn't ruin your community's weekend. Our custom-built, inline DDoS mitigation filters malicious traffic in microseconds without impacting game latency.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-border-subtle shadow-sm p-8 rounded-2xl">
              <div className="text-4xl font-black text-text-primary mb-2">256 <span className="text-brand-cyan text-2xl">Gbps</span></div>
              <div className="text-sm font-bold text-text-muted uppercase tracking-wider">Mitigation Capacity</div>
            </div>
            <div className="bg-white border border-border-subtle shadow-sm p-8 rounded-2xl">
              <div className="text-4xl font-black text-text-primary mb-2">Layer <span className="text-brand-cyan text-2xl">3/4/7</span></div>
              <div className="text-sm font-bold text-text-muted uppercase tracking-wider">Always-On Filtering</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

