
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: "01", title: "Entre no Clube", desc: "Escolha o plano que melhor se adapta à sua fome de leitura." },
    { num: "02", title: "Escolha sua Obsessão", desc: "Navegue por categorias como Stalker, Rivalry, Forbidden e mais." },
    { num: "03", title: "Leia sem Parar", desc: "Acesse pelo celular, tablet ou computador, a qualquer hora." },
    { num: "04", title: "Novidades Semanais", desc: "Descubra novas histórias e capítulos liberados toda semana." }
  ];

  return (
    <section id="como-funciona" className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center">Simples. Direto. <span className="italic">Obsessivo.</span></h2>
        
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <span className="text-6xl font-serif text-white/5 absolute -top-10 -left-4 select-none">{step.num}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-red-600 inline-block"></span>
                  {step.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
