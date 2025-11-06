import { TechnologiesData } from '@/lib/types';
import { 
  Code, Zap, Package, Users, Server, Cog, Layers, Database, 
  Cloud, Shield, Gauge, Blocks, Workflow, Cpu, Globe,
  FileCode, Repeat, GitBranch, Box, Puzzle, Binary
} from 'lucide-react';

export const technologiesData: TechnologiesData = {
  // ============================================
  // REACT.JS
  // ============================================
  react: {
    slug: 'react',
    hero: {
      title: "React.js",
      tagline: "Build interactive UIs with ease",
      description: "A powerful JavaScript library for building dynamic, component-based user interfaces. Create fast, scalable web applications with React's efficient rendering and rich ecosystem.",
      badges: ["Component-Based", "Virtual DOM", "Large Ecosystem"],
      ctaText: "Start Your React Project",
      ctaHref: "/contact",
      backgroundType: 'gradient',
    },
    features: {
      heading: "Why Choose React?",
      subheading: "Powerful features for modern web development",
      features: [
        {
          icon: <Code className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Component Reusability",
          description: "Build encapsulated components that manage their own state, then compose them to make complex UIs efficiently and maintainably.",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Virtual DOM Performance",
          description: "React's efficient update and rendering system ensures blazing-fast performance by minimizing direct DOM manipulation.",
        },
        {
          icon: <Package className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Rich Ecosystem",
          description: "Access thousands of libraries, tools, and resources from the vibrant React community including Redux, React Router, and more.",
        },
        {
          icon: <Users className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Strong Community",
          description: "Backed by Meta and used by millions of developers worldwide, ensuring long-term support, continuous innovation, and abundant resources.",
        },
        {
          icon: <Blocks className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "JSX Syntax",
          description: "Write markup within JavaScript using JSX, making your code more intuitive and easier to understand and maintain.",
        },
        {
          icon: <Workflow className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Unidirectional Data Flow",
          description: "Predictable state management with one-way data binding makes debugging easier and code more maintainable.",
        },
      ],
    },
    specs: {
      heading: "Technical Specifications",
      subheading: "What makes React powerful under the hood",
      specs: [
        { label: "Initial Release", value: "2013", description: "Created by Jordan Walke at Facebook" },
        { label: "Current Version", value: "19.x", description: "With Concurrent Rendering" },
        { label: "License", value: "MIT", description: "Open source and free to use" },
        { label: "Package Size", value: "~6KB", description: "Gzipped production build" },
        { label: "Browser Support", value: "ES5+", description: "IE11+ with polyfills" },
        { label: "Rendering", value: "Client & Server", description: "SSR support via Next.js/Gatsby" },
      ],
      additionalInfo: "React uses a declarative programming paradigm and supports both functional and class-based components. With React 19, features like automatic batching, transitions, and suspense make it even more powerful.",
    },
    useCases: {
      heading: "What You Can Build with React",
      subheading: "From simple websites to complex applications",
      useCases: [
        {
          image: "/images/placeholder-ecommerce.jpg",
          title: "E-commerce Platforms",
          description: "Build dynamic shopping experiences with real-time inventory, cart management, seamless checkout flows, and personalized product recommendations.",
          techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        },
        {
          image: "/images/placeholder-dashboard.jpg",
          title: "Admin Dashboards",
          description: "Create powerful data visualization tools and management interfaces with real-time updates, analytics, and comprehensive reporting features.",
          techStack: ["React", "TypeScript", "Redux", "Chart.js"],
        },
        {
          image: "/images/placeholder-social.jpg",
          title: "Social Media Apps",
          description: "Develop engaging social platforms with feeds, notifications, real-time chat, and interactive features that keep users connected and engaged.",
          techStack: ["React", "Firebase", "Tailwind", "Socket.io"],
        },
      ],
    },
    cta: {
      heading: "Ready to Build with React?",
      subheading: "Let's create something amazing together. Our expert team is ready to bring your React project to life with cutting-edge solutions.",
      primaryCTA: {
        text: "Start Your Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Case Studies",
        href: "/contact",
      },
      stats: [
        { label: "Projects Delivered", value: "50+" },
        { label: "Years Experience", value: "8+" },
        { label: "Client Satisfaction", value: "98%" },
      ],
    },
  },

  // ============================================
  // NEXT.JS
  // ============================================
  nextjs: {
    slug: 'nextjs',
    hero: {
      title: "Next.js",
      tagline: "The React framework for production",
      description: "Build full-stack web applications with Next.js. Get server-side rendering, static generation, and API routes out of the box for optimal performance and SEO.",
      badges: ["SSR", "File-based Routing", "SEO-Friendly"],
      ctaText: "Start Your Next.js Project",
      ctaHref: "/contact",
      backgroundType: 'dots',
    },
    features: {
      heading: "Why Choose Next.js?",
      subheading: "Enterprise-ready framework with powerful features",
      features: [
        {
          icon: <Server className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Server-Side Rendering",
          description: "Improve SEO and initial page load with automatic server-side rendering and static site generation for lightning-fast experiences.",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Optimized Performance",
          description: "Automatic code splitting, image optimization, lazy loading, and font optimization for exceptional user experiences.",
        },
        {
          icon: <Code className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "API Routes",
          description: "Build full-stack applications with built-in API routes without needing a separate backend server or infrastructure.",
        },
        {
          icon: <Cog className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Easy Deployment",
          description: "Deploy to Vercel with zero configuration or any hosting platform with Docker support and edge network capabilities.",
        },
        {
          icon: <Workflow className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "App Router",
          description: "Modern routing with layouts, loading states, and error handling built-in for better developer experience.",
        },
        {
          icon: <Gauge className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Incremental Static Regeneration",
          description: "Update static pages after deployment without rebuilding the entire site for dynamic content needs.",
        },
      ],
    },
    specs: {
      heading: "Technical Specifications",
      subheading: "Enterprise-grade features for production applications",
      specs: [
        { label: "Initial Release", value: "2016", description: "Created by Vercel (formerly Zeit)" },
        { label: "Current Version", value: "14.x", description: "With App Router & Server Actions" },
        { label: "License", value: "MIT", description: "Open source framework" },
        { label: "Build Time", value: "~30s", description: "For medium-sized apps" },
        { label: "Rendering Modes", value: "4 Types", description: "SSR, SSG, ISR, CSR" },
        { label: "Edge Runtime", value: "Supported", description: "Global edge network deployment" },
      ],
      additionalInfo: "Next.js 14 introduces powerful features like Server Components, Server Actions, and Turbopack for faster builds. It seamlessly integrates with Vercel's edge network for global performance.",
    },
    useCases: {
      heading: "What You Can Build with Next.js",
      subheading: "Perfect for modern web applications",
      useCases: [
        {
          image: "/images/placeholder-saas.jpg",
          title: "SaaS Platforms",
          description: "Build scalable software-as-a-service applications with authentication, payments, multi-tenancy, and comprehensive dashboard features.",
          techStack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
        },
        {
          image: "/images/placeholder-blog.jpg",
          title: "Content-Heavy Sites",
          description: "Create blogs, documentation sites, and marketing pages with excellent SEO, fast page loads, and markdown support.",
          techStack: ["Next.js", "MDX", "Tailwind", "Contentful"],
        },
        {
          image: "/images/placeholder-marketplace.jpg",
          title: "Marketplaces",
          description: "Develop multi-vendor marketplaces with product listings, advanced search, filtering, and secure checkout systems.",
          techStack: ["Next.js", "Stripe", "MongoDB", "Algolia"],
        },
      ],
    },
    cta: {
      heading: "Ready to Build with Next.js?",
      subheading: "Transform your ideas into production-ready applications with our Next.js expertise and proven track record.",
      primaryCTA: {
        text: "Start Your Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Case Studies",
        href: "/contact",
      },
      stats: [
        { label: "Next.js Projects", value: "40+" },
        { label: "Years Experience", value: "6+" },
        { label: "Performance Boost", value: "3x" },
      ],
    },
  },

  // ============================================
  // VUE.JS
  // ============================================
  vue: {
    slug: 'vue',
    hero: {
      title: "Vue.js",
      tagline: "The progressive JavaScript framework",
      description: "An approachable, performant and versatile framework for building web user interfaces. Vue is designed to be incrementally adoptable and easy to integrate with existing projects.",
      badges: ["Progressive", "Reactive", "Approachable"],
      ctaText: "Start Your Vue Project",
      ctaHref: "/contact",
      backgroundType: 'grid',
    },
    features: {
      heading: "Why Choose Vue?",
      subheading: "Simple yet powerful framework for modern apps",
      features: [
        {
          icon: <Layers className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Progressive Framework",
          description: "Incrementally adoptable architecture that scales between a library and a full-featured framework with official routing and state management.",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Reactive Data Binding",
          description: "Automatic UI updates with Vue's reactive and composable data model powered by a dependency-tracking observation system.",
        },
        {
          icon: <FileCode className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Single-File Components",
          description: "Organize your code with SFCs that contain template, script, and styles in one file for better maintainability.",
        },
        {
          icon: <Package className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Easy to Learn",
          description: "Gentle learning curve with excellent documentation makes Vue accessible for beginners while powerful for experts.",
        },
        {
          icon: <Cpu className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Composition API",
          description: "Flexible composition API for organizing component logic and reusing code across components efficiently.",
        },
        {
          icon: <Workflow className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Official Tooling",
          description: "Vue CLI, Vite, and DevTools provide a complete development experience with hot reload and time-travel debugging.",
        },
      ],
    },
    specs: {
      heading: "Technical Specifications",
      subheading: "What makes Vue powerful and flexible",
      specs: [
        { label: "Initial Release", value: "2014", description: "Created by Evan You" },
        { label: "Current Version", value: "3.x", description: "With Composition API" },
        { label: "License", value: "MIT", description: "Open source framework" },
        { label: "Package Size", value: "~16KB", description: "Gzipped runtime" },
        { label: "Browser Support", value: "Modern", description: "ES2015+ required" },
        { label: "TypeScript", value: "Full Support", description: "Written in TypeScript" },
      ],
      additionalInfo: "Vue 3 brings significant performance improvements, better TypeScript support, and the Composition API for more flexible code organization. It maintains backward compatibility while introducing cutting-edge features.",
    },
    useCases: {
      heading: "What You Can Build with Vue",
      subheading: "Versatile solutions for any project size",
      useCases: [
        {
          image: "/images/placeholder-spa.jpg",
          title: "Single Page Applications",
          description: "Create smooth, app-like experiences with Vue Router and Pinia for state management, perfect for complex user interfaces.",
          techStack: ["Vue 3", "Pinia", "Vue Router", "Vite"],
        },
        {
          image: "/images/placeholder-progressive.jpg",
          title: "Progressive Web Apps",
          description: "Build offline-capable PWAs that deliver native app experiences in the browser with service workers and caching.",
          techStack: ["Vue", "Workbox", "PWA", "IndexedDB"],
        },
        {
          image: "/images/placeholder-enterprise.jpg",
          title: "Enterprise Applications",
          description: "Develop large-scale business applications with Vue's robust ecosystem, TypeScript support, and component libraries.",
          techStack: ["Vue 3", "TypeScript", "Element Plus", "Nuxt"],
        },
      ],
    },
    cta: {
      heading: "Ready to Build with Vue?",
      subheading: "Experience the joy of progressive development. Let's build something beautiful and performant together.",
      primaryCTA: {
        text: "Start Your Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Case Studies",
        href: "/contact",
      },
      stats: [
        { label: "Vue Projects", value: "35+" },
        { label: "Years Experience", value: "7+" },
        { label: "Developer Satisfaction", value: "95%" },
      ],
    },
  },

  // ============================================
  // NODE.JS
  // ============================================
  nodejs: {
    slug: 'nodejs',
    hero: {
      title: "Node.js",
      tagline: "JavaScript runtime built on Chrome's V8 engine",
      description: "Build scalable network applications with Node.js. Execute JavaScript server-side and create fast, data-intensive real-time applications that run across distributed devices.",
      badges: ["Event-Driven", "Non-Blocking I/O", "Scalable"],
      ctaText: "Start Your Node.js Project",
      ctaHref: "/contact",
      backgroundType: 'radial',
    },
    features: {
      heading: "Why Choose Node.js?",
      subheading: "Powerful backend for modern applications",
      features: [
        {
          icon: <Server className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Event-Driven Architecture",
          description: "Handle thousands of concurrent connections efficiently with non-blocking I/O operations and asynchronous event-driven architecture.",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "High Performance",
          description: "Built on Chrome's V8 JavaScript engine for exceptional speed, efficient memory usage, and rapid execution of code.",
        },
        {
          icon: <Package className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "NPM Ecosystem",
          description: "Access over 2 million packages in the world's largest software registry for any functionality you need.",
        },
        {
          icon: <Code className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Full-Stack JavaScript",
          description: "Use the same language for both frontend and backend development, streamlining your development process.",
        },
        {
          icon: <Globe className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Cross-Platform",
          description: "Run Node.js applications on Windows, Linux, macOS, and deploy to any cloud platform or containerized environment.",
        },
        {
          icon: <Repeat className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Real-Time Support",
          description: "Perfect for WebSocket, real-time chat, live dashboards, and collaborative applications with minimal latency.",
        },
      ],
    },
    specs: {
      heading: "Technical Specifications",
      subheading: "Built for performance and scalability",
      specs: [
        { label: "Initial Release", value: "2009", description: "Created by Ryan Dahl" },
        { label: "Current Version", value: "20.x LTS", description: "Long-term support release" },
        { label: "License", value: "MIT", description: "Open source runtime" },
        { label: "Concurrency", value: "Event Loop", description: "Single-threaded async model" },
        { label: "Package Manager", value: "NPM/Yarn", description: "2M+ packages available" },
        { label: "Memory Usage", value: "Low", description: "Efficient memory footprint" },
      ],
      additionalInfo: "Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. It's perfect for data-intensive real-time applications that run across distributed devices.",
    },
    useCases: {
      heading: "What You Can Build with Node.js",
      subheading: "From APIs to real-time applications",
      useCases: [
        {
          image: "/images/placeholder-api.jpg",
          title: "RESTful APIs",
          description: "Build fast, scalable APIs with Express.js, Fastify, or Nest.js frameworks with middleware support and authentication.",
          techStack: ["Node.js", "Express", "MongoDB", "JWT"],
        },
        {
          image: "/images/placeholder-realtime.jpg",
          title: "Real-Time Applications",
          description: "Create chat apps, live dashboards, collaborative tools, and gaming servers with WebSocket support and Socket.io.",
          techStack: ["Node.js", "Socket.io", "Redis", "WebSocket"],
        },
        {
          image: "/images/placeholder-microservices.jpg",
          title: "Microservices Architecture",
          description: "Develop distributed systems with lightweight, independently deployable services that communicate via APIs or message queues.",
          techStack: ["Node.js", "Docker", "Kubernetes", "RabbitMQ"],
        },
      ],
    },
    cta: {
      heading: "Ready to Build with Node.js?",
      subheading: "Power your backend with JavaScript. Let's create scalable, high-performance applications that handle millions of requests.",
      primaryCTA: {
        text: "Start Your Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Case Studies",
        href: "/contact",
      },
      stats: [
        { label: "APIs Built", value: "60+" },
        { label: "Years Experience", value: "8+" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
  },

  // ============================================
  // .NET CORE
  // ============================================
  dotnet: {
    slug: 'dotnet',
    hero: {
      title: ".NET Core",
      tagline: "Cross-platform framework for modern apps",
      description: "Build high-performance applications with .NET Core. Create web apps, APIs, microservices, and cloud-native solutions using this free, open-source, cross-platform framework from Microsoft.",
      badges: ["Cross-Platform", "High Performance", "Enterprise-Ready"],
      ctaText: "Start Your .NET Project",
      ctaHref: "/contact",
      backgroundType: 'mesh',
    },
    features: {
      heading: "Why Choose .NET Core?",
      subheading: "Enterprise-grade framework for mission-critical applications",
      features: [
        {
          icon: <Cloud className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Cross-Platform",
          description: "Run on Windows, Linux, and macOS with the same codebase. Deploy to any cloud provider or on-premises infrastructure.",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "High Performance",
          description: "One of the fastest web frameworks available, optimized for cloud-native applications with minimal memory footprint.",
        },
        {
          icon: <Shield className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Built-in Security",
          description: "Comprehensive security features including authentication, authorization, data protection, and automatic defense against common attacks.",
        },
        {
          icon: <Database className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Entity Framework Core",
          description: "Modern ORM for seamless database integration with LINQ support, migrations, and support for multiple database providers.",
        },
        {
          icon: <Box className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Containerization Ready",
          description: "Built-in support for Docker and Kubernetes with optimized images and deployment patterns for microservices.",
        },
        {
          icon: <GitBranch className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Dependency Injection",
          description: "Built-in DI container and comprehensive middleware pipeline for clean, testable, and maintainable code architecture.",
        },
      ],
    },
    specs: {
      heading: "Technical Specifications",
      subheading: "Enterprise power with modern development practices",
      specs: [
        { label: "Initial Release", value: "2016", description: "Microsoft's modern framework" },
        { label: "Current Version", value: "8.x", description: "With minimal APIs & AOT" },
        { label: "License", value: "MIT", description: "Open source framework" },
        { label: "Performance", value: "Top Tier", description: "Benchmarks leader" },
        { label: "Language Support", value: "C#, F#, VB", description: "Multiple languages" },
        { label: "Cloud Integration", value: "Azure Native", description: "First-class Azure support" },
      ],
      additionalInfo: ".NET 8 introduces Native AOT compilation, improved performance, and enhanced cloud-native capabilities. It provides a unified platform for building any type of application with world-class performance.",
    },
    useCases: {
      heading: "What You Can Build with .NET Core",
      subheading: "Enterprise solutions with proven reliability",
      useCases: [
        {
          image: "/images/placeholder-enterprise-web.jpg",
          title: "Enterprise Web Applications",
          description: "Build secure, scalable web applications for large organizations with complex requirements, authentication, and role-based access.",
          techStack: [".NET 8", "SQL Server", "Azure", "Identity"],
        },
        {
          image: "/images/placeholder-api-gateway.jpg",
          title: "API Gateways & Microservices",
          description: "Create robust API layers with built-in authentication, rate limiting, monitoring, and service-to-service communication.",
          techStack: [".NET Core", "Ocelot", "RabbitMQ", "Docker"],
        },
        {
          image: "/images/placeholder-cloud-native.jpg",
          title: "Cloud-Native Applications",
          description: "Develop containerized applications optimized for Azure, AWS, or Google Cloud with automatic scaling and resilience.",
          techStack: [".NET Core", "Docker", "Kubernetes", "Redis"],
        },
      ],
    },
    cta: {
      heading: "Ready to Build with .NET Core?",
      subheading: "Enterprise power meets modern development. Let's build robust, scalable solutions that stand the test of time.",
      primaryCTA: {
        text: "Start Your Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Case Studies",
        href: "/contact",
      },
      stats: [
        { label: "Enterprise Projects", value: "45+" },
        { label: "Years Experience", value: "10+" },
        { label: "System Reliability", value: "99.99%" },
      ],
    },
  },

  // ============================================
  // PYTHON
  // ============================================
  python: {
    slug: 'python',
    hero: {
      title: "Python",
      tagline: "Versatile language for any application",
      description: "Build anything with Python. From web applications and APIs to data science, machine learning, automation, and scientific computing, Python's simplicity and power make it the perfect choice.",
      badges: ["Versatile", "Easy to Learn", "Powerful Libraries"],
      ctaText: "Start Your Python Project",
      ctaHref: "/contact",
      backgroundType: 'gradient',
    },
    features: {
      heading: "Why Choose Python?",
      subheading: "The language that powers innovation worldwide",
      features: [
        {
          icon: <Code className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Simple & Readable Syntax",
          description: "Write clean, readable code with Python's intuitive syntax that emphasizes readability and reduces the cost of program maintenance.",
        },
        {
          icon: <Package className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Rich Libraries",
          description: "Access vast libraries for web development (Django, Flask), data science (NumPy, Pandas), ML (TensorFlow, PyTorch), and more.",
        },
        {
          icon: <Database className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Data Science Ready",
          description: "Built-in support for data analysis, scientific computing, and visualization with powerful libraries like NumPy, Pandas, and Matplotlib.",
        },
        {
          icon: <Users className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Large Community",
          description: "Benefit from extensive documentation, tutorials, Stack Overflow answers, and community support from millions of developers.",
        },
        {
          icon: <Puzzle className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Cross-Platform",
          description: "Write once, run anywhere. Python works seamlessly on Windows, macOS, Linux, and can be deployed to any cloud platform.",
        },
        {
          icon: <Binary className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "AI & Machine Learning",
          description: "Industry standard for AI/ML with frameworks like TensorFlow, PyTorch, scikit-learn, and natural language processing tools.",
        },
      ],
    },
    specs: {
      heading: "Technical Specifications",
      subheading: "Powerful, flexible, and battle-tested",
      specs: [
        { label: "Initial Release", value: "1991", description: "Created by Guido van Rossum" },
        { label: "Current Version", value: "3.12.x", description: "Latest stable release" },
        { label: "License", value: "PSF", description: "Python Software Foundation" },
        { label: "Typing", value: "Dynamic", description: "With optional type hints" },
        { label: "Paradigm", value: "Multi", description: "OOP, Functional, Procedural" },
        { label: "Package Index", value: "PyPI", description: "400K+ packages" },
      ],
      additionalInfo: "Python 3.12 brings performance improvements, better error messages, and new syntax features. Its 'batteries included' philosophy provides a comprehensive standard library for almost any task.",
    },
    useCases: {
      heading: "What You Can Build with Python",
      subheading: "From web apps to AI solutions",
      useCases: [
        {
          image: "/images/placeholder-web-app.jpg",
          title: "Web Applications",
          description: "Build robust, scalable web applications with Django, Flask, or FastAPI for rapid development with excellent documentation.",
          techStack: ["Python", "Django", "PostgreSQL", "Celery"],
        },
        {
          image: "/images/placeholder-ml.jpg",
          title: "Machine Learning Models",
          description: "Develop AI and ML solutions with TensorFlow, PyTorch, scikit-learn for predictive analytics, NLP, and computer vision.",
          techStack: ["Python", "TensorFlow", "Pandas", "Jupyter"],
        },
        {
          image: "/images/placeholder-automation.jpg",
          title: "Automation & Scripting",
          description: "Automate workflows, data processing, web scraping, testing, and repetitive tasks efficiently with Python's versatile libraries.",
          techStack: ["Python", "Selenium", "BeautifulSoup", "Pytest"],
        },
      ],
    },
    cta: {
      heading: "Ready to Build with Python?",
      subheading: "From web development to AI, Python does it all. Let's bring your vision to life with elegant, powerful solutions.",
      primaryCTA: {
        text: "Start Your Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Case Studies",
        href: "/contact",
      },
      stats: [
        { label: "Python Projects", value: "55+" },
        { label: "Years Experience", value: "9+" },
        { label: "Success Rate", value: "97%" },
      ],
    },
  },
};

// Export individual tech data for easier imports
export const { 
  react: reactData, 
  nextjs: nextjsData, 
  vue: vueData, 
  nodejs: nodejsData, 
  dotnet: dotnetData, 
  python: pythonData 
} = technologiesData;

