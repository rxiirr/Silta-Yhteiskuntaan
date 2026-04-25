
import React, { useState } from 'react';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePageChange = (page: Page) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-nav border-b border-orange-100/50">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-5 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => handlePageChange(Page.HOME)}
        >
          <div className="bg-gradient-to-tr from-primary to-accent p-2.5 rounded-2xl shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform duration-300">
            <svg className="size-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h1 className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 leading-tight">
            Silta Yhteiskuntaan
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => handlePageChange(item.page)}
              className={`text-[15px] font-bold transition-all relative py-1
                ${currentPage === item.page 
                  ? 'text-primary' 
                  : 'text-slate-600 hover:text-primary'}`}
            >
              {item.label}
              {currentPage === item.page && (
                <motion.span 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" 
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => handlePageChange(Page.CONTACT)}
            className="hidden sm:inline-flex items-center justify-center rounded-2xl h-12 px-8 bg-slate-900 text-white text-[15px] font-bold transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Ota yhteyttä
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900 z-50 relative"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-orange-100 shadow-2xl p-8 flex flex-col gap-6 md:hidden z-40"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => handlePageChange(item.page)}
                className={`text-2xl font-black text-left px-4 py-2 rounded-2xl transition-all
                  ${currentPage === item.page 
                    ? 'text-primary bg-primary/5 shadow-sm' 
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6 border-t border-slate-100 mt-4">
              <button 
                onClick={() => handlePageChange(Page.CONTACT)}
                className="w-full h-16 rounded-3xl bg-slate-900 text-white font-black text-lg shadow-xl shadow-slate-900/10"
              >
                Ota yhteyttä
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
