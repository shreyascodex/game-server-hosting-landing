import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Statistics } from '@/components/Statistics';
import { Pricing } from '@/components/Pricing';
import { Features } from '@/components/Features';
import { ServerMap } from '@/components/ServerMap';
import { Performance } from '@/components/Performance';
import { ControlPanel } from '@/components/ControlPanel';
import { DDoSSection } from '@/components/DDoSSection';
import { ModsSection } from '@/components/ModsSection';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-page-bg text-text-primary selection:bg-brand-cyan/30 selection:text-text-primary">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Statistics />
        <Features />
        <ServerMap />
        <Performance />
        <ControlPanel />
        <DDoSSection />
        <ModsSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;

