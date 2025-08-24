import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPosts = {
    '1': {
      title: 'The Future of AI in Business Automation',
      content: `
        <p>Artificial Intelligence is no longer a futuristic concept—it's here, transforming the way businesses operate across every industry. From small startups to Fortune 500 companies, organizations are leveraging AI to automate processes, gain insights, and drive innovation at unprecedented speeds.</p>

        <h2>The Current State of AI in Business</h2>
        <p>Today's AI landscape is characterized by rapid advancement in machine learning algorithms, natural language processing, and computer vision. These technologies are enabling businesses to:</p>
        <ul>
          <li>Automate repetitive tasks with unprecedented accuracy</li>
          <li>Analyze vast amounts of data in real-time</li>
          <li>Provide personalized customer experiences at scale</li>
          <li>Predict market trends and customer behavior</li>
        </ul>

        <h2>Key Areas of Impact</h2>
        <p>AI is making significant impacts in several key business areas:</p>

        <h3>Customer Service and Support</h3>
        <p>AI-powered chatbots and voice assistants are handling customer inquiries 24/7, providing instant responses and freeing up human agents to focus on complex issues. Machine learning algorithms are also helping to predict customer needs and proactively address concerns.</p>

        <h3>Operations and Supply Chain</h3>
        <p>Predictive analytics and AI-driven optimization are revolutionizing supply chain management. Companies can now forecast demand more accurately, optimize inventory levels, and identify potential disruptions before they occur.</p>

        <h3>Sales and Marketing</h3>
        <p>AI is enabling hyper-personalized marketing campaigns, lead scoring, and sales forecasting. Machine learning algorithms analyze customer behavior patterns to identify the most promising prospects and optimize conversion rates.</p>

        <h2>Looking Ahead: The Future of AI Automation</h2>
        <p>As we look to the future, several trends are emerging that will shape the next generation of AI-powered business automation:</p>

        <h3>Autonomous Decision Making</h3>
        <p>We're moving toward AI systems that can make complex decisions independently, with minimal human oversight. This will enable businesses to respond to market changes and opportunities in real-time.</p>

        <h3>Cross-Platform Integration</h3>
        <p>Future AI systems will seamlessly integrate across all business platforms and applications, creating a unified intelligence layer that spans the entire organization.</p>

        <h3>Ethical AI and Transparency</h3>
        <p>As AI becomes more prevalent, businesses will need to prioritize ethical AI practices, ensuring transparency, fairness, and accountability in their automated systems.</p>

        <h2>Preparing for the AI Future</h2>
        <p>To successfully navigate the AI-powered future, businesses should:</p>
        <ul>
          <li>Invest in AI education and training for their workforce</li>
          <li>Start with small, manageable AI projects to build expertise</li>
          <li>Focus on data quality and governance</li>
          <li>Partner with experienced AI solution providers</li>
          <li>Develop clear AI ethics and governance frameworks</li>
        </ul>

        <p>The future of AI in business automation is bright, promising unprecedented levels of efficiency, insight, and innovation. Organizations that embrace these technologies today will be best positioned to thrive in tomorrow's AI-driven marketplace.</p>
      `,
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI Trends',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center'
    },
    '2': {
      title: 'Building Intelligent Chatbots: Best Practices',
      content: `
        <p>Creating effective chatbots requires more than just implementing conversational AI technology. It demands a deep understanding of user needs, careful design of conversation flows, and continuous optimization based on real-world interactions.</p>

        <h2>Understanding Your Users</h2>
        <p>Before building a chatbot, it's crucial to understand who will be using it and what they hope to achieve. Successful chatbots are designed with specific user personas and use cases in mind.</p>

        <h3>User Research and Analysis</h3>
        <p>Start by analyzing your existing customer service data, frequently asked questions, and common user journeys. This will help you identify the most valuable use cases for your chatbot.</p>

        <h2>Design Principles for Effective Chatbots</h2>
        <p>Great chatbots follow several key design principles:</p>

        <ul>
          <li><strong>Clarity:</strong> Make it clear that users are interacting with a bot</li>
          <li><strong>Simplicity:</strong> Start with basic functionality and expand gradually</li>
          <li><strong>Personality:</strong> Give your bot a consistent voice and personality</li>
          <li><strong>Fallback options:</strong> Always provide ways to escalate to human support</li>
        </ul>

        <h2>Technical Implementation Best Practices</h2>
        <p>When implementing your chatbot, consider these technical best practices:</p>

        <h3>Natural Language Processing</h3>
        <p>Invest in robust NLP capabilities that can understand variations in how users express their needs. This includes handling typos, slang, and different ways of asking the same question.</p>

        <h3>Context Management</h3>
        <p>Maintain conversation context throughout multi-turn interactions. Users should be able to refer back to previous parts of the conversation without repeating information.</p>

        <h3>Integration Capabilities</h3>
        <p>Ensure your chatbot can integrate with your existing systems, including CRM, knowledge bases, and other business applications.</p>

        <h2>Measuring Success and Continuous Improvement</h2>
        <p>Track key metrics such as:</p>
        <ul>
          <li>Conversation completion rates</li>
          <li>User satisfaction scores</li>
          <li>Escalation rates to human agents</li>
          <li>Response accuracy</li>
        </ul>

        <p>Use these metrics to continuously refine and improve your chatbot's performance.</p>
      `,
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop&crop=center'
    },
    '3': {
      title: 'AI Voice Agents: Transforming Customer Service',
      content: `
        <p>Voice-powered AI agents are revolutionizing customer service by providing natural, conversational interactions that feel more human-like than traditional automated systems. These sophisticated systems combine advanced speech recognition, natural language understanding, and speech synthesis to create seamless customer experiences.</p>

        <h2>The Evolution of Voice AI</h2>
        <p>Voice AI technology has come a long way from the robotic, menu-driven systems of the past. Modern voice agents can:</p>
        <ul>
          <li>Understand natural speech patterns and accents</li>
          <li>Maintain context throughout complex conversations</li>
          <li>Express empathy and emotional intelligence</li>
          <li>Handle multiple languages and dialects</li>
        </ul>

        <h2>Key Benefits of AI Voice Agents</h2>
        
        <h3>24/7 Availability</h3>
        <p>Unlike human agents, AI voice systems can provide consistent service around the clock, ensuring customers can get help whenever they need it.</p>

        <h3>Scalability</h3>
        <p>Voice AI can handle thousands of simultaneous conversations without degradation in service quality, making it ideal for businesses with fluctuating call volumes.</p>

        <h3>Cost Efficiency</h3>
        <p>While initial setup costs can be significant, AI voice agents typically provide excellent ROI by reducing the need for large customer service teams.</p>

        <h2>Implementation Strategies</h2>
        <p>Successful voice AI implementation requires careful planning and execution:</p>

        <h3>Start with Simple Use Cases</h3>
        <p>Begin with straightforward scenarios like appointment scheduling, order status inquiries, or basic troubleshooting before moving to more complex interactions.</p>

        <h3>Train on Real Data</h3>
        <p>Use actual customer conversations and common scenarios to train your voice AI system, ensuring it can handle real-world situations effectively.</p>

        <h3>Provide Clear Escalation Paths</h3>
        <p>Always ensure customers can easily transfer to human agents when needed, and make this option clear from the beginning of the interaction.</p>

        <h2>Future Trends in Voice AI</h2>
        <p>The future of AI voice agents includes exciting developments such as:</p>
        <ul>
          <li>Multimodal interactions combining voice, text, and visual elements</li>
          <li>Improved emotional intelligence and empathy</li>
          <li>Better integration with business systems and workflows</li>
          <li>More sophisticated personalization capabilities</li>
        </ul>

        <p>As these technologies continue to evolve, we can expect voice AI to become an even more integral part of customer service strategies across industries.</p>
      `,
      author: 'Emily Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=400&fit=crop&crop=center'
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-primary/20 text-primary font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-muted-foreground">Author</p>
                </div>
              </div>

              <Button variant="outline" size="sm" className="btn-outline-glow">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-3d p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:text-primary prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-foreground prose-h3:mb-3 prose-h3:mt-6 prose-ul:space-y-2 prose-li:leading-relaxed prose-p:leading-relaxed prose-p:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Article Footer */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-3d p-8 text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore our comprehensive AI solutions and discover how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-hero"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Contact Our Experts
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline-glow">
                <Link to="/blog">
                  Read More Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;