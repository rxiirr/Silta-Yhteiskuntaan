
import React from 'react';
import { Page } from '../types';
import { IMAGES } from '../constants';

interface AboutPageProps {
  onPageChange: (page: Page) => void;
  onBookMeeting: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange, onBookMeeting }) => {
  return (
    <div className="flex flex-col bg-background-light min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-[1400px] px-8 lg:px-12 pt-24 pb-20">
        <div className="max-w-[1000px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-terracotta text-sm font-black mb-8 uppercase tracking-widest">
            Meistä
          </div>
          <h1 className="text-5xl font-[900] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl mb-8 leading-[1.05]">
            Asiantuntijat <span className="warm-gradient-text">yhteisen hyvän</span> puolesta.
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-2xl font-medium">
            Silta yhteiskuntaan on asiantuntijoiden oma osuuskunta, joka uskoo että paras laatu syntyy kun tekijät itse omistavat työnsä ja kantavat vastuun yhteiskunnallisesta vaikuttavuudesta.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white border-y border-orange-100">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Toiminnan tarkoitus</h2>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Osuuskuntamme tarkoituksena on jäsenten talouden ja elinkeinon tukemiseksi harjoittaa taloudellista toimintaa siten, että jäsenet saavat työtilaisuuksia monipuolisesti eri puolilla Suomea.
              </p>
              <p>
                Ylläpidämme ja kehitämme jäsentemme asiantuntijaosaamista sekä mahdollistamme laadukkaan verkostoitumisen. Toimimme lisäksi jäsentemme edunvalvojana ja asiantuntijakumppanina yhteiskunnallisessa keskustelussa.
              </p>
              <p>
                Jäsenemme ovat työsuorituksen ajan työsuhteessa osuuskuntaan tai toimivat oman yrityksensä kautta, kantaen yhteisen vastuun laadusta ja inhimillisyydestä.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <span className="block text-4xl font-black text-primary mb-2">50+</span>
                <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">Asiantuntijaa</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-accent-pink mb-2">20+</span>
                <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">Kielitaitoa</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl"></div>
            <img 
              alt="Our Story" 
              className="relative rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover" 
              src={IMAGES.TEAM_PORTRAIT} 
            />
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-32 bg-warm-gray">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-12 text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 mb-6">Mihin uskomme?</h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Arvomme eivät ole vain sanoja paperilla, vaan ne ohjaavat jokaista päätöstä ja kohtaamista.
          </p>
        </div>
        <div className="mx-auto max-w-[1400px] px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Läpinäkyvyys', icon: 'visibility', desc: 'Toimimme avoimesti niin sisäisesti kuin asiakkaidemme suuntaan.' },
            { title: 'Laatu', icon: 'verified', desc: 'Asiantuntijuutemme on lupaus korkeimmasta mahdollisesta laadusta.' },
            { title: 'Inhimillisyys', icon: 'favorite', desc: 'Kohtaamme jokaisen ihmisen yksilönä, lämmöllä ja kunnioituksella.' }
          ].map((v, i) => (
            <div key={i} className="p-10 bg-white rounded-[2.5rem] shadow-soft-warm border border-white hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined text-3xl">{v.icon}</span>
              </div>
              <h3 className="text-2xl font-black mb-4">{v.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto rounded-4xl bg-slate-900 p-16 lg:p-24 text-center relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">Haluatko liittyä joukkoomme?</h2>
            <p className="text-xl text-slate-400 font-medium">Etsimme jatkuvasti uusia asiantuntijoita, jotka jakavat arvomme ja haluavat vaikuttaa yhteiskunnallisesti.</p>
            <button 
              onClick={() => onPageChange(Page.JOIN)}
              className="bg-primary text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-primary-dark transition-all"
            >
              Lue lisää jäsenyydestä
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
