
import React, { useState } from 'react';

const PlatformPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('library');

  const features = {
    library: {
      title: "Sua Estante Obscura",
      desc: "Organize suas obsessões por tropos e autores favoritos.",
      img: "https://images.unsplash.com/photo-1543004276-8869c99661f4?q=80&w=600&auto=format&fit=crop",
      badge: "BIBLIOTECA"
    },
    reader: {
      title: "Imersão Premium",
      desc: "Modo noturno profundo e fontes feitas para leitura longa.",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
      badge: "LEITOR"
    },
    community: {
      title: "Área de Memes & Surto",
      desc: "Onde as sócias compartilham teorias e surtos literários.",
      img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
      badge: "COMUNIDADE"
    }
  };

  return (
    <section id="experiencia" className="py-24 md:py-40 px-6 relative overflow-hidden bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 reveal">
          <h2 className="text-4xl md:text-8xl font-serif italic leading-tight mb-6">
            O Clube por <span className="text-red-600 not-italic font-black uppercase">Dentro.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Uma interface pensada para quem lê com a alma. Conheça sua futura zona de conforto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Navegação de Funcionalidades */}
          <div className="space-y-4 md:space-y-8 order-2 lg:order-1">
            {(Object.keys(features) as Array<keyof typeof features>).map((key) => (
              <button 
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left p-6 md:p-10 rounded-3xl border transition-all duration-500 group relative overflow-hidden ${
                  activeTab === key 
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

          {/* Mockup do App Dinâmico (Mobile First) */}
          <div className="relative order-1 lg:order-2 flex justify-center sticky top-20 md:top-32 h-fit mb-12 lg:mb-0">
            <div className="relative w-[280px] md:w-[350px] h-[550px] md:h-[700px] bg-[#050505] border-[8px] border-[#1a1a1a] rounded-[3rem] md:rounded-[3.5rem] shadow-[0_100px_100px_-50px_rgba(158,0,0,0.3)] overflow-hidden">
               {/* App UI Elements */}
               <div className="absolute top-0 left-0 w-full h-16 md:h-20 bg-black/80 backdrop-blur-md z-20 flex items-end px-6 md:px-8 pb-4 justify-between border-b border-white/5">
                  <span className="text-lg md:text-xl font-serif italic text-red-600">Nocturna</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <div className="w-4 h-0.5 bg-white/30 rounded-full"></div>
                  </div>
               </div>

               {/* App Content Display */}
               <div className="pt-20 md:pt-24 px-4 md:px-6 h-full overflow-y-auto no-scrollbar pb-20 md:pb-24">
                  <div className="animate-fade-in" key={activeTab}>
                    <img 
                      src={features[activeTab as keyof typeof features].img} 
                      className="w-full aspect-[4/5] object-cover rounded-xl md:rounded-2xl mb-6 shadow-2xl grayscale-[0.2]"
                      alt="App Interface Preview"
                    />
                    <div className="space-y-3">
                       <div className="h-1.5 w-1/4 bg-red-600 rounded"></div>
                       <div className="h-3 w-full bg-white/5 rounded"></div>
                       <div className="h-3 w-4/5 bg-white/5 rounded"></div>
                       <div className="grid grid-cols-2 gap-3 pt-4">
                          <div className="aspect-[3/4] bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          </div>
                          <div className="aspect-[3/4] bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          </div>
                       </div>
                    </div>
                  </div>
               </div>

               {/* App Bottom Bar */}
               <div className="absolute bottom-0 left-0 w-full h-14 md:h-16 bg-black/90 backdrop-blur-md z-20 flex items-center justify-around border-t border-white/5">
                  <div className="w-5 h-5 rounded-sm bg-red-600 opacity-80"></div>
                  <div className="w-5 h-5 rounded-sm bg-white/10"></div>
                  <div className="w-5 h-5 rounded-sm bg-white/10"></div>
                  <div className="w-5 h-5 rounded-sm bg-white/10"></div>
               </div>
            </div>

            {/* Glowing Effects */}
            <div className="absolute -right-10 top-20 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
            <div className="absolute -left-10 bottom-20 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
