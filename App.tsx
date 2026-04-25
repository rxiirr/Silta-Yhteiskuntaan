
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import JoinPage from './pages/JoinPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BookingModal from './components/BookingModal';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{isOpen: boolean, type: 'privacy' | 'cookies'}>({
    isOpen: false,
    type: 'privacy'
  });

  // Simple scroll to top on page change, or to contact if specifically requested
  useEffect(() => {
    if (currentPage === Page.CONTACT) {
      setCurrentPage(Page.HOME);
      // Short delay to ensure Page.HOME is rendered
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const renderPage = () => {
    const commonProps = { 
      onPageChange: setCurrentPage,
      onBookMeeting: () => setIsBookingModalOpen(true) 
    };

    switch (currentPage) {
      case Page.HOME:
        return <HomePage {...commonProps} />;
      case Page.SERVICES:
        return <ServicesPage {...commonProps} />;
      case Page.JOIN:
        return <JoinPage {...commonProps} />;
      case Page.ABOUT:
        return <AboutPage {...commonProps} />;
      case Page.BLOG:
        return <BlogPage {...commonProps} />;
      case Page.CONTACT:
        // This is handled by useEffect to redirect to Home + Scroll
        return <HomePage {...commonProps} showContactByDefault={true} />;
      default:
        return <HomePage {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-display selection:bg-primary/20">
      {/* Background Blobs for specific pages */}
      {currentPage === Page.SERVICES && (
        <>
          <div className="blob-bg bg-accent-warm w-[600px] h-[600px] -top-64 -left-48"></div>
          <div className="blob-bg bg-accent-pink w-[500px] h-[500px] top-1/2 -right-48"></div>
          <div className="blob-bg bg-primary w-[400px] h-[400px] bottom-0 left-1/4"></div>
        </>
      )}

      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer 
        onPageChange={setCurrentPage} 
        onOpenLegal={(type) => setLegalModal({ isOpen: true, type })}
      />

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />

      <LegalModal 
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
      />
    </div>
  );
};

export default App;
