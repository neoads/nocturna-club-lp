
import React from 'react';

const PainSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div className="relative group reveal">
          <div className="absolute -inset-10 bg-red-600/10 blur-[120px] rounded-full transition-opacity opacity-0 group-hover:opacity-100 duration-1000"></div>
          <h2 className="text-4xl md:text-8xl font-serif mb-12 leading-[0.9] tracking-tighter relative z-10">
            A cura para o <br />
            <span className="text-red-600 italic">tédio literário.</span>
          </h2>
          <div className="space-y-10 text-white/60 leading-relaxed text-lg md:text-2xl font-light">
            <p>
              Você abre um romance comum esperando fogo, mas encontra apenas fumaça. Personagens perfeitos demais, vilões que pedem desculpas, tramas que você já previu na terceira página.
            </p>
            <p className="text-white font-medium italic border-l-4 border-red-700 pl-10 bg-red-950/5 py-8 rounded-r-lg">
              "Aqui, o pecado não é escondido. Ele é o protagonista. Nós não temos medo da sua intensidade."
            </p>
            <p>
              O Nocturna Club é o seu refúgio secreto. Para a leitora que busca o visceral. Que quer sentir o pulso acelerar não por fofura, mas por <span className="text-white font-bold underline decoration-red-600 underline-offset-8">tensão insuportável</span>.
            </p>
          </div>
        </div>

        <div className="relative reveal [animation-delay:0.3s]">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="relative bg-[#0a0a0a] p-10 md:p-20 rounded-2xl border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-900/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex gap-2 mb-10">
              {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-red-600 text-sm">★</span>)}
            </div>
            <p className="text-2xl md:text-4xl font-serif italic text-white/90 mb-16 leading-[1.3]">
              "Sempre me senti 'errada' por gostar de vilões. No Nocturna, descobri que minha sede por intensidade é o que me torna parte dessa elite. É indescritível."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-black p-[2px]">
                <img src="/images/MODELO MARIANA.jpg" alt="Mariana V." className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <span className="block text-sm md:text-lg font-bold text-white uppercase tracking-[0.3em]">Mariana V.</span>
                <span className="text-[10px] md:text-xs text-red-500 uppercase tracking-widest font-black">Membro Elite • Plano Anual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
