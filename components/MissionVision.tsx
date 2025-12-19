
import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[600px]">
              <img 
                src="https://picsum.photos/seed/mission/800/1200" 
                alt="Community Care" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                    <i className="fa-solid fa-earth-africa text-3xl text-white"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Global Reach</h3>
                  <p className="text-white/80 max-w-xs mx-auto">Providing Christ-centered care for Africa and the world.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center">
                <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-gold mr-4">
                  <i className="fa-solid fa-bullseye"></i>
                </span>
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide Christ-centered counseling, soul care, and mental wellness services that bring healing, hope, and restoration through the truth of God’s Word and compassionate Christian care.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center">
                <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                  <i className="fa-solid fa-eye"></i>
                </span>
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To see individuals, families, churches, and communities across Africa and the world emotionally healthy, spiritually strong, and firmly rooted in Christ, living purposeful and transformed lives.
              </p>
            </div>
            
            <div className="bg-navy p-8 rounded-2xl text-white">
              <p className="text-xl italic font-serif leading-relaxed mb-4">
                "In Christ, there is hope, healing, and new life. Seeking help is not a sign of weak faith but an act of wisdom, humility, and trust in God."
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-px w-8 bg-gold"></div>
                <span className="text-gold font-bold tracking-widest uppercase text-xs">A Covenant of Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
