import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "👩‍🎓 Aluna: Júlia R.",
      text: "Nunca imaginei que poderia vender algo feito com minhas próprias mãos. Fiz meu primeiro amigurumi de K-pop e vendi por R$ 60 para uma mãe que queria um presente especial!",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "👩‍🎓 Aluna: Fernanda M.",
      text: "Com ansiedade e sem renda, comecei o curso como terapia. Hoje vendo amigurumis personalizados e estou orgulhosa da minha renda!",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "👩‍🎓 Aluna: Sofia B.",
      text: "Simplesmente maravilhoso! Aulas leves, materiais baratos e resultados incríveis. Já vendi mais de 25 bonecos em 2 semanas!",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
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
          Veja o Resultado que Você Também Pode Alcançar:
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