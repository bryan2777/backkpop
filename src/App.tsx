import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OfferCard from './components/OfferCard';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import FinalUrgency from './components/FinalUrgency';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter bg-white min-h-screen">
      <Header />

      <main>
        <Hero />
        <OfferCard />
        <Benefits />
        <SocialProof />
        <FinalUrgency />
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
        <div className="container mx-auto max-w-4xl mt-6">
          <p className="text-xs opacity-80">
            © 2025 Tapetes Amigurumis - Todos os direitos reservados
          </p>
          <p className="text-xs opacity-80 mt-2">
            Instrutora: Heloísa Santos
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;