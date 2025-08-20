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
    title: "Music Streaming Platform",
    description:
      "A full-stack music streaming application with features like playlist creation, artist following, and personalized recommendations.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Music streaming app interface",
      },
      {
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Music player view",
      },
      {
        url: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Playlist management",
      },
    ],
    githubUrl: "https://github.com/Vinitsharma101/MusicPLayer...-MERN-",
    liveUrl: "https://soulifyy.vercel.app/",
  },
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
      {
        url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Price charts",
      },
      {
        url: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        alt: "Portfolio view",
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
      {
        url: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Voice recognition feature",
      },
    ],
    githubUrl: "https://github.com/Vinitsharma101",
    liveUrl: "https://github.com/Vinitsharma101",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A mobile chat application built with React Native, enabling real-time messaging, media sharing, and notifications.",
    technologies: ["React Native", "Firebase", "Socket.io", "Redux", "Expo"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Chat interface with user messages",
      },
      {
        url: "https://imgs.search.brave.com/P9JidKoNfl3ue8pp9Z4lR454EcUl9W4tbXpFCTCHmjc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/LzIwMjMvMDEvaW1h/Z2U5LTIucG5n",
        alt: "Contact list with online users",
      },
    ],
    githubUrl: "https://github.com/Vinitsharma101/Chat-app",
    liveUrl: "https://github.com/Vinitsharma101/Chat-app",
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
        url: "public/assets/locateme.png",
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
        url: "public/assets/promanager.png", 
        alt: "Dashboard view of project management platform with tasks and projects overview",
      },
    ],
    githubUrl: "https://github.com/Vinitsharma101/teamsphere-ProMnager",
    liveUrl: "https://github.com/Vinitsharma101/teamsphere-ProMnager",
  },
];
