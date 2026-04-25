
import React, { useState } from 'react';
import { Page } from '../types';

interface JoinPageProps {
  onPageChange: (page: Page) => void;
  onBookMeeting: () => void;
}

const JoinPage: React.FC<JoinPageProps> = ({ onPageChange, onBookMeeting }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call/email sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-background-light min-h-screen">
      {/* Hero Header */}
      <section className="mx-auto max-w-[1400px] px-8 lg:px-12 pt-24 pb-16">
        <div className="max-w-[1000px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-terracotta text-sm font-black mb-8">
            Jäsenyys
          </div>
          <h1 className="text-5xl font-[900] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl mb-8 leading-[1.05]">
            Liity <span className="warm-gradient-text">Osuuskuntaan</span>.
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-2xl font-medium">
            Tule osaksi asiantuntijayhteisöämme. Jäsenyys on investointi tulevaisuuteen ja laatuun.
          </p>
        </div>
      </section>

      {/* Info & Form Body */}
      <section className="mx-auto max-w-[1400px] px-8 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="p-10 rounded-[3rem] bg-white shadow-soft-warm border border-white">
              <h2 className="text-3xl font-black mb-6">Miten jäseneksi?</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Hallituksen hyväksyntä</h4>
                    <p className="text-slate-500 font-medium">Osuuskunnan jäseneksi valinnasta päättää osuuskunnan hallitus hakemuksen perusteella.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Osuusmaksu 80 €</h4>
                    <p className="text-slate-500 font-medium">Jäsenen on otettava yksi osuus, jonka nimellisarvo on 80 euroa.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">badge</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Työsuhde osuuskuntaan</h4>
                    <p className="text-slate-500 font-medium">Jäsenet ovat työsuorituksen ajan työsuhteessa osuuskuntaan tai toimivat oman yrityksensä kautta.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-10 rounded-[3rem] bg-slate-900 text-white overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-black mb-4 relative z-10">Kysyttävää?</h3>
              <p className="text-slate-400 font-medium mb-8 relative z-10">
                Ota rohkeasti yhteyttä, jos jokin jäsenyydessä mietityttää.
              </p>
              <button 
                onClick={() => onPageChange(Page.CONTACT)}
                className="text-white font-bold inline-flex items-center gap-2 group"
              >
                Ota yhteyttä <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">trending_flat</span>
              </button>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white rounded-[3rem] p-12 lg:p-20 text-center shadow-soft-warm border border-white flex flex-col items-center justify-center min-h-[600px]">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-5xl">check_circle</span>
                </div>
                <h2 className="text-4xl font-black mb-6 text-slate-900">Hakemus vastaanotettu!</h2>
                <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-md mx-auto mb-12">
                  Kiitos mielenkiinnostasi! Olemme vastaanottaneet hakemuksesi ja olemme sinuun yhteydessä sähköpostitse osoitteeseen info@siltayhteiskuntaan.fi pian.
                </p>
                <button 
                  onClick={() => onPageChange(Page.HOME)}
                  className="bg-primary text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-primary-dark transition-all"
                >
                  Palaa etusivulle
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-soft-warm border border-white">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Jäsenhakemus</h2>
                <p className="text-slate-500 font-medium mb-12">Täytä tiedot huolellisesti hakeaksesi jäsenyyttä.</p>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-slate-900 uppercase tracking-widest px-1">Etunimi</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Matti"
                        className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-orange-100 border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-slate-900 uppercase tracking-widest px-1">Sukunimi</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Meikäläinen"
                        className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-orange-100 border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium" 
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-black text-slate-900 uppercase tracking-widest px-1">Sähköpostiosoite</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="matti@esimerkki.fi"
                      className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-orange-100 border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium" 
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-black text-slate-900 uppercase tracking-widest px-1">Puhelinnumero</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="+358 40 123 4567"
                      className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-orange-100 border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium" 
                    />
                  </div>

                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900">Liitteet</h3>
                    <p className="text-slate-500 text-sm font-medium">Lähetäthän CV:si ja tuoreimman koulutodistuksesi PDF-muodossa.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="block text-sm font-black text-slate-900 uppercase tracking-widest px-1">Ansioluettelo (CV)</label>
                        <div className="relative group">
                          <input 
                            required
                            type="file" 
                            accept=".pdf,.doc,.docx"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                          />
                          <div className="w-full h-32 rounded-2xl border-2 border-dashed border-orange-100 bg-orange-50/30 flex flex-col items-center justify-center gap-2 group-hover:bg-orange-50 group-hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
                            <span className="text-sm font-bold text-slate-400">Valitse tiedosto</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <label className="block text-sm font-black text-slate-900 uppercase tracking-widest px-1">Kouluntodistus</label>
                        <div className="relative group">
                          <input 
                            required
                            type="file" 
                            accept=".pdf,.jpg,.png"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                          />
                          <div className="w-full h-32 rounded-2xl border-2 border-dashed border-orange-100 bg-orange-50/30 flex flex-col items-center justify-center gap-2 group-hover:bg-orange-50 group-hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl">add_photo_alternate</span>
                            <span className="text-sm font-bold text-slate-400">Valitse tiedosto</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button 
                      disabled={loading}
                      type="submit" 
                      className={`w-full h-20 rounded-2xl bg-primary text-white font-black text-xl shadow-xl shadow-primary/20 flex items-center justify-center gap-4 transition-all hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0
                        ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? (
                        <>
                          <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Lähetetään...
                        </>
                      ) : (
                        <>
                          Lähetä hakemus
                          <span className="material-symbols-outlined text-2xl">send</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-slate-400 text-xs font-bold mt-6 uppercase tracking-widest">
                      Lähettämällä hakemuksen hyväksyt tietosuojausehtomme.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default JoinPage;
