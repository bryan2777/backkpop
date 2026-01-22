import React from 'react';
import { Star, Quote } from 'lucide-react';
import avatar1 from '../assets/images/avatar1.jpg';
import avatar2 from '../assets/images/avatar2.jpg';
import avatar3 from '../assets/images/avatar3.jpg';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "👩‍🎓 Studentessa: Giulia R.",
      text: "Non avrei mai immaginato di poter vendere qualcosa che ho fatto con le mie mani. Ho fatto la mia prima santines amigurumi e l'ho venduta per €25 a una madre che voleva un regalo speciale!",
      avatar: avatar1
    },
    {
      name: "👩‍🎓 Studentessa: Francesca M.",
      text: "Con ansia e senza reddito, ho iniziato il corso come terapia. Oggi vendo santines amigurumis personalizzate e sono orgogliosa del mio reddito!",
      avatar: avatar2
    },
    {
      name: "👩‍🎓 Studentessa: Sofia B.",
      text: "Semplicemente meraviglioso! Lezioni leggere, materiali economici e risultati incredibili. Ho già venduto più di 25 santines in 2 settimane!",
      avatar: avatar3
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-10 leading-tight">
          Guarda il Risultato che Anche Tu Puoi Raggiungere:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 relative flex flex-col h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Ícone de Aspas Grande */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-purple-200" />

              <div className="flex items-center mb-6 flex-shrink-0">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-3 border-purple-200 shadow-md"
                  loading="lazy"
                />
                <div>
                  <div className="flex mb-2">
                    {renderStars()}
                  </div>
                  <h4 className="font-bold text-gray-800 text-base">
                    {testimonial.name}
                  </h4>
                </div>
              </div>

              <p className="text-gray-700 font-medium leading-relaxed italic text-base flex-grow text-center">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;