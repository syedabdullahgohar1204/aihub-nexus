import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Latest <span className="glow-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest thoughts on AI trends, 
            best practices, and industry innovations.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="blog-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Image */}
              <div className="relative overflow-hidden rounded-t-lg h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Information */}
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

                {/* Title and Excerpt */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="btn-outline-glow px-8"
          >
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;