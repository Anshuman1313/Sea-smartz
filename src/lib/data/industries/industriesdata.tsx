import { IndustriesData } from '@/lib/types';
import { 
  HeartPulse, Shield, Users, Clock, Database, Lock,
  TrendingUp, CreditCard, Zap, BarChart, ShoppingCart,
  Package, Truck, Search, GraduationCap, BookOpen,
  Video, MessageSquare, Award, CheckCircle
} from 'lucide-react';

export const industriesData: IndustriesData = {
  // ============================================
  // HEALTHCARE
  // ============================================
  healthcare: {
    slug: 'healthcare',
    hero: {
      title: "Healthcare Solutions",
      tagline: "HIPAA-compliant technology for modern healthcare",
      description: "Transform patient care with secure, compliant, and innovative healthcare IT solutions. From EMR systems to telehealth platforms, we build technology that improves outcomes and streamlines operations.",
      badges: ["HIPAA Compliant", "Secure", "Scalable", "Patient-Centric"],
      ctaText: "Discuss Your Healthcare Project",
      ctaHref: "/contact",
      backgroundType: 'gradient',
    },
    challenges: {
      heading: "Healthcare Industry Challenges",
      subheading: "Complex problems requiring innovative solutions",
      challenges: [
        {
          icon: <Shield className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Data Security & Compliance",
          description: "Protecting sensitive patient data while maintaining HIPAA compliance and meeting stringent regulatory requirements across multiple jurisdictions.",
        },
        {
          icon: <Users className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Patient Experience",
          description: "Delivering seamless, personalized care experiences across multiple touchpoints while managing complex scheduling and communication needs.",
        },
        {
          icon: <Database className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Interoperability",
          description: "Integrating disparate systems, legacy EHR platforms, and ensuring seamless data exchange between providers, labs, and pharmacies.",
        },
        {
          icon: <Clock className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Operational Efficiency",
          description: "Reducing administrative burden, automating workflows, and optimizing resource allocation while maintaining quality of care.",
        },
      ],
    },
    solutions: {
      heading: "Our Healthcare Solutions",
      subheading: "Comprehensive technology for better patient outcomes",
      solutions: [
        {
          icon: <HeartPulse className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Electronic Health Records (EHR)",
          description: "Modern, cloud-based EHR systems that centralize patient data and improve clinical workflows.",
          features: [
            "Intuitive patient record management",
            "Real-time clinical decision support",
            "HL7 & FHIR integration",
            "Mobile access for providers",
            "Automated documentation",
          ],
        },
        {
          icon: <Video className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Telehealth Platforms",
          description: "Secure video consultation platforms for remote patient care and monitoring.",
          features: [
            "HD video consultations",
            "Appointment scheduling",
            "E-prescriptions integration",
            "Patient portal access",
            "Real-time vital monitoring",
          ],
        },
        {
          icon: <Database className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Healthcare Analytics",
          description: "Data-driven insights for population health management and operational optimization.",
          features: [
            "Predictive analytics",
            "Risk stratification",
            "Performance dashboards",
            "Outcome tracking",
            "Cost analysis tools",
          ],
        },
      ],
    },
    caseStudy: {
      heading: "Healthcare Success Story",
      subheading: "Real results from our healthcare solutions",
      caseStudy: {
        client: "Regional Healthcare Network (250+ physicians)",
        challenge: "Outdated EHR system causing inefficiencies, poor patient experience, and compliance risks. Multiple locations with disconnected systems led to data silos and delayed care.",
        solution: "Implemented cloud-based EHR with integrated telehealth, patient portal, and analytics dashboard. Unified all locations on single platform with real-time data synchronization and automated workflows.",
        results: [
          "40% reduction in patient wait times",
          "95% patient portal adoption rate",
          "60% decrease in administrative overhead",
          "100% HIPAA compliance achievement",
          "30% increase in patient satisfaction scores",
        ],
      },
    },
    cta: {
      heading: "Ready to Transform Healthcare Delivery?",
      subheading: "Partner with us to build secure, compliant, and innovative healthcare solutions that improve patient outcomes and operational efficiency.",
      primaryCTA: {
        text: "Schedule Healthcare Consultation",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View More Case Studies",
        href: "/case-studies",
      },
      stats: [
        { label: "Healthcare Projects", value: "50+" },
        { label: "HIPAA Compliant Systems", value: "100%" },
        { label: "Patient Records Managed", value: "2M+" },
      ],
    },
  },

  // ============================================
  // FINANCE
  // ============================================
  finance: {
    slug: 'finance',
    hero: {
      title: "Financial Services Solutions",
      tagline: "Secure fintech applications for modern banking",
      description: "Build secure, compliant, and scalable financial technology solutions. From digital banking to payment processing, we deliver enterprise-grade fintech platforms that drive innovation and trust.",
      badges: ["PCI-DSS Compliant", "Bank-Grade Security", "Real-Time Processing"],
      ctaText: "Discuss Your Fintech Project",
      ctaHref: "/contact",
      backgroundType: 'dots',
    },
    challenges: {
      heading: "Financial Services Challenges",
      subheading: "Navigating complex regulatory and security requirements",
      challenges: [
        {
          icon: <Lock className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Security & Fraud Prevention",
          description: "Protecting against sophisticated cyber threats, fraud attempts, and ensuring multi-layer security across all transactions and customer touchpoints.",
        },
        {
          icon: <Shield className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Regulatory Compliance",
          description: "Meeting stringent requirements including PCI-DSS, SOC 2, KYC, AML, and evolving financial regulations across multiple jurisdictions.",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Real-Time Processing",
          description: "Handling high transaction volumes with zero downtime, instant settlements, and real-time balance updates across distributed systems.",
        },
        {
          icon: <Users className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Customer Experience",
          description: "Delivering intuitive, secure, and personalized digital banking experiences while maintaining trust and security standards.",
        },
      ],
    },
    solutions: {
      heading: "Our Financial Solutions",
      subheading: "Enterprise-grade fintech platforms",
      solutions: [
        {
          icon: <CreditCard className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Digital Banking Platforms",
          description: "Modern core banking systems with mobile-first design and real-time capabilities.",
          features: [
            "Mobile & web banking apps",
            "Real-time transaction processing",
            "Multi-currency support",
            "Biometric authentication",
            "Instant fund transfers",
          ],
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Payment Processing",
          description: "Secure payment gateways with fraud detection and multi-channel support.",
          features: [
            "Card & ACH processing",
            "Tokenization & encryption",
            "Fraud detection AI",
            "Chargeback management",
            "Settlement automation",
          ],
        },
        {
          icon: <BarChart className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Wealth Management",
          description: "Investment platforms with portfolio tracking and robo-advisory capabilities.",
          features: [
            "Portfolio management",
            "Real-time market data",
            "Automated rebalancing",
            "Risk assessment tools",
            "Tax optimization",
          ],
        },
      ],
    },
    caseStudy: {
      heading: "Finance Success Story",
      subheading: "Transforming digital banking experiences",
      caseStudy: {
        client: "Regional Bank with 500K+ customers",
        challenge: "Legacy banking system unable to support modern digital features, resulting in poor mobile experience, slow transaction processing, and losing customers to digital-first competitors.",
        solution: "Built comprehensive digital banking platform with native mobile apps, real-time processing, AI-powered fraud detection, and seamless integration with existing core banking system.",
        results: [
          "200% increase in mobile banking adoption",
          "75% reduction in transaction processing time",
          "90% decrease in fraud incidents",
          "$2M annual savings in operational costs",
          "4.8/5 app store rating from users",
        ],
      },
    },
    cta: {
      heading: "Ready to Innovate Financial Services?",
      subheading: "Build secure, scalable, and compliant fintech solutions that drive growth and customer satisfaction.",
      primaryCTA: {
        text: "Start Your Fintech Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Finance Portfolio",
        href: "/portfolio",
      },
      stats: [
        { label: "Fintech Projects", value: "65+" },
        { label: "Transactions Processed", value: "100M+" },
        { label: "Uptime Guarantee", value: "99.99%" },
      ],
    },
  },

  // ============================================
  // E-COMMERCE
  // ============================================
  ecommerce: {
    slug: 'ecommerce',
    hero: {
      title: "E-commerce Solutions",
      tagline: "Scalable online stores that drive sales",
      description: "Build high-converting e-commerce platforms that scale with your business. From B2C marketplaces to B2B portals, we create shopping experiences that delight customers and boost revenue.",
      badges: ["Scalable", "Conversion Optimized", "Omnichannel Ready"],
      ctaText: "Build Your Online Store",
      ctaHref: "/contact",
      backgroundType: 'grid',
    },
    challenges: {
      heading: "E-commerce Industry Challenges",
      subheading: "Overcoming competitive marketplace obstacles",
      challenges: [
        {
          icon: <ShoppingCart className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Cart Abandonment",
          description: "Reducing high cart abandonment rates through streamlined checkout, trust signals, and personalized recovery campaigns.",
        },
        {
          icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Site Performance",
          description: "Ensuring fast load times, smooth navigation, and responsive design across devices to prevent customer drop-off.",
        },
        {
          icon: <Package className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Inventory Management",
          description: "Real-time inventory tracking across channels, preventing overselling and optimizing stock levels for maximum profitability.",
        },
        {
          icon: <Search className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Product Discovery",
          description: "Helping customers find products quickly with smart search, filters, recommendations, and personalized browsing experiences.",
        },
      ],
    },
    solutions: {
      heading: "Our E-commerce Solutions",
      subheading: "Complete platforms for online retail success",
      solutions: [
        {
          icon: <ShoppingCart className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Custom E-commerce Platforms",
          description: "Tailored online stores with advanced features and seamless integrations.",
          features: [
            "Custom shopping cart & checkout",
            "Product catalog management",
            "Multi-payment gateway support",
            "Responsive mobile design",
            "SEO optimization built-in",
          ],
        },
        {
          icon: <Truck className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Multi-vendor Marketplaces",
          description: "Scalable marketplace platforms connecting multiple sellers with buyers.",
          features: [
            "Vendor onboarding & dashboards",
            "Commission management",
            "Order routing automation",
            "Review & rating system",
            "Dispute resolution tools",
          ],
        },
        {
          icon: <BarChart className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "E-commerce Analytics",
          description: "Data-driven insights for conversion optimization and growth.",
          features: [
            "Conversion funnel tracking",
            "Customer behavior analysis",
            "A/B testing platform",
            "Revenue attribution",
            "Inventory forecasting",
          ],
        },
      ],
    },
    caseStudy: {
      heading: "E-commerce Success Story",
      subheading: "Driving online sales and customer loyalty",
      caseStudy: {
        client: "Fashion Retailer with 50K+ SKUs",
        challenge: "Outdated platform causing slow page loads, poor mobile experience, and limited product discovery. Cart abandonment at 75% and struggling to scale during peak seasons.",
        solution: "Built headless e-commerce platform with React frontend, microservices backend, AI-powered recommendations, and progressive web app for mobile. Integrated with existing ERP and inventory systems.",
        results: [
          "150% increase in conversion rate",
          "65% reduction in cart abandonment",
          "3x faster page load times",
          "180% growth in mobile sales",
          "$5M additional annual revenue",
        ],
      },
    },
    cta: {
      heading: "Ready to Scale Your Online Business?",
      subheading: "Launch or upgrade your e-commerce platform with technology that converts visitors into loyal customers.",
      primaryCTA: {
        text: "Start Your E-commerce Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View E-commerce Portfolio",
        href: "/portfolio",
      },
      stats: [
        { label: "E-commerce Sites Built", value: "80+" },
        { label: "GMV Processed", value: "$500M+" },
        { label: "Avg Conversion Lift", value: "120%" },
      ],
    },
  },

  // ============================================
  // EDUCATION
  // ============================================
  education: {
    slug: 'education',
    hero: {
      title: "Education Technology Solutions",
      tagline: "Learning management systems for modern education",
      description: "Empower educators and engage learners with innovative EdTech platforms. From LMS to virtual classrooms, we build technology that makes education accessible, interactive, and effective.",
      badges: ["Interactive Learning", "Scalable", "Engagement-Focused"],
      ctaText: "Transform Education with Tech",
      ctaHref: "/contact",
      backgroundType: 'mesh',
    },
    challenges: {
      heading: "Education Industry Challenges",
      subheading: "Addressing modern learning needs",
      challenges: [
        {
          icon: <Users className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Student Engagement",
          description: "Keeping students motivated and actively participating in online and hybrid learning environments with interactive content.",
        },
        {
          icon: <Video className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Remote Learning Quality",
          description: "Delivering effective virtual instruction with reliable video, collaboration tools, and hands-on learning experiences.",
        },
        {
          icon: <BarChart className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Progress Tracking",
          description: "Monitoring student performance, identifying struggling learners, and providing personalized interventions at scale.",
        },
        {
          icon: <Database className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Content Management",
          description: "Organizing vast libraries of course materials, assessments, and resources while ensuring easy accessibility for all users.",
        },
      ],
    },
    solutions: {
      heading: "Our Education Solutions",
      subheading: "Technology platforms for enhanced learning",
      solutions: [
        {
          icon: <GraduationCap className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Learning Management Systems",
          description: "Comprehensive LMS platforms for course delivery and student management.",
          features: [
            "Course creation & management",
            "Assignment & grading tools",
            "Discussion forums & collaboration",
            "Progress tracking & analytics",
            "Mobile learning apps",
          ],
        },
        {
          icon: <Video className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Virtual Classroom Platforms",
          description: "Interactive online learning environments with real-time collaboration.",
          features: [
            "Live video streaming",
            "Interactive whiteboard",
            "Breakout rooms",
            "Screen sharing & recording",
            "Real-time polling & quizzes",
          ],
        },
        {
          icon: <BookOpen className="w-10 h-10 text-[var(--chart-3)]" />,
          title: "Content Delivery Networks",
          description: "Scalable platforms for hosting and delivering educational content globally.",
          features: [
            "Video hosting & streaming",
            "Document management",
            "Interactive assessments",
            "Adaptive learning paths",
            "Offline content access",
          ],
        },
      ],
    },
    caseStudy: {
      heading: "Education Success Story",
      subheading: "Revolutionizing online learning experiences",
      caseStudy: {
        client: "Online University with 20K+ students",
        challenge: "Legacy LMS causing poor user experience, low engagement rates, and difficulty scaling to support growing student population. Limited analytics and no mobile support.",
        solution: "Developed modern cloud-based LMS with mobile apps, AI-powered personalization, integrated video platform, gamification features, and comprehensive analytics dashboard for instructors.",
        results: [
          "85% increase in course completion rates",
          "70% improvement in student engagement",
          "95% mobile app adoption by students",
          "50% reduction in support tickets",
          "3x capacity increase with same infrastructure",
        ],
      },
    },
    cta: {
      heading: "Ready to Innovate Education?",
      subheading: "Build engaging, scalable education technology that empowers teachers and transforms learning outcomes.",
      primaryCTA: {
        text: "Discuss Your EdTech Project",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View Education Portfolio",
        href: "/portfolio",
      },
      stats: [
        { label: "EdTech Projects", value: "45+" },
        { label: "Students Reached", value: "500K+" },
        { label: "Course Completion Rate", value: "85%" },
      ],
    },
  },
};

export const { 
  healthcare: healthcareData,
  finance: financeData,
  ecommerce: ecommerceData,
  education: educationData
} = industriesData;
