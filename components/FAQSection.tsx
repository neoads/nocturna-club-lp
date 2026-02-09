
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-8 transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h4 className={`text-lg md:text-2xl font-serif italic transition-colors ${isOpen ? 'text-red-600' : 'text-white/80 group-hover:text-white'}`}>
          {question}
        </h4>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-45 bg-red-600 border-red-600' : ''}`}>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12"></path>
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "O pagamento é realmente seguro?",
      answer: "Absolutamente. Utilizamos criptografia de ponta a ponta e processamos pagamentos através das maiores e mais seguras operadoras do país. Seus dados estão 100% protegidos pela Nocturna Network."
    },
    {
      question: "Como recebo meu acesso após o pagamento?",
      answer: "O acesso é imediato. Assim que o pagamento for confirmado (instante no Pix ou Cartão), você receberá um e-mail com suas credenciais para entrar no clube e começar a leitura."
    },
    {
      question: "Posso cancelar minha assinatura quando quiser?",
      answer: "Sim! Não temos letras miúdas ou taxas escondidas. Você pode cancelar sua renovação a qualquer momento diretamente no seu painel de usuário, sem precisar falar com ninguém."
    },
    {
      question: "Consigo ler offline ou pelo Kindle?",
      answer: "Nossa plataforma possui um aplicativo web progressivo que permite a leitura offline. No momento, o foco é na experiência imersiva em nosso app próprio para garantir a exclusividade dos títulos e atualizações semanais."
    },
    {
      question: "Tem garantia de satisfação?",
      answer: "Sim, você tem 7 dias de garantia incondicional. Se por qualquer motivo você achar que o Nocturna não é para você, basta solicitar o reembolso total dentro desse prazo."
    }
  ];

  return (
    <section className="py-24 md:py-48 px-6 bg-[#020202]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-7xl font-serif mb-8 uppercase tracking-tighter">
            Dúvidas <span className="text-red-600 italic">Frequentes.</span>
          </h2>
          <p className="text-white/30 text-lg md:text-xl font-light">Tudo o que você precisa saber antes de entrar nas sombras.</p>
        </div>

        <div className="reveal [animation-delay:0.3s]">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
