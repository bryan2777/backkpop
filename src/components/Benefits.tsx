import React from 'react';
import { Video, Smartphone, Wrench, Users, Gift, Award } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Video,
      title: "📺 Vídeo Aulas Passo a Passo",
      description: "Aprenda a criar tapetes amigurumis mesmo sem experiência, com explicações fáceis e didáticas."
    },
    {
      icon: Smartphone,
      title: "📱 Acesso Imediato + App no Celular",
      description: "Estude onde quiser, quando quiser."
    },
    {
      icon: Wrench,
      title: "🧶 Materiais Acessíveis",
      description: "Use materiais simples e acessíveis — fio, agulha e enchimento."
    },
    {
      icon: Users,
      title: "💡 Perfeito Para Iniciantes",
      description: "Não é necessário ter feito crochê antes. É ideal para todas as idades e níveis."
    },
    {
      icon: Gift,
      title: "🎁 4 Bônus Exclusivos",
      description: "Lista de Fornecedores, Aula de Precificação, Como Fotografar para Vender e Como Embalar e Enviar com Economia."
    },
    {
      icon: Award,
      title: "🧶 Técnicas de Crochê",
      description: "Aprenda a criar tapetes amigurumis com detalhes adoráveis e técnicas profissionais."
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-10 leading-tight">
          Resumo de Tudo que Você Vai Receber
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {benefit.title}
                </h4>

                <p className="text-gray-600 leading-relaxed text-center">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;