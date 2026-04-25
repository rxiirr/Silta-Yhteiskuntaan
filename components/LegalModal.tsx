
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'cookies';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const content = {
    privacy: {
      title: 'Tietosuojaseloste',
      sections: [
        {
          heading: '1. Henkilötietojen käsittely',
          text: 'Silta yhteiskuntaan osuuskunta kerää ja käsittelee henkilötietoja EU:n yleisen tietosuoja-asetuksen (GDPR) mukaisesti. Käsittelemme tietoja palvelujen toteuttamiseksi ja asiakassuhteen hoitamiseksi.'
        },
        {
          heading: '2. Kerättävät tiedot',
          text: 'Keräämme tietoja, kuten nimen, sähköpostiosoitteen, puhelinnumeron ja mahdolliset jäsenyyshakemukseen liittyvät liitteet (CV ja todistukset). Luovutamme tietoja kolmansille osapuolille vain lain salliessa tai palvelun toteuttamisen vaatiessa.'
        },
        {
          heading: '3. Tietojen suojaus',
          text: 'Tietosi tallennetaan suojatuille palvelimille, ja niihin on pääsy vain nimetyillä henkilöillä, joiden tehtäviin tietojen käsittely kuuluu. Säilytämme tietoja vain niin kauan kuin on tarpeellista.'
        },
        {
          heading: '4. Rekisteröidyn oikeudet',
          text: 'Sinulla on oikeus tarkastaa sinusta tallennetut tiedot, vaatia tiedon korjaamista tai poistamista sekä kieltää tietojesi käyttö markkinointitarkoituksiin.'
        }
      ]
    },
    cookies: {
      title: 'Evästekäytännöt',
      sections: [
        {
          heading: 'Mitä evästeet ovat?',
          text: 'Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteellesi, kun vierailet sivustollamme. Ne auttavat meitä parantamaan käyttökokemustasi.'
        },
        {
          heading: 'Miten käytämme evästeitä?',
          text: 'Käytämme evästeitä sivuston perustoiminnallisuuksiin (kuten lomakkeiden toimintaan), analytiikkaan ja mahdollisesti markkinoinnin kohdentamiseen. Analytiikka auttaa meitä ymmärtämään, miten sivustoa käytetään.'
        },
        {
          heading: 'Evästeiden hallinta',
          text: 'Voit hallita tai poistaa evästeitä selaimesi asetuksista. Huomioithan, että joidenkin evästeiden poistaminen saattaa vaikuttaa sivuston toiminnallisuuteen.'
        }
      ]
    }
  };

  const activeContent = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
          >
            <div className="p-8 lg:p-12 border-b border-slate-100 flex items-center justify-between shrink-0">
              <h2 className="text-3xl font-black text-slate-900">{activeContent.title}</h2>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-500"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-8 lg:p-12 overflow-y-auto custom-scrollbar">
              <div className="space-y-10">
                {activeContent.sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">{section.heading}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-10 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Viimeksi päivitetty: 25.04.2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
