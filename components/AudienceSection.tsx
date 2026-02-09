
import React from 'react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-red-600 mb-8 border-l-2 border-red-600 pl-4">
            Isso é para você se...
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="text-red-600">✦</span>
              <span className="text-white/80">Você busca histórias que desafiam a moralidade e exploram o escuro.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-red-600">✦</span>
              <span className="text-white/80">Você valoriza uma curadoria premium, fugindo do genérico do Wattpad.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-red-600">✦</span>
              <span className="text-white/80">Você quer se sentir parte de uma comunidade exclusiva de leitoras intensas.</span>
            </li>
          </ul>
        </div>

        <div className="flex-1 opacity-50">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white/40 mb-8 border-l-2 border-white/20 pl-4">
            Não é para você se...
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="text-white/40">✕</span>
              <span className="text-white/50">Você prefere romances leves onde nada de tenso acontece.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-white/40">✕</span>
              <span className="text-white/50">Você se assusta facilmente com gatilhos psicológicos fortes.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-white/40">✕</span>
              <span className="text-white/50">Você busca histórias previsíveis e finais 100% solares.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
