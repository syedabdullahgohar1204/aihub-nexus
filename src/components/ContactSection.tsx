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
import { Mail, Linkedin, Send, MapPin, Phone } from "lucide-react";

type FormDataType = {
  name: string;
  email: string;
  company: string;
  services: string;
  timeline: string;
  message: string;
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    company: "",
    services: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:5678/webhook-test/950907f0-753c-4bfc-a45a-cd7144e3a2b9",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "contact_form",
            ...formData, // budget removed
          }),
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
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
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
  { icon: MapPin, title: "Location", value: "Lahore, Pakistan", link: "#" },
  { 
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.915 4.915 0 0 0 1.523 6.574 4.902 4.902 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.085 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0 0 24 4.557z"/></svg>, 
    title: "Twitter", 
    value: "@AIHub", 
    link: "https://twitter.com/AIHub" 
  },
];


  return (
    <section id="contact" className="py-20 relative bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Let's Build Something <span className="text-cyan-400 glow-text">Amazing</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Get in touch with our experts to discuss your project and discover the possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          {/* Contact Form */}
          <div className="rounded-3xl bg-[#1a1a23]/80 border border-[#333]/50 backdrop-blur-md p-8 shadow-2xl transition-transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,255,255,0.2)] duration-300">
            <h3 className="text-2xl font-bold mb-6 text-white">Let’s talk about your project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="bg-[#0f0f14] text-white border-gray-700 placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="bg-[#0f0f14] text-white border-gray-700 placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                />
              </div>

              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="bg-[#0f0f14] text-white border-gray-700 placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
              />

              <Select
                value={formData.services}
                onValueChange={(value) => setFormData(prev => ({ ...prev, services: value }))}
              >
                <SelectTrigger className="w-full bg-[#0f0f14] text-white border-gray-700 placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400">
                  <SelectValue placeholder="Select Services *" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a23] text-white">
                  <SelectItem value="AI-Driven Strategy">AI-Driven Strategy</SelectItem>
                  <SelectItem value="AI Models Built for You">AI Models Built for You</SelectItem>
                  <SelectItem value="Intelligent Automation">Intelligent Automation</SelectItem>
                  <SelectItem value="AI-Powered Analytics">AI-Powered Analytics</SelectItem>
                  <SelectItem value="Multiple Services">Multiple Services</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={formData.timeline}
                onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
              >
                <SelectTrigger className="w-full bg-[#0f0f14] text-white border-gray-700 placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400">
                  <SelectValue placeholder="Select Timeline *" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a23] text-white">
                  <SelectItem value="urgent">Urgent / within a Month</SelectItem>
                  <SelectItem value="2-3-months">2-3 Months</SelectItem>
                  <SelectItem value="3-6-months">3-6 Months</SelectItem>
                  <SelectItem value="deciding">Still Deciding</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your process, and we’ll show how AI can save you both time and money."
                className="bg-[#0f0f14] text-white border-gray-700 placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline-block"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-3xl bg-[#1a1a23]/80 border border-[#333]/50 backdrop-blur-md p-8 shadow-2xl transition-transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,255,255,0.2)] duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-[#0f0f14]/30 hover:bg-cyan-500/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-400">{info.title}</h4>
                      <p className="text-white group-hover:text-cyan-400 transition-colors duration-300">{info.value}</p>
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
