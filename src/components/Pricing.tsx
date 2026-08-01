import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '../hooks/useGSAP';

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  useScrollReveal('.pricing-reveal', '.pricing-card');

  const plans = [
    {
      name: "Starter",
      monthly: 6.99,
      features: ["4GB DDR5 RAM", "2 vCPU Cores", "40GB NVMe Storage", "5 Player Slots", "Standard Support"],
      highlight: false
    },
    {
      name: "Pro",
      monthly: 18.99,
      features: ["12GB DDR5 RAM", "4 vCPU Cores", "100GB NVMe Storage", "Unlimited Players", "DDoS Protection", "Priority Support"],
      highlight: true
    },
    {
      name: "Enterprise",
      monthly: 49.99,
      features: ["32GB DDR5 RAM", "8 vCPU Cores", "500GB NVMe Storage", "Dedicated IP", "Custom Mod Packs", "24/7 Phone Support"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-surface pricing-reveal border-y border-border-subtle">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">Pricing</span>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-xl text-text-secondary mb-10 font-medium">Pay only for what you use. Upgrade or downgrade anytime.</p>
          
          <div className="inline-flex items-center p-1.5 bg-white rounded-full border border-border-subtle shadow-sm">
            <button 
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${!annual ? 'bg-brand-navy text-white shadow-md' : 'text-text-secondary hover:text-text-primary'}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${annual ? 'bg-brand-navy text-white shadow-md' : 'text-text-secondary hover:text-text-primary'}`}
              onClick={() => setAnnual(true)}
            >
              Yearly <span className={`text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider ${annual ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-brand-cyan/10 text-brand-cyan'}`}>Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-24">
          {plans.map((plan, i) => {
            const price = annual ? (plan.monthly * 0.8).toFixed(2) : plan.monthly;
            return (
              <div 
                key={i} 
                className={`pricing-card relative rounded-[2rem] p-10 transition-all duration-500 hover:-translate-y-2 ${
                  plan.highlight 
                    ? 'md:-mt-8 md:mb-8 shadow-[0_8px_40px_rgba(0,184,224,0.20)]' 
                    : 'bg-white border border-border-subtle shadow-md'
                }`}
              >
                {plan.highlight && (
                  <>
                    {/* Gradient border wrapper for highlight card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan to-brand-violet rounded-[2rem] -z-20"></div>
                    <div className="absolute inset-[2px] bg-white rounded-[calc(2rem-2px)] -z-10"></div>
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-brand-navy font-black px-6 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-md">
                      Most Popular
                    </div>
                  </>
                )}
                
                <h3 className="text-3xl font-black text-text-primary mb-3">{plan.name}</h3>
                
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-black text-text-primary">${price}</span>
                  <span className="text-text-muted font-bold mb-1.5">/mo</span>
                </div>
                
                {annual && (
                  <div className="text-sm font-bold text-brand-cyan mb-8 uppercase tracking-wider">Billed annually</div>
                )}
                
                <Button 
                  className={`w-full h-14 rounded-xl font-black text-lg mb-10 transition-all ${
                    plan.highlight 
                      ? 'bg-brand-navy hover:bg-brand-navy/90 text-white shadow-lg' 
                      : 'bg-surface hover:bg-border-subtle text-text-primary border border-border-subtle'
                  }`}
                >
                  Deploy {plan.name}
                </Button>
                
                <ul className="space-y-5">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-4">
                      <div className={`p-1 rounded-full ${plan.highlight ? 'bg-brand-cyan/10' : 'bg-surface'}`}>
                        <Check className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-brand-cyan' : 'text-text-muted'}`} />
                      </div>
                      <span className="text-text-secondary font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-border-subtle shadow-md overflow-hidden hidden md:block">
          <div className="p-8 border-b border-border-subtle bg-surface text-center">
            <h3 className="text-2xl font-black text-text-primary">Compare Features</h3>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="p-6 font-bold text-text-muted uppercase tracking-wider text-sm border-b border-border-subtle w-1/3">Feature</th>
                <th className="p-6 font-black text-text-primary text-lg border-b border-border-subtle text-center">Starter</th>
                <th className="p-6 font-black text-brand-cyan text-lg border-b border-border-subtle text-center bg-brand-cyan-light/30">Pro</th>
                <th className="p-6 font-black text-text-primary text-lg border-b border-border-subtle text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary font-medium">
              {[
                { feature: "Memory (RAM)", starter: "4GB", pro: "12GB", enterprise: "32GB" },
                { feature: "vCPU Cores", starter: "2", pro: "4", enterprise: "8" },
                { feature: "Storage", starter: "40GB NVMe", pro: "100GB NVMe", enterprise: "500GB NVMe" },
                { feature: "Player Slots", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
                { feature: "DDoS Protection", starter: "✓", pro: "✓", enterprise: "✓" },
                { feature: "Automated Backups", starter: "Weekly", pro: "Daily", enterprise: "Hourly" },
                { feature: "Dedicated IP", starter: "—", pro: "—", enterprise: "✓" },
                { feature: "Custom Modpacks", starter: "—", pro: "✓", enterprise: "✓" },
                { feature: "SLA", starter: "99.9%", pro: "99.99%", enterprise: "99.999%" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface transition-colors">
                  <td className="p-6 border-b border-border-subtle font-bold text-text-primary">{row.feature}</td>
                  <td className="p-6 border-b border-border-subtle text-center">{row.starter}</td>
                  <td className="p-6 border-b border-border-subtle text-center font-bold bg-brand-cyan-light/30">{row.pro}</td>
                  <td className="p-6 border-b border-border-subtle text-center">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

