
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(4); // Success
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="absolute top-8 right-8 z-10">
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-10 lg:p-14">
              {step < 4 && (
                <div className="mb-10 flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={`h-1.5 flex-grow rounded-full transition-all duration-500
                        ${s <= step ? 'bg-primary' : 'bg-slate-100'}`}
                    />
                  ))}
                </div>
              )}

              {step === 1 && (
                <form onSubmit={handleNext} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-black text-slate-900 leading-tight">Valitse tapaamisen aihe</h2>
                    <p className="text-slate-500 font-medium font-display">Mistä haluat keskustella kanssamme?</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {['Henkilökohtainen neuvonta', 'Osuuskuntaan liittyminen', 'Palvelujen tilaaminen', 'Muu yhteydenotto'].map((topic) => (
                      <label 
                        key={topic}
                        className="flex items-center gap-4 p-5 rounded-2xl border-2 border-orange-50 hover:border-primary/50 cursor-pointer transition-all has-[:checked]:border-primary has-[:checked]:bg-orange-50/50"
                      >
                        <input type="radio" name="topic" value={topic} required className="size-5 accent-primary" />
                        <span className="font-bold text-slate-700">{topic}</span>
                      </label>
                    ))}
                  </div>
                  <button type="submit" className="w-full h-16 rounded-2xl bg-slate-900 text-white font-black text-lg hover:bg-primary transition-all">
                    Jatka
                  </button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleNext} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-black text-slate-900 leading-tight">Milloin sopisi?</h2>
                    <p className="text-slate-500 font-medium font-display">Valitse sinulle parhaiten sopiva päivä ja kellonaika.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-slate-900 uppercase tracking-widest px-1">Päivämäärä</label>
                      <input required type="date" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-orange-100 border outline-none font-medium" />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-slate-900 uppercase tracking-widest px-1">Kellonaika</label>
                      <select required className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-orange-100 border outline-none font-medium">
                        <option>09:00 - 10:00</option>
                        <option>10:00 - 11:00</option>
                        <option>13:00 - 14:00</option>
                        <option>14:00 - 15:00</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="flex-grow h-16 rounded-2xl border-2 border-slate-100 text-slate-600 font-black text-lg hover:bg-slate-50 transition-all">
                      Takaisin
                    </button>
                    <button type="submit" className="flex-[2] h-16 rounded-2xl bg-slate-900 text-white font-black text-lg hover:bg-primary transition-all">
                      Jatka
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleNext} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-black text-slate-900 leading-tight">Yhteystietosi</h2>
                    <p className="text-slate-500 font-medium font-display">Täytä vielä numerosi ja nimesi vahvistusta varten.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                       <input required type="text" placeholder="Nimesi" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-orange-100 border outline-none font-medium" />
                    </div>
                    <div className="space-y-2">
                       <input required type="email" placeholder="Sähköpostiosoite" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-orange-100 border outline-none font-medium" />
                    </div>
                    <div className="space-y-2">
                       <textarea placeholder="Lisätietoja (vapaaehtoinen)" className="w-full h-32 p-6 rounded-2xl bg-slate-50 border-orange-100 border outline-none font-medium resize-none" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(2)} className="flex-grow h-16 rounded-2xl border-2 border-slate-100 text-slate-600 font-black text-lg hover:bg-slate-50 transition-all">
                      Takaisin
                    </button>
                    <button 
                      disabled={loading}
                      type="submit" 
                      className="flex-[2] h-16 rounded-2xl bg-primary text-white font-black text-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Vahvistetaan...
                        </>
                      ) : (
                        'Vahvista varaus'
                      )}
                    </button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <span className="material-symbols-outlined text-5xl">event_available</span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-slate-900">Varaus tehty!</h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-sm mx-auto mb-10">
                    Olemme vastaanottaneet varauksesi. Lähetimme vahvistuksen sähköpostiisi.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-slate-900 text-white px-12 py-5 rounded-3xl font-black text-lg hover:bg-primary transition-all"
                  >
                    Sulje
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
