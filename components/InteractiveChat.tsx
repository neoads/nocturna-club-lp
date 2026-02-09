
import React, { useState, useEffect, useRef } from 'react';

const InteractiveChat: React.FC = () => {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'bot' | 'user', image?: string}>>([
    { text: "Boa noite, querida leitora. Você parece estar perdida nas sombras erradas...", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const responses = [
    { 
      text: "O que tem na biblioteca?", 
      botReply: "Dê uma olhada em uma de nossas capas exclusivas. No Nocturna, a arte é tão profunda quanto a história.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop"
    },
    { 
      text: "Por que o Nocturna Club?", 
      botReply: "Porque aqui o vilão não pede perdão por te desejar. Nossas autoras escrevem o que os outros têm medo de pensar.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop"
    },
    { 
      text: "Quero entrar agora.", 
      botReply: "Sábia escolha. O primeiro segredo já está te esperando no seu dashboard assim que confirmar sua identidade.",
    }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleUserChoice = (choice: typeof responses[0]) => {
    setMessages(prev => [...prev, { text: choice.text, sender: 'user' }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: choice.botReply, sender: 'bot', image: choice.image }]);
    }, 1200);
  };

  return (
    <section className="py-24 md:py-40 px-6 relative bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="lg:w-1/2 space-y-10 order-2 lg:order-1 reveal">
          <h2 className="text-4xl md:text-8xl font-serif italic leading-[0.85] tracking-tighter">
            Conversas com <br/>
            <span className="not-italic text-red-700 font-black">o Mestre.</span>
          </h2>
          <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed">
            Experimente o tom da nossa plataforma. Aqui, a curadoria é feita por quem vive e respira a intensidade do Dark Romance.
          </p>
          <div className="flex gap-5 items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-red-900/40 flex items-center justify-center animate-pulse">
               <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
            </div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-white/60 italic">Online: Explorando o Catálogo</p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full order-1 lg:order-2 reveal [animation-delay:0.3s]">
           <div className="relative bg-[#080808] border border-white/5 rounded-[2.5rem] h-[550px] md:h-[700px] flex flex-col shadow-[0_80px_120px_rgba(0,0,0,0.9)] overflow-hidden">
              {/* Header do Chat */}
              <div className="p-8 md:p-10 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-red-600 to-black p-[2px]">
                       <div className="w-full h-full rounded-full bg-[#080808] flex items-center justify-center">
                          <span className="text-red-600 font-serif italic text-2xl">M</span>
                       </div>
                    </div>
                    <div>
                       <h3 className="text-xs md:text-base font-bold tracking-[0.2em] uppercase">Nocturna VIP Bot</h3>
                       <p className="text-[8px] md:text-[10px] text-red-600 uppercase font-black tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
                          Mostrando o interior
                       </p>
                    </div>
                 </div>
              </div>

              {/* Corpo do Chat */}
              <div ref={scrollRef} className="flex-grow p-8 md:p-10 space-y-6 md:space-y-8 overflow-y-auto no-scrollbar bg-[#050505]">
                 {messages.map((m, i) => (
                   <div key={i} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'} animate-fade-in`}>
                      <div className={`max-w-[85%] p-5 md:p-8 rounded-[1.8rem] text-sm md:text-lg leading-relaxed ${
                        m.sender === 'user' 
                        ? 'bg-red-800 text-white rounded-tr-none shadow-xl font-bold' 
                        : 'bg-white/[0.04] text-white/70 rounded-tl-none border border-white/10 font-light italic'
                      }`}>
                         {m.text}
                      </div>
                      {m.image && (
                        <div className="mt-4 max-w-[70%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-reveal-text">
                           <img src={m.image} alt="Sneak Peek" className="w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
                        </div>
                      )}
                   </div>
                 ))}
                 {isTyping && (
                   <div className="flex justify-start">
                      <div className="bg-white/5 p-6 rounded-2xl rounded-tl-none border border-white/5 flex gap-2">
                         <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                         <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                         <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                   </div>
                 )}
              </div>

              {/* Opções de Resposta */}
              <div className="p-6 md:p-10 border-t border-white/5 bg-white/[0.01] space-y-4 shrink-0">
                 <div className="flex flex-col gap-2">
                    {responses.map((r, i) => (
                      <button 
                        key={i}
                        onClick={() => handleUserChoice(r)}
                        disabled={isTyping}
                        className="w-full text-left text-[9px] md:text-[11px] px-6 py-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-20 font-bold tracking-[0.2em] uppercase"
                      >
                        {r.text}
                      </button>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveChat;
