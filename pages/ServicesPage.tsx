
import React, { useState } from 'react';
import { SERVICES, IMAGES } from '../constants';
import { Page, ServiceItem } from '../types';
import ServiceDetailModal from '../components/ServiceDetailModal';

interface ServicesPageProps {
  onPageChange: (page: Page) => void;
  onBookMeeting: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onPageChange, onBookMeeting }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="flex flex-col bg-background-light min-h-screen">
      {/* Services Hero */}
      <section className="mx-auto max-w-[1400px] px-8 lg:px-12 pt-24 pb-20">
        <div className="max-w-[1000px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-terracotta text-sm font-black mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Tieto | Taito | Tulevaisuus
          </div>
          <h1 className="text-5xl font-[900] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl mb-8 leading-[1.05]">
            Modernit <span className="warm-gradient-text">Palvelut</span> Kotoutumiseen.
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-2xl font-medium">
            Asiantuntijaosuuskunta, joka rakentaa osallisuutta. Tarjoamme ratkaisuja, joissa yhdistyvät syvä asiantuntemus ja inhimillinen lämpö.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="mx-auto max-w-[1400px] px-8 lg:px-12 pb-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col rounded-[2.5rem] bg-gradient-to-br from-white to-orange-50/30 p-10 shadow-soft-warm border border-white transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="mb-10 relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:scale-110 transition-transform"></div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-terracotta text-white shadow-xl shadow-primary/30">
                  <span className="material-symbols-outlined text-4xl font-light">{service.icon}</span>
                </div>
              </div>
              <h3 className="mb-2 text-sm font-black text-terracotta uppercase tracking-widest">{service.tag}</h3>
              <h3 className="mb-4 text-2xl font-black text-slate-900">{service.title}</h3>
              <p className="mb-10 flex-1 text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
              <button 
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center gap-3 font-black text-terracotta group-hover:gap-5 transition-all"
              >
                Tutustu <span className="material-symbols-outlined">trending_flat</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-orange-50/50 py-32 border-y border-orange-100">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-accent-pink to-accent-warm rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-square shadow-2xl">
                <img alt="Team at work" className="h-full w-full object-cover transition-all duration-700" src={IMAGES.TEAM_PORTRAIT} />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-terracotta font-black uppercase tracking-widest text-sm block mb-4">Laadun takuu</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-slate-900 mb-10 leading-tight">
                Toteutamme kotoutumislain mukaista koulutusta.
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">Lainmukainen koulutus</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Toteutamme kotoutumislain (681/2023) 25§ mukaista yhteiskuntaorientaatiokoulutusta asiantuntijavoimin.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-accent-pink">
                    <span className="material-symbols-outlined text-3xl">language</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">Monikieliset palvelut</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Tarjoamme monikielistä ohjausta, neuvontaa, tulkkausta, käännöksiä sekä alkuvaiheen kotoutumispalveluja.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-terracotta">
                    <span className="material-symbols-outlined text-3xl">psychology</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">Valmennus ja konsultaatio</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Asiantuntijamme tarjoavat korkeatasoista konsultaatiota ja valmennusta kotoutumisen ja työllisyyden kentällä.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inner CTA */}
      <section className="mx-auto max-w-[1400px] px-8 lg:px-12 py-32">
        <div className="relative overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-terracotta to-slate-900 px-8 py-24 text-center text-white shadow-3xl">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px]"></div>
          <div className="absolute -left-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-accent-pink/20 blur-[120px]"></div>
          <div className="relative z-10 flex flex-col items-center gap-12">
            <h2 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
              Valmiina rakentamaan <br/>yhdessä jotain uutta?
            </h2>
            <p className="max-w-2xl text-xl text-slate-200 font-medium leading-relaxed">
              Tieto | Taito | Tulevaisuus. Yhdistetään voimat ja tehdään kotoutumisesta sujuvampaa, lämpimämpää ja inhimillisempää kaikille.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="h-16 rounded-full bg-primary px-12 text-lg font-black text-white shadow-2xl shadow-primary/40 hover:bg-white hover:text-terracotta transition-all">
                Lähetä viesti
              </button>
              <button 
                onClick={onBookMeeting}
                className="h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-12 text-lg font-black text-white hover:bg-white/20 transition-all"
              >
                Varaa aika
              </button>
            </div>
          </div>
        </div>
      </section>
      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        onBookMeeting={onBookMeeting}
      />
    </div>
  );
};

export default ServicesPage;
