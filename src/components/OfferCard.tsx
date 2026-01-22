import React from 'react';
import { CheckCircle } from 'lucide-react';

const OfferCard: React.FC = () => {
  const handleCTAClick = () => {
    window.open('https://heloisa-artesa.pay.yampi.com.br/r/62WQPCIPGK', '_blank');
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Coluna Esquerda - Imagem */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 max-w-sm">
              <img
                src="/kpop-offer.png"
                alt="K-pop Amigurumis"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
              <div className="text-center mt-4">
                <h4 className="text-lg font-bold text-gray-800">K-POP AMIGURUMIS</h4>
                <p className="text-sm text-gray-600">Crie Bonecos Adoráveis em Crochê</p>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Oferta */}
          <div className="space-y-6">

            {/* Badge de Desconto Vermelho no Topo */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full shadow-lg">
                <span className="text-lg md:text-xl font-bold uppercase tracking-wide">
                  DESCONTO EXCLUSIVO DE 50%
                </span>
              </div>
            </div>

            {/* Preço Original Riscado */}
            <div className="text-center">
              <span className="text-2xl text-gray-400 line-through font-medium">
                De R$ 27,00
              </span>
            </div>

            {/* Oferta Exclusiva Label */}
            <div className="text-center">
              <span className="text-xl md:text-2xl font-bold text-green-600 uppercase">
                OFERTA EXCLUSIVA:
              </span>
            </div>

            {/* Abordagem DIFERENTE: ID Específico com Style Tag Forçada */}
            <style>
              {`
                #big-price {
                  font-size: 7.5vw !important;
                  line-height: 1 !important;
                  color: #16a34a !important; /* green-600 */
                  font-weight: 900 !important;
                  letter-spacing: -2px !important;
                  display: block !important;
                  width: 100% !important;
                  margin: 10px 0 !important;
                }
                @media (min-width: 768px) {
                  #big-price {
                    font-size: 80px !important;
                  }
                }
              `}
            </style>
            <div className="text-center">
              <div id="big-price">
                R$ 13,50
              </div>
            </div>

            {/* Texto de Urgência */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 font-medium">
                Oferta incrível por tempo limitado!
              </p>
            </div>

            {/* Botão Principal Verde */}
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl md:text-2xl py-6 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-2xl mx-auto uppercase"
            >
              EU QUERO MEU EBOOK
            </button>

            {/* Ícones de Confiança */}
            <div className="flex items-center justify-center space-x-8 text-sm pt-4">
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Compra 100% Segura</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Acesso Imediato e Vitalício</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco de Valor Amarelo */}
        <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-2xl">
          <p className="text-base md:text-lg text-gray-800 font-medium text-center leading-relaxed">
            🎁 Você receberá o pacote completo: Receitas de K-pop Amigurumis + Videoaulas Passo a Passo + Lista de Fornecedores + Técnicas de Crochê + 4 Bônus Exclusivos + Acesso Vitalício
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferCard;