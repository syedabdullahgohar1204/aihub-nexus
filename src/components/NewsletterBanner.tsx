import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Mail } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the banner
    const dismissed = localStorage.getItem('newsletter-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 65 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('newsletter-dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Here you would typically send the email to your backend
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
    handleDismiss();
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="bg-gradient-to-r from-card to-card/95 backdrop-blur-lg border-t border-border shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Content */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="p-2 bg-primary/10 rounded-full">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-foreground font-semibold text-sm md:text-base">
                  Stay updated with AI HUB
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Join our newsletter for the latest AI insights and updates
                </p>
              </div>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-shrink-0">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-48 h-9 text-sm bg-background/50 border-border focus:border-primary"
              />
              <Button 
                type="submit" 
                size="sm"
                className="h-9 px-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Subscribe
              </Button>
            </form>
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="p-1 h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/50 flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;