
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-gold text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
              <i className="fa-solid fa-cross"></i>
              <span>Restoring Souls through God’s Word</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Restoring Hope. <br />
              <span className="text-gold italic">Healing Souls.</span> <br />
              Transforming Lives.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              At the Christian Counseling and Mental Wellness Association, we believe that true healing begins with Christ—the Wonderful Counselor. We provide Biblical counseling and faith-based soul care that nurtures the heart and renews the mind.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#services" 
                className="px-8 py-4 bg-navy text-white rounded-lg font-bold shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center group"
              >
                Explore Services
                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 bg-white text-navy border border-slate-200 rounded-lg font-bold shadow-md hover:border-gold hover:text-gold transition-all flex items-center justify-center"
              >
                Our Mission
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 text-slate-400">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-navy">100%</span>
                <span className="text-xs">Biblically Grounded</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-navy">Global</span>
                <span className="text-xs">Context Ready</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-navy">Safe</span>
                <span className="text-xs">Confidential Care</span>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-video lg:aspect-square group">
              <img 
                src="https://picsum.photos/seed/christiancare/800/800" 
                alt="Hope and Healing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <blockquote className="text-white italic text-lg mb-2 font-serif">
                  "He restores my soul."
                </blockquote>
                <cite className="text-amber-300 text-sm font-bold not-italic">— Psalm 23:3</cite>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 hidden xl:block p-6 bg-white rounded-xl shadow-2xl border border-slate-100 max-w-xs animate-bounce-slow">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-gold">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <span className="font-bold text-navy">Soul Care</span>
              </div>
              <p className="text-sm text-slate-500">Find healing from emotional wounds and spiritual burdens through His truth.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
