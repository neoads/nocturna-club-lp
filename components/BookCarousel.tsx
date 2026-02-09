
import React from 'react';

const BookCarousel: React.FC = () => {
  const books = [
    { title: "Seu Inferno Particular", tag: "DARK ROMANCE", cover: "/images/1.webp" },
    { title: "A Vinha Proibida", tag: "FORBIDDEN", cover: "/images/818X6R+akeL._UF1000,1000_QL80_.jpg" },
    { title: "Presa à Máfia", tag: "MAFIA", cover: "/images/coverorgin.jpg" },
    { title: "Capturada", tag: "DARK ROMANCE", cover: "/images/images (1).jpeg" },
    { title: "Sagrado e Profano", tag: "FORBIDDEN", cover: "/images/sagrado-e-profano---livro-1---judas-dark-romance-25652435-020820240220.jpg" },
    { title: "Love in the Dark", tag: "DARK ROMANCE", cover: "/images/lvitd-o6sm9uwdqj.webp" },
    { title: "Amores Furtados", tag: "MAFIA", cover: "/images/41DSDNWGbkL.jpg" },
    { title: "Verity", tag: "THRILLER", cover: "/images/91SDZ2eUj+L.jpg" },
    { title: "Vendida", tag: "DARK ROMANCE", cover: "/images/61g1ic0jB0L._UF1000,1000_QL80_.jpg" },
    { title: "Our Dark Duet", tag: "DARK ACADEMY", cover: "/images/81zanmNv8NL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Princesa Distorcida", tag: "MAFIA", cover: "/images/91V6kGecfJL._UF1000,1000_QL80_.jpg" },
    { title: "Mais Quente que Fogo", tag: "DARK ELEMENTS", cover: "/images/51SHC2Te85L.jpg" },
    { title: "Perverta-me", tag: "DARK ROMANCE", cover: "/images/images.jpeg" },
    { title: "My Dark Heart", tag: "DARK ROMANCE", cover: "/images/MY_DARK_HEART__UM_DARK_ROMANC_1730400380122517690SK-V11730400380B.webp" },
    { title: "Desejo Proibido", tag: "FORBIDDEN", cover: "/images/9798751376918.webp" },
    { title: "Obsessão", tag: "DARK ROMANCE", cover: "/images/coverorgin.webp" },
  ];

  // Duplicamos a lista para criar o efeito de scroll infinito sem saltos
  const duplicatedBooks = [...books, ...books];

  return (
    <div className="py-24 md:py-32 overflow-hidden relative border-y border-white/5 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-3">As Mais <span className="text-red-600">Devoradas.</span></h2>
          <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black italic">Histórias originais que você só encontra aqui</p>
        </div>
        <div className="hidden md:flex gap-3">
          <div className="w-12 h-1 bg-red-600 rounded-full"></div>
          <div className="w-4 h-1 bg-white/10 rounded-full"></div>
          <div className="w-4 h-1 bg-white/10 rounded-full"></div>
        </div>
      </div>

      <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer w-fit">
        {duplicatedBooks.map((book, i) => (
          <div key={i} className="flex-none w-64 md:w-80 px-4 group">
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 transition-all duration-700 group-hover:border-red-600 group-hover:scale-[1.03] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-red-600 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white mb-4 rounded-sm">
                  {book.tag}
                </span>
                <h3 className="text-lg md:text-2xl font-serif font-bold text-white leading-tight group-hover:text-red-500 transition-colors">
                  {book.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradientes laterais para suavizar a entrada/saída dos itens */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#020202] to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#020202] to-transparent z-30 pointer-events-none" />
    </div>
  );
};

export default BookCarousel;
