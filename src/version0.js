import React, { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "MediScan",
      description: "AI-powered plant identification system using InceptionV3 and VGG16 models.",
      tech: ["React", "TensorFlow", "Flask"]
    },
    {
      title: "Cancer Detection AI",
      description: "Deep learning model for breast cancer detection with 84.5% accuracy.",
      tech: ["Python", "CNN", "API"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Santhi Daggubati</h1>
          <p className="text-xl text-gray-600 mb-6">AI Engineer & Student</p>
          <div className="flex gap-4">
            <a href="mailto:Santhic214@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/Santhi37911" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Selected Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Education</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-medium">University of Florida</h3>
              <p className="text-gray-600">MS in Applied Data Science</p>
              <p className="text-gray-500 text-sm">2024 - 2026</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-medium">Vasireddy Venkatadri Institute of Technology</h3>
              <p className="text-gray-600">B.Tech in Computer Science</p>
              <p className="text-gray-500 text-sm">2020 - 2024</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Python", "TensorFlow", "PyTorch", "React", "AWS", "Machine Learning"].map(skill => (
              <div key={skill} className="p-4 bg-gray-50 rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-600">
          © 2024 Santhi Daggubati
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;