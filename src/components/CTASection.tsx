import { ArrowRight, Terminal } from 'lucide-react';
import { useScrollReveal } from '../hooks/useGSAP';

export function CTASection() {
  useScrollReveal('.cta-reveal');

  return (
    <section className="py-32 bg-brand-navy relative overflow-hidden cta-reveal">
      {/* Dramatic Dark Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F24] via-[#1A1066] to-[#0A0F24] z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] z-0"></div>
      
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/30 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float z-0"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-brand-violet/30 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float z-0" style={{ animationDelay: '-3s' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-1.5 shadow-2xl relative overflow-hidden group">
          
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-cyan opacity-80 group-hover:opacity-100 transition-opacity animate-gradient-drift"></div>
          
          <div className="bg-[#050A18] rounded-[2.85rem] p-12 md:p-24 relative z-10 overflow-hidden shadow-inner">
            
            {/* Abstract tech grid */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="text-center max-w-4xl mx-auto relative z-20">
              <div className="inline-flex items-center justify-center p-5 rounded-3xl bg-white/5 mb-10 shadow-lg border border-white/10 backdrop-blur-md">
                <Terminal className="w-10 h-10 text-brand-cyan" />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                Ready to Forge Your <br/>
                <span className="text-gradient">Game Server?</span>
              </h2>
              
              <p className="text-2xl text-white/70 mb-14 font-medium leading-relaxed">
                Deploy in 28 seconds. Cancel anytime. <br className="hidden md:block"/>
                Join 50,000+ developers building on the fastest edge network.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-12 py-6 rounded-full bg-brand-cyan hover:bg-white text-brand-navy font-black text-xl transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,184,224,0.5)] flex items-center justify-center gap-3 group/btn">
                  Start Free Trial <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-12 py-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xl transition-all border border-white/10 backdrop-blur-md hover:border-white/30">
                  Talk to Sales
                </button>
              </div>
              
              <p className="mt-10 text-sm font-bold text-white/40 uppercase tracking-[0.2em]">
                No Credit Card Required for Trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

