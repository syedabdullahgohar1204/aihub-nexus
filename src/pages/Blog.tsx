import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, Search, Filter, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business Automation',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and what it means for your organization. From streamlining workflows to predictive analytics, AI is transforming the way businesses operate.',
      content: 'Full article content would go here...',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI Trends',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=360&fit=crop&crop=center',
      featured: true
    },
    {
      id: 2,
      title: 'Building Intelligent Chatbots: Best Practices',
      excerpt: 'Learn the essential strategies for creating chatbots that deliver exceptional user experiences and drive meaningful business results. Our comprehensive guide covers design, implementation, and optimization.',
      content: 'Full article content would go here...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=360&fit=crop&crop=center',
      featured: false
    },
    {
      id: 3,
      title: 'AI Voice Agents: Transforming Customer Service',
      excerpt: 'Explore how AI-powered voice agents are reshaping customer interactions and improving satisfaction rates across industries. Real-world case studies and implementation insights.',
      content: 'Full article content would go here...',
      author: 'Emily Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=360&fit=crop&crop=center',
      featured: false
    },
    {
      id: 4,
      title: 'Machine Learning Models in Production: Scaling Challenges',
      excerpt: 'Understanding the complexities of deploying ML models at scale. Best practices for monitoring, maintenance, and continuous improvement in production environments.',
      content: 'Full article content would go here...',
      author: 'David Park',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=360&fit=crop&crop=center',
      featured: false
    },
    {
      id: 5,
      title: 'The Ethics of AI: Building Responsible Systems',
      excerpt: 'A deep dive into the ethical considerations of AI development. How to build systems that are fair, transparent, and beneficial for all stakeholders.',
      content: 'Full article content would go here...',
      author: 'Dr. Lisa Wang',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'AI Ethics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=360&fit=crop&crop=center',
      featured: false
    },
    {
      id: 6,
      title: 'Natural Language Processing: Latest Breakthroughs',
      excerpt: 'Recent advances in NLP technology and their practical applications. From language models to sentiment analysis, discover what\'s possible today.',
      content: 'Full article content would go here...',
      author: 'James Liu',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'AI Trends',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=360&fit=crop&crop=center',
      featured: false
    }
  ];

  const categories = ['All', 'AI Trends', 'Development', 'Customer Experience', 'AI Ethics'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI CHOWK <span className="glow-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insights, trends, and expertise from the world of artificial intelligence. 
              Stay informed with our latest thoughts on AI innovation and implementation.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 border-border focus:border-primary"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "btn-hero" : "btn-outline-glow"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
            <Link
              to={`/blog/${featuredPost.id}`}
              className="card-3d overflow-hidden block group hover:scale-[1.02] transition-all duration-300 max-w-4xl mx-auto"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="blog-card group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden rounded-t-lg h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;