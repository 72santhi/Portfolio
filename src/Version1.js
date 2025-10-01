import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen, Briefcase, Award, ChevronRight, User, Brain } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const skills = {
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Computer Vision"],
    "Web Development": ["React", "Node.js", "HTML/CSS", "JavaScript", "PHP"],
    "Cloud & DevOps": ["AWS", "Azure", "Git", "Linux"],
    "Programming": ["Python", "Java", "C", "SQL", "R"]
  };

  const projects = [
    {
      title: "MediScan",
      description: "AI-powered Indian herbal plant identification system",
      tech: ["ReactJS", "TensorFlow", "Flask"],
      highlight: "80+ plant species recognition"
    },
    {
      title: "Cancer Detection AI",
      description: "Deep learning model for breast cancer detection",
      tech: ["CNN", "Python", "API"],
      highlight: "84.5% accuracy"
    },
    {
      title: "CIFAR-100 Classifier",
      description: "Advanced image classification system",
      tech: ["Deep Learning", "CNN", "Python"],
      highlight: "87% accuracy"
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4">Hello, I'm Santhi 👋</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm an AI & Machine Learning Engineer passionate about solving complex problems through technology. 
                Currently pursuing my MS in Applied Data Science at the University of Florida, I specialize in 
                developing AI solutions that make a real impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {project.highlight}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'experience':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-purple-600" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="relative pl-6 border-l-2 border-purple-200">
                  <h4 className="font-bold">University of Florida</h4>
                  <p className="text-purple-600">MS in Applied Data Science</p>
                  <p className="text-sm text-gray-500">2024 - 2026</p>
                </div>
                <div className="relative pl-6 border-l-2 border-purple-200">
                  <h4 className="font-bold">Vasireddy Venkatadri Institute of Technology</h4>
                  <p className="text-purple-600">B.Tech in Computer Science</p>
                  <p className="text-sm text-gray-500">2020 - 2024</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-600" />
                <h3 className="text-xl font-bold">Work Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-200">
                  <h4 className="font-bold">AI Intern</h4>
                  <p className="text-blue-600">Cynapto Technologies</p>
                  <p className="text-sm text-gray-500">Sep 2023 - Dec 2023</p>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Developed OCR applications</li>
                    <li>• Led data collection for Lip Syncing project</li>
                  </ul>
                </div>
                <div className="relative pl-6 border-l-2 border-blue-200">
                  <h4 className="font-bold">ML Virtual Intern</h4>
                  <p className="text-blue-600">AWS Academy</p>
                  <p className="text-sm text-gray-500">Mar 2022 - May 2022</p>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Built ML models with 88.2% accuracy</li>
                    <li>• Developed AWS-powered chatbot</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold mb-4">Santhi Daggubati</h1>
          <p className="text-xl opacity-90">AI Engineer & Data Scientist</p>
          <div className="flex gap-4 mt-6">
            <a href="mailto:Santhic214@gmail.com" 
               className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
              <Mail size={18} />
              Email
            </a>
            <a href="https://linkedin.com/in/Santhi37911" 
               className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'about', icon: User, label: 'About' },
              { id: 'projects', icon: Brain, label: 'Projects' },
              { id: 'experience', icon: Briefcase, label: 'Experience' }
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
                  activeSection === id 
                    ? 'border-purple-500 text-purple-500' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <p className="text-gray-400 text-center">
            © 2024 Santhi Daggubati. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;