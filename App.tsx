
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HopeAssistant from './components/HopeAssistant';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PartnershipsPage from './pages/PartnershipsPage';

export type PageId = 'home' | 'what-we-do' | 'about' | 'contact' | 'partnerships';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'what-we-do':
        return <ServicesPage />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      case 'partnerships':
        return <PartnershipsPage />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className="flex-grow pt-20 animate-fade-in">
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />

      <HopeAssistant />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
