
import React from 'react';

const ExperienceSection: React.FC = () => {
  const items = [
    {
      title: "Obsessão Sem Fim",
      desc: "Centenas de títulos exclusivos. Do Stalker Romance ao Dark High Fantasy.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-600"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
    },
    {
      title: "Capítulos de Sangue",
      desc: "Atualizações semanais. Você nunca ficará órfã de uma boa tensão.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-600"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" /></svg>
    },
    {
      title: "Curadoria Proibida",
      desc: "Nossos editores vasculham o submundo literário pelo que há de mais intenso.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-600"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
    },
    {
      title: "Offline & Dark",
      desc: "Modo noturno nativo e leitura offline para seus momentos mais privados.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-600"><path d="M7 2v11h3v9l7-12h-4l4-8z" /></svg>
    }
  ];

  return (
    <section id="experiencia" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif mb-6">Sinta o que é ser <br /><span className="italic text-red-600">Nocturna.</span></h2>
            <p className="text-white/50 text-xl font-light">Esqueça os apps de leitura genéricos. Criamos uma plataforma focada no seu prazer estético e emocional.</p>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center text-[10px] uppercase tracking-widest text-white/30 text-center p-4 leading-tight">
              Curadoria Premium 2024
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-10 border border-white/5 bg-white/[0.01] hover:bg-red-950/10 hover:border-red-600/30 transition-all duration-500 rounded-sm group relative overflow-hidden">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{item.icon}</div>
              <h3 className="text-xl font-serif mb-4 group-hover:text-red-500 transition-colors">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 relative rounded-sm overflow-hidden border border-white/5 group bg-black shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent z-10" />
          <img
            src="/images/MOCKUP 3.jpg"
            alt="Interface"
            className="w-full h-[500px] object-cover opacity-60 group-hover:scale-105 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-20 max-w-2xl">
            <div className="w-12 h-1 bg-red-600 mb-8"></div>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 italic leading-tight">Um refúgio para <br />mentes obsessivas.</h3>
            <p className="text-white/60 mb-10 text-lg font-light leading-relaxed">
              Interface minimalista. Sem distrações. Apenas você e as palavras que te tiram o sono. Disponível em todos os seus dispositivos.
            </p>
            <div className="flex gap-6">
              <button className="bg-white text-black px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">Começar Leitura</button>
              <button className="border border-white/20 px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Explorar Catálogo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
