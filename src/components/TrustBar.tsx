export function TrustBar() {
  const partners = [
    "GameCraft Studios", 
    "Velocity Esports", 
    "Nexus League", 
    "ProCraft Gaming", 
    "ShadowByte", 
    "Apex Networks",
    "Titan Play",
    "Omega Servers",
    "Zenith Gaming"
  ];

  return (
    <section className="py-12 border-y border-border-subtle bg-surface relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-sm font-bold tracking-[0.15em] text-text-muted uppercase">
          Trusted by 50,000+ game studios and developers
        </p>
      </div>
      
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex gap-16 items-center">
          {/* Double the list to create seamless infinite loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index}
              className="text-2xl md:text-3xl font-black text-text-muted/40 whitespace-nowrap tracking-tighter"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {partner.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

