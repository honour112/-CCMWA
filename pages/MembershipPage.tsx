import React, { useState } from 'react';

interface SignupFormData {
  name: string;
  email: string;
  phone: string;
  tier: string;
}

const MembershipPage: React.FC = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    phone: '',
    tier: ''
  });
  const [signupSuccess, setSignupSuccess] = useState(false);
  const handleSignupClick = (tierName: string) => {
    setSelectedTier(tierName);
    setFormData({ ...formData, tier: tierName });
    setShowSignupModal(true);
    setSignupSuccess(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup form submitted:', formData);
    setSignupSuccess(true);
    setTimeout(() => {
      setShowSignupModal(false);
      setFormData({ name: '', email: '', phone: '', tier: '' });
      setSignupSuccess(false);
    }, 2000);
  };

  const membershipTiers = [
    {
      name: 'Community Member',
      price: 'Free',
      description: 'Access to our community and basic resources',
      features: [
        'Community forum access',
        'Monthly newsletter',
        'Basic resource library',
        'Email support',
        'Prayer group invitations'
      ],
      cta: 'Join Free',
      highlighted: false
    },
    {
      name: 'Wellness Supporter',
      price: '$9.99',
      period: '/month',
      description: 'Enhanced support and exclusive content',
      features: [
        'All Community Member benefits',
        'Exclusive webinars',
        'Priority email support',
        'Downloadable workbooks',
        'Monthly group sessions',
        '1 counseling session discount'
      ],
      cta: 'Subscribe Now',
      highlighted: true
    },
    {
      name: 'Premium Advocate',
      price: '$24.99',
      period: '/month',
      description: 'Comprehensive support with personal guidance',
      features: [
        'All Wellness Supporter benefits',
        'Unlimited group sessions',
        '4 counseling sessions per month',
        'Personal wellness plan',
        'Direct counselor communication',
        'Exclusive prayer warrior community',
        'Annual retreat invitation'
      ],
      cta: 'Upgrade Now',
      highlighted: false
    }
  ];

  const benefits = [
    {
      title: 'Biblical Foundation',
      description: 'All our support is rooted in Scripture and Christian principles',
      icon: 'fa-book'
    },
    {
      title: 'Compassionate Counselors',
      description: 'Connect with trained, faith-based mental health professionals',
      icon: 'fa-handshake'
    },
    {
      title: 'Community Support',
      description: 'Build meaningful relationships with others on similar journeys',
      icon: 'fa-people-group'
    },
    {
      title: 'Flexible Access',
      description: 'Support available online anytime, anywhere',
      icon: 'fa-globe'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Membership Plans</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose the support level that fits your spiritual and wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy text-center mb-12">Why Join CCMWA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`fa-solid ${benefit.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy text-center mb-12">Flexible Plans for Everyone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-lg border-2 transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-gold bg-slate-50 transform md:scale-105 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-gold'
                }`}
              >
                {tier.highlighted && (
                  <div className="bg-gold text-white text-center py-2 text-sm font-bold uppercase tracking-widest rounded-t-[12px]">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy mb-2">{tier.name}</h3>
                  <p className="text-slate-600 text-sm mb-6">{tier.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-navy">{tier.price}</span>
                    {tier.period && <span className="text-slate-600">{tier.period}</span>}
                  </div>

                  <button
                    onClick={() => handleSignupClick(tier.name)}
                    className={`w-full py-3 rounded-lg font-bold uppercase tracking-widest mb-8 transition-all ${
                      tier.highlighted
                        ? 'bg-navy text-white hover:bg-gold'
                        : 'bg-slate-100 text-navy hover:bg-navy hover:text-white'
                    }`}
                  >
                    {tier.cta}
                  </button>

                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-slate-700">
                        <i className="fa-solid fa-check text-gold mr-3 mt-1"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change my membership plan?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.'
              },
              {
                q: 'Is there a commitment required?',
                a: 'No, all paid memberships are month-to-month and can be cancelled anytime without penalty.'
              },
              {
                q: 'Are counseling sessions confidential?',
                a: 'Absolutely. All sessions are completely confidential and comply with HIPAA regulations.'
              },
              {
                q: 'What if I need urgent support?',
                a: 'Premium members have access to priority support. In emergencies, please contact local crisis services.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200 hover:border-gold transition-colors">
                <h3 className="font-bold text-navy mb-3 text-lg">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full shadow-2xl animate-in">
            {!signupSuccess ? (
              <>
                <div className="bg-navy text-white p-6 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Join CCMWA</h2>
                      <p className="text-white/80">{selectedTier} Plan</p>
                    </div>
                    <button
                      onClick={() => setShowSignupModal(false)}
                      className="text-white/60 hover:text-white transition-colors text-2xl"
                    >
                      ×
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (234) HOPE-NOW"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div className="bg-slate-100 rounded-lg p-4 my-6">
                    <p className="text-sm text-slate-600">
                      <span className="font-bold text-navy">Plan:</span> {selectedTier}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowSignupModal(false)}
                      className="flex-1 px-4 py-2 border border-slate-300 rounded-lg font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-navy text-white rounded-lg font-bold hover:bg-gold transition-colors"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-check text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Welcome!</h3>
                <p className="text-slate-600 mb-2">
                  Thank you for signing up for our {selectedTier} plan.
                </p>
                <p className="text-sm text-slate-500">
                  A confirmation email has been sent to {formData.email}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MembershipPage;
