import { Mail, Linkedin, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@aichowk.com",
    link: "mailto:support@aichowk.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "AI CHOWK",
    link: "https://www.linkedin.com/company/ai-chowk",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lahore, Pakistan",
    link: "#",
  },
  {
    // ✅ custom Twitter SVG
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-cyan-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.932 
        4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 
        1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 
        13.944 0 0 1 1.671 3.149a4.915 4.915 0 0 
        0 1.523 6.574 4.902 4.902 0 0 
        1-2.229-.616c-.054 2.281 1.581 4.415 
        3.949 4.89a4.935 4.935 0 0 1-2.224.085 
        4.918 4.918 0 0 0 4.59 3.417A9.867 
        9.867 0 0 1 0 19.54a13.94 13.94 0 0 
        0 7.548 2.212c9.057 0 14.01-7.496 
        14.01-13.986 0-.21-.005-.423-.014-.634A10.012 
        10.012 0 0 0 24 4.557z" />
      </svg>
    ),
    title: "Twitter",
    value: "@AI_CHOWK",
    link: "https://x.com/AI_CHOWK",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactInfo.map((info, index) => (
        <a
          key={index}
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-cyan-400"
        >
          {typeof info.icon === "function" ? (
            <info.icon className="h-6 w-6 text-cyan-400" />
          ) : (
            info.icon
          )}
          <span>{info.value}</span>
        </a>
      ))}
    </div>
  );
}
