import { useState } from 'react';
import { Download, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useGSAP';

export function ModsSection() {
  useScrollReveal('.mods-reveal', '.mod-card');
  const [activeTab, setActiveTab] = useState('Survival');

  const tabs = ['Survival', 'FPS', 'RPG', 'Strategy'];

  const games = [
    { name: "Minecraft", mods: "24,000+", icon: "MC", color: "bg-green-600", category: "Survival" },
    { name: "Valheim", mods: "1,200+", icon: "VH", color: "bg-orange-600", category: "Survival" },
    { name: "Rust", mods: "3,500+", icon: "RU", color: "bg-red-700", category: "Survival" },
    { name: "ARK", mods: "5,000+", icon: "AK", color: "bg-emerald-600", category: "Survival" },
    { name: "CS2", mods: "800+", icon: "CS", color: "bg-amber-500", category: "FPS" },
    { name: "Garry's Mod", mods: "15,000+", icon: "GM", color: "bg-blue-600", category: "FPS" },
    { name: "Terraria", mods: "4,000+", icon: "TR", color: "bg-green-500", category: "RPG" },
    { name: "Project Zomboid", mods: "2,500+", icon: "PZ", color: "bg-red-600", category: "RPG" },
  ];

  const filteredGames = games.filter(g => g.category === activeTab);

  return (
    <section className="py-24 bg-page-bg mods-reveal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">Integrations</span>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6 tracking-tight">500+ Game Mods. One Click.</h2>
          <p className="text-xl text-text-secondary font-medium">Stop wrestling with FTP and config files. Browse our integrated mod manager and install complete modpacks instantly.</p>
        </div>

        <div className="flex justify-center gap-3 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-brand-navy text-white shadow-md' 
                  : 'bg-surface border border-border-subtle text-text-secondary hover:bg-border-subtle hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {filteredGames.map((game, i) => (
            <div key={`${game.name}-${i}`} className="mod-card group relative h-56 [perspective:1000px]">
              <div className="absolute inset-0 w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front */}
                <div className="absolute inset-0 w-full h-full bg-surface border border-border-subtle rounded-3xl p-8 flex flex-col items-center justify-center gap-5 [backface-visibility:hidden] shadow-sm group-hover:shadow-md transition-shadow">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-lg ${game.color}`}>
                    {game.icon}
                  </div>
                  <div className="text-center">
                    <h4 className="text-text-primary font-black text-lg">{game.name}</h4>
                    <p className="text-sm font-semibold text-text-muted mt-1">{game.mods} mods available</p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 w-full h-full bg-[#0A0F24] border border-brand-cyan/30 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl">
                  <h4 className="text-white font-bold mb-2 text-center text-lg">Top Modpacks</h4>
                  <ul className="text-sm font-medium text-white/80 space-y-3 mb-4 w-full px-4">
                    <li className="flex items-center justify-between border-b border-white/10 pb-2"><span className="truncate">RLCraft</span> <Star className="w-4 h-4 text-brand-cyan shrink-0"/></li>
                    <li className="flex items-center justify-between border-b border-white/10 pb-2"><span className="truncate">SkyFactory</span> <Star className="w-4 h-4 text-brand-cyan shrink-0"/></li>
                  </ul>
                  <button className="w-[80%] py-3 bg-brand-cyan hover:bg-white text-brand-navy font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                    <Download className="w-4 h-4" /> Install
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

