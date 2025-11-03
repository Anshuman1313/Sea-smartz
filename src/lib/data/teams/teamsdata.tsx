import { DIYTeamsData } from '@/lib/types';
import { 
  Code, Layers, Server, Smartphone, Database, Blocks,
  Zap, Globe, Terminal, FileCode
} from 'lucide-react';

export const diyTeamsData: DIYTeamsData = {
  // ============================================
  // FRONTEND DEVELOPERS
  // ============================================
  frontend: {
    slug: 'frontend',
    hero: {
      title: "Frontend Developers",
      tagline: "React, Angular, Vue experts for your team",
      description: "Hire skilled frontend developers who bring your designs to life with modern frameworks and best practices. Build fast, responsive, and user-friendly interfaces.",
      ctaText: "Hire Frontend Developers",
      ctaHref: "/contact",
      backgroundType: 'gradient',
    },
    teams: {
      heading: "Frontend Development Expertise",
      subheading: "Skilled developers ready to join your team",
      teams: [
        {
          icon: <Code className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "React Developers",
          description: "Experts in building scalable React applications with hooks, context, and modern state management.",
          skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind"],
          href: "/contact",
        },
        {
          icon: <Layers className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Vue.js Developers",
          description: "Specialists in Vue 3, Composition API, Pinia, and building progressive web applications.",
          skills: ["Vue 3", "Nuxt.js", "Pinia", "Vuetify", "TypeScript"],
          href: "/contact",
        },
        {
          icon: <Globe className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Angular Developers",
          description: "Enterprise-grade Angular developers with RxJS, NgRx, and component architecture expertise.",
          skills: ["Angular", "RxJS", "NgRx", "TypeScript", "Material"],
          href: "/contact",
        },
      ],
    },
    cta: {
      heading: "Ready to Hire Frontend Developers?",
      subheading: "Get skilled frontend developers who can start immediately and integrate seamlessly with your team.",
      primaryCTA: {
        text: "Contact Us",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Learn More About Us",
        href: "/about",
      },
    },
  },

  // ============================================
  // BACKEND DEVELOPERS
  // ============================================
  backend: {
    slug: 'backend',
    hero: {
      title: "Backend Developers",
      tagline: "Node.js, .NET, Java & more specialists",
      description: "Hire experienced backend developers who build robust, scalable, and secure server-side applications with modern technologies and best practices.",
      ctaText: "Hire Backend Developers",
      ctaHref: "/contact",
      backgroundType: 'dots',
    },
    teams: {
      heading: "Backend Development Expertise",
      subheading: "Server-side specialists for your projects",
      teams: [
        {
          icon: <Server className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Node.js Developers",
          description: "Build fast, scalable APIs and microservices with Express, NestJS, and event-driven architecture.",
          skills: ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL"],
          href: "/contact",
        },
        {
          icon: <Database className="w-10 h-10 text-[var(--chart-3)]" />,
          title: ".NET Developers",
          description: "Enterprise-grade .NET Core developers with expertise in C#, Entity Framework, and Azure.",
          skills: [".NET Core", "C#", "Entity Framework", "SQL Server", "Azure"],
          href: "/contact",
        },
        {
          icon: <Terminal className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Python Developers",
          description: "Python experts for APIs, data processing, automation, and machine learning applications.",
          skills: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis"],
          href: "/contact",
        },
      ],
    },
    cta: {
      heading: "Ready to Hire Backend Developers?",
      subheading: "Get experienced backend developers who build secure, scalable systems that power your applications.",
      primaryCTA: {
        text: "Contact Us",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Learn More About Us",
        href: "/about",
      },
    },
  },

  // ============================================
  // FULL STACK DEVELOPERS
  // ============================================
  fullstack: {
    slug: 'fullstack',
    hero: {
      title: "Full Stack Developers",
      tagline: "End-to-end development expertise",
      description: "Hire versatile full stack developers who handle both frontend and backend, delivering complete solutions from database to user interface.",
      ctaText: "Hire Full Stack Developers",
      ctaHref: "/contact",
      backgroundType: 'grid',
    },
    teams: {
      heading: "Full Stack Development Expertise",
      subheading: "Complete solution developers for your team",
      teams: [
        {
          icon: <Blocks className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "MERN Stack Developers",
          description: "Full stack developers specializing in MongoDB, Express, React, and Node.js ecosystem.",
          skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
          href: "/contact",
        },
        {
          icon: <FileCode className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Next.js Full Stack",
          description: "Modern full stack developers with Next.js, server components, and API routes expertise.",
          skills: ["Next.js", "React", "Prisma", "PostgreSQL", "tRPC"],
          href: "/contact",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: ".NET Full Stack",
          description: "Enterprise full stack developers with .NET Core, React, and SQL Server experience.",
          skills: [".NET Core", "React", "C#", "SQL Server", "Azure"],
          href: "/contact",
        },
      ],
    },
    cta: {
      heading: "Ready to Hire Full Stack Developers?",
      subheading: "Get versatile developers who deliver complete solutions from database design to polished user interfaces.",
      primaryCTA: {
        text: "Contact Us",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Learn More About Us",
        href: "/about",
      },
    },
  },

  // ============================================
  // MOBILE APP DEVELOPERS
  // ============================================
  mobile: {
    slug: 'mobile',
    hero: {
      title: "Mobile App Developers",
      tagline: "Native & cross-platform specialists",
      description: "Hire mobile developers who create stunning iOS and Android applications with native performance and seamless user experiences.",
      ctaText: "Hire Mobile Developers",
      ctaHref: "/contact",
      backgroundType: 'radial',
    },
    teams: {
      heading: "Mobile Development Expertise",
      subheading: "iOS and Android specialists ready to build",
      teams: [
        {
          icon: <Smartphone className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "React Native Developers",
          description: "Cross-platform mobile developers building apps for iOS and Android with React Native.",
          skills: ["React Native", "TypeScript", "Expo", "Redux", "Firebase"],
          href: "/contact",
        },
        {
          icon: <Code className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Flutter Developers",
          description: "Dart and Flutter specialists creating beautiful, natively compiled mobile applications.",
          skills: ["Flutter", "Dart", "Firebase", "Bloc", "GetX"],
          href: "/contact",
        },
        {
          icon: <Layers className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Native iOS/Android",
          description: "Native mobile developers with Swift, Kotlin, and platform-specific expertise.",
          skills: ["Swift", "Kotlin", "SwiftUI", "Jetpack Compose", "UIKit"],
          href: "/contact",
        },
      ],
    },
    cta: {
      heading: "Ready to Hire Mobile Developers?",
      subheading: "Get expert mobile developers who create engaging apps that users love on both iOS and Android.",
      primaryCTA: {
        text: "Contact Us",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Learn More About Us",
        href: "/about",
      },
    },
  },
};

export const { 
  frontend: frontendData,
  backend: backendData,
  fullstack: fullstackData,
  mobile: mobileData
} = diyTeamsData;
