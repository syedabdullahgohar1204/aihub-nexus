import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './blog.css';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business Automation',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and what it means for your organization.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI Trends',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Building Intelligent Chatbots: Best Practices',
      excerpt: 'Learn the essential strategies for creating chatbots that deliver exceptional user experiences and drive results.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=240&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'AI Voice Agents: Transforming Customer Service',
      excerpt: 'Explore how AI-powered voice agents are reshaping customer interactions and improving satisfaction rates.',
      author: 'Emily Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=240&fit=crop&crop=center'
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="glow-text">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest thoughts on AI trends, best practices, and innovations.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="blog-card group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Floating Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-200/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>

              {/* Post Image */}
              <div className="relative overflow-hidden rounded-t-lg h-36">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-medium rounded-full bg-primary text-primary-foreground animate-pulse shadow-md">
                  {post.category}
                </span>
              </div>

              {/* Post Content */}
              <div className="p-4">
                {/* Meta */}
                <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1"><User className="h-3 w-3" /><span>{post.author}</span></div>
                  <div className="flex items-center space-x-1"><Calendar className="h-3 w-3" /><span>{new Date(post.date).toLocaleDateString()}</span></div>
                  <div className="flex items-center space-x-1"><Clock className="h-3 w-3" /><span>{post.readTime}</span></div>
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-lg font-bold mb-1 line-clamp-2 transition-colors duration-300 group-hover:text-primary">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3 leading-relaxed group-hover:opacity-90 transition-opacity duration-300">{post.excerpt}</p>

                {/* Read More */}
                <div className="flex items-center text-primary font-medium gap-1 group-hover:gap-2 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button asChild variant="outline" className="btn-outline-glow px-6 py-2">
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
