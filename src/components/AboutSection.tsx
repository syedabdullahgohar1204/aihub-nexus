import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'We deliver targeted AI solutions that address your specific business challenges with surgical precision.'
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'Our AI amplifies human capabilities rather than replacing them, creating synergistic partnerships.'
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'We maintain the highest standards in AI development, ensuring robust and reliable solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Pioneering next-generation AI technologies to keep your business ahead of the curve.'
    }
  ];

  const skills = [
    'AI Chatbots', 'Voice AI Agents', 'Lead Generation', 'Email Automation', 'RAG Agents',
    'Booking Automation', 'Workflow Automation', 'Customer Support', 'Data Analytics',
    'AI Strategy', 'Instagram DM Automation', 'WhatsApp Automation', 'Social Media AI', 'Your Business?'
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // === Scene Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // CSS2D Renderer for labels (skills)
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    mountRef.current.appendChild(labelRenderer.domElement);

    // === Particles ===
    const particleCount = 150;
    const particles: THREE.Mesh[] = [];
    const geometry = new THREE.SphereGeometry(0.3, 8, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0x3498db, transparent: true, opacity: 0.7 });

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material.clone());
      particle.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 100
      );
      scene.add(particle);
      particles.push(particle);
    }

    // === Skills as CSS2DObjects ===
    const skillObjects: CSS2DObject[] = [];
    skills.forEach((skill, i) => {
      const div = document.createElement('div');
      div.textContent = skill;
      div.className = i === skills.length - 1
        ? 'px-4 py-2 rounded-full bg-blue-700 text-white border-blue-800 animate-pulse text-xs font-medium'
        : 'px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium';
      const label = new CSS2DObject(div);
      const radius = 20 + Math.random() * 10;
      const angle = (i / skills.length) * Math.PI * 2;
      label.position.set(Math.cos(angle) * radius, Math.sin(angle) * 10, Math.sin(angle) * radius);
      scene.add(label);
      skillObjects.push(label);
    });

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation
let frame = 0;

// Assign each skill a unique orbit radius and speed
const skillData = skillObjects.map((obj, i) => ({
  obj,
  radius: 15 + Math.random() * 15,
  speed: 0.0025 + Math.random() * 0.003, // moderate speed
  verticalOffset: Math.random() * Math.PI * 2,
  scaleOffset: Math.random() * Math.PI * 2
}));

const animate = () => {
  requestAnimationFrame(animate);
  frame += 0.012; // slightly faster frame increment

  // Smooth particle float
  particles.forEach(p => {
    p.position.y -= 0.03 + Math.sin(frame * 0.6 + p.position.x) * 0.008;
    if (p.position.y < -30) p.position.y = 30;
    p.rotation.x += 0.0012;
    p.rotation.y += 0.0025;
  });

  // 3D rotating skill sphere
  skillData.forEach((data, i) => {
    const { obj, radius, speed, verticalOffset, scaleOffset } = data;

    const angle = frame * 1.0 * speed * 100 + i; // moderate rotation
    const yAngle = Math.sin(frame * 0.4 + verticalOffset) * 9; // smooth float

    obj.position.x = Math.cos(angle) * radius;
    obj.position.z = Math.sin(angle) * radius;
    obj.position.y = yAngle;

    // Subtle scale pulse
    const scale = 1 + 0.18 * Math.sin(frame * 2 + scaleOffset);
    obj.element.style.transform = `scale(${scale})`;
    obj.element.style.transition = 'transform 0.08s ease-out';
  });

  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
};
animate();


    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      mountRef.current?.removeChild(labelRenderer.domElement);
    };
  }, []);

  return (
    <section id="about" className="relative py-24 overflow-visible bg-gradient-to-b from-background to-card">
      <div ref={mountRef} className="absolute inset-0"></div>

      {/* Header */}
      <div className="relative z-20 text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 hero-gradient">
          About <span className="glow-text">AI CHOWK</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Transforming businesses with AI-powered automation. Save time, optimize operations, and grow faster with solutions designed for every industry.
        </p>
      </div>

      {/* Add spacing here */}
      <div className="my-60"></div> {/* This adds ~3–4 lines of vertical spacing */}

      {/* Value Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-4 gap-6">
        {values.map((v, idx) => (
          <div
            key={idx}
            className="card-3d p-6 hover:scale-105 hover:shadow-glow transition-all duration-500 relative"
          >
            <div className="flex items-center gap-4 mb-3">
              <v.icon className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">{v.title}</h3>
            </div>
            <p className="text-muted-foreground">{v.description}</p>
            <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-accent/20 blur-xl float-animation"></div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 1s ease forwards; }
        .float-animation { animation: float 3s ease-in-out infinite; }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
