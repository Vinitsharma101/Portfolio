export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [

  {
    title: "Cryptocurrency Tracker",
    description:
      "Real-time cryptocurrency tracking application with price alerts, portfolio management, and historical data visualization.",
    technologies: ["React", "Chart.js", "Firebase", "CoinGecko API"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        alt: "Crypto dashboard",
      },
    ],
    githubUrl: "https://github.com/Vinitsharma101/KoinXbackend-assignment",
    liveUrl: "https://github.com/Vinitsharma101/KoinXbackend-assignment",
  },
  {
    title: "Language Translator App",
    description:
      "Mobile application that provides real-time translation between multiple languages with speech recognition and text-to-speech capabilities.",
    technologies: ["React Native", "Redux", "Google Translate API", "Firebase"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Language selection",
      },
    ],
    githubUrl: "https://github.com/Vinitsharma101",
    liveUrl: "https://github.com/Vinitsharma101",
  },
  {
  title: "TokenBuddy - Smart Hospital Queue & Appointment System",
  description:
    "TokenBuddy is a modern healthcare web app that streamlines patient appointment booking and hospital management. Users can book appointments with doctors, hospitals can manage their profiles and schedules, and both sides experience a smooth, theme-adaptive interface with animations and responsive design.",
  technologies: [
    "React.js",
    "TailwindCSS",
    "Firebase",
    "Framer Motion",
    "TypeScript",
  ],
  images: [
    {
      url: "assets/tokenbuddy.png",
      alt: "Dashboard view of TokenBuddy showing doctor listings, appointment booking, and hospital management sections",
    },
  ],
  githubUrl: "https://tokenbuddy.in/",
  liveUrl: "https://tokenbuddy.in/",
},
  {
    title: "Location Sharing Web App",
    description:
      "A web application that enables users to share their live location with friends, view friends' positions in real time on an interactive map, and store their last known location for quick access.",
    technologies: [
      "Next.js",
      "Node.js",
      "Socket.io",
      "Leaflet.js",
      "TailwindCSS",
      "MongoDB",
    ],
    images: [
      {
        url: "assets/locateme.png",
        alt: "Map interface showing real-time friends' locations",
      },
    ],
    githubUrl: "https://github.com/Vinitsharma101/realtime-locationsharing",
    liveUrl: "https://locatemee.vercel.app/",
  },
  {
    title: "Project Management Platform",
    description:
      "A collaborative project management web app with real-time task tracking, team chat, and role-based access control. Users can create projects, assign tasks, track progress, and manage notifications efficiently.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "TailwindCSS",
      "Prisma",
      "Socket.io",
    ],
    images: [
      {
        url: "assets/promanager.png",
        alt: "Dashboard view of project management platform with tasks and projects overview",
      },
    ],
    githubUrl: "https://github.com/Vinitsharma101/teamsphere-ProMnager",
    liveUrl: "https://teamsphere.vercel.app/",
  },

];
