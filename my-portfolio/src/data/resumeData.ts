export interface ResumeData {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    about: string;
    links: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      website?: string;
    };
    skills: {
      category: string;
      items: string[];
    }[];
    experience: {
      title: string;
      company: string;
      location: string;
      startDate: string;
      endDate: string;
      description: string;
      achievements?: string[];
    }[];
    education: {
      degree: string;
      institution: string;
      location: string;
      startDate: string;
      endDate: string;
      description?: string;
    }[];
    projects: {
      title: string;
      description: string;
      tags: string[];
      imageUrl?: string;
      demoUrl?: string;
      githubUrl?: string;
      featured: boolean;
    }[];
    certifications?: {
      title: string;
      issuer: string;
      date: string;
      url?: string;
    }[];
  }
  
  export const resumeData: ResumeData = {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    about: "I am a passionate Full Stack Developer with expertise in React, Node.js, and cloud technologies. With 5+ years of industry experience, I specialize in building scalable web applications and microservices. I enjoy solving complex problems and contributing to open-source projects.",
    links: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      website: "https://johndoe.com"
    },
    skills: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML/CSS"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS", "GraphQL", "RESTful APIs", "Python"]
      },
      {
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
      },
      {
        category: "DevOps & Tools",
        items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "GitHub Actions"]
      }
    ],
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Tech Innovators Inc.",
        location: "New York, NY",
        startDate: "Jan 2022",
        endDate: "Present",
        description: "Lead developer for the company's flagship product, an enterprise-level analytics platform.",
        achievements: [
          "Architected and implemented a microservices-based backend that improved scalability by 200%.",
          "Led a team of 5 developers and mentored 3 junior developers.",
          "Reduced page load times by 60% through code optimization and implementing lazy loading techniques."
        ]
      },
      {
        title: "Full Stack Developer",
        company: "Digital Solutions Ltd.",
        location: "Boston, MA",
        startDate: "Mar 2019",
        endDate: "Dec 2021",
        description: "Developed and maintained multiple client projects using React and Node.js.",
        achievements: [
          "Built a real-time collaborative document editing system using WebSockets.",
          "Implemented CI/CD pipelines that reduced deployment time by 70%.",
          "Optimized database queries resulting in 40% faster response times."
        ]
      },
      {
        title: "Frontend Developer",
        company: "Creative Web Agency",
        location: "San Francisco, CA",
        startDate: "Jun 2017",
        endDate: "Feb 2019",
        description: "Created responsive and accessible web interfaces for various client projects.",
        achievements: [
          "Developed component libraries that were reused across multiple projects.",
          "Implemented responsive designs that worked seamlessly across all device sizes.",
          "Collaborated with UX designers to create intuitive user interfaces."
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        location: "Stanford, CA",
        startDate: "2015",
        endDate: "2017",
        description: "Specialized in Artificial Intelligence and Machine Learning."
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "MIT",
        location: "Cambridge, MA",
        startDate: "2011",
        endDate: "2015",
        description: "Graduated with honors. Member of the Computer Science Club."
      }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "A full-featured online store with payment integration, user authentication, and admin dashboard.",
        tags: ["React", "Node.js", "MongoDB", "Stripe API"],
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        demoUrl: "https://ecommerce-example.com",
        githubUrl: "https://github.com/johndoe/ecommerce",
        featured: true
      },
      {
        title: "Project Management Tool",
        description: "A collaborative task management system with real-time updates and team communication features.",
        tags: ["Next.js", "GraphQL", "PostgreSQL", "WebSockets"],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        demoUrl: "https://pm-tool.example.com",
        githubUrl: "https://github.com/johndoe/pm-tool",
        featured: true
      },
      {
        title: "AI Content Generator",
        description: "A tool that uses machine learning to generate blog posts, social media content, and marketing copy.",
        tags: ["Python", "TensorFlow", "React", "Flask"],
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        demoUrl: "https://ai-writer.example.com",
        githubUrl: "https://github.com/johndoe/ai-writer",
        featured: true
      },
      {
        title: "Fitness Tracking App",
        description: "A mobile-first web app for tracking workouts, nutrition, and personal health metrics.",
        tags: ["React Native", "Firebase", "Express", "D3.js"],
        imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        demoUrl: "https://fit-track.example.com",
        githubUrl: "https://github.com/johndoe/fitness-app",
        featured: false
      },
      {
        title: "Smart Home Dashboard",
        description: "An IoT control panel for managing connected home devices with automation capabilities.",
        tags: ["React", "Node.js", "MQTT", "Socket.io"],
        imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        demoUrl: "https://smart-home.example.com",
        githubUrl: "https://github.com/johndoe/smart-home",
        featured: false
      },
      {
        title: "Weather Forecast App",
        description: "A weather prediction application with interactive maps and detailed forecasts.",
        tags: ["JavaScript", "OpenWeather API", "Leaflet.js", "CSS"],
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        demoUrl: "https://weather-app.example.com",
        githubUrl: "https://github.com/johndoe/weather-app",
        featured: false
      }
    ],
    certifications: [
      {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
      },
      {
        title: "Google Cloud Professional Developer",
        issuer: "Google",
        date: "2022",
        url: "https://cloud.google.com/certification/cloud-developer"
      },
      {
        title: "TensorFlow Developer Certificate",
        issuer: "Google",
        date: "2021",
        url: "https://www.tensorflow.org/certificate"
      }
    ]
  };
  