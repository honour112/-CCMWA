
import React from 'react';
import { ServiceCard as ServiceCardType } from '../types';

const ServiceCard: React.FC<{ service: ServiceCardType; index: number }> = ({ service, index }) => (
  <div 
    className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
      <i className={`fa-solid ${service.icon} text-2xl`}></i>
    </div>
    <h3 className="text-2xl font-bold text-navy mb-4 font-serif">{service.title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">
      {service.description}
    </p>
    <ul className="space-y-3">
      {service.points.map((point, i) => (
        <li key={i} className="flex items-start text-sm text-slate-500">
          <i className="fa-solid fa-circle-check text-gold mt-1 mr-3 flex-shrink-0"></i>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  const services: ServiceCardType[] = [
    {
      title: "Christ-Centered Soul Care",
      icon: "fa-dove",
      description: "Focuses on deep healing of the heart, mind, and spirit through Scripture, prayer, and compassionate guidance.",
      points: [
        "Find healing from emotional wounds",
        "Experience inner renewal through truth",
        "Grow in faith and spiritual maturity",
        "Develop Christ-rooted resilience"
      ]
    },
    {
      title: "Hope Coaching",
      icon: "fa-compass",
      description: "A faith-based, forward-looking approach that empowers individuals to move from discouragement to purpose.",
      points: [
        "Clarify God-given purpose",
        "Overcome limiting beliefs and fear",
        "Build confidence and discipline",
        "Navigate transitions with wisdom"
      ]
    },
    {
      title: "Biblical Counseling",
      icon: "fa-book-bible",
      description: "Addresses emotional, relational, and spiritual challenges through the authority and sufficiency of Scripture.",
      points: [
        "Anxiety and stress management",
        "Marriage and family restoration",
        "Grief, loss, and trauma support",
        "Pastoral and leadership care"
      ]
    },
    {
      title: "Mental Wellness",
      icon: "fa-brain",
      description: "Promoting mental wellness as an essential part of holistic Christian living—body, soul, and spirit.",
      points: [
        "Awareness and education programs",
        "Reducing stigma in faith communities",
        "Balance, self-care, and health",
        "Church support initiatives"
      ]
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
        <div className="w-20 h-1.5 bg-gold mx-auto mb-6 rounded-full"></div>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg italic font-serif">
          "Where Faith Meets Healing"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
