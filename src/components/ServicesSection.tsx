import { Bot, Zap, MessageSquare, Mic, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Intelligent autonomous agents that can perform complex tasks, make decisions, and interact with systems on your behalf.',
      features: [
        'Autonomous decision making',
        'Multi-system integration',
        'Learning capabilities',
        'Real-time adaptation'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'AI Automations',
      description: 'Streamline your workflows with intelligent automation solutions that adapt and optimize over time.',
      features: [
        'Process optimization',
        'Workflow automation',
        'Intelligent routing',
        'Performance analytics'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Chatbots',
      description: 'Advanced conversational AI that provides natural, context-aware interactions with your customers.',
      features: [
        'Natural language processing',
        'Context awareness',
        'Multi-language support',
        '24/7 availability'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Mic,
      title: 'AI Voice Agents',
      description: 'Sophisticated voice-enabled AI systems for natural speech interactions and voice-controlled operations.',
      features: [
        'Speech recognition',
        'Voice synthesis',
        'Accent adaptation',
        'Emotion detection'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="glow-text">AI Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform your business operations, 
            enhance customer experiences, and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon with Glow Effect */}
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button 
                variant="ghost" 
                className="group/btn text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-3d p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive your business forward. 
              Our experts are ready to design a custom solution that fits your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-hero px-8"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-glow px-8"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;