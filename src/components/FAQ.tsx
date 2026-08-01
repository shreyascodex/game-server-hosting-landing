import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useGSAP';

export function FAQ() {
  useScrollReveal('.faq-reveal', '.faq-item');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can I deploy a server?",
      a: "Instantaneously. Our automated provisioning system deploys most game servers in under 28 seconds. Large modpacks or custom setups may take up to 2 minutes to fully download and configure."
    },
    {
      q: "Do you support Minecraft modpacks?",
      a: "Yes! We support 1-click installation for over 500+ modpacks from CurseForge, Modrinth, FTB, and Technic. You also get full FTP/SFTP access to upload custom mods manually."
    },
    {
      q: "What's included in the DDoS protection?",
      a: "Every plan includes our proprietary Layer 3/4/7 inline DDoS mitigation up to 256Gbps. It's always-on, meaning attacks are filtered in real-time without you ever noticing a lag spike or requiring a server restart."
    },
    {
      q: "Can I upgrade my plan later?",
      a: "Absolutely. You can scale your resources up or down at any time from the control panel. Upgrades are prorated and applied instantly without losing your data or IP address."
    },
    {
      q: "Do you offer refunds?",
      a: "We offer a 7-day money-back guarantee for all new accounts. If you're not satisfied with the performance, just open a ticket and we'll refund your payment, no questions asked."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, Apple Pay, Google Pay, and cryptocurrencies (BTC, ETH, USDC) via our secure checkout."
    },
    {
      q: "Is there a free trial?",
      a: "Yes! You can deploy a Starter instance for 48 hours completely free. No credit card is required to spin up your test server."
    },
    {
      q: "How do I contact support?",
      a: "Pro and Enterprise plans include 24/7 priority Discord and ticket support. Starter plans have standard ticket support with a guaranteed response time of under 4 hours."
    }
  ];

  return (
    <section id="docs" className="py-24 bg-page-bg faq-reveal border-y border-border-subtle">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-20">
          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">FAQ</span>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6 tracking-tight">Common Questions</h2>
          <p className="text-xl text-text-secondary font-medium">Everything you need to know about the platform and billing.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`faq-item rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'bg-white shadow-md border-brand-cyan/30' : 'bg-surface border-border-subtle hover:border-brand-cyan/20'}`}
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className={`font-black text-xl transition-colors ${isOpen ? 'text-brand-cyan' : 'text-text-primary'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-brand-cyan-light' : 'bg-transparent'}`}>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-cyan' : 'text-text-muted'}`} />
                  </div>
                </button>
                
                <div 
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-8 text-text-secondary font-medium leading-relaxed border-t border-border-subtle pt-6 mx-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center faq-item">
          <p className="text-text-secondary font-medium text-lg">
            Still have questions? <a href="#" className="text-brand-cyan hover:underline font-bold">Read our documentation</a> or <a href="#" className="text-brand-cyan hover:underline font-bold">contact support</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

