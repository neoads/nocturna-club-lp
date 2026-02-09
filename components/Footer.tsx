
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-6 bg-[#020202] text-center relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950/10 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="text-3xl font-bold tracking-[0.5em] text-red-600 font-serif italic mb-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">NOCTURNA CLUB</div>
          <h3 className="text-3xl md:text-6xl font-serif italic text-white mb-16 leading-tight">
            Você vai continuar <br/><span className="text-white/40 not-italic">lendo o mesmo de sempre?</span>
          </h3>
          
          <a 
            href="#planos" 
            className="inline-flex flex-col items-center gap-4 group"
          >
            <div className="bg-white text-black font-black uppercase tracking-[0.5em] px-16 py-8 hover:bg-red-600 hover:text-white transition-all duration-700 glow-red border-2 border-white hover:border-red-600 shadow-2xl rounded-sm">
              Entrar no Clube Agora
            </div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold group-hover:text-red-500 transition-colors">Acesso imediato • 7 Dias de Garantia</p>
          </a>
        </div>

        <div className="h-px bg-white/5 w-full mb-12"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.4em] font-black text-white/20 space-y-10 md:space-y-0">
          <div className="flex flex-wrap justify-center gap-10">
            <a href="#" className="hover:text-red-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-red-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-red-600 transition-colors">Afiliados</a>
            <a href="#" className="hover:text-red-600 transition-colors">Suporte</a>
          </div>
          <p className="text-center md:text-right">© 2024 Nocturna Club. <br className="md:hidden"/>Onde o escuro é o seu refúgio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
