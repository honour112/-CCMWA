import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Finding Peace in Uncertain Times',
      excerpt: 'Discover how faith can anchor us when life feels unstable and overwhelming.',
      content: 'In a world full of uncertainties, many of us struggle to find peace. But the Bible reminds us that we can cast all our anxieties on God, for He cares for us. Through prayer, community, and spiritual grounding, we can find lasting peace that transcends our circumstances. This post explores practical ways to cultivate peace through faith and biblical principles.',
      author: 'Rev. Dr. Sarah Johnson',
      date: 'December 15, 2025',
      category: 'Spiritual Growth',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      readTime: 5
    },
    {
      id: 2,
      title: 'Breaking the Stigma Around Mental Health',
      excerpt: 'Let\'s talk openly about mental health challenges and how churches can support members.',
      content: 'Mental health issues are not a sign of weak faith. The stigma surrounding mental health in some Christian communities needs to change. This article discusses how we can create safe spaces for honest conversations about anxiety, depression, and other mental health challenges, while maintaining a strong faith foundation.',
      author: 'Dr. Michael Chen',
      date: 'December 12, 2025',
      category: 'Mental Wellness',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      readTime: 7
    },
    {
      id: 3,
      title: 'The Power of Community Support',
      excerpt: 'How small groups and faith communities are transforming lives.',
      content: 'God created us for community. There\'s incredible healing power in being vulnerable with others who share your faith. This post explores how support groups, prayer circles, and church communities can provide the connection and encouragement we all need on our wellness journeys.',
      author: 'Rachel Williams',
      date: 'December 10, 2025',
      category: 'Community',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      readTime: 6
    },
    {
      id: 4,
      title: 'Scripture as Medicine: Biblical Affirmations for Anxiety',
      excerpt: 'Explore powerful Bible verses that can calm an anxious mind.',
      content: 'Anxiety affects millions of people, including Christians. Yet Scripture provides us with powerful affirmations and truths to meditate on. Learn about verses like Philippians 4:6-7, Isaiah 41:10, and others that can help anchor your mind and heart during times of worry and stress.',
      author: 'Pastor James Matthews',
      date: 'December 8, 2025',
      category: 'Biblical Counseling',
      image: 'bg-gradient-to-br from-gold to-yellow-500',
      readTime: 5
    },
    {
      id: 5,
      title: 'Self-Care Practices for the Spiritually Busy',
      excerpt: 'Even busy church members need to prioritize their mental and spiritual health.',
      content: 'Being involved in church doesn\'t mean neglecting self-care. In fact, caring for yourself is a form of stewardship of the body God gave you. Discover practical, biblical approaches to rest, reflection, and personal wellness that fit into a busy schedule.',
      author: 'Dr. Lisa Thompson',
      date: 'December 5, 2025',
      category: 'Wellness Tips',
      image: 'bg-gradient-to-br from-pink-400 to-rose-600',
      readTime: 6
    },
    {
      id: 6,
      title: 'Grief, Loss, and Faith: Walking Through Dark Valleys',
      excerpt: 'Processing loss while maintaining hope in God\'s promises.',
      content: 'Grief is a natural response to loss, and your faith doesn\'t erase that pain. Instead, it provides a framework for processing grief with hope. This article discusses how to honor your emotions while trusting in God\'s sovereignty and comfort during seasons of loss.',
      author: 'Rev. Grace Okonkwo',
      date: 'December 1, 2025',
      category: 'Healing',
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      readTime: 8
    }
  ];

  const categories = ['All', 'Spiritual Growth', 'Mental Wellness', 'Community', 'Biblical Counseling', 'Wellness Tips', 'Healing'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Insights, stories, and wisdom from our community on faith, wellness, and healing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-navy text-white'
                    : 'bg-slate-100 text-navy hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          {selectedPost === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post.id)}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className={`h-48 ${post.image}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-gold uppercase tracking-widest">{post.category}</span>
                      <span className="text-xs text-slate-500">{post.readTime} min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-xs font-bold text-slate-700">{post.author}</p>
                        <p className="text-xs text-slate-500">{post.date}</p>
                      </div>
                      <button className="text-gold font-bold hover:translate-x-1 transition-transform">
                        →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Blog Post Detail View */
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center text-gold font-bold mb-8 hover:translate-x-1 transition-transform"
              >
                ← Back to Blog
              </button>

              {blogPosts
                .filter(post => post.id === selectedPost)
                .map((post) => (
                  <div key={post.id}>
                    <div className={`h-96 ${post.image} rounded-lg mb-8`}></div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-gold uppercase tracking-widest">{post.category}</span>
                        <span className="text-sm text-slate-500">{post.readTime} min read</span>
                      </div>
                      <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">{post.title}</h1>
                      <div className="flex items-center space-x-4 text-slate-600">
                        <span className="font-bold">{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-lg text-slate-700 leading-relaxed mb-6">{post.content}</p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-200">
                      <h3 className="text-2xl font-serif font-bold text-navy mb-6">Share This Post</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/80 mb-8">Get the latest articles and insights delivered to your inbox.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="bg-gold text-navy px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
