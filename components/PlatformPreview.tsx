
import React, { useState } from 'react';

const PlatformPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('library');

  const features = {
    library: {
      title: "Sua Estante Obscura",
      desc: "Organize suas obsessões por tropos e autores favoritos.",
      img: "/images/MOCKUP 1.jpg",
      badge: "BIBLIOTECA"
    },
    reader: {
      title: "Imersão Premium",
      desc: "Modo noturno profundo e fontes feitas para leitura longa.",
      img: "/images/MOCKUP 2.jpg",
      badge: "LEITOR"
    },
    community: {
      title: "Área de Memes & Surto",
      desc: "Onde as sócias compartilham teorias e surtos literários.",
      img: "/images/MOCKUP 3.jpg",
      badge: "COMUNIDADE"
    }
  };

  return (
    <section id="experiencia" className="py-24 md:py-40 px-6 relative bg-[#030303]">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 reveal">
          <h2 className="text-4xl md:text-8xl font-serif italic leading-tight mb-6">
            O Clube por <span className="text-red-600 not-italic font-black uppercase">Dentro.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Uma interface pensada para quem lê com a alma. Conheça sua futura zona de conforto.
          </p>
        </div>

        {/* Grid layout com botões e iPhone lado a lado */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Botões à esquerda */}
          <div className="space-y-4 md:space-y-8 order-2 lg:order-1">
            {(Object.keys(features) as Array<keyof typeof features>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left p-6 md:p-10 rounded-3xl border transition-all duration-500 group relative overflow-hidden ${activeTab === key
                  ? 'bg-red-950/10 border-red-600/50 shadow-[0_20px_40px_rgba(158,0,0,0.1)]'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                  }`}
              >
                <span className={`text-[9px] font-black tracking-[0.3em] uppercase mb-3 block ${activeTab === key ? 'text-red-500' : 'text-white/20'}`}>
                  {features[key].badge}
                </span>
                <h3 className={`text-xl md:text-3xl font-serif mb-2 transition-colors ${activeTab === key ? 'text-white' : 'text-white/40'}`}>
                  {features[key].title}
                </h3>
                <p className={`text-sm md:text-lg font-light leading-relaxed transition-opacity ${activeTab === key ? 'text-white/60' : 'text-white/20'}`}>
                  {features[key].desc}
                </p>
              </button>
            ))}
          </div>

          {/* iPhone Mockup - Centralizado ao lado dos botões */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center mb-12 lg:mb-0">
            {/* Glow effect behind the phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[600px] md:w-[600px] md:h-[900px] bg-red-600/20 blur-[150px] rounded-full"></div>
            </div>

            {/* iPhone Frame */}
            <div className="relative group">
              <img
                src={"/images/MOCKUP IPHONE.png?" + Date.now()}
                alt="iPhone Frame"
                style={{ width: '800px', height: 'auto' }}
                className="relative z-20 drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating particles effect */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-500/10 rounded-full blur-2xl animate-bounce"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-red-600/10 rounded-full blur-2xl animate-pulse"></div>

              {/* Reflection/shine effect */}
              <div className="absolute inset-0 z-30 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[3rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-20 top-10 w-40 h-40 border border-red-600/10 rounded-full hidden lg:block"></div>
            <div className="absolute -left-10 bottom-10 w-20 h-20 border border-white/5 rounded-full hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
