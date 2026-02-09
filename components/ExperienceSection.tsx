
import React from 'react';

const ExperienceSection: React.FC = () => {
  const items = [
    {
      title: "Obsessão Sem Fim",
      desc: "Centenas de títulos exclusivos. Do Stalker Romance ao Dark High Fantasy.",
      icon: "🖤"
    },
    {
      title: "Capítulos de Sangue",
      desc: "Atualizações semanais. Você nunca ficará órfã de uma boa tensão.",
      icon: "🔥"
    },
    {
      title: "Curadoria Proibida",
      desc: "Nossos editores vasculham o submundo literário pelo que há de mais intenso.",
      icon: "👁️"
    },
    {
      title: "Offline & Dark",
      desc: "Modo noturno nativo e leitura offline para seus momentos mais privados.",
      icon: "⚡"
    }
  ];

  return (
    <section id="experiencia" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif mb-6">Sinta o que é ser <br/><span className="italic text-red-600">Nocturna.</span></h2>
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
              <div className="absolute -right-4 -bottom-4 text-6xl opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">{item.icon}</div>
              <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{item.icon}</div>
              <h3 className="text-xl font-serif mb-4 group-hover:text-red-500 transition-colors">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 relative rounded-sm overflow-hidden border border-white/5 group bg-black shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop&grayscale=true" 
            alt="Interface" 
            className="w-full h-[500px] object-cover opacity-30 group-hover:scale-105 transition-transform duration-[10s]" 
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-20 max-w-2xl">
            <div className="w-12 h-1 bg-red-600 mb-8"></div>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 italic leading-tight">Um refúgio para <br/>mentes obsessivas.</h3>
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
