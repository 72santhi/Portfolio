import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen, Briefcase, Award, ChevronRight, User, Brain, Terminal, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouse = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "MediScan",
      description: "AI-powered plant identification system",
      icon: "🌿",
      stats: { accuracy: "95%", species: "80+", users: "1000+" }
    },
    {
      title: "Cancer Detection AI",
      description: "Medical imaging analysis system",
      icon: "🔬",
      stats: { accuracy: "84.5%", speed: "<2s", dataset: "10k+" }
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Interactive Background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255,140,0,0.1) 0%, 
            rgba(255,69,0,0.05) 20%, 
            transparent 40%)`
        }}
      />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-rose-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-rose-900/20 to-purple-900/20" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="group mb-8 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-all">
            <Sparkles size={16} className="text-amber-500" />
            <span className="text-sm font-mono">Student & AI Enthusiast</span>
          </div>
          
          <h1 className="text-8xl font-bold mb-6">
            <span className="block text-white">Santhi</span>
            <span className="block bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Daggubati
            </span>
          </h1>
          
          <p className="text-2xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Crafting the future through AI innovation and creative problem-solving
          </p>
          
          <div className="flex gap-4">
            {[
              { icon: Mail, label: "Connect", href: "mailto:Santhic214@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/Santhi37911" }
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} 
                 href={href}
                 className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-rose-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative px-6 py-3 bg-black rounded-xl flex items-center gap-2">
                  <Icon size={18} className="text-amber-500" />
                  {label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Featured Projects
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mt-4" />
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} 
                   className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-8 bg-black rounded-2xl h-full">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([label, value]) => (
                      <div key={label} className="text-center">
                        <div className="text-xl font-bold text-amber-500">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Skills & Expertise
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mt-4" />
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Python", "TensorFlow", "React", "AWS", 
              "Machine Learning", "Computer Vision", "Web Dev", "Cloud"
            ].map((skill, index) => (
              <div key={skill}
                   className="group relative p-4 bg-black/50 rounded-xl backdrop-blur-sm hover:bg-black/80 transition-all
                            border border-white/5 hover:border-amber-500/50">
                <div className="text-center">
                  <div className="text-2xl mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    {["🤖", "🧠", "💻", "☁️", "📊", "👁️", "🌐", "⚡"][index]}
                  </div>
                  <div className="text-gray-300 group-hover:text-amber-400 transition-colors">{skill}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl blur opacity-20" />
            <div className="relative p-8 bg-black rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-gray-400 mb-8">
                Always open to interesting projects and collaborations
              </p>
              <a href="mailto:Santhic214@gmail.com"
                 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
                Get in Touch
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600">
        © 2024 Santhi Daggubati
      </footer>
    </div>
  );
};

export default Portfolio;