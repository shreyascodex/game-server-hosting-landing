import { useThreeScene } from '../hooks/useThreeScene';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '../hooks/useGSAP';
import { Play, CheckCircle2, Shield, Activity, Clock } from 'lucide-react';

export function Hero() {
  const mountRef = useThreeScene();
  useScrollReveal('.hero-reveal', '.hero-stagger');

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden hero-reveal bg-page-bg">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-cyan/10 rounded-full blur-[140px] -z-10 animate-float mix-blend-multiply opacity-[0.12]"></div>
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-violet/10 rounded-full blur-[140px] -z-10 animate-float opacity-[0.08]" style={{ animationDelay: '-3s' }}></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center relative">
        
        {/* Abstract Data Grid SVG */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[120%] -z-5 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0A0F24 2px, transparent 2px)', backgroundSize: '32px 32px', maskImage: 'linear-gradient(to left, black, transparent)' }}></div>

        {/* Left Content (takes 55% width approx) */}
        <div className="lg:col-span-7 z-10 hero-stagger">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-md border border-border-subtle mb-8">
            <span className="flex w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_rgba(0,184,224,0.6)]"></span>
            <span className="text-sm font-bold text-text-primary tracking-wide">NexusForge 2.0 is live</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[96px] font-black leading-[1.05] tracking-tight text-text-primary mb-8" style={{ letterSpacing: '-0.02em' }}>
            Deploy Your <br/> Game Server <br/>
            <span className="text-gradient">In Under 30s.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed max-w-2xl font-medium">
            Enterprise-grade infrastructure built for competitive gaming. 
            Experience sub-10ms global latency and unbreakable DDoS protection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-14">
            <Button className="w-full sm:w-auto h-16 px-10 bg-brand-cyan hover:bg-brand-cyan/90 text-brand-navy font-black rounded-full text-lg transition-all hover:shadow-[0_8px_30px_rgba(0,184,224,0.3)]">
              Start Free — No Credit Card
            </Button>
            <Button variant="outline" className="w-full sm:w-auto h-16 px-10 border-text-primary/20 text-text-primary hover:bg-text-primary/5 rounded-full font-bold text-lg">
              <Play className="w-5 h-5 mr-3 fill-current" /> Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-8 text-sm font-bold text-text-secondary">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
              99.99% Uptime
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-cyan" />
              10ms Latency
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-cyan" />
              DDoS Protected
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-cyan" />
              24/7 Support
            </div>
          </div>
        </div>

        {/* Right 3D Scene */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full z-0">
          <div ref={mountRef} className="absolute inset-0 cursor-move mix-blend-multiply" />
          
          {/* Floating glass stat cards */}
          <div className="absolute top-1/4 -left-12 glass-panel p-5 rounded-2xl flex items-center gap-4 animate-float" style={{ animationDelay: '0s' }}>
            <div className="w-12 h-12 rounded-full bg-brand-cyan-light flex items-center justify-center">
              <Activity className="w-6 h-6 text-brand-cyan" />
            </div>
            <div>
              <div className="text-3xl font-black text-text-primary leading-tight">2.4ms</div>
              <div className="text-sm text-text-muted font-bold uppercase tracking-wider">Avg Ping (NYC)</div>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 -right-8 glass-panel p-5 rounded-2xl flex items-center gap-4 animate-float" style={{ animationDelay: '-2s' }}>
            <div className="w-12 h-12 rounded-full bg-brand-violet-light flex items-center justify-center">
              <Shield className="w-6 h-6 text-brand-violet" />
            </div>
            <div>
              <div className="text-3xl font-black text-text-primary leading-tight">99.99%</div>
              <div className="text-sm text-text-muted font-bold uppercase tracking-wider">SLA Guaranteed</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

