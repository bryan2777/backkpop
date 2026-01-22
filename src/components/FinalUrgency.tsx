import React from 'react';
import { Shield } from 'lucide-react';

const FinalUrgency: React.FC = () => {
  const handleFinalCTAClick = () => {
    window.open('https://pay.hotmart.com/Y103682962N?checkoutMode=10', '_blank');
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">

        {/* Seção de Garantia e CTA Final */}
        <div className="bg-gradient-to-b from-green-50 to-white p-10 rounded-3xl shadow-xl border border-green-200">

          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-black text-green-700 mb-6 leading-tight text-center">
              Seu Risco é ZERO!
            </h3>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8 text-center">
              Você tem <span className="font-bold text-green-600">7 dias</span> para testar tudo com garantia total. Se não gostar, devolvemos <span className="font-bold text-green-600">100% do seu dinheiro</span>, sem burocracia.
            </p>
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <button
              onClick={handleFinalCTAClick}
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl md:text-2xl py-6 px-10 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-2xl mx-auto mb-6"
            >
              GARANTIR ACESSO IMEDIATO POR $4.95
            </button>

            {/* Texto de Apoio */}
            <p className="text-base text-gray-600 text-center">
              👉 Clique no botão acima e aproveite sua última chance de aprender a criar tapetes amigurumis hoje mesmo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalUrgency;