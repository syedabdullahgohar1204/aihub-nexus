import { useState, useEffect, useRef } from "react";
import { X, MessageCircle } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    { sender: "bot", text: "Hello! 👋 I'm your AI Assistant. How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generate a unique sessionId for each user session (for n8n memory node)
  const sessionId = useRef<string>("user-" + Date.now());

  const quickReplies = [
    "Tell me about AI automation services",
    "How can AI improve my business?",
    "I want to schedule a consultation",
    "What are your pricing plans?",
    "Contact AI HUB directly",
  ];

 // Update the sendMessage function in your chatbot
const sendMessage = async (text: string) => {
  if (!text.trim()) return;

  // Add user message locally
  setMessages((prev) => [...prev, { sender: "user", text }]);
  setInputValue("");
  setShowQuickReplies(false);
  setIsLoading(true);

  const webhookUrl = "http://localhost:5678/webhook-test/950907f0-753c-4bfc-a45a-cd7144e3a2b9";

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        type: "chat",
        message: text,
        sessionId: sessionId.current,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    
    // Handle different response types
    if (data.intent === "contact_form") {
      // This is a contact form submission response
      setMessages((prev) => [
        ...prev,
        { 
          sender: "bot", 
          text: "Thank you for providing your information! Our team will contact you shortly." 
        },
      ]);
    } else {
      // Regular chat response
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || data.response || data.text || "Sorry, I couldn't process your request." },
      ]);
    }
  } catch (error) {
    console.error("Error calling AI webhook:", error);
    setMessages((prev) => [
      ...prev,
      { 
        sender: "bot", 
        text: "Something went wrong. Please fill out our Contact Us form, and our team will get back to you shortly with assistance." 
      },
    ]);
  } finally {
    setIsLoading(false);
  }

  setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
};

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-hide popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end transition-all duration-300">
          <div className="w-80 md:w-96 bg-[#121212]/95 backdrop-blur-lg rounded-2xl shadow-xl flex flex-col overflow-hidden border border-cyan-400/60">
            {/* Header */}
            <div className="flex justify-between items-center bg-[#1f1f1f] px-4 py-3 border-b border-cyan-400/60">
              <h4 className="text-white font-semibold text-sm">AI Assistant 🤖</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-gray-700 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-2 max-h-80">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm break-words ${msg.sender === "bot"
                      ? "bg-gray-800 text-white"
                      : "bg-cyan-500 text-black"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-2xl bg-gray-800 text-white text-sm">
                    Thinking...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Buttons */}
            {showQuickReplies && !isLoading && (
              <div className="flex flex-wrap gap-2 p-3 border-t border-cyan-400/50 bg-[#1f1f1f]">
                {quickReplies.map((text) => (
                  <button
                    key={text}
                    className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs hover:bg-gray-600 transition-colors"
                    onClick={() => sendMessage(text)}
                  >
                    {text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Field */}
            <div className="flex items-center p-3 border-t border-cyan-400/50 bg-[#1f1f1f] gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none placeholder-gray-400 border border-cyan-400/30"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !isLoading && sendMessage(inputValue)}
                disabled={isLoading}
              />
              <button
                className="bg-cyan-500 text-black rounded-full px-4 py-2 hover:scale-105 transition-transform font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => !isLoading && sendMessage(inputValue)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : inputValue.trim() ? (
                  "Send"
                ) : (
                  <MessageCircle className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 text-black rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-pulse shadow-[0_0_15px_rgba(0,255,255,0.7)]"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* Popup Tooltip */}
      {showPopup && !isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 bg-[#1f1f1f] px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 cursor-pointer animate-bounce border border-cyan-400/60"
          onClick={() => {
            setIsOpen(true);
            setShowPopup(false);
          }}
        >
          <span className="text-white text-sm">Talk to AI Assistant for help! 🤖</span>
          <div className="absolute -bottom-3 right-5 w-3 h-3 rotate-45 bg-[#1f1f1f] border-b border-r border-cyan-400/50"></div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;