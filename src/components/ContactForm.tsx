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
import { Send } from "lucide-react";
import logo from "@/assets/logo.png"; // ✅ Apna logo yahan rakho

type FormDataType = {
  name: string;
  email: string;
  company: string;
  services: string;
  timeline: string;
  message: string;
};

export const ContactForm = ({ onClose }: { onClose: () => void }) => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        // 🔹 Replace with your n8n webhook URL
        "http://localhost:5678/webhook-test/950907f0-753c-4bfc-a45a-cd7144e3a2b9",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "contact_form", ...formData }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });

      setFormData({ name: "", email: "", company: "", services: "", timeline: "", message: "" });
      onClose();
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ✅ Logo Header */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={logo}
          alt="AI CHOWK Logo"
          className="w-16 h-16 rounded-full shadow-[0_0_12px_rgba(0,255,255,0.6)]"
        />
        <h2 className="mt-2 text-lg font-semibold text-white">Contact AI CHOWK</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className="bg-[#0f0f14] text-white border-gray-700 placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
        />
        <Input
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
        name="company"
        type="text"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name"
        className="bg-[#0f0f14] text-white border-gray-700 placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
      />

      <Select
        value={formData.services}
        onValueChange={value => setFormData(prev => ({ ...prev, services: value }))}
      >
        <SelectTrigger className="w-full bg-[#0f0f14] text-white border-gray-700 focus:border-cyan-400 focus:ring-cyan-400">
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
        onValueChange={value => setFormData(prev => ({ ...prev, timeline: value }))}
      >
        <SelectTrigger className="w-full bg-[#0f0f14] text-white border-gray-700 focus:border-cyan-400 focus:ring-cyan-400">
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
        {isSubmitting ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
      </Button>
    </form>
  );
};
