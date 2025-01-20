import React, { useState } from 'react';
import { Mail, BookOpen, Briefcase, User, Brain, Phone, Newspaper} from 'lucide-react';
import { FaKaggle, FaMedium, FaGithub, FaLinkedin, FaCertificate, FaAward } from 'react-icons/fa';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const skills = {
    "Machine Learning": ["TensorFlow", "PyTorch", "keras", "Transformers", "Scikit-learn", 
      "NumPy", "Pandas", "Matplotlib", "Seaborn", "Hugging face", "Deep Learning", "Computer Vision", "OpenCV",
      "LLMs", "CNNs", "RNNs", "GNNs", "Optimization Algorithms", "Hyperparameter Tuning"],
    "Mathematics and Statistics": ["Linear Algebra", "Probability", "Statistics", "Calculus"],
    "Programming": ["Python", "Java", "C", "SQL", "R"],
    "Cloud & DevOps": ["AWS ML", "AWS Cloud", "Azure", "Git", "Linux"],
    "Web Development": ["React", "Node.js", "HTML/CSS", "JavaScript", "PHP"],
    "Soft Skills": ["Leadership", "Public Speaking", "Time Management", "Adaptability", "Team work"]
  };

  const projects = [
    {
      title: "Kvasir Dataset Classification and Segmentation",
      description: "After initial using models like VGG16, custom Sequential CNN along with hyperparamter tuning showed poor learning and high loss(45%). Hence developed a classification and segmentation pipeline using Vision Transformers model from Hugging face for classification and Fully Convolutional Networks (FCN) for segmentation. This approach improved accuracy and significantly reduced loss(16%).",
      tech: ["Transformers", "PyTorch", "ViT", "FCN"],
      highlight: "Transformers",
      link: "https://www.kaggle.com/code/santhichowdary/kvasir-dataset-classification-segmentation"
    },

    {
      title: "CT Kidney Scan Dataset Classification",
      description: "Addressed severe data imbalance in CT Kidney Scan dataset classification, using SMOTE to balance the data, resolving overfitting issues and achieving a better learning curve with reduced loss through optimized CNN model.",
      tech: ["TensorFlow", "CNN", "Optimization ALgorithms"],
      highlight: "45% Val Loss",
      link: "https://www.kaggle.com/code/santhichowdary/ct-kidney-scan-classification"
    },

    {
      title: "MediScan",
      description: "A web-based application using InceptionV3, VGG16, and an ensemble of VGG16 & VGG19 models to identify 80 different Indian herbal plants.",
      tech: ["ReactJS", "NodeJS", "Flask", "TensorFlow"],
      highlight: "80+ plant species recognition",
      link: "https://mediscan-indol.vercel.app/mediscan"
    },

    {
      title: "Exploratory Data Analysis on the very Noisy Dataset",
      description:"Performed Exploratory Data Analysis on the numerical dataset having noisy dat like, NaN values, Left skewed and right skewed features, outliers, categorical columns. Plotted Box plots, Violin Plots(KDE + Boxplot), Histograms to visualize the noise in the data. Trained the data using Logistic Regression and RandomForestClassifier along with hyperparameter tuning and acheived ROC/AUC value of 0.99.",
      tech: ["LogisticRegression", "RandomForestClassifier", "HyperParameter Tuning", "Box plot", "KDE plot", "ROC/AUC"],
      highlight: "EDA",
      link: "https://github.com/EGN5442-UF-S2024/mini-project-3-group10-1/tree/main"
    },

    {
      title: "Breast Cancer Prediction",
      description: "Breast Histopathology Images were trained using a Sequential CNN model, achieving validation accuracy of 84.5% and validation loss of 0.365. An API connects the web app to the prediction model.",
      tech: ["CNN", "Python", "API"],
      highlight: "84.5% accuracy"
    },

    {
      title: "CIFAR-100 Classifier",
      description: "The CNN model classified 10,000 testing images into 10 categories, achieving an accuracy of 87% using the CIFAR-100 dataset.",
      tech: ["Deep Learning", "CNN", "Python"],
      highlight: "87% accuracy"
    },

    {
      title: "Plant Disease Prediction",
      description: "A ResNet-based architecture predicted plant diseases with 96% accuracy and validation loss of 0.09 after 25 epochs.",
      tech: ["ResNet", "Deep Learning", "Python"],
      highlight: "96% accuracy"
    },

    {
      title: "Sentiment Analysis on IMDB Reviews",
      description: "Applied transfer learning to classify IMDB movie reviews as positive or negative, achieving a loss of 0.32 and accuracy of 86%.",
      tech: ["Transfer Learning", "NLP", "TensorFlow"],
      highlight: "86% accuracy"
    },

    {
      title: "Digit Identification using MNIST Dataset",
      description: "Built a Sequential CNN model from scratch using Adadelta optimizer and categorical cross-entropy loss, achieving 97% accuracy.",
      tech: ["CNN", "Deep Learning", "Python"],
      highlight: "97% accuracy"
    }

  ];

  const publications = [
    {
      title: 'Human Bias vs. Algorithmic Bias in Decision making(DermaSensor)',
      description: 'This paper explores the cultural, technological, and ethical dimensions of biases in artificial intelligence across applications in medicine, criminal justice, and hiring practices. It highlights the prevalence of overt and covert biases, such as racial disparities in healthcare algorithms and predictive policing tools, emphasizing the detrimental impact of unrepresentative datasets. Through the case study on the DermaSensor(a skin cancer detection AI tool), the paper illustrates how algorithmic and human biases can exacerbate inequities in clinical outcomes. The study underscores the importance of equitable AI frameworks, diverse data curation, and regulatory measures to mitigate biases and promote fairness and inclusivity in AI-driven decision-making.',
      link: "https://github.com/72santhi/Human-vs.-Algorithmic-Influence-in-Decision-Making-Publication"
    }
  ];

  const certifications = [
    {
      title: 'Microsoft Certified: Azure AI Engineer Associate',
      institute: 'Microsoft',
      date: 'Mar 2023 - Mar 2024',
      link: 'https://www.credly.com/badges/7bd37a3c-d516-4cba-9fa4-097452ebd439',
    },
    {
      title: 'Microsoft Certified: Azure Data Scientist Associate',
      institute: 'Microsoft',
      date: 'Mar 2023 - Mar 2024',
      link: 'https://www.credly.com/badges/d4dd57ca-51ec-4406-8ec7-17bd9a1c72f5'
    },
    {
      title: 'Digital Skills Readiness Program: Java FullStack Developer',
      institute: 'WIPRO through TalentNext',
      date: 'Oct 2023 - Present',
      link: 'https://www.linkedin.com/posts/santhi37911_javafullstackdeveloper-wipro-activity-7283253676628946946-57As?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Google Cloud Digital Leader',
      institute: 'Coursera',
      date: 'July 2023 - Present',
      link: 'https://www.linkedin.com/posts/santhi37911_googlecloud-activity-7283252225617862658-7GfU?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Cloud & DevOps Course Completion',
      institute: 'EPAM Systems',
      date: 'June 2023 - Present',
      link: 'https://www.linkedin.com/posts/santhi37911_certified-by-epam-activity-7080466576528867328-BG5P?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Cloud Foundations, Architect, Operations & Developer',
      institute: 'AWS Academy',
      date: 'Dec 2022 - Present',
      link: 'https://www.linkedin.com/posts/santhi37911_cloudfoundations-activity-7080469560658718721-efUs?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'AI For All',
      institute: 'Andrew Ng through Coursera',
      date: 'Apr 2021 - Present',
      link: 'https://www.linkedin.com/posts/santhi37911_certified-by-coursera-activity-6793839125922369536-mQKW?utm_source=share&utm_medium=member_desktop',
    },
  ];  

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4">Hello, I'm Santhi 👋</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm an AI & Machine Learning Engineer passionate about solving complex problems through AI. 
                Currently pursuing my master’s at UF in Applied Data Science, I’m all about diving deep into machine learning and AI while keeping things fun and grounded. 
                Let’s just say I’m serious about AI, but I still find time to laugh at bad predictions!!
                "I love the challenge of teaching machines to think, 
                blending logic with a touch of imagination to create intelligent solutions that speak for themselves."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"><h3 className="font-bold text-3xl mb-1 text-center">Skills</h3></div>
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
          <div className="grid md:grid-cols-1 gap-6 animate-fadeIn">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {project.highlight}
                  </span>
                  {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 underline ml-2 text-sm"
                  >
                  Github
                  </a>)
                 }
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
                  <BookOpen className="text-blue-600" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="relative pl-6 border-l-2 border-purple-200">
                    <h4 className="font-bold">University of Florida</h4>
                    <p className="text-sm text-gray-500">Gainesville, Florida, United States</p>
                    <p className="text-blue-600 font-bold">Master of Science in Applied Data Science</p>
                    <p className="text-sm text-gray-500">Aug 2024 - May 2026</p>
                    <p className="text-sm text-gray-1000">CGPA: 4.0/4.0</p>
                    <p className="text-sm text-gray-500">Favorite Subjects:  Applied Machine Learning I & II, Advanced Mathematics I & II, Programming for Data Science, AI Ethics</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-purple-200">
                    <h4 className="font-bold">Vasireddy Venkatadri Institute of Technology</h4>
                    <p className="text-sm text-gray-500">Andhra Pradesh, India</p>
                    <p className="text-blue-600 font-bold">B.Tech in Computer Science - Artificial Intelligence & Machine Learning</p>
                    <p className="text-sm text-gray-500">Aug 2020 - April 2024</p>
                    <p className="text-sm text-gray-1000">CGPA: 8.6/10.0</p>
                    <p className="text-sm text-gray-500">Favorite Subjects:  Machine Learning, Deep Learning, Artificial Neural Networks, Digital Image Processing, Natural Language Processing, &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  Data Structures & Algorithms, Probability & Statistics</p>
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
                  <p className="text-sm text-gray-500">Remote, India (Sep 2023 - Dec 2023)</p>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Assisted the data collection team by sorting and annotating video datasets from 
                          various sources to support the Lip Syncing project.
                    </li>
                    <li>• Collaborated with the model training team, contributing to the delivery of a 
                          successful OCR application by benchmarking model performance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'certifications':
          return (
            <div className="grid md:grid-cols-1 gap-6 animate-fadeIn">
              {certifications.map((certification, index) => (
                <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-bold mb-2">
                    {certification.title}
                    {index < 2 && <span className="text-gray-600 font-normal"> (Global)</span>}
                    {certification.link && (
                      <a
                        href={certification.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 underline ml-2 text-sm"
                      >
                        View Certificate
                      </a>
                    )}
                  </h3>
                  <p className="text-gray-600">{certification.institute}</p>
                  <p className="text-sm text-gray-500">{certification.date}</p>
                </div>
              ))}
            </div>
          );
            
      case 'publications':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-center mb-4">
              </div>
              {publications.map((publication, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-lg">{publication.title}</h4>
                    {publication.link && (
                      <span className="text-purple-600 underline ml-2 text-sm">
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 underline ml-2 text-sm"
                        >
                          View Publication
                        </a>
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{publication.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
          
             
      case 'achievements':
        return (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-4">Achievements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Acknowledged by <span className="font-semibold">Amazon ML Summer School</span> in 2022 and 2023, and received swags for effective participation.
                </li>
                <li>
                  Secured <span className="font-semibold">III position</span> in Competitive Coding (Spardha Hackathon) conducted at our college.
                </li>
                <li>
                  Received goodies from <span className="font-semibold">Google</span> for active engagement in Women Engineering (WE) Immersion program workshops.
                </li>
              </ul>
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
          <p className="text-xl opacity-90">AI & Machine Learning Engineer</p>
          <div className="flex gap-4 mt-6">
              <a href="mailto:Santhic214@gmail.com" className="flex items-center gap-2">
                <Mail size={18} />
                <span>Email: Santhic214@gmail.com</span>
              </a>
              <a href="tel:+13527766405" className="flex items-center gap-2">
                <Phone size={18} />
                <span>Phone: +1 (352) 776-6405</span>
              </a>
            </div>
          <div className="flex gap-4 mt-6">
            <a href="https://linkedin.com/in/Santhi37911" 
               className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
              <FaLinkedin size={18} />
              LinkedIn
            </a>
            <a href="https://github.com/72santhi" 
               className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
              <FaGithub size={18} />
              Github
            </a>
            <a href="https://www.kaggle.com/santhichowdary" 
               className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
              <FaKaggle size={18} />
              Kaggle
            </a>
            <a href="https://medium.com/@santhic214" 
               className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
              <FaMedium size={18} />
              Medium
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
              { id: 'experience', icon: Briefcase, label: 'Experience' },
              { id: 'certifications', icon: FaCertificate, label: 'Certifications'},
              { id: 'publications', icon: Newspaper, label:'Publications'},
              { id: 'achievements', icon: FaAward, label:'Achievements'}

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