
import React from 'react';
import { PageId } from '../App';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="space-y-6">
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-cross text-white"></i>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white tracking-tight">CCMWA</h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Restoring souls through God’s Word. We provide compassionate, biblical counseling and mental wellness support for the global body of Christ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><button onClick={() => onNavigate('home')} className="hover:text-gold transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('what-we-do')} className="hover:text-gold transition-colors">What We Do</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-gold transition-colors">Our Mission</button></li>
              <li><button onClick={() => onNavigate('partnerships')} className="hover:text-gold transition-colors">Church Partnerships</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-gold transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><button onClick={() => onNavigate('what-we-do')} className="hover:text-gold transition-colors">Soul Care</button></li>
              <li><button onClick={() => onNavigate('what-we-do')} className="hover:text-gold transition-colors">Hope Coaching</button></li>
              <li><button onClick={() => onNavigate('partnerships')} className="hover:text-gold transition-colors">Leadership Training</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-gold transition-colors">Mental Wellness Education</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Global Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-gold"></i>
                <span>Faith Plaza, Global HQ<br />Lagos / Africa / Global</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-gold"></i>
                <a href="mailto:care@ccmwa.org" className="hover:text-gold">care@ccmwa.org</a>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-gold"></i>
                <span>+1 (234) HOPE-NOW</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-[10px] uppercase tracking-[0.2em]">
          <p>© 2024 CCMWA. All rights reserved.</p>
          <div className="flex space-x-6">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Care</button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-20"></div>
    </footer>
  );
};

export default Footer;
