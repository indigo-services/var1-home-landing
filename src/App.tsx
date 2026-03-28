import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PriceEstimator } from './components/PriceEstimator';
import { Process } from './components/Process';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { ServiceArea } from './components/ServiceArea';
import { FAQ } from './components/FAQ';
import { Logos } from './components/Logos';
import { EmergencyCTA } from './components/EmergencyCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <PriceEstimator />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <Logos />
        <EmergencyCTA />
      </main>
      <Footer />
    </div>
  );
}
