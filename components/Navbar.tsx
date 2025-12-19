
import React, { useState } from 'react';
import { PageId } from '../App';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { name: string; id: PageId }[] = [
    { name: 'Home', id: 'home' },
    { name: 'What We Do', id: 'what-we-do' },
    { name: 'About Us', id: 'about' },
    { name: 'Resources', id: 'resources' },
    { name: 'Membership', id: 'membership' },
    { name: 'Blog', id: 'blog' },
    { name: 'Partnerships', id: 'partnerships' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center mr-3 group-hover:bg-gold transition-colors duration-300 shadow-md">
              <i className="fa-solid fa-cross text-white text-lg"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-navy font-serif text-xl font-bold tracking-tight leading-none uppercase">CCMWA</span>
              <span className="text-[8px] text-gold font-bold uppercase tracking-[0.2em] mt-1">Mental Wellness</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`px-3 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                    currentPage === link.id ? 'text-gold' : 'text-slate-500 hover:text-navy'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNav('contact')}
                className="ml-4 bg-navy text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all shadow-md active:scale-95"
              >
                Get Support
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-500 hover:text-navy hover:bg-slate-100"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-slate-50 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`block w-full text-left px-3 py-4 text-sm font-bold uppercase tracking-widest ${
                currentPage === link.id ? 'text-gold bg-slate-50' : 'text-slate-600'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="w-full mt-4 bg-gold text-white py-4 rounded-lg text-sm font-bold uppercase tracking-widest"
          >
            Connect Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
