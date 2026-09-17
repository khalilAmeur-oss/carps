import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import WhoWeProtect from './components/WhoWeProtect';
import WhyCarps from './components/WhyCarps';
import Heritage from './components/Heritage';
import GlobalPresence from './components/GlobalPresence';
import ClaimsProcess from './components/ClaimsProcess';
import DiplomaticNetworks from './components/DiplomaticNetworks';
import QuoteSection from './components/QuoteSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import MobileCTA from './components/MobileCTA';
import GoogleLocation from './components/GoogleLocation';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <WhoWeProtect />
        <WhyCarps />
        <Heritage />
        <GlobalPresence />
        <ClaimsProcess />
        <DiplomaticNetworks />
        <QuoteSection />
        <GoogleLocation />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
      <MobileCTA />
    </>
  );
}

export default App;
