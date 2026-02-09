
import React from 'react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Devoradora",
      oldPrice: "59,90",
      price: "39,90",
      period: "/mês",
      benefits: [
        "Acesso total ilimitado",
        "Novos capítulos semanais",
        "Modo Noturno Exclusivo",
        "Leitura em 1 tela"
      ],
      featured: false,
      cta: "ASSINAR MENSAL",
      paymentUrl: "https://pay.hub.la/QmOV462p7DuKDNOjsuot"
    },
    {
      name: "Sócia Elite",
      oldPrice: "239,40",
      price: "147,00",
      period: "/semestre",
      equivalent: "R$ 24,50/mês",
      savings: "Economia de R$ 92,40",
      benefits: [
        "Economia absurda de 40%",
        "Acesso total ilimitado",
        "Leitura Offline Premium",
        "Badge de Elite no Perfil",
        "Leitura em 2 telas"
      ],
      featured: true,
      popular: true,
      cta: "LIBERAR MEU ACESSO ELITE",
      paymentUrl: "https://pay.hub.la/Bj0dh5ysuHZNH2H2pASs"
    },
    {
      name: "Membro Royal",
      oldPrice: "478,80",
      price: "247,00",
      period: "/ano",
      equivalent: "R$ 20,58/mês",
      savings: "O melhor custo-benefício",
      benefits: [
        "Tudo do plano Elite",
        "Box Digital Mensal",
        "Comunidade Secreta Discord",
        "Decida os próximos livros",
        "Leitura em 4 telas"
      ],
      featured: false,
      cta: "ACESSO ROYAL ANUAL",
      paymentUrl: "https://pay.hub.la/XYT31fiDy0Fdfjtfu5gb"
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-48 px-4 md:px-6 relative bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 md:mb-40 reveal">
          <div className="inline-block px-6 py-2 bg-red-600/10 border border-red-600/30 text-red-500 text-[10px] md:text-[11px] uppercase font-black tracking-[0.5em] mb-12 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.2)]">
            Invista na sua próxima obsessão
          </div>
          <h2 className="text-5xl md:text-[11rem] font-serif mb-12 leading-[0.8] tracking-tighter">
            Escolha sua <br />
            <span className="text-red-700 italic drop-shadow-[0_0_20px_rgba(139,0,0,0.4)] uppercase">Identidade.</span>
          </h2>
          <p className="text-white/30 max-w-3xl mx-auto text-xl md:text-3xl font-light leading-relaxed px-4">
            Acesso imediato ao catálogo que as livrarias comuns têm medo de vender. <br className="hidden md:block" />
            <span className="text-white font-medium">Cancele quando quiser. Sinta para sempre.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 items-stretch max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-10 md:p-14 flex flex-col border transition-all duration-1000 rounded-[3rem] overflow-hidden group reveal ${plan.featured
                ? 'bg-red-950/10 border-red-600 lg:scale-105 z-10 shadow-[0_60px_100px_rgba(158,0,0,0.3)]'
                : 'bg-white/[0.01] border-white/5 hover:border-white/10'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 w-full bg-red-700 text-white text-[9px] md:text-[11px] font-black uppercase py-5 tracking-[0.6em] text-center shadow-2xl">
                  MELHOR ESCOLHA
                </div>
              )}

              <div className="mt-8 mb-12">
                <h3 className="text-2xl md:text-3xl font-serif mb-6 uppercase tracking-[0.2em] group-hover:text-red-500 transition-colors duration-500">{plan.name}</h3>

                <div className="mb-2">
                  <span className="text-white/20 text-xl line-through font-light tracking-tighter italic">De R$ {plan.oldPrice}</span>
                </div>

                <div className="flex items-baseline mb-4">
                  <span className="text-2xl md:text-3xl text-white/30 align-top mr-2 font-light">R$</span>
                  <span className="text-7xl md:text-9xl font-black tracking-tighter transition-transform duration-700 inline-block text-white">{plan.price.split(',')[0]}</span>
                  <span className="text-3xl md:text-4xl text-white/30 font-light">,{plan.price.split(',')[1]}</span>
                  <span className="text-xs md:text-sm text-white/20 ml-4 tracking-[0.2em] font-bold uppercase">{plan.period}</span>
                </div>

                {plan.equivalent && (
                  <div className="flex flex-col gap-2 mt-6">
                    <span className="text-red-500 text-[11px] md:text-sm font-black uppercase tracking-[0.2em]">
                      Apenas {plan.equivalent}
                    </span>
                    {plan.savings && (
                      <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest font-bold bg-white/5 px-4 py-1.5 rounded-full self-start">
                        {plan.savings}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 w-full"></div>

              <ul className="space-y-6 mb-16 flex-grow">
                {plan.benefits.map((b, j) => (
                  <li key={j} className="text-sm md:text-base text-white/40 flex items-start gap-4 group/item">
                    <div className="w-6 h-6 rounded-full border border-red-900/40 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-red-600 transition-colors duration-500">
                      <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="group-hover/item:text-white transition-colors duration-500 leading-relaxed font-light">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-7 md:py-9 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] transition-all duration-700 rounded-2xl border-2 text-center block ${plan.featured
                  ? 'bg-red-700 border-red-600 text-white hover:bg-white hover:text-black shadow-[0_30px_60px_rgba(158,0,0,0.4)] hover:-translate-y-2'
                  : 'bg-transparent border-white/10 text-white hover:bg-red-700 hover:border-red-700 hover:-translate-y-2'
                  }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center space-y-16 reveal">
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-3 text-red-600 text-3xl">
              {[1, 2, 3, 4, 5].map(i => <span key={i} className="animate-pulse">★</span>)}
            </div>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.6em] font-black text-white/20">A MAIOR E MAIS SEGURA PLATAFORMA DE DARK ROMANCE DO BRASIL</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-10 hover:opacity-100 transition-all duration-1000">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6 md:h-8" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-10 md:h-14" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-10 md:h-14" alt="Pix" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
