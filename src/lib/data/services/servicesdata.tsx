
import { ServicesData } from '@/lib/types';
import {
  Code, Zap, Users, Shield, Gauge, Blocks, Server, Cloud,
  GitBranch, Lock, FileCode,
  Layers, Database, Settings, Monitor, Rocket, Target,
  TrendingUp, BarChart, Lightbulb, Search,
  Briefcase, Award, LineChart
} from 'lucide-react';

export const servicesData: ServicesData = {
  // ============================================
  // WEB DEVELOPMENT
  // ============================================
  webDevelopment: {
    slug: 'web-development',
    hero: {
      title: "Web Development",
      tagline: "Custom web applications built for scale",
      description: "Transform your ideas into powerful web applications. We build responsive, scalable, and secure web solutions using modern technologies that deliver exceptional user experiences and drive business growth.",
      badges: ["Responsive Design", "Scalable Architecture", "SEO Optimized"],
      ctaText: "Start Your Web Project",
      ctaHref: "/contact",
      backgroundType: 'gradient',
    },
    benefits: {
      heading: "Why Choose Our Web Development Services?",
      subheading: "Comprehensive solutions for modern web applications",
      benefits: [
        {
          icon: <Code className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Modern Tech Stack",
          description: "We use cutting-edge technologies like React, Next.js, Vue, and TypeScript to build fast, maintainable, and future-proof web applications.",
        },
        {
          icon: <Gauge className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Performance Optimized",
          description: "Lightning-fast load times with code splitting, lazy loading, image optimization, and CDN integration for optimal user experience.",
        },
        {
          icon: <Shield className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Security First",
          description: "Built-in security measures including SSL, HTTPS, data encryption, CSRF protection, and regular security audits to protect your data.",
        },
        {
          icon: <Users className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "User-Centric Design",
          description: "Intuitive interfaces designed with user research, accessibility standards (WCAG), and responsive design for all devices and screen sizes.",
        },
        {
          icon: <Blocks className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Scalable Architecture",
          description: "Microservices architecture and modular design that grows with your business, handling increased traffic and feature expansion seamlessly.",
        },
        {
          icon: <Rocket className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "SEO & Analytics",
          description: "Built-in SEO optimization, structured data, meta tags, and analytics integration to improve search rankings and track user behavior.",
        },
      ],
    },
    process: {
      heading: "Our Development Process",
      subheading: "Structured approach from concept to launch",
      steps: [
        {
          step: "01",
          title: "Discovery & Planning",
          description: "We analyze your requirements, define project scope, create wireframes, plan architecture, and establish timelines and milestones for delivery.",
          icon: <Target className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "02",
          title: "Design & Prototyping",
          description: "Our designers create high-fidelity mockups, interactive prototypes, and design systems that align with your brand and user expectations.",
          icon: <Layers className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "03",
          title: "Development & Testing",
          description: "Agile development sprints with continuous integration, automated testing, code reviews, and regular demos to ensure quality at every stage.",
          icon: <Code className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "04",
          title: "Deployment & Support",
          description: "Seamless deployment to production with monitoring setup, performance optimization, documentation, training, and ongoing maintenance support.",
          icon: <Rocket className="w-8 h-8 text-[var(--chart-3)]" />,
        },
      ],
    },
    deliverables: {
      heading: "What You'll Receive",
      subheading: "Comprehensive deliverables for your web project",
      deliverables: [
        {
          title: "Application Development",
          description: "Fully functional web application with all features",
          items: [
            "Responsive web application (mobile, tablet, desktop)",
            "Admin dashboard and content management system",
            "User authentication and authorization system",
            "Database design and API integration",
            "Third-party service integrations (payment, email, etc.)",
          ],
        },
        {
          title: "Design & Assets",
          description: "Complete design system and visual assets",
          items: [
            "UI/UX design files (Figma/Adobe XD)",
            "Brand-aligned color schemes and typography",
            "Custom icons, graphics, and illustrations",
            "Responsive design for all screen sizes",
            "Design system and style guide documentation",
          ],
        },
        {
          title: "Technical Documentation",
          description: "Comprehensive technical resources and guides",
          items: [
            "Technical architecture documentation",
            "API documentation and integration guides",
            "Deployment and hosting setup instructions",
            "User manuals and admin guides",
            "Code repository with version control (Git)",
          ],
        },
      ],
    },
    packages: {
      heading: "Service Packages",
      subheading: "Flexible options to match your needs and budget",
      packages: [
        {
          name: "Starter Package",
          description: "Perfect for MVPs and small projects",
          features: [
            "Up to 5 custom pages",
            "Responsive design (mobile + desktop)",
            "Basic SEO optimization",
            "Contact form integration",
            "1 month post-launch support",
            "Hosting setup assistance",
          ],
          pricing: "Starting at $5,000",
        },
        {
          name: "Professional Package",
          description: "Ideal for growing businesses",
          features: [
            "Up to 15 custom pages",
            "Advanced UI/UX design",
            "CMS integration (WordPress/Headless)",
            "User authentication system",
            "Payment gateway integration",
            "3 months post-launch support",
            "Performance optimization",
            "Analytics and SEO setup",
          ],
          pricing: "Starting at $15,000",
          badge: "Most Popular",
        },
        {
          name: "Enterprise Package",
          description: "For complex applications and large-scale projects",
          features: [
            "Unlimited pages and features",
            "Custom architecture design",
            "Advanced integrations (CRM, ERP, etc.)",
            "Multi-language support",
            "Advanced security features",
            "Load balancing and scalability",
            "6 months post-launch support",
            "Dedicated project manager",
            "24/7 monitoring and support",
          ],
          pricing: "Custom Quote",
        },
      ],
    },
    cta: {
      heading: "Ready to Build Your Web Application?",
      subheading: "Let's transform your vision into a powerful, scalable web solution that drives results and delights users.",
      primaryCTA: {
        text: "Start Your Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Portfolio",
        href: "/contact",
      },
      stats: [
        { label: "Projects Delivered", value: "120+" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Years Experience", value: "10+" },
      ],
    },
  },

  // ============================================
  // MOBILE APPS
  // ============================================
  mobileApps: {
    slug: 'mobile-apps',
    hero: {
      title: "Mobile App Development",
      tagline: "iOS & Android solutions for modern businesses",
      description: "Create stunning mobile experiences that engage users and drive growth. We build native and cross-platform mobile applications with seamless performance, intuitive design, and powerful features.",
      badges: ["iOS & Android", "Cross-Platform", "Native Performance"],
      ctaText: "Start Your Mobile Project",
      ctaHref: "/contact",
      backgroundType: 'dots',
    },
    benefits: {
      heading: "Why Choose Our Mobile Development?",
      subheading: "Native quality with cross-platform efficiency",
      benefits: [
        {
          icon: <Code className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Native & Cross-Platform",
          description: "Build with React Native, Flutter, or native Swift/Kotlin for optimal performance, platform-specific features, and code reusability.",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "High Performance",
          description: "Optimized for speed with smooth animations, efficient memory management, offline capabilities, and battery-friendly operations.",
        },
        {
          icon: <Shield className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Secure by Design",
          description: "Encryption, secure storage, biometric authentication, secure API communication, and compliance with platform security guidelines.",
        },
        {
          icon: <Users className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Intuitive UX",
          description: "Platform-specific design patterns (iOS Human Interface, Material Design) for familiar, easy-to-use interfaces that users love.",
        },
        {
          icon: <Cloud className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Cloud Integration",
          description: "Seamless backend integration with Firebase, AWS Amplify, or custom APIs for real-time data sync and cloud storage.",
        },
        {
          icon: <Monitor className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Analytics & Monitoring",
          description: "Built-in crash reporting, user analytics, performance monitoring, and A/B testing to optimize user engagement and retention.",
        },
      ],
    },
    process: {
      heading: "Mobile Development Process",
      subheading: "From concept to App Store & Play Store",
      steps: [
        {
          step: "01",
          title: "Strategy & Research",
          description: "Market research, competitor analysis, user persona development, feature prioritization, and technical feasibility assessment.",
          icon: <Target className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "02",
          title: "UI/UX Design",
          description: "Wireframing, user flow mapping, high-fidelity designs following platform guidelines, and interactive prototypes for user testing.",
          icon: <Layers className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "03",
          title: "Development & QA",
          description: "Agile sprints with continuous integration, automated testing on real devices, performance optimization, and security audits.",
          icon: <Code className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "04",
          title: "Launch & Growth",
          description: "App Store submission, Play Store optimization, post-launch monitoring, user feedback analysis, and iterative improvements.",
          icon: <Rocket className="w-8 h-8 text-[var(--chart-3)]" />,
        },
      ],
    },
    deliverables: {
      heading: "Mobile App Deliverables",
      subheading: "Everything you need for a successful app launch",
      deliverables: [
        {
          title: "App Development",
          description: "Production-ready mobile applications",
          items: [
            "iOS app (Swift/React Native/Flutter)",
            "Android app (Kotlin/React Native/Flutter)",
            "Backend API and database setup",
            "Push notification system",
            "In-app purchases and subscription management",
            "Social media and third-party integrations",
          ],
        },
        {
          title: "Design Assets",
          description: "Complete mobile design package",
          items: [
            "App icon and splash screens",
            "UI design for all screens and states",
            "Animation and micro-interaction designs",
            "App Store screenshots and preview videos",
            "Design system and component library",
          ],
        },
        {
          title: "Launch Support",
          description: "App Store submission and marketing",
          items: [
            "App Store and Play Store submissions",
            "App Store optimization (ASO)",
            "Beta testing with TestFlight/Google Play Beta",
            "Analytics setup (Firebase, Mixpanel)",
            "Marketing materials and app preview videos",
          ],
        },
      ],
    },
    packages: {
      heading: "Mobile App Packages",
      subheading: "Tailored solutions for every app idea",
      packages: [
        {
          name: "MVP Package",
          description: "Launch your app idea quickly",
          features: [
            "Single platform (iOS or Android)",
            "Up to 10 screens",
            "User authentication",
            "Basic API integration",
            "App Store submission",
            "2 months support",
          ],
          pricing: "Starting at $15,000",
        },
        {
          name: "Standard Package",
          description: "Full-featured mobile application",
          features: [
            "iOS + Android (cross-platform)",
            "Up to 20 screens",
            "Advanced features and integrations",
            "Push notifications",
            "In-app purchases",
            "Backend development",
            "Analytics integration",
            "4 months support",
          ],
          pricing: "Starting at $35,000",
          badge: "Recommended",
        },
        {
          name: "Premium Package",
          description: "Enterprise-grade mobile solution",
          features: [
            "Native iOS + Native Android",
            "Unlimited screens and features",
            "Advanced animations",
            "Offline functionality",
            "Real-time features (chat, notifications)",
            "Admin dashboard",
            "App maintenance and updates",
            "6 months dedicated support",
          ],
          pricing: "Custom Quote",
        },
      ],
    },
    cta: {
      heading: "Ready to Launch Your Mobile App?",
      subheading: "Transform your app idea into reality with our expert mobile development team. Let's build something users will love.",
      primaryCTA: {
        text: "Start Your App",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Mobile Portfolio",
        href: "/contact",
      },
      stats: [
        { label: "Apps Launched", value: "85+" },
        { label: "App Store Rating", value: "4.8/5" },
        { label: "Downloads", value: "2M+" },
      ],
    },
  },

  // ============================================
  // API DEVELOPMENT
  // ============================================
  apiDevelopment: {
    slug: 'api-development',
    hero: {
      title: "API Development",
      tagline: "RESTful & GraphQL APIs that power your applications",
      description: "Build robust, scalable, and secure APIs that connect your applications, services, and data. We design and develop high-performance APIs with comprehensive documentation and best practices.",
      badges: ["RESTful", "GraphQL", "Microservices"],
      ctaText: "Build Your API",
      ctaHref: "/contact",
      backgroundType: 'grid',
    },
    benefits: {
      heading: "Why Our API Development?",
      subheading: "Secure, scalable, and developer-friendly APIs",
      benefits: [
        {
          icon: <Server className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "RESTful & GraphQL",
          description: "Choose the best API architecture for your needs - RESTful for simplicity or GraphQL for flexible data querying and real-time updates.",
        },
        {
          icon: <Gauge className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "High Performance",
          description: "Optimized for speed with caching strategies, database indexing, load balancing, and CDN integration for global availability.",
        },
        {
          icon: <Lock className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Security Focused",
          description: "OAuth 2.0, JWT authentication, rate limiting, API key management, input validation, and encryption for secure data transmission.",
        },
        {
          icon: <FileCode className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Comprehensive Documentation",
          description: "Auto-generated API docs with Swagger/OpenAPI, interactive API explorers, code examples, and integration guides for developers.",
        },
        {
          icon: <Blocks className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Microservices Ready",
          description: "Modular architecture that breaks complex systems into smaller, independently deployable services for better scalability and maintenance.",
        },
        {
          icon: <Monitor className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Monitoring & Analytics",
          description: "Real-time monitoring, error tracking, performance metrics, usage analytics, and automated alerting for API health and uptime.",
        },
      ],
    },
    process: {
      heading: "API Development Process",
      subheading: "From design to deployment and documentation",
      steps: [
        {
          step: "01",
          title: "API Design & Planning",
          description: "Define endpoints, data models, authentication strategy, versioning approach, and create API specifications with OpenAPI/Swagger.",
          icon: <Target className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "02",
          title: "Development & Integration",
          description: "Build API endpoints, implement business logic, integrate databases, set up authentication, and create middleware for logging and validation.",
          icon: <Code className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "03",
          title: "Testing & Security",
          description: "Unit testing, integration testing, load testing, security audits, penetration testing, and performance optimization for production readiness.",
          icon: <Shield className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "04",
          title: "Deployment & Documentation",
          description: "Deploy to cloud infrastructure, set up monitoring and logging, create comprehensive documentation, and provide SDK/client libraries if needed.",
          icon: <Rocket className="w-8 h-8 text-[var(--chart-3)]" />,
        },
      ],
    },
    deliverables: {
      heading: "API Deliverables",
      subheading: "Complete API solution with documentation",
      deliverables: [
        {
          title: "API Development",
          description: "Production-ready API infrastructure",
          items: [
            "RESTful or GraphQL API endpoints",
            "Authentication and authorization system",
            "Database schema and models",
            "Input validation and error handling",
            "Rate limiting and throttling",
            "API versioning strategy",
          ],
        },
        {
          title: "Documentation & Tools",
          description: "Developer resources and guides",
          items: [
            "Interactive API documentation (Swagger UI)",
            "Postman collection for testing",
            "Code examples in multiple languages",
            "Integration guides and tutorials",
            "SDK/client libraries (optional)",
          ],
        },
        {
          title: "Infrastructure & Monitoring",
          description: "Deployment and monitoring setup",
          items: [
            "Cloud deployment (AWS, Azure, GCP)",
            "Load balancing and auto-scaling",
            "Monitoring and logging setup",
            "Performance metrics dashboard",
            "Automated backup and recovery",
          ],
        },
      ],
    },
    packages: {
      heading: "API Development Packages",
      subheading: "Flexible pricing for your API needs",
      packages: [
        {
          name: "Basic API",
          description: "Simple RESTful API",
          features: [
            "Up to 10 endpoints",
            "CRUD operations",
            "JWT authentication",
            "Basic documentation",
            "1 month support",
          ],
          pricing: "Starting at $8,000",
        },
        {
          name: "Advanced API",
          description: "Full-featured API solution",
          features: [
            "Up to 30 endpoints",
            "RESTful or GraphQL",
            "OAuth 2.0 authentication",
            "Third-party integrations",
            "Swagger documentation",
            "Rate limiting",
            "3 months support",
          ],
          pricing: "Starting at $20,000",
          badge: "Popular",
        },
        {
          name: "Enterprise API",
          description: "Microservices architecture",
          features: [
            "Unlimited endpoints",
            "Microservices design",
            "Advanced security features",
            "Real-time capabilities",
            "Custom integrations",
            "Load testing and optimization",
            "6 months dedicated support",
          ],
          pricing: "Custom Quote",
        },
      ],
    },
    cta: {
      heading: "Ready to Build Your API?",
      subheading: "Let's create a powerful, secure, and scalable API that connects your applications and services seamlessly.",
      primaryCTA: {
        text: "Start Your API Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View API Case Studies",
        href: "/contact",
      },
      stats: [
        { label: "APIs Developed", value: "90+" },
        { label: "API Uptime", value: "99.98%" },
        { label: "Requests/Day", value: "50M+" },
      ],
    },
  },

  // ============================================
  // CLOUD SOLUTIONS
  // ============================================
  cloudSolutions: {
    slug: 'cloud-solutions',
    hero: {
      title: "Cloud Solutions",
      tagline: "AWS, Azure & GCP cloud architecture experts",
      description: "Modernize your infrastructure with cloud-native solutions. We design, migrate, and manage scalable cloud environments that reduce costs, improve performance, and ensure business continuity.",
      badges: ["AWS Certified", "Azure Partner", "Multi-Cloud"],
      ctaText: "Start Cloud Migration",
      ctaHref: "/contact",
      backgroundType: 'radial',
    },
    benefits: {
      heading: "Why Choose Our Cloud Services?",
      subheading: "Expert cloud architecture and migration services",
      benefits: [
        {
          icon: <Cloud className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Multi-Cloud Expertise",
          description: "Certified experts in AWS, Azure, and Google Cloud Platform. We help you choose the right cloud provider or build multi-cloud strategies.",
        },
        {
          icon: <Gauge className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Cost Optimization",
          description: "Reduce cloud spending by 30-50% through right-sizing, reserved instances, spot instances, and automated resource management.",
        },
        {
          icon: <Shield className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Security & Compliance",
          description: "Implement best practices for cloud security, encryption, identity management, and compliance with GDPR, HIPAA, and SOC 2.",
        },
        {
          icon: <Blocks className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Scalable Architecture",
          description: "Design cloud infrastructure that automatically scales with your traffic, handles peak loads, and maintains high availability (99.99% uptime).",
        },
        {
          icon: <Database className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Data Management",
          description: "Cloud-native databases, data lakes, backup strategies, disaster recovery, and data migration with zero downtime.",
        },
        {
          icon: <Monitor className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "24/7 Monitoring",
          description: "Proactive monitoring, automated alerts, performance optimization, and incident response for your cloud infrastructure.",
        },
      ],
    },
    process: {
      heading: "Cloud Migration Process",
      subheading: "Seamless transition to the cloud",
      steps: [
        {
          step: "01",
          title: "Assessment & Planning",
          description: "Analyze current infrastructure, identify migration candidates, calculate TCO, create migration roadmap, and define success metrics.",
          icon: <Target className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "02",
          title: "Architecture Design",
          description: "Design cloud architecture, select services, plan networking and security, define disaster recovery strategy, and create cost estimates.",
          icon: <Layers className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "03",
          title: "Migration & Testing",
          description: "Execute phased migration, test applications in cloud environment, optimize performance, and validate data integrity and security.",
          icon: <Cloud className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "04",
          title: "Optimization & Support",
          description: "Continuous monitoring, cost optimization, performance tuning, security updates, and ongoing managed services support.",
          icon: <Settings className="w-8 h-8 text-[var(--chart-3)]" />,
        },
      ],
    },
    deliverables: {
      heading: "Cloud Solution Deliverables",
      subheading: "Comprehensive cloud infrastructure and support",
      deliverables: [
        {
          title: "Cloud Infrastructure",
          description: "Production-ready cloud environment",
          items: [
            "Cloud architecture design and implementation",
            "Network configuration (VPC, subnets, routing)",
            "Security groups and firewall rules",
            "Load balancers and auto-scaling groups",
            "Database setup and replication",
            "Storage and backup configuration",
          ],
        },
        {
          title: "Migration & Integration",
          description: "Seamless data and application migration",
          items: [
            "Application migration strategy",
            "Database migration with minimal downtime",
            "Data synchronization and validation",
            "CI/CD pipeline setup",
            "Third-party service integrations",
          ],
        },
        {
          title: "Management & Support",
          description: "Ongoing cloud operations and optimization",
          items: [
            "Cloud monitoring and alerting setup",
            "Cost optimization recommendations",
            "Performance tuning and optimization",
            "Security audits and compliance reports",
            "24/7 managed services (optional)",
          ],
        },
      ],
    },
    packages: {
      heading: "Cloud Service Packages",
      subheading: "Tailored cloud solutions for your business",
      packages: [
        {
          name: "Cloud Migration",
          description: "Move to the cloud with confidence",
          features: [
            "Infrastructure assessment",
            "Migration planning and strategy",
            "Application migration (up to 5 apps)",
            "Database migration",
            "Post-migration support (2 months)",
          ],
          pricing: "Starting at $25,000",
        },
        {
          name: "Cloud Management",
          description: "Ongoing cloud operations",
          features: [
            "24/7 infrastructure monitoring",
            "Monthly cost optimization reviews",
            "Security updates and patches",
            "Performance optimization",
            "Incident response and support",
            "Monthly reports and analytics",
          ],
          pricing: "Starting at $3,000/month",
          badge: "Recurring",
        },
        {
          name: "Enterprise Cloud",
          description: "Complete cloud transformation",
          features: [
            "Multi-cloud architecture",
            "Unlimited application migration",
            "Disaster recovery setup",
            "Advanced security and compliance",
            "Dedicated cloud architect",
            "6 months managed services included",
          ],
          pricing: "Custom Quote",
        },
      ],
    },
    cta: {
      heading: "Ready to Move to the Cloud?",
      subheading: "Transform your infrastructure with cloud solutions that scale, reduce costs, and improve reliability. Let's start your cloud journey.",
      primaryCTA: {
        text: "Schedule Cloud Assessment",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Cloud Case Studies",
        href: "/contact",
      },
      stats: [
        { label: "Cloud Migrations", value: "150+" },
        { label: "Cost Reduction", value: "40%" },
        { label: "Uptime", value: "99.99%" },
      ],
    },
  },

  // ============================================
  // DEVOPS
  // ============================================
  devops: {
    slug: 'devops',
    hero: {
      title: "DevOps Services",
      tagline: "CI/CD pipelines & automation for faster delivery",
      description: "Accelerate your software delivery with modern DevOps practices. We implement continuous integration, automated testing, infrastructure as code, and monitoring to help you ship faster and more reliably.",
      badges: ["CI/CD", "Infrastructure as Code", "Automation"],
      ctaText: "Transform Your DevOps",
      ctaHref: "/contact",
      backgroundType: 'mesh',
    },
    benefits: {
      heading: "Why Choose Our DevOps Services?",
      subheading: "Automate, optimize, and accelerate your delivery",
      benefits: [
        {
          icon: <GitBranch className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "CI/CD Pipelines",
          description: "Automated build, test, and deployment pipelines with Jenkins, GitLab CI, GitHub Actions, or CircleCI for faster, reliable releases.",
        },
        {
          icon: <Server className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Infrastructure as Code",
          description: "Manage infrastructure with Terraform, CloudFormation, or Ansible for version-controlled, repeatable, and consistent deployments.",
        },
        {
          icon: <Cloud className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Container Orchestration",
          description: "Deploy and manage containerized applications with Docker and Kubernetes for scalability, portability, and efficient resource utilization.",
        },
        {
          icon: <Monitor className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Monitoring & Observability",
          description: "Real-time monitoring with Prometheus, Grafana, ELK Stack, and Datadog for complete visibility into your systems and applications.",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Faster Time to Market",
          description: "Reduce deployment time from weeks to hours with automated workflows, reducing manual errors and accelerating feature delivery.",
        },
        {
          icon: <Shield className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Security Integration",
          description: "DevSecOps practices with automated security scanning, vulnerability detection, compliance checks, and secrets management.",
        },
      ],
    },
    process: {
      heading: "DevOps Implementation Process",
      subheading: "From manual processes to full automation",
      steps: [
        {
          step: "01",
          title: "Assessment & Strategy",
          description: "Evaluate current processes, identify bottlenecks, define automation goals, select tools, and create DevOps roadmap with KPIs.",
          icon: <Target className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "02",
          title: "Pipeline Setup",
          description: "Design and implement CI/CD pipelines, set up automated testing, configure deployment strategies, and establish branching workflows.",
          icon: <GitBranch className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "03",
          title: "Infrastructure Automation",
          description: "Implement Infrastructure as Code, containerize applications, set up orchestration, and automate environment provisioning.",
          icon: <Server className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "04",
          title: "Monitor & Optimize",
          description: "Set up monitoring and alerting, create dashboards, implement logging, continuously improve processes, and train your team.",
          icon: <Monitor className="w-8 h-8 text-[var(--chart-3)]" />,
        },
      ],
    },
    deliverables: {
      heading: "DevOps Deliverables",
      subheading: "Complete automation and monitoring setup",
      deliverables: [
        {
          title: "CI/CD Implementation",
          description: "Automated deployment pipelines",
          items: [
            "Continuous integration pipeline setup",
            "Automated testing integration",
            "Deployment automation (staging & production)",
            "Rollback and versioning strategies",
            "Pipeline documentation and runbooks",
          ],
        },
        {
          title: "Infrastructure Setup",
          description: "Automated infrastructure management",
          items: [
            "Infrastructure as Code templates",
            "Container orchestration (Kubernetes/ECS)",
            "Environment provisioning automation",
            "Secrets and configuration management",
            "Disaster recovery automation",
          ],
        },
        {
          title: "Monitoring & Support",
          description: "Observability and ongoing optimization",
          items: [
            "Monitoring dashboards (Grafana/Datadog)",
            "Logging and log aggregation (ELK)",
            "Alerting and incident response setup",
            "Performance metrics and reports",
            "Team training and knowledge transfer",
          ],
        },
      ],
    },
    packages: {
      heading: "DevOps Service Packages",
      subheading: "Automation solutions for every stage",
      packages: [
        {
          name: "DevOps Starter",
          description: "Essential automation for small teams",
          features: [
            "Basic CI/CD pipeline setup",
            "Automated testing integration",
            "Docker containerization",
            "Basic monitoring setup",
            "2 months support",
          ],
          pricing: "Starting at $12,000",
        },
        {
          name: "DevOps Professional",
          description: "Complete automation solution",
          features: [
            "Advanced CI/CD pipelines",
            "Infrastructure as Code (Terraform)",
            "Kubernetes orchestration",
            "Comprehensive monitoring (Prometheus + Grafana)",
            "Security scanning integration",
            "4 months support and optimization",
          ],
          pricing: "Starting at $30,000",
          badge: "Recommended",
        },
        {
          name: "Enterprise DevOps",
          description: "Full DevOps transformation",
          features: [
            "Multi-cloud DevOps strategy",
            "Advanced orchestration and scaling",
            "DevSecOps implementation",
            "Disaster recovery automation",
            "Dedicated DevOps engineer",
            "12 months managed services",
          ],
          pricing: "Custom Quote",
        },
      ],
    },
    cta: {
      heading: "Ready to Accelerate Your Delivery?",
      subheading: "Transform your development process with modern DevOps practices. Ship faster, more reliably, and with greater confidence.",
      primaryCTA: {
        text: "Start DevOps Transformation",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View DevOps Success Stories",
        href: "/contact",
      },
      stats: [
        { label: "Deployment Speed", value: "10x Faster" },
        { label: "Downtime Reduction", value: "80%" },
        { label: "DevOps Projects", value: "70+" },
      ],
    },
  },

  // ============================================
  // TECH CONSULTING
  // ============================================
  consulting: {
    slug: 'consulting',
    hero: {
      title: "Technology Consulting",
      tagline: "Strategic guidance for digital transformation",
      description: "Navigate complex technology decisions with expert guidance. We provide strategic consulting, technical architecture, and digital transformation services to help your business leverage technology effectively.",
      badges: ["Strategic Planning", "Digital Transformation", "Technical Architecture"],
      ctaText: "Schedule Consultation",
      ctaHref: "/contact",
      backgroundType: 'gradient',
    },
    benefits: {
      heading: "Why Choose Our Consulting Services?",
      subheading: "Expert guidance for technology success",
      benefits: [
        {
          icon: <Lightbulb className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Strategic Planning",
          description: "Develop comprehensive technology strategies aligned with your business goals, market trends, and long-term vision for sustainable growth.",
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Digital Transformation",
          description: "Guide your organization through digital transformation with change management, process optimization, and technology adoption strategies.",
        },
        {
          icon: <Layers className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Technical Architecture",
          description: "Design scalable, maintainable system architectures that support current needs while allowing for future growth and evolution.",
        },
        {
          icon: <BarChart className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Technology Assessment",
          description: "Evaluate your current technology stack, identify gaps and inefficiencies, and recommend improvements for better performance and ROI.",
        },
        {
          icon: <Users className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Team Augmentation",
          description: "Supplement your team with expert consultants for specific projects, skills gaps, or to accelerate critical initiatives.",
        },
        {
          icon: <Award className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Best Practices",
          description: "Implement industry best practices for development, security, deployment, and operations based on years of experience across industries.",
        },
      ],
    },
    process: {
      heading: "Consulting Engagement Process",
      subheading: "Structured approach to deliver value",
      steps: [
        {
          step: "01",
          title: "Discovery & Analysis",
          description: "Understand your business, challenges, goals, and current technology landscape through stakeholder interviews and documentation review.",
          icon: <Search className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "02",
          title: "Strategy Development",
          description: "Create comprehensive recommendations, roadmaps, and action plans tailored to your specific needs and constraints.",
          icon: <Briefcase className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "03",
          title: "Implementation Support",
          description: "Provide hands-on support during implementation, including architecture reviews, code reviews, and team mentoring.",
          icon: <Users className="w-8 h-8 text-[var(--chart-3)]" />,
        },
        {
          step: "04",
          title: "Measure & Optimize",
          description: "Track success metrics, gather feedback, make adjustments, and ensure continuous improvement of implemented solutions.",
          icon: <LineChart className="w-8 h-8 text-[var(--chart-3)]" />,
        },
      ],
    },
    deliverables: {
      heading: "Consulting Deliverables",
      subheading: "Actionable insights and strategic guidance",
      deliverables: [
        {
          title: "Strategic Documents",
          description: "Comprehensive analysis and recommendations",
          items: [
            "Technology assessment report",
            "Digital transformation roadmap",
            "Technical architecture documentation",
            "Cost-benefit analysis and ROI projections",
            "Risk assessment and mitigation strategies",
          ],
        },
        {
          title: "Implementation Plans",
          description: "Detailed execution strategies",
          items: [
            "Project plans with timelines and milestones",
            "Resource allocation recommendations",
            "Technology selection and vendor analysis",
            "Process improvement proposals",
            "Change management strategies",
          ],
        },
        {
          title: "Knowledge Transfer",
          description: "Enable your team for long-term success",
          items: [
            "Training materials and workshops",
            "Best practices documentation",
            "Code review guidelines",
            "Architectural decision records",
            "Ongoing advisory and support",
          ],
        },
      ],
    },
    packages: {
      heading: "Consulting Packages",
      subheading: "Flexible engagement models for your needs",
      packages: [
        {
          name: "Advisory Package",
          description: "Strategic guidance and recommendations",
          features: [
            "Technology assessment (2 days)",
            "Strategy session with stakeholders",
            "Comprehensive report with recommendations",
            "Follow-up session for Q&A",
            "30 days email support",
          ],
          pricing: "Starting at $8,000",
        },
        {
          name: "Transformation Package",
          description: "End-to-end digital transformation support",
          features: [
            "In-depth assessment (1 week)",
            "Digital transformation roadmap",
            "Architecture design and review",
            "Implementation oversight",
            "Team training and workshops",
            "3 months advisory support",
          ],
          pricing: "Starting at $35,000",
          badge: "Popular",
        },
        {
          name: "Retainer Package",
          description: "Ongoing strategic technology partnership",
          features: [
            "Dedicated consultant hours per month",
            "Continuous strategic guidance",
            "Architecture reviews and approvals",
            "Team mentoring and training",
            "Priority support and advisory",
            "Quarterly strategy sessions",
          ],
          pricing: "Starting at $5,000/month",
        },
      ],
    },
    cta: {
      heading: "Ready to Transform Your Technology Strategy?",
      subheading: "Partner with experienced consultants who understand both technology and business. Let's create a roadmap for your digital success.",
      primaryCTA: {
        text: "Book a Consultation",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Success Stories",
        href: "/contact",
      },
      stats: [
        { label: "Consulting Projects", value: "200+" },
        { label: "Industries Served", value: "25+" },
        { label: "Client ROI Average", value: "300%" },
      ],
    },
  },

   // ============================================
  // DIGITAL MARKETING
  // ============================================
  digitalMarketing: {
  slug: "digital-marketing",

  hero: {
    title: "Digital Marketing",
    tagline: "Performance-driven growth through digital channels",
    description:
      "We help businesses grow visibility, traffic, and revenue through data-driven digital marketing strategies. From paid advertising to SEO and social media, our focus is on measurable results and long-term growth.",
    badges: [
      "Paid Advertising",
      "SEO & Organic Growth",
      "Online Reputation Management",
      "Social Media Marketing",
    ],
    ctaText: "Start Growing",
    ctaHref: "/contact",
    backgroundType: "gradient",
  },

  benefits: {
    heading: "Why Choose Our Digital Marketing Services?",
    subheading: "Strategic marketing built for sustainable growth",
    benefits: [
      {
        icon: "TrendingUp",
        title: "ROI-Focused Campaigns",
        description:
          "Every campaign is designed with clear KPIs, conversion tracking, and performance optimization to maximize return on investment.",
      },
      {
        icon: "Target",
        title: "Audience Precision",
        description:
          "Reach the right users at the right time using advanced targeting, intent-based keywords, and data-backed audience segmentation.",
      },
      {
        icon: "Search",
        title: "Organic & Paid Balance",
        description:
          "We combine SEO and paid advertising strategies to create short-term wins and long-term, compounding growth.",
      },
      {
        icon: "Shield",
        title: "Brand Reputation Control",
        description:
          "Protect and strengthen your brand with proactive online reputation management and sentiment monitoring.",
      },
      {
        icon: "Users",
        title: "Platform-Specific Expertise",
        description:
          "Tailored strategies for search engines, social platforms, and marketplaces instead of one-size-fits-all marketing.",
      },
      {
        icon: "BarChart",
        title: "Transparent Reporting",
        description:
          "Clear performance dashboards, actionable insights, and honest reporting—no vanity metrics.",
      },
    ],
  },

  process: {
    heading: "Digital Marketing Execution Process",
    subheading: "A structured system for consistent growth",
    steps: [
      {
        step: "01",
        title: "Audit & Research",
        description:
          "We analyze your market, competitors, audience behavior, and existing marketing efforts to uncover opportunities.",
      },
      {
        step: "02",
        title: "Strategy & Planning",
        description:
          "We define goals, select channels, allocate budgets, and create a performance-driven marketing roadmap.",
      },
      {
        step: "03",
        title: "Campaign Execution",
        description:
          "Campaigns are launched across SEO, PPC, social media, and ABM with continuous testing and optimization.",
      },
      {
        step: "04",
        title: "Measure & Scale",
        description:
          "We track KPIs, analyze performance, and scale what works to maximize long-term ROI.",
      },
    ],
  },

  deliverables: {
    heading: "Digital Marketing Deliverables",
    subheading: "Clear outputs with measurable impact",
    deliverables: [
      {
        title: "Strategy & Planning",
        description: "Foundational assets for successful execution",
        items: [
          "Digital marketing strategy document",
          "Channel and budget allocation plan",
          "Audience and funnel mapping",
          "Campaign roadmaps and timelines",
        ],
      },
      {
        title: "Campaign Assets",
        description: "Execution-ready marketing materials",
        items: [
          "Ad creatives and copy",
          "SEO-optimized content recommendations",
          "Landing page improvement suggestions",
          "Social media content plans",
        ],
      },
      {
        title: "Reporting & Optimization",
        description: "Data-backed insights and continuous improvement",
        items: [
          "Performance dashboards",
          "Monthly marketing reports",
          "Conversion and ROI analysis",
          "Optimization and scaling recommendations",
        ],
      },
    ],
  },

  packages: {
    heading: "Digital Marketing Packages",
    subheading: "Flexible engagement models for every growth stage",
    packages: [
      {
        name: "Growth Starter",
        description: "Ideal for early-stage and small businesses",
        features: [
          "SEO and paid ads audit",
          "Campaign setup (1 channel)",
          "Basic conversion tracking",
          "Monthly performance report",
          "Email support",
        ],
        pricing: "Starting at $3,000/month",
      },
      {
        name: "Performance Accelerator",
        description: "Multi-channel growth and optimization",
        features: [
          "SEO + PPC + social media management",
          "Advanced audience targeting",
          "Landing page optimization",
          "Bi-weekly performance reviews",
          "Dedicated account manager",
        ],
        pricing: "Starting at $7,500/month",
        badge: "Popular",
      },
      {
        name: "Scale Partner",
        description: "Ongoing strategic growth partnership",
        features: [
          "Full-funnel digital marketing",
          "ABM and retargeting campaigns",
          "Continuous testing and scaling",
          "Priority support",
          "Quarterly growth strategy sessions",
        ],
        pricing: "Starting at $12,000/month",
      },
    ],
  },

  cta: {
    heading: "Ready to Grow Your Digital Presence?",
    subheading:
      "Let’s build high-performing digital marketing systems that drive traffic, conversions, and revenue.",
    primaryCTA: {
      text: "Book a Strategy Call",
      href: "/contact",
    },
    secondaryCTA: {
      text: "View Case Studies",
      href: "/contact",
    },
    stats: [
      { label: "Campaigns Managed", value: "500+" },
      { label: "Average ROI", value: "4x" },
      { label: "Industries Served", value: "30+" },
    ],
  },
}


};

export const {
  webDevelopment: webDevelopmentData,
  mobileApps: mobileAppsData,
  apiDevelopment: apiDevelopmentData,
  cloudSolutions: cloudSolutionsData,
  devops: devopsData,
  consulting: consultingData,
  digitalMarketing: digitalMarketingData

} = servicesData;
