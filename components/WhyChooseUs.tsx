
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    { title: "Biblically Grounded", text: "Rooted in the authority and sufficiency of Scripture.", icon: "fa-bible" },
    { title: "Compassionate & Ethical", text: "Confidential care provided with professional excellence.", icon: "fa-shield-halved" },
    { title: "Culturally Sensitive", text: "Contextually relevant for African and global settings.", icon: "fa-globe" },
    { title: "Restoration Focused", text: "Committed to your long-term growth and healing.", icon: "fa-seedling" },
    { title: "Christ-Centered", text: "Driven by the healing power of the Wonderful Counselor.", icon: "fa-church" }
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-navy text-3xl sm:text-4xl font-bold mb-4">Why Choose CCMWA</h2>
          <div className="w-20 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${reason.icon} text-xl`}></i>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy mb-1">{reason.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{reason.text}</p>
              </div>
            </div>
          ))}
          
          <div className="flex p-6 bg-gold text-white rounded-2xl shadow-lg border border-gold hover:bg-amber-800 transition-colors group cursor-pointer items-center justify-center text-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Ready to Start?</h4>
              <p className="text-white/90 text-sm mb-4">Take your first step toward wholeness today.</p>
              <button className="px-6 py-2 bg-white text-gold rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform">
                Connect with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
