import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, Hexagon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Servers', href: '#servers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-border-subtle py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <Hexagon className="w-8 h-8 text-brand-cyan group-hover:text-text-primary transition-colors" />
          <span className="text-xl font-black tracking-tight text-text-primary">NexusForge</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-text-secondary hover:text-brand-cyan transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a href="#login" className="text-sm font-semibold text-text-primary hover:text-brand-cyan transition-colors">
              Log in
            </a>
            <Button className="bg-brand-cyan hover:bg-brand-cyan/80 text-brand-navy font-bold rounded-full px-6 transition-all hover:shadow-[0_4px_20px_rgba(0,184,224,0.3)]">
              Start Free Trial
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-black text-text-primary hover:text-brand-cyan transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <div className="flex flex-col items-center gap-4 mt-8 w-full px-12">
          <a
            href="#login"
            className="text-lg font-bold text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </a>
          <Button className="w-full bg-brand-cyan text-brand-navy font-black rounded-full h-14 text-lg shadow-[0_4px_20px_rgba(0,184,224,0.3)]">
            Start Free Trial
          </Button>
        </div>
      </div>
    </header>
  );
}

