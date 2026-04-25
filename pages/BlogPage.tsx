
import React from 'react';
import { Page } from '../types';

interface BlogPageProps {
  onPageChange: (page: Page) => void;
  onBookMeeting: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onPageChange, onBookMeeting }) => {
  const posts = [
    {
      title: 'Miten rakentaa inhimillisempää kotoutumista?',
      date: '15. Huhtikuuta, 2024',
      category: 'Asiantuntijuus',
      excerpt: 'Pohdimme tässä kirjoituksessa, miten kohtaaminen ja aito kuuntelu voivat muuttaa koko kotoutumisprosessin suuntaa.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Osuuskunta yrittäjyyden muotona asiantuntijalle',
      date: '2. Maaliskuuta, 2024',
      category: 'Osuuskuntatoiminta',
      excerpt: 'Miksi valitsimme osuuskunnan perinteisen yritysmuodon sijaan? Lue asiantuntijoidemme ajatuksia yhteisöllisestä omistamisesta.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Uusia tuulia yhteiskuntaorientaatioon',
      date: '20. Helmikuuta, 2024',
      category: 'Koulutus',
      excerpt: 'Esittelemme uusia pedagogisia menetelmiämme, joilla teemme yhteiskuntaorientaatiosta elävää ja osallistavaa.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="flex flex-col bg-background-light min-h-screen">
      {/* Hero Header */}
      <section className="mx-auto max-w-[1400px] px-8 lg:px-12 pt-24 pb-16">
        <div className="max-w-[1000px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-pink/10 text-accent-pink text-sm font-black mb-8 uppercase tracking-widest">
            Blogi
          </div>
          <h1 className="text-5xl font-[900] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl mb-8 leading-[1.05]">
            Ajatuksia <span className="warm-gradient-text">tulevaisuudesta</span>.
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-2xl font-medium">
            Täältä löydät asiantuntijoidemme uusimmat näkemykset asioista, jotka muokkaavat yhteiskuntaamme.
          </p>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="mx-auto max-w-[1400px] px-8 lg:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-xs font-black uppercase tracking-widest text-slate-900">
                  {post.category}
                </div>
              </div>
              <div className="space-y-4">
                <time className="text-sm font-bold text-slate-400 uppercase tracking-widest">{post.date}</time>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-primary font-black uppercase text-sm tracking-widest group-hover:gap-4 transition-all">
                    Lue lisää <span className="material-symbols-outlined">trending_flat</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary/30 py-32 border-y border-orange-100">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
          <div className="max-w-[800px] mx-auto text-center space-y-12">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-primary mx-auto">
              <span className="material-symbols-outlined text-4xl">mail</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Tilaa uutiskirjeemme</h2>
              <p className="text-xl text-slate-500 font-medium">Saat tuoreimmat asiantuntija-artikkelit ja uutiset suoraan sähköpostiisi.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="sähköposti@esimerkki.fi" 
                className="flex-grow h-16 px-8 rounded-2xl bg-white border border-orange-100 focus:ring-2 focus:ring-primary/20 outline-none font-medium"
              />
              <button className="h-16 px-10 rounded-2xl bg-slate-900 text-white font-black hover:bg-primary transition-all">
                Tilaa nyt
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
