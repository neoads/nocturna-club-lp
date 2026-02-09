
import React, { useState, useEffect, useRef } from 'react';

const Counter: React.FC<{ end: number; duration: number; suffix?: string }> = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count.toLocaleString()}{suffix}</div>;
};

const SocialProof: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif italic text-white/[0.01] select-none pointer-events-none">
        Obsession
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 items-center border-b border-white/5 pb-32">
          <div className="text-center group">
            <div className="text-7xl md:text-9xl font-serif mb-6 text-red-600 tracking-tighter transition-all group-hover:scale-110 group-hover:text-red-500 duration-700">
              <Counter end={12} duration={2000} suffix="k" />
            </div>
            <div className="w-12 h-1 bg-red-600 mx-auto mb-6 opacity-40 group-hover:w-24 transition-all duration-700"></div>
            <h3 className="text-xs uppercase tracking-[0.5em] font-black text-white/50 mb-2">Sócias Compulsivas</h3>
            <p className="text-white/20 text-[10px] leading-relaxed italic max-w-[200px] mx-auto">Leitoras que entraram no escuro e nunca mais olharam para trás.</p>
          </div>

          <div className="text-center group">
            <div className="text-7xl md:text-9xl font-serif mb-6 text-white tracking-tighter transition-all group-hover:scale-110 duration-700">
              <Counter end={450} duration={2500} suffix="+" />
            </div>
            <div className="w-12 h-1 bg-white mx-auto mb-6 opacity-20 group-hover:w-24 transition-all duration-700"></div>
            <h3 className="text-xs uppercase tracking-[0.5em] font-black text-white/50 mb-2">Histórias Originais</h3>
            <p className="text-white/20 text-[10px] leading-relaxed italic max-w-[200px] mx-auto">Onde cada linha é um pecado e cada página é uma confissão.</p>
          </div>

          <div className="text-center group">
            <div className="text-7xl md:text-9xl font-serif mb-6 text-red-600 tracking-tighter transition-all group-hover:scale-110 group-hover:text-red-500 duration-700">
              <Counter end={98} duration={1500} suffix="%" />
            </div>
            <div className="w-12 h-1 bg-red-600 mx-auto mb-6 opacity-40 group-hover:w-24 transition-all duration-700"></div>
            <h3 className="text-xs uppercase tracking-[0.5em] font-black text-white/50 mb-2">Renovação de Planos</h3>
            <p className="text-white/20 text-[10px] leading-relaxed italic max-w-[200px] mx-auto">Porque a intensidade do Nocturna Club se torna um vício incurável.</p>
          </div>
        </div>

        <div className="mt-32 p-1 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-0 bg-red-600 group-hover:h-full transition-all duration-1000"></div>
          <div className="grid md:grid-cols-[1.5fr_2fr] gap-20 md:gap-32 items-center px-4">
             <div className="flex flex-col items-center md:items-start gap-10">
                <div className="flex -space-x-6">
                  {[32, 47, 51, 64].map(i => (
                    <div key={i} className="w-20 h-20 rounded-full border-4 border-[#020202] bg-gray-900 overflow-hidden shadow-2xl transition-transform hover:scale-125 hover:z-50 duration-500">
                       <img src={`https://i.pravatar.cc/150?img=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-2 mb-4 text-red-600">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-lg">★</span>)}
                  </div>
                  <p className="text-xs uppercase font-black tracking-[0.3em] text-white">4.9/5 • APROVAÇÃO DAS LEITORAS</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mt-2 italic font-bold">Baseado em mais de 8.000 avaliações verificadas</p>
                </div>
             </div>
             
             <div className="relative">
                <div className="absolute -top-16 -left-12 text-[10rem] font-serif italic text-white/[0.03] select-none pointer-events-none">"</div>
                <p className="text-2xl md:text-4xl font-serif italic text-white/90 leading-[1.3] relative z-10 group-hover:text-white transition-colors duration-700">
                  "O Nocturna não é apenas um site de livros, é um refúgio visceral. Quando abro o app, sinto que estou entrando em um mundo proibido onde posso ser eu mesma."
                </p>
                <div className="mt-12 flex items-center gap-6">
                  <span className="w-16 h-px bg-red-600"></span>
                  <div>
                    <span className="block text-xs uppercase tracking-[0.5em] font-black text-white">Beatriz V.</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-red-600 italic">Sócia Fundadora • São Paulo</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
