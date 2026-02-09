
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 pt-20">
      {/* Background Cinematic */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[40s] animate-cinematic-zoom"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop&grayscale=true)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/95 to-[#050505]" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto flex flex-col items-center w-full">
        <div className="overflow-hidden mb-6">
          <span className="inline-block px-4 py-1.5 border border-red-900/40 bg-red-950/20 text-red-500 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] rounded-full animate-slide-up">
            Apenas para mentes insaciáveis
          </span>
        </div>
        
        <h1 className="text-[3.8rem] md:text-[11rem] lg:text-[14rem] font-serif leading-[0.8] tracking-tighter mb-8 md:mb-10 cursor-default select-none">
          <span className="block overflow-visible">
            <span 
              className="inline-block animate-reveal-text magnetic-text" 
              data-text="Nocturna"
            >
              Nocturna
            </span>
          </span>
          <span className="block overflow-visible -mt-1 md:-mt-6 lg:-mt-10 italic font-light text-red-600/90 drop-shadow-[0_0_20px_rgba(139,0,0,0.5)]">
            <span 
              className="inline-block animate-reveal-text [animation-delay:0.3s] magnetic-text" 
              data-text="Club"
            >
              Club
            </span>
          </span>
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 opacity-0 animate-fade-in [animation-delay:1s] fill-mode-forwards px-4">
          <p className="text-lg md:text-3xl text-white/50 font-light leading-snug md:leading-relaxed">
            Esqueça os contos de fadas. Entre no único clube onde <span className="text-white font-semibold">suas obsessões mais sombrias</span> são celebradas, não julgadas. <br className="hidden md:block"/>
            <span className="italic text-red-600 font-medium">Você está pronta para devorar o proibido?</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 opacity-0 animate-fade-in [animation-delay:1.5s] fill-mode-forwards w-full md:w-auto px-6">
          <a 
            href="#planos" 
            className="w-full md:w-auto group relative bg-red-700 text-white font-black uppercase tracking-[0.4em] px-12 md:px-20 py-7 md:py-9 hover:bg-red-600 transition-all duration-700 btn-glow-premium text-center text-[10px] md:text-sm border border-red-500/30"
          >
            QUERO O ACESSO VIP
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-red-600/20 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-500 hidden md:block"></div>
          </a>
          
          <div className="flex flex-col items-center md:items-start border-l-0 md:border-l border-white/10 md:pl-10">
             <div className="flex -space-x-3 mb-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#050505] bg-zinc-900 grayscale-[0.5] hover:grayscale-0 transition-all cursor-pointer">
                    <img src={`https://i.pravatar.cc/150?u=${i*55}`} className="rounded-full h-full w-full object-cover" alt="Socia" />
                  </div>
                ))}
             </div>
             <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/40 font-bold">
               Junte-se a <span className="text-red-500">12.438 leitoras</span> no escuro
             </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator with refined design */}
      <div className="absolute bottom-10 flex flex-col items-center gap-4 opacity-30 group">
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold rotate-90 origin-left translate-x-3 mb-10 text-white/50">SCROLL</span>
        <div className="w-px h-20 md:h-28 bg-gradient-to-b from-red-600 to-transparent animate-pulse"></div>
      </div>

      <style>{`
        @keyframes cinematic-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        @keyframes reveal-text {
          from { transform: translateY(110%); opacity: 0; filter: blur(10px); }
          to { transform: translateY(0); opacity: 1; filter: blur(0); }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-text { animation: reveal-text 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-cinematic-zoom { animation: cinematic-zoom 30s linear infinite alternate; }
      `}</style>
    </section>
  );
};

export default Hero;
