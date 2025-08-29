import { useState } from 'react';
import { Bot, Zap, MessageSquare, Mic, Smartphone, Mail, Calendar, Database, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Intelligent autonomous agents that perform complex tasks, make decisions, and interact with systems for you.',
      features: ['Autonomous decision making', 'Multi-system integration', 'Learning capabilities', 'Real-time adaptation'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'AI Automations',
      description: 'Streamline workflows with intelligent automation that adapts and optimizes over time.',
      features: ['Process optimization','Workflow automation','Intelligent routing','Performance analytics','Lead generation & outreach','Email & CRM automation'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Chatbots',
      description: 'Advanced conversational AI providing natural, context-aware interactions with customers.',
      features: ['Natural language processing','Context awareness','Multi-language support','24/7 availability','Website & social media chatbots','Instagram DM automation'],
      gradient: 'from-green-500 to-teal-500',
      trending: true
    },
    {
      icon: Mic,
      title: 'AI Voice Agents',
      description: 'Voice-enabled AI systems for natural speech interactions and voice-controlled operations.',
      features: ['Speech recognition','Voice synthesis','Accent adaptation','Emotion detection','Customer support via phone/voice'],
      gradient: 'from-orange-500 to-red-500',
      trending: true
    },
    {
      icon: Smartphone,
      title: 'WhatsApp Automation',
      description: 'Automate messages, notifications, and customer interactions on WhatsApp seamlessly.',
      features: ['Automated responses & broadcasts','Lead follow-ups','Booking & scheduling reminders','Customer support automation'],
      gradient: 'from-blue-600 to-blue-700',
      trending: true
    },
    {
      icon: Calendar,
      title: 'Booking & Scheduling',
      description: 'AI-driven booking systems to manage appointments, reservations, and scheduling automatically.',
      features: ['Automatic calendar updates','Appointment reminders','24/7 booking availability','Integration with CRM & calendars'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Smart email workflows for marketing, follow-ups, and labeling, powered by AI.',
      features: ['Automated email campaigns','Inbox organization & labeling','Personalized outreach','Follow-up reminders & analytics'],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'RAG Knowledge Agents',
      description: 'Retrieve, analyze, and act on data intelligently with AI-powered RAG agents.',
      features: ['Contextual knowledge retrieval','Custom knowledge integration','Real-time data insights','Automated decision support'],
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our <span className="glow-text">AI Services</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Click on any service to explore all features and capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedCard === index;
            return (
              <div
                key={service.title}
                className={`service-card group relative overflow-hidden transition-all duration-500 cursor-pointer rounded-xl bg-white/5 hover:bg-white/10`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                style={{ height: isExpanded ? 'auto' : '120px' }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Header - always visible */}
                <div className="flex items-center gap-4 p-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  {service.trending && (
                    <span className="ml-auto bg-cyan-500 text-xs text-white px-2 py-0.5 rounded-full animate-pulse">
                      Trending
                    </span>
                  )}
                </div>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 transition-all duration-500">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
