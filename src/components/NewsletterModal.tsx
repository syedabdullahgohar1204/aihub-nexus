import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  webhookUrl: string;
}

export const NewsletterModal = ({ isOpen, onClose, webhookUrl }: NewsletterModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState(""); // store user name for success message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Save the name before clearing input
    setUserName(name.trim() || ""); 

    setSubmitted(true);

    // Clear inputs
    setName("");
    setEmail("");

    // Send data to webhook silently
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName, email }),
      });
    } catch {
      // Fail silently
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-slide-up text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-extrabold mb-4 text-center text-primary">Join Our Newsletter</h2>
            <p className="text-center text-gray-300 mb-6">
              Get updates and AI insights straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-primary to-accent text-white font-bold py-3 rounded-lg hover:scale-105 transform transition duration-300 shadow-lg"
              >
                Subscribe
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-2xl font-bold mb-4 text-center text-primary animate-bounce">
              🎉 Thank You, {userName.split(" ")[0]}!
            </h2>
            <p className="text-center text-gray-300 mb-6">
              You have successfully joined our newsletter.
            </p>
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transform transition duration-300 shadow-lg"
            >
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
