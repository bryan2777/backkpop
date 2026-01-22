import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-8 px-4 text-center bg-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight text-center">
          Espera! Não vá embora ainda...
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6 text-center">
          Temos uma proposta <span className="text-red-600 font-semibold">especial</span> para você!
        </h2>

        <div className="bg-white p-8 rounded-2xl border-2 border-red-200 max-w-3xl mx-auto shadow-lg">
          <div className="text-center mb-4">
            <span className="text-4xl">🧶</span>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
            Notamos que você demonstrou <strong>interesse pelos Tapetes Amigurumis</strong> e preparamos um <strong>desconto final de 50%</strong> para garantir que você não perca esta oportunidade de criar adoráveis tapetes de crochê!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;