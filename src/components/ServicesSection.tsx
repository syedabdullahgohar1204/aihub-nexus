import { useState } from 'react';
import { Bot, Zap, MessageSquare, Mic, Smartphone, Mail, Calendar, Database, CheckCircle } from 'lucide-react';
import './services.css';

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    { icon: Bot, title: 'AI Agents', description: 'Intelligent autonomous agents that perform complex tasks...', features: ['Autonomous decision making', 'Multi-system integration', 'Learning capabilities', 'Real-time adaptation'], gradient: 'from-blue-500 to-cyan-500' },
    { icon: Zap, title: 'AI Automations', description: 'Streamline workflows with intelligent automation...', features: ['Process optimization','Workflow automation','Intelligent routing','Performance analytics','Lead generation & outreach','Email & CRM automation'], gradient: 'from-purple-500 to-pink-500' },
    { icon: MessageSquare, title: 'Chatbots', description: 'Advanced conversational AI providing natural interactions...', features: ['Natural language processing','Context awareness','Multi-language support','24/7 availability','Website & social media chatbots','Instagram DM automation'], gradient: 'from-green-500 to-teal-500', trending: true },
    { icon: Mic, title: 'AI Voice Agents', description: 'Voice-enabled AI systems for natural speech interactions...', features: ['Speech recognition','Voice synthesis','Accent adaptation','Emotion detection','Customer support via phone/voice'], gradient: 'from-orange-500 to-red-500', trending: true },
    { icon: Smartphone, title: 'WhatsApp Automation', description: 'Automate messages, notifications, and customer interactions...', features: ['Automated responses & broadcasts','Lead follow-ups','Booking & scheduling reminders','Customer support automation'], gradient: 'from-blue-600 to-blue-700', trending: true },
    { icon: Calendar, title: 'Booking & Scheduling', description: 'AI-driven booking systems to manage appointments...', features: ['Automatic calendar updates','Appointment reminders','24/7 booking availability','Integration with CRM & calendars'], gradient: 'from-indigo-500 to-purple-500' },
    { icon: Mail, title: 'Email Automation', description: 'Smart email workflows for marketing, follow-ups...', features: ['Automated email campaigns','Inbox organization & labeling','Personalized outreach','Follow-up reminders & analytics'], gradient: 'from-red-500 to-pink-500' },
    { icon: Database, title: 'RAG Knowledge Agents', description: 'Retrieve, analyze, and act on data intelligently...', features: ['Contextual knowledge retrieval','Custom knowledge integration','Real-time data insights','Automated decision support'], gradient: 'from-teal-500 to-cyan-500' }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-down">Our <span className="glow-text">AI Services</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-down" style={{ animationDelay: '200ms' }}>
            Click on any service to explore all features and capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedCard === index;
            return (
              <div
                key={service.title}
                className="service-card relative cursor-pointer rounded-xl overflow-hidden transition-transform duration-500 shadow-lg hover:scale-105"
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 animate-gradient-bg blur-xl`}></div>

                {/* Header - always visible */}
                <div className="flex items-center gap-3 p-4 relative z-10">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-xl">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-md font-bold">{service.title}</h3>
                  {service.trending && (
                    <span className="ml-auto bg-cyan-500 text-xs text-white px-2 py-0.5 rounded-full animate-trending-badge">
                      Trending
                    </span>
                  )}
                </div>

                {/* Expandable Content - hidden if not expanded */}
                {isExpanded && (
                  <div className="px-4 pb-4 transition-[max-height] duration-500 max-h-96">
                    <p className="text-muted-foreground mb-2">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 opacity-0 animate-fade-in"
                          style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                        >
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
