
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const heroImage = "https://th.bing.com/th/id/OIP.EbOWSg79RqDQ3TrFw1ep2QHaE8?w=220&h=180&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate sending
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pb-24">
      {/* Header Hero */}
      <div className="relative py-32 px-4 text-center overflow-hidden bg-navy">
        <img 
          src={heroImage} 
          alt="Contact Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">Contact Us</h1>
          <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">You are not alone. Reach out today.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-gold mr-4">
                  <i className="fa-solid fa-address-card"></i>
                </span>
                Get In Touch
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you have a question about our services, need to schedule a session, or just want to share a prayer request, we are here for you.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: "fa-envelope", label: "Email Us", val: "care@ccmwa.org" },
                  { icon: "fa-phone", label: "Call Us", val: "+1 (234) HOPE-NOW" },
                  { icon: "fa-location-dot", label: "Visit Us", val: "Global HQ, Faith Plaza, Lagos" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-gold">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-navy font-bold">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <i className="fa-solid fa-hands-praying text-8xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Prayer Requests</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                We believe in the power of prayer. If you would like our team to pray for you, please send a message with the subject "Prayer Request".
              </p>
              <div className="w-full h-px bg-white/10 mb-6"></div>
              <p className="italic font-serif text-gold">“He hears the prayers of the righteous.”</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl animate-bounce">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-navy">Message Received!</h3>
                <p className="text-slate-500">Thank you for reaching out. A member of our care team will contact you soon. May God bless you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <select 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Select a subject</option>
                    <option value="Soul Care">Soul Care Inquiry</option>
                    <option value="Counseling">Biblical Counseling</option>
                    <option value="Coaching">Hope Coaching</option>
                    <option value="Prayer">Prayer Request</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-navy text-white font-bold py-4 rounded-xl shadow-xl hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center"
                >
                  Send Message
                  <i className="fa-solid fa-paper-plane ml-3"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
