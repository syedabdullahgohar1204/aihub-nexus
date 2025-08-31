import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Bot, Zap, MessageSquare } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import { ContactModal } from './ContactModal';
import { NewsletterModal } from './NewsletterModal'; // import newsletter modal

const HeroSection = () => {
  const services = [
    { icon: Bot, name: 'AI Agents' },
    { icon: Zap, name: 'Automations' },
    { icon: MessageSquare, name: 'Chatbots' },
    { icon: Sparkles, name: 'Voice Agents' },
  ];

  const stats = [
    { number: 200, label: 'AI Solutions Deployed', suffix: '+' },
    { number: 100, label: 'Client Satisfaction', suffix: '%' },
    { number: 24, label: 'AI Support Available', suffix: '/7' },
    { number: 10, label: 'Business Growth', suffix: 'x' },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  // Existing modal state
  const [showContact, setShowContact] = useState(false);

  // Newsletter modal state
  const [showNewsletter, setShowNewsletter] = useState(false);
  const webhookUrl = "YOUR_WEBHOOK_URL"; // replace with your webhook

  // Intersection Observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setCounters(prev =>
        prev.map((val, idx) => (val < stats[idx].number ? val + 1 : val))
      );
    }, 20);
    return () => clearInterval(interval);
  }, [started]);

  // Show newsletter popup on page load
  useEffect(() => {
    const timer = setTimeout(() => setShowNewsletter(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient"></div>

        {/* Floating Blobs */}
        <div className="blob w-64 h-64 bg-primary/30 top-20 left-10"></div>
        <div className="blob w-72 h-72 bg-accent/30 top-40 right-20 animation-delay-[5s]"></div>
        <div className="blob w-56 h-56 bg-secondary/30 top-60 left-1/3 animation-delay-[5s]"></div>

        {/* Particles / Small Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="particle w-1.5 h-1.5 bg-primary rounded-full top-5 left-10"></div>
          <div className="particle w-2 h-2 bg-primary rounded-full top-10 left-20"></div>
          <div className="particle w-2 h-2 bg-primary rounded-full top-15 right-15"></div>
          <div className="particle w-3 h-3 bg-accent rounded-full top-20 right-10"></div>
          <div className="particle w-1.5 h-1.5 bg-secondary rounded-full top-25 left-1/4"></div>
          <div className="particle w-2 h-2 bg-primary rounded-full top-30 left-2/3"></div>
          <div className="particle w-2 h-2 bg-accent rounded-full top-35 right-1/3"></div>
          <div className="particle w-1.5 h-1.5 bg-secondary rounded-full top-40 left-1/2"></div>
          <div className="particle w-2 h-2 bg-primary rounded-full top-45 right-15"></div>
          <div className="particle w-3 h-3 bg-accent rounded-full top-50 left-10"></div>
          <div className="particle w-1.5 h-1.5 bg-secondary rounded-full top-55 right-20"></div>
          <div className="particle w-2 h-2 bg-primary rounded-full top-60 left-1/3"></div>
          <div className="particle w-1.5 h-1.5 bg-accent rounded-full top-65 right-1/4"></div>
          <div className="particle w-2 h-2 bg-primary rounded-full top-70 left-3/4"></div>
          <div className="particle w-1.5 h-1.5 bg-secondary rounded-full top-75 right-10"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className="mb-16"></div>

          {/* Header */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-snug hero-gradient p-4 rounded-md">
            We Automate<br />
            Your Work<br />
            <span className="block glow-text">You Grow Faster</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-Powered Automation That Saves Time, Boosts Efficiency, and Accelerates Growth.
          </p>

          {/* Service Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 float-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <service.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{service.name}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="premium"
              size="lg"
              className="px-8 py-4 text-lg group pulse-animation btn-hero"
              onClick={() => setShowContact(true)}
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              variant="premium"
              size="lg"
              className="px-8 py-4 text-lg group pulse-animation btn-hero"
              onClick={() => {
                const element = document.querySelector('#services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Services
            </Button>
          </div>

          {/* Stats Section */}
          <div
            ref={statsRef}
            className="mt-20 mb-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold glow-text stat-number mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center overflow-hidden">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce-vertical"></div>
        </div>
      </div> */}

      {/* Modals */}
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
      <NewsletterModal
        isOpen={showNewsletter}
        onClose={() => setShowNewsletter(false)}
        webhookUrl={webhookUrl}
      />
    </section>
  );
};

export default HeroSection;
