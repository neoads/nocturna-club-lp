
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-20 py-6 md:py-8 flex items-center justify-between ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-3xl py-4 md:py-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-col cursor-pointer group">
        <span className="text-2xl md:text-3xl font-black tracking-tighter text-red-600 font-serif italic uppercase leading-none">
          Nocturna
        </span>
        <span className="text-xl md:text-2xl font-black tracking-tighter text-red-600 font-serif italic uppercase leading-none ml-1">
          Club
        </span>
      </div>
      
      <div className="hidden lg:flex space-x-12 text-[10px] font-black tracking-[0.4em] uppercase text-white/40">
        <a href="#experiencia" className="hover:text-red-600 transition-all hover:tracking-[0.5em]">Experiência</a>
        <a href="#como-funciona" className="hover:text-red-600 transition-all hover:tracking-[0.5em]">O Clube</a>
        <a href="#planos" className="hover:text-red-600 transition-all hover:tracking-[0.5em]">Planos</a>
      </div>

      <div className="flex items-center gap-6">
        <a href="#planos" className="bg-red-700 text-white text-[9px] md:text-[11px] uppercase font-black tracking-[0.4em] px-6 md:px-10 py-3 md:py-4 transition-all hover:bg-white hover:text-black shadow-2xl rounded-sm">
          QUERO ENTRAR
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
