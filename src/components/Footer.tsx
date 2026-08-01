import { Hexagon, Github, Twitter, Disc, Youtube } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-[#0A0F24] pt-24 pb-12 relative z-10 border-t-4 border-brand-cyan">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group inline-flex">
              <Hexagon className="w-10 h-10 text-brand-cyan group-hover:text-white transition-colors" />
              <span className="text-2xl font-black tracking-tight text-white">NexusForge</span>
            </Link>
            <p className="text-white/60 text-base font-medium leading-relaxed mb-10 max-w-md">
              Enterprise cloud infrastructure engineered specifically for competitive gaming and massive multiplayer communities. Where milliseconds become victories.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-brand-cyan hover:bg-white/10 transition-all border border-white/5 hover:border-brand-cyan/30">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-brand-violet hover:bg-white/10 transition-all border border-white/5 hover:border-brand-violet/30">
                <Disc className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/30">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-red-500 hover:bg-white/10 transition-all border border-white/5 hover:border-red-500/30">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-wide">Products</h4>
            <ul className="space-y-5 text-base font-medium text-white/60">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Game Servers</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Dedicated Nodes</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">DDoS Mitigation</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Enterprise API</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Global Network</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-8 tracking-wide">Company</h4>
            <ul className="space-y-5 text-base font-medium text-white/60">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors flex items-center">Careers <span className="px-2.5 py-1 ml-3 rounded-md bg-brand-cyan/20 text-brand-cyan text-[10px] uppercase font-bold tracking-wider">Hiring</span></a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-white font-black text-lg mb-8 tracking-wide">Stay Updated</h4>
            <p className="text-base font-medium text-white/60 mb-6">Subscribe to our newsletter for infrastructure updates.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-base text-white focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-colors"
              />
              <button className="bg-brand-cyan hover:bg-white text-brand-navy font-black rounded-xl px-5 py-4 text-base transition-colors shadow-lg shadow-brand-cyan/20 hover:shadow-white/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm font-medium text-white/40 gap-6">
          <p>© 2026 NexusForge Technologies, Inc. All rights reserved. FACKYAUU</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

