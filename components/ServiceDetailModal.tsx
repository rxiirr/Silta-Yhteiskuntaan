
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookMeeting: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onBookMeeting }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {service && (
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
            className="relative w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 lg:p-12 border-b border-slate-100 flex items-center justify-between shrink-0 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-terracotta text-white flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <div>
                  <span className="text-terracotta font-black text-xs uppercase tracking-[0.2em] mb-1 block">
                    {service.tag}
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 leading-tight">
                    {service.title}
                  </h2>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-500"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 overflow-y-auto flex-grow custom-scrollbar">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-slate-900">Palvelun kuvaus</h3>
                  <p className="text-lg text-slate-600 font-medium leading-[1.6]">
                    {service.longDescription || service.description}
                  </p>
                </div>

                {service.features && service.features.length > 0 && (
                  <div className="space-y-8">
                    <h3 className="text-xl font-black text-slate-900">Mitä palvelu sisältää?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-orange-50/50 border border-orange-100/50 items-start">
                          <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                          <span className="text-slate-700 font-bold leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-8 lg:p-10 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6 shrink-0">
              <div className="space-y-1">
                <p className="text-slate-500 font-bold">Kysyttävää palvelusta?</p>
                <p className="text-slate-900 font-black">Ota yhteyttä asiantuntijoihimme.</p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={onClose}
                  className="px-8 h-14 rounded-2xl border border-slate-200 font-black text-slate-600 hover:bg-white transition-all"
                >
                  Sulje
                </button>
                <button 
                  onClick={() => {
                    onClose();
                    onBookMeeting();
                  }}
                  className="px-8 h-14 rounded-2xl bg-primary text-white font-black shadow-xl shadow-primary/30 hover:bg-terracotta transition-all"
                >
                  Varaa konsultaatio
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDetailModal;
