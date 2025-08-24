import { Target, Users, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'We deliver targeted AI solutions that address your specific business challenges with surgical precision.'
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'Our AI amplifies human capabilities rather than replacing them, creating synergistic partnerships.'
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'We maintain the highest standards in AI development, ensuring robust and reliable solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Pioneering next-generation AI technologies to keep your business ahead of the curve.'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="glow-text">AI HUB</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are pioneers in artificial intelligence, dedicated to transforming businesses 
            through innovative AI solutions that drive growth, efficiency, and competitive advantage.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At AI HUB, we believe artificial intelligence should empower every business to achieve extraordinary results. 
                Our mission is to democratize AI technology, making it accessible, practical, and transformative for 
                organizations of all sizes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a future where AI seamlessly integrates into business operations, 
                creating intelligent systems that adapt, learn, and evolve with your organization's needs. 
                Our goal is to be the trusted partner in your AI transformation journey.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose Us</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in AI development and a track record of successful implementations, 
                we combine technical expertise with business acumen to deliver solutions that not only work 
                but excel in real-world environments.
              </p>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="relative">
            <div className="card-3d p-8 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold glow-text mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold glow-text mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold glow-text mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold glow-text mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-4 text-center">Expertise Areas</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Machine Learning', 'NLP', 'Computer Vision', 'Automation', 'Deep Learning', 'AI Strategy'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl float-animation"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="card-3d p-6 text-center group hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-block mb-4">
                <value.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;