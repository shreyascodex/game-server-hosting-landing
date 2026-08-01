import { useState } from 'react';
import { useScrollReveal } from '../hooks/useGSAP';

export function ServerMap() {
  useScrollReveal('.map-reveal', '.map-stagger');
  const [activeRegion, setActiveRegion] = useState('All');

  const regions = ['All', 'Americas', 'Europe', 'Asia-Pacific'];

  const locations = [
    { name: "New York", region: "Americas", x: 28, y: 35, ping: 4 },
    { name: "Los Angeles", region: "Americas", x: 15, y: 38, ping: 8 },
    { name: "São Paulo", region: "Americas", x: 34, y: 65, ping: 12 },
    { name: "London", region: "Europe", x: 47, y: 28, ping: 5 },
    { name: "Frankfurt", region: "Europe", x: 50, y: 30, ping: 3 },
    { name: "Amsterdam", region: "Europe", x: 49, y: 27, ping: 4 },
    { name: "Singapore", region: "Asia-Pacific", x: 75, y: 55, ping: 6 },
    { name: "Tokyo", region: "Asia-Pacific", x: 85, y: 35, ping: 5 },
    { name: "Sydney", region: "Asia-Pacific", x: 88, y: 75, ping: 9 },
  ];

  const filteredLocations = activeRegion === 'All' 
    ? locations 
    : locations.filter(l => l.region === activeRegion);

  return (
    <section id="servers" className="py-24 bg-page-bg map-reveal relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">Global Network</span>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6 tracking-tight">Global Edge Network</h2>
          <p className="text-xl text-text-secondary font-medium">Deploy close to your players. Sub-10ms latency in 150+ major cities.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 map-stagger">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeRegion === region 
                  ? 'bg-brand-cyan text-brand-navy shadow-md' 
                  : 'bg-surface border border-border-subtle text-text-secondary hover:bg-border-subtle hover:text-text-primary'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-surface rounded-3xl border border-border-subtle overflow-hidden map-stagger p-4 md:p-8 shadow-inner">
          
          {/* Abstract SVG Map Background */}
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-[0.08] drop-shadow-xl text-brand-navy">
            {/* North America */}
            <path d="M150,150 Q200,100 300,120 T350,200 Q300,250 200,220 Z" fill="currentColor" />
            {/* South America */}
            <path d="M280,250 Q350,250 380,350 T320,450 Q280,350 280,250 Z" fill="currentColor" />
            {/* Europe & Africa */}
            <path d="M450,100 Q550,80 600,150 T550,300 Q500,450 450,350 Z" fill="currentColor" />
            {/* Asia */}
            <path d="M600,100 Q800,50 900,150 T850,300 Q700,250 600,100 Z" fill="currentColor" />
            {/* Australia */}
            <path d="M800,350 Q900,350 950,400 T850,480 Q800,400 800,350 Z" fill="currentColor" />
          </svg>

          {/* Connection Lines (Abstract, drawn behind pins) */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            {filteredLocations.map((loc, i) => {
              if (i === 0) return null;
              const prev = filteredLocations[0];
              const mx = (prev.x + loc.x) / 2;
              const my = (prev.y + loc.y) / 2 - 10;
              return (
                <path
                  key={i}
                  d={`M ${prev.x} ${prev.y} Q ${mx} ${my} ${loc.x} ${loc.y}`}
                  fill="none"
                  stroke="#00B8E0"
                  strokeWidth="0.4"
                  strokeDasharray="2 2"
                  className="animate-pulse"
                />
              );
            })}
          </svg>

          {/* Location Pins */}
          {filteredLocations.map((loc, i) => (
            <div 
              key={loc.name}
              className="absolute w-4 h-4 -ml-2 -mt-2 group z-10 cursor-pointer"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            >
              <div className="absolute inset-0 bg-brand-cyan rounded-full animate-pulse-ring"></div>
              <div className="absolute inset-[4px] bg-brand-cyan rounded-full shadow-[0_0_10px_rgba(0,184,224,0.8)]"></div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <div className="bg-white border border-border-subtle text-text-primary text-sm px-4 py-2 rounded-xl whitespace-nowrap shadow-xl flex items-center gap-3">
                  <span className="font-bold">{loc.name}</span>
                  <span className="text-brand-cyan font-mono font-bold">&lt; {loc.ping}ms</span>
                </div>
                <div className="w-3 h-3 bg-white border-b border-r border-border-subtle rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

