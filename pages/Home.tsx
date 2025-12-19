
import React from 'react';
import { PageId } from '../App';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const imageUrl = "https://th.bing.com/th/id/OIP._LSFOXNCs-u4v4rpfDbiyAHaER?w=309&h=184&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1";

  return (
    <div className="pb-16 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-gold text-[10px] font-bold uppercase tracking-widest mb-6">
                <i className="fa-solid fa-cross"></i>
                <span>Restoring Hope through Christ</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-navy leading-tight mb-6 font-serif">
                Healing Hearts. <br />
                <span className="text-gold italic">Restoring Hope.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                At the Christian Counseling and Mental Wellness Association, we believe that true healing begins with Christ—the Wonderful Counselor. We provide Biblical counseling, Christ-centered soul care, and faith-based mental wellness support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => onNavigate('what-we-do')}
                  className="px-8 py-4 bg-navy text-white rounded-xl font-bold shadow-xl hover:bg-slate-800 transition-all"
                >
                  What We Do
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-white text-navy border border-slate-200 rounded-xl font-bold shadow-md hover:border-gold hover:text-gold transition-all"
                >
                  Get Support
                </button>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                <img src={imageUrl} alt="Hope" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy/10"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                  <p className="italic font-serif text-lg">"He restores my soul."</p>
                  <p className="text-xs font-bold uppercase tracking-widest mt-2">— Psalm 23:3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-24 bg-white border-y border-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-8">
            Restoring Hope. Healing Souls. Transforming Lives.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 italic font-serif">
            "In a world filled with emotional pain, uncertainty, and brokenness, we offer a safe, compassionate, and confidential space where individuals, families, leaders, and communities can find spiritual renewal."
          </p>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
      </div>

      {/* Feature Section: The Pillars of Care */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-serif font-bold text-navy mb-6">Grounded in Truth, Guided by Compassion</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Grounded in Scripture and guided by sound Christian principles, our approach integrates biblical truth, prayer, and ethical counseling practices to help people navigate life’s challenges with faith and resilience.
              </p>
              <div className="space-y-4">
                {[
                  "Biblically grounded and Christ-centered",
                  "Compassionate, confidential, and ethical care",
                  "Culturally sensitive for African and global contexts",
                  "Focused on restoration, hope, and long-term growth",
                  "Committed to spiritual integrity and professional excellence"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 mt-1">
                      <i className="fa-solid fa-check text-xs"></i>
                    </div>
                    <span className="text-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gold/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  alt="Compassionate Care" 
                  className="relative rounded-[2.5rem] shadow-2xl z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Why Choose CCMWA</h2>
          <p className="text-slate-500 mb-16">Healing hearts through God's Word and professional care.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fa-bible", title: "Biblically Grounded", text: "Addressing challenges through the authority and sufficiency of Scripture." },
              { icon: "fa-shield-heart", title: "Ethical & Safe", text: "Providing a secure, confidential environment for your healing journey." },
              { icon: "fa-earth-africa", title: "Globally Aware", text: "Culturally sensitive care adapted for African and international contexts." },
              { icon: "fa-sun", title: "Hope Centered", text: "Focusing on the light of Christ in the midst of any darkness or trial." },
              { icon: "fa-users", title: "Community Minded", text: "Supporting families and churches in fostering emotional health." },
              { icon: "fa-hand-holding-heart", title: "Holistic Care", text: "Nurturing the whole person: body, soul, and spirit." }
            ].map((reason, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gold mb-6 shadow-sm group-hover:bg-gold group-hover:text-white transition-all">
                  <i className={`fa-solid ${reason.icon} text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">{reason.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Journey Section */}
      <div className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gold/5 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gold mb-4">Your Path to Wholeness</h2>
            <p className="text-white/60">How we walk with you through every season of life.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-white/10 -z-10"></div>
            {[
              { step: "01", title: "Reach Out", text: "Connect with our compassionate intake team to discuss your needs in complete confidence.", icon: "fa-comments" },
              { step: "02", title: "Find Care", text: "Be matched with a counselor or coach who understands your specific spiritual and emotional journey.", icon: "fa-user-nurse" },
              { step: "03", title: "Heal & Grow", text: "Experience transformation through Scripture-based guidance and professional support.", icon: "fa-arrow-up-right-dots" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="relative mb-8 inline-block">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-gold text-2xl border border-white/20 shadow-xl">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Mini Services Teaser */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy">What We Offer</h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Soul Care", icon: "fa-dove", text: "Healing the heart, mind, and spirit through God's truth.", tagline: "Deep Restoration" },
            { title: "Hope Coaching", icon: "fa-compass", text: "Empowering you to move from discouragement to your calling.", tagline: "Future Focused" },
            { title: "Biblical Counseling", icon: "fa-book-bible", text: "Addressing life's trials through the authority of Scripture.", tagline: "Compassionate Truth" },
            { title: "Mental Wellness", icon: "fa-brain", text: "Nurturing holistic health for body, soul, and spirit.", tagline: "Whole Person Health" }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-gold/20 transition-all group cursor-pointer shadow-sm hover:shadow-lg" onClick={() => onNavigate('what-we-do')}>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gold mb-6 shadow-sm group-hover:bg-gold group-hover:text-white transition-all">
                <i className={`fa-solid ${item.icon} text-2xl`}></i>
              </div>
              <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-2 block">{item.tagline}</span>
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.text}</p>
              <span className="text-navy font-bold text-xs uppercase tracking-widest group-hover:text-gold transition-colors">Learn More <i className="fa-solid fa-arrow-right ml-1"></i></span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-slate-50 p-12 lg:p-20 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
              <i className="fa-solid fa-cross text-[12rem] text-navy"></i>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy mb-6 relative z-10">Take Your First Step Today</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
              Seeking help is an act of wisdom and trust in God. Our team is ready to walk with you toward the healing and wholeness He intended.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-navy text-white rounded-2xl font-bold shadow-2xl hover:bg-slate-800 transition-all active:scale-95"
              >
                Request Counseling
              </button>
              <button 
                onClick={() => onNavigate('what-we-do')}
                className="px-10 py-5 bg-gold text-white rounded-2xl font-bold shadow-2xl hover:bg-amber-800 transition-all active:scale-95"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
