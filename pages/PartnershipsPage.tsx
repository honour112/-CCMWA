
import React from 'react';

const PartnershipsPage: React.FC = () => {
  const heroImage = "https://th.bing.com/th/id/OIP.LOUAdk7bYjaOdnCM1umdsgHaFK?w=277&h=193&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1";

  return (
    <div className="pb-24">
      {/* Header Hero */}
      <div className="relative py-32 px-4 text-center overflow-hidden bg-navy">
        <img 
          src={heroImage} 
          alt="Partnerships Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 to-navy/90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs">Unity in the Body</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-4 mb-6">Partnering with the Church</h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto italic font-serif">
            "We honor the authority of the local church and seek to work in unity, humility, and mutual respect."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Mission Side */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy mb-6">Equipping the Local Church</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                We partner with churches to provide counseling referrals, equip leaders to respond to mental health needs biblically, and strengthen family ministries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Support pastors & leaders",
                  "Provide referrals",
                  "Equip for mental health",
                  "Offer wellness education",
                  "Strengthen marriage ministry"
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-gold mr-3">
                      <i className="fa-solid fa-check text-xs"></i>
                    </div>
                    <span className="text-navy font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-navy rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <i className="fa-solid fa-church text-9xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gold mb-8">How We Serve Churches</h3>
              <div className="space-y-8">
                {[
                  { title: "Pastoral Support", desc: "Helping pastors manage emotional burdens and burnout." },
                  { title: "Church-Based Programs", desc: "Tailored counseling aligned with your church doctrine." },
                  { title: "Workshops & Training", desc: "Resilience training and trauma care for ministry leaders." },
                  { title: "Crisis Response", desc: "Guidance during congregational or community crises." }
                ].map((s, i) => (
                  <div key={i} className="group">
                    <h4 className="font-bold mb-1 group-hover:text-gold transition-colors">{s.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Adaptation Side */}
          <div className="space-y-12">
            <div className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-xl border border-slate-50">
              <h2 className="text-3xl font-serif font-bold text-navy mb-10 text-center">Regional & Denominational Adaptation</h2>
              
              {/* African Context */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-gold mr-4">
                    <i className="fa-solid fa-earth-africa text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-navy">For African Contexts</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Our approach recognizes strong family and communal structures, the role of elders, and cultural sensitivity around mental health discussions.
                </p>
                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-gold italic text-slate-600 text-sm">
                  "We use language that affirms faith and respect tradition while encouraging biblical understanding."
                </div>
              </div>

              {/* Church Traditions */}
              <div className="space-y-8">
                {[
                  { 
                    title: "Evangelical / Pentecostal", 
                    text: "Emphasis on prayer, Scripture, and the work of the Holy Spirit. Emotional healing without spiritualizing all struggles." 
                  },
                  { 
                    title: "Mainline / Historic", 
                    text: "Theological grounding, discipleship, and structured community support for healing ministry." 
                  },
                  { 
                    title: "Charismatic / Revival", 
                    text: "Balancing faith, deliverance, and emotional healing with long-term discipleship and wellness." 
                  }
                ].map((item, i) => (
                  <div key={i} className="group border-b border-slate-100 pb-6 last:border-0">
                    <h4 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;
