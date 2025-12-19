
import React from 'react';

const ServicesPage: React.FC = () => {
  const heroImage = "https://th.bing.com/th/id/OIP.vHtt0EHWudoLhhguizkWpQHaEx?w=294&h=189&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1";

  const fullServices = [
    {
      id: "soul-care",
      title: "Christ-Centered Soul Care",
      icon: "fa-dove",
      tagline: "Restoration. Discipleship. Wholeness.",
      description: "Soul care focuses on the deep healing of the heart, mind, and spirit through Scripture, prayer, and compassionate guidance. It is not just about coping—it is about restoration as God intends.",
      details: [
        "Find healing from emotional wounds and spiritual burdens",
        "Experience inner renewal through God’s truth",
        "Grow in faith, identity, and spiritual maturity",
        "Develop resilience rooted in Christ"
      ],
      img: "https://th.bing.com/th/id/OIP.GyANq_ZyXp69LZY8oRU58AHaDz?w=329&h=179&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1"
    },
    {
      id: "hope-coaching",
      title: "Hope Coaching",
      icon: "fa-compass",
      tagline: "Vision. Courage. Purpose.",
      description: "Hope Coaching is a faith-based, forward-looking approach that empowers individuals to move from discouragement to purpose. We combine biblical principles with practical guidance to help you live with vision.",
      details: [
        "Clarify life goals and God-given purpose",
        "Overcome limiting beliefs and fear",
        "Build confidence, discipline, and spiritual resilience",
        "Navigate transitions with wisdom and faith"
      ],
      img: "https://th.bing.com/th/id/OIP.tbsCRFTx2BYIQ4rTloGx6AHaHa?w=170&h=180&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1"
    },
    {
      id: "biblical-counseling",
      title: "Biblical Counseling",
      icon: "fa-book-bible",
      tagline: "Authority. Sufficiency. Compassion.",
      description: "Addressing life’s emotional, relational, and spiritual challenges through the authority and sufficiency of Scripture. We provide ethical, confidential, and culturally sensitive support.",
      details: [
        "Anxiety, stress, and emotional struggles",
        "Marriage and family concerns",
        "Grief, loss, and trauma",
        "Identity, purpose, and faith struggles",
        "Pastoral and leadership care"
      ],
      img: "https://th.bing.com/th/id/OIP.hmGA55OqvVUxCgrKLvRG0AHaEK?w=272&h=180&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1"
    },
    {
      id: "mental-wellness",
      title: "Mental Wellness",
      icon: "fa-brain",
      tagline: "Holistic. Healthy. Humble.",
      description: "We promote mental wellness as an essential part of holistic Christian living—body, soul, and spirit. We work to reduce stigma and promote spiritual health through education.",
      details: [
        "Mental health awareness and education",
        "Reducing stigma around emotional struggles",
        "Promoting balance, self-care, and spiritual health",
        "Supporting churches in wellness initiatives"
      ],
      img: "https://th.bing.com/th/id/OIP.vHtt0EHWudoLhhguizkWpQHaEx?w=294&h=189&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1"
    }
  ];

  return (
    <div className="pb-24">
      {/* Page Header Hero */}
      <div className="relative py-32 px-4 overflow-hidden bg-navy">
        <img 
          src={heroImage} 
          alt="What We Do Header" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">What We Do</h1>
          <p className="text-xl text-gold italic font-serif max-w-2xl mx-auto">
            Grounded in Scripture and guided by sound Christian principles, our approach integrates biblical truth and compassionate care.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="space-y-32">
          {fullServices.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gold/5 rounded-3xl group-hover:scale-105 transition-transform duration-500"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="relative rounded-2xl shadow-2xl object-cover w-full aspect-[4/3] z-10 border border-slate-100"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-xl z-20 border-4 border-white">
                    <i className={`fa-solid ${service.icon} text-white text-3xl`}></i>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <span className="text-gold font-bold uppercase tracking-widest text-xs">{service.tagline}</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy leading-tight">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                <div className="pt-4 space-y-4">
                  {service.details.map((point, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center text-gold mr-3 flex-shrink-0 mt-1 shadow-sm">
                        <i className="fa-solid fa-check text-[10px]"></i>
                      </div>
                      <span className="text-slate-600 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <button className="bg-navy text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-slate-800 transition-all active:scale-95 flex items-center">
                    Learn More About Our Approach
                    <i className="fa-solid fa-chevron-right ml-2 text-gold text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
