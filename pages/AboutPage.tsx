
import React from 'react';
import { PageId } from '../App';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const heroImage = "https://th.bing.com/th/id/OIP.C8YhdShES8p74Izq3k5gZgHaE8?w=268&h=180&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1";
  const contentImage = "https://th.bing.com/th/id/OIP._LSFOXNCs-u4v4rpfDbiyAHaER?w=309&h=184&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1";

  return (
    <div className="pb-24">
      {/* Header Hero */}
      <div className="relative py-32 px-4 text-center text-white overflow-hidden bg-navy">
        <img 
          src={heroImage} 
          alt="About Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/90"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-7xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">Restoring Souls through God’s Word</p>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white p-8 md:p-20 rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-8">Who We Are</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  The Christian Counseling and Mental Wellness Association is a faith-based organization committed to Christ-centered counseling, soul care, and mental wellness. We serve individuals, families, churches, and communities by integrating biblical truth, compassionate care, and ethical counseling practices.
                </p>
                <p>
                  We believe that God is deeply concerned about the emotional, spiritual, and mental well-being of His people. Our work is rooted in the conviction that Scripture provides wisdom, hope, and direction, and that healing flourishes when care is offered with love, humility, and cultural understanding.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg mt-8" alt="Compassion" />
              <img src={contentImage} className="rounded-2xl shadow-lg object-cover" alt="Hope" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Foundation */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">Our Foundation</h2>
            <p className="text-slate-500 italic">Principles that define our care</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fa-cross", title: "Christ Centered", text: "Christ is the center of all healing and transformation." },
              { icon: "fa-bible", title: "Biblical Authority", text: "The Bible is authoritative and sufficient for guiding the soul." },
              { icon: "fa-universal-access", title: "Holistic Health", text: "Mental wellness is part of holistic Christian discipleship." },
              { icon: "fa-hands-holding-child", title: "Faith & Wisdom", text: "Seeking help is an act of faith and wisdom." },
              { icon: "fa-shield-heart", title: "Ethical & Compassionate", text: "Care must be ethical, confidential, and compassionate." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all">
                  <i className={`fa-solid ${item.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Our Stewards</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy mt-4 mb-8">Our Leadership Team</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The leadership of CCMWA is made up of devoted Christian counselors, pastors, mental wellness practitioners, and faith leaders who are committed to serving with integrity and humility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 bg-navy rounded-[2.5rem] text-white">
              <h3 className="text-2xl font-bold mb-6 text-gold">The Calling to Serve</h3>
              <p className="text-white/70 leading-relaxed mb-8">
                We believe leadership is a calling to serve, not to be served. Our team seeks God’s wisdom in every decision, recognizing that lasting impact flows from spiritual faithfulness and Christ-like character.
              </p>
              <ul className="space-y-4">
                {[
                  "Grounded in Scripture & Theology",
                  "Demonstrate spiritual maturity",
                  "Uphold ethical counseling standards",
                  "Sensitive to African cultural contexts",
                  "Serve with accountability and prayer"
                ].map((li, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <i className="fa-solid fa-check text-gold mt-1 mr-3"></i>
                    <span className="text-white/80">{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 text-navy">Spiritual Oversight</h3>
              <p className="text-slate-500 mb-8 text-sm">
                We value accountability and spiritual covering. Our work is guided through a rigorous framework:
              </p>
              <div className="space-y-6">
                {[
                  { icon: "fa-hands-praying", title: "Prayer & Discernment", text: "Seeking God's face in all strategic decisions." },
                  { icon: "fa-scale-balanced", title: "Ethical Frameworks", text: "Rigorous Christian ethical standards for all care." },
                  { icon: "fa-users-line", title: "Collaboration", text: "Working with church leaders and institutions." }
                ].map((box, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gold shadow-sm mr-4 flex-shrink-0">
                      <i className={`fa-solid ${box.icon} text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">{box.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{box.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Heart */}
      <div className="bg-navy py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-gold mb-8">Our Heart</h2>
          <p className="text-xl text-white/80 leading-relaxed font-serif italic mb-12">
            "Our desire is to see lives restored, families strengthened, and churches equipped to respond to emotional and spiritual needs with biblical wisdom and grace."
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-white text-navy rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
            >
              Connect with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
