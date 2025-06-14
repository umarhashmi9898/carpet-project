import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import TrustBadges from './components/TrustBadges';
import CarpetShowcase from './components/CarpetShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <Reviews />
      <TrustBadges />
      <CarpetShowcase />
      <Footer />
    </div>
  );
}

export default App;