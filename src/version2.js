import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen, Briefcase, Award, ChevronRight, User, Brain, Terminal } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    "AI/ML": ["TensorFlow", "PyTorch", "Neural Networks", "Computer Vision"],
    "Development": ["React", "Node.js", "Python", "Java"],
    "Cloud": ["AWS", "Azure", "DevOps"],
    "Data": ["SQL", "Pandas", "NumPy", "R"]
  };

  const projects = [
    {
      title: "MediScan",
      description: "AI-powered plant identification system",
      stats: [
        { label: "Accuracy", value: "95%" },
        { label: "Species", value: "80+" },
        { label: "Users", value: "1000+" }
      ],
      tech: ["ReactJS", "TensorFlow", "Flask"]
    },
    {
      title: "Cancer Detection AI",
      description: "Medical imaging analysis system",
      stats: [
        { label: "Accuracy", value: "84.5%" },
        { label: "Processing", value: "<2s" },
        { label: "Dataset", value: "10k+" }
      ],
      tech: ["CNN", "Python", "REST API"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(0,0,0,0))]" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="mb-8 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/50 text-cyan-400 backdrop-blur-sm">
            <Terminal size={16} />
            <span className="text-sm font-mono">Welcome to my digital space</span>
          </div>
          
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Santhi Daggubati
          </h1>
          
          <p className="text-2xl text-gray-400 max-w-2xl mb-8">
            AI Engineer crafting intelligent solutions through code and creativity
          </p>
          
          <div className="flex gap-4">
            <a href="mailto:Santhic214@gmail.com" 
               className="group relative px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-xl backdrop-blur-sm transition-all">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <Mail size={18} />
                Connect
              </span>
            </a>
            <a href="https://linkedin.com/in/Santhi37911" 
               className="group relative px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 rounded-xl backdrop-blur-sm transition-all">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} 
                   className="group relative p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm hover:bg-gray-800/70 transition-all">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="relative text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                <div className="relative flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} 
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} 
                   className="group relative p-6 bg-gray-800/30 rounded-2xl backdrop-blur-sm hover:bg-gray-800/50 transition-all">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="relative text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {project.title}
                </h3>
                
                <p className="relative text-gray-400 mb-6">{project.description}</p>
                
                <div className="relative grid grid-cols-3 gap-4 mb-6">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="relative flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700/30 rounded-full text-sm text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Building the future of AI and technology, one project at a time. 
            Get in touch to explore collaboration opportunities.
          </p>
          <a href="mailto:Santhic214@gmail.com" 
             className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
            Start a Conversation
            <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Santhi Daggubati. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;