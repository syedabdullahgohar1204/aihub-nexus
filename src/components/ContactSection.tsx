import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Send, MapPin, Phone, Clock } from "lucide-react";

type FormDataType = {
  name: string;
  email: string;
  company: string;
  services: string;
  timeline: string;
  budget: string;
  message: string;
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    company: "",
    services: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Submitting formData:", formData); // Debugging: ensure budget is set

    try {
      const response = await fetch(
        "http://localhost:5678/webhook-test/b9434d46-cdd9-430e-a7db-f355baeeced7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        services: "",
        timeline: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "hello@aihub.com", link: "mailto:hello@aihub.com" },
    { icon: Linkedin, title: "LinkedIn", value: "/company/ai-hub", link: "https://linkedin.com/company/ai-hub" },
    { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: MapPin, title: "Location", value: "San Francisco, CA", link: "#" },
  ];

  const budgetOptions = [
    { value: "$20k+", label: "Over $20,000 (Enterprise Scale)" },
    { value: "$10k - $20k", label: "$10k – $20k (Large Project)" },
    { value: "$5k - $10k", label: "$5k – 10k (Mid-Sized Project)" },
    { value: "Under $5k", label: "Less Than $5,000 / Still Deciding" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-primary">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Get in touch with our experts to discuss your project and discover the possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="rounded-2xl shadow-lg bg-background/50 border p-8">
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Chris Nolan"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="chris@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                />
              </div>

              {/* Services */}
              <div>
                <label htmlFor="services" className="block text-sm font-medium mb-2">Select Services *</label>
                <Select
                  value={formData.services}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, services: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Please choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AI-Driven Strategy">AI-Driven Strategy</SelectItem>
                    <SelectItem value="AI Models Built for You">AI Models Built for You</SelectItem>
                    <SelectItem value="Intelligent Automation">Intelligent Automation</SelectItem>
                    <SelectItem value="AI-Powered Analytics">AI-Powered Analytics</SelectItem>
                    <SelectItem value="Multiple Services">Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium mb-2">Execution Timeline *</label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select timeline..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent / within a Month</SelectItem>
                    <SelectItem value="2-3-months">2-3 Months</SelectItem>
                    <SelectItem value="3-6-months">3-6 Months</SelectItem>
                    <SelectItem value="deciding">Still Deciding</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium mb-2">Estimated Budget *</label>
                <div className="grid gap-2">
                  {budgetOptions.map((b) => (
                    <label key={b.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value={b.value}
                        checked={formData.budget === b.value}
                        onChange={() => setFormData(prev => ({ ...prev, budget: b.value }))}
                        className="appearance-none w-5 h-5 border-2 border-blue-500 rounded-full checked:bg-black checked:ring-2 checked:ring-blue-400 transition duration-200 cursor-pointer"
                        required
                      />
                      <span className="text-sm font-medium">{b.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full py-3">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="rounded-2xl shadow-lg bg-background/50 border p-8">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">{info.title}</h4>
                      <p className="text-foreground group-hover:text-primary transition-colors duration-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
