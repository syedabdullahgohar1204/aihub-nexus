import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { NewsletterModal } from './NewsletterModal';
import { ContactModal } from './ContactModal'; // Import contact modal

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showContact, setShowContact] = useState(false); // Contact modal state

  const webhookUrl = "YOUR_WEBHOOK_URL";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    setTimeout(() => setActiveLink(null), 500);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'nav-blur bg-white/10 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Zap className="h-8 w-8 text-primary group-hover:animate-glow-pulse" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              </div>
              <span className="text-xl font-bold glow-text">AI HUB</span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative text-sm font-medium transition-all duration-200 ${
                    isScrolled ? 'text-white' : 'text-white/70'
                  } hover:text-primary hover:glow-text group`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons - Slightly Right */}
            <div className="hidden md:flex items-center space-x-2 ml-auto">
              <Button
                className="btn-hero px-6 bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                onClick={() => setShowContact(true)}
              >
                Get Started
              </Button>

              <Button
                className="btn-hero px-6 bg-accent text-white hover:bg-accent/90 transition-all duration-300"
                onClick={() => setShowNewsletter(true)}
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-xl mt-2 border border-border">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 hover:text-primary hover:glow-text"
                  >
                    {item.name}
                  </a>
                ))}

                <div className="flex flex-col gap-2 px-3 py-2">
                  <Button
                    className="btn-hero w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                    onClick={() => {
                      setShowContact(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>

                  <Button
                    className="btn-hero w-full bg-accent text-white hover:bg-accent/90 transition-all duration-300"
                    onClick={() => {
                      setShowNewsletter(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={showNewsletter}
        onClose={() => setShowNewsletter(false)}
        webhookUrl={webhookUrl}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </>
  );
};

export default Navigation;
