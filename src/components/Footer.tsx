import { useState, useEffect } from 'react';
import { Mail, Linkedin, Twitter, Github, ArrowUp, Zap } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'Email', href: 'mailto:hello@aihub.com', icon: Mail },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-background border-t border-border text-foreground pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="relative group">
            <Zap className="h-8 w-8 text-primary group-hover:animate-glow-pulse transition-all duration-300" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
          </div>
          <span className="text-2xl font-bold glow-text">AI HUB</span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center mb-8">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-all duration-300 group"
            >
              <s.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} AI HUB. All rights reserved.
        </p>
      </div>

      {/* Animated Scroll to Top Button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 w-14 h-14 bg-primary/80 rounded-full flex items-center justify-center shadow-lg
                     animate-bounce hover:animate-none hover:scale-110 transition-all duration-500 ease-in-out z-50"
        >
          <ArrowUp className="w-6 h-6 text-background animate-pulse" />
          {/* Outer glow like chatbot */}
          <span className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></span>
        </button>
      )}
    </footer>
  );
};

export default Footer;