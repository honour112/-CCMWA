
import React, { useState, useRef, useEffect } from 'react';
import { getHopeEncouragement } from '../geminiService';
import { ChatMessage } from '../types';

const HopeAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: "Grace and peace be with you. I am your Hope Assistant. How are you feeling today? I am here to share Scripture and encouragement with you." 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getHopeEncouragement(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[420px] h-[550px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-navy p-6 flex justify-between items-center relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <i className="fa-solid fa-hands-praying text-6xl text-white"></i>
            </div>
            <div className="flex items-center space-x-4 text-white relative z-10">
              <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-lg">
                <i className="fa-solid fa-heart-pulse text-white text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">Hope Assistant</h3>
                <p className="text-[10px] text-gold font-bold uppercase tracking-widest mt-0.5">Biblical Encouragement</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors relative z-10">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-navy text-white rounded-br-none shadow-xl' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-slate-100 bg-white">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Share your heart..."
                className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-12 h-12 bg-navy text-white rounded-2xl flex items-center justify-center disabled:opacity-50 hover:bg-gold transition-all shadow-xl active:scale-90"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-[9px] text-slate-400 text-center mt-4 uppercase tracking-widest">
              Grounded in the Truth of God's Word
            </p>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-500 relative group ${
          isOpen ? 'bg-navy rotate-90 scale-90' : 'bg-gold hover:scale-110'
        }`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-hand-holding-heart'} text-3xl text-white transition-all`}></i>
        {!isOpen && (
          <>
            <span className="absolute -top-14 right-0 bg-navy text-white text-[10px] font-bold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
              Need Encouragement?
            </span>
            <div className="absolute inset-0 bg-gold rounded-3xl animate-ping opacity-20 pointer-events-none"></div>
          </>
        )}
      </button>

      <style>{`
        .animate-in { animation: animate-in 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67); }
        @keyframes animate-in {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default HopeAssistant;
