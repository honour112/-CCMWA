import React from 'react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: 'Biblical Counseling',
      items: [
        {
          title: 'The Gospel and Mental Health',
          description: 'Understanding how faith intersects with mental wellness.',
          icon: 'fa-book'
        },
        {
          title: 'Scripture for Daily Strength',
          description: 'Daily devotionals to support your spiritual journey.',
          icon: 'fa-scroll'
        },
        {
          title: 'Prayer Guide',
          description: 'Resources for intercessory and personal prayer.',
          icon: 'fa-hands-praying'
        }
      ]
    },
    {
      category: 'Mental Wellness Tools',
      items: [
        {
          title: 'Stress Management Techniques',
          description: 'Practical strategies for managing daily stress.',
          icon: 'fa-leaf'
        },
        {
          title: 'Meditation & Mindfulness',
          description: 'Faith-based meditation practices.',
          icon: 'fa-om'
        },
        {
          title: 'Sleep Hygiene Guide',
          description: 'Improve your rest through biblical principles.',
          icon: 'fa-moon'
        }
      ]
    },
    {
      category: 'Support Materials',
      items: [
        {
          title: 'Video Testimonies',
          description: 'Stories of transformation and healing.',
          icon: 'fa-video'
        },
        {
          title: 'Educational Webinars',
          description: 'Expert talks on mental health topics.',
          icon: 'fa-presentation'
        },
        {
          title: 'Community Forum',
          description: 'Connect with others on similar journeys.',
          icon: 'fa-people-group'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Resources</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover tools, guides, and materials to support your mental wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resources.map((category, index) => (
            <div key={index} className="mb-20">
              <h2 className="text-4xl font-serif font-bold text-navy mb-12 pb-4 border-b-2 border-gold">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-slate-50 rounded-lg p-8 hover:shadow-lg hover:bg-white transition-all duration-300 border border-slate-100 hover:border-gold"
                  >
                    <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                      <i className={`fa-solid ${item.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    <button className="mt-6 text-gold font-bold hover:translate-x-1 transition-transform">
                      Learn More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-navy text-center mb-12">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Mental Wellness Checklist', format: 'PDF' },
              { name: 'Biblical Affirmations', format: 'PDF' },
              { name: 'Counseling Preparation Guide', format: 'PDF' }
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-navy">{resource.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{resource.format}</p>
                  </div>
                  <i className="fa-solid fa-download text-gold text-2xl"></i>
                </div>
                <button className="w-full bg-navy text-white py-2 rounded-lg hover:bg-gold transition-colors font-bold">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
