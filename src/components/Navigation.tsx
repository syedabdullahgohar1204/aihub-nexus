import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

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

    if (href.startsWith('/#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');
      if (location.pathname !== path) {
        navigate(path, { state: { scrollTo: `#${hash}` } });
      } else {
        const element = document.querySelector(`#${hash}`);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (!href.startsWith('/#') && href !== location.pathname) {
      e.preventDefault();
      navigate(href);
    }

    setIsMobileMenuOpen(false);
    setTimeout(() => setActiveLink(null), 500);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-blur bg-white/10 backdrop-blur-sm' : 'bg-transparent'
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative text-sm font-medium transition-all duration-200 hover:text-primary hover:glow-text ${activeLink === item.href ? 'text-primary glow-text' : 'text-muted-foreground'
                  } group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="btn-hero px-6 bg-primary text-white hover:bg-primary/90 transition-all duration-300"
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/', { state: { scrollTo: '#contact' } });
                } else {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
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
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 hover:text-primary hover:glow-text ${activeLink === item.href ? 'text-primary bg-primary/10' : 'text-foreground'
                    }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="btn-hero w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                  onClick={() => {
                    if (location.pathname !== '/') {
                      navigate('/', { state: { scrollTo: '#contact' } });
                    } else {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
