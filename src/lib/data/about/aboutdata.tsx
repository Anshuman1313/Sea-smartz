import { AboutPageData } from '@/lib/types';
import { 
  Target, Users, Lightbulb, Heart, Award, Shield,
  Zap, TrendingUp, Globe
} from 'lucide-react';

export const aboutData: AboutPageData = {
  hero: {
    title: "Building Tomorrow's Technology, Today",
    tagline: "Your trusted partner in digital transformation",
    description: "We're a team of passionate technologists, designers, and strategists dedicated to creating innovative software solutions that drive business growth and transform industries.",
    stats: [
      { label: "Years in Business", value: "10+" },
      { label: "Projects Delivered", value: "500+" },
      { label: "Team Members", value: "75+" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    backgroundType: 'gradient',
  },

  story: {
    heading: "Our Story",
    subheading: "From a small startup to a global technology partner",
    story: [
      "Founded in 2015, Sea Smartz began with a simple mission: to bridge the gap between innovative technology and real-world business challenges. What started as a three-person team working out of a small office has grown into a global technology partner serving clients across healthcare, finance, e-commerce, and education sectors.",
      "Our journey has been defined by our commitment to excellence, continuous learning, and putting our clients' success first. We've weathered industry changes, adapted to new technologies, and consistently delivered solutions that not only meet but exceed expectations.",
      "Today, we're proud to be a trusted partner for startups, scale-ups, and enterprises worldwide. Our diverse team of 75+ professionals brings together expertise in cutting-edge technologies, user-centered design, and strategic thinking to solve complex problems and create meaningful impact.",
      "As we look to the future, we remain committed to our core values while embracing new challenges and opportunities. Whether it's emerging technologies like AI and blockchain, or timeless principles of quality and integrity, we're here to help our clients navigate the ever-evolving digital landscape."
    ],
  },

  values: {
    heading: "Our Core Values",
    subheading: "Principles that guide everything we do",
    values: [
      {
        icon: <Target className="w-10 h-10 text-[var(--chart-3)]" />,
        title: "Client-Centric Approach",
        description: "Your success is our success. We listen deeply, understand your challenges, and create solutions tailored to your unique needs and goals.",
      },
      {
        icon: <Lightbulb className="w-10 h-10 text-[var(--chart-3)]" />,
        title: "Innovation & Excellence",
        description: "We stay ahead of technology trends, continuously learn, and push boundaries to deliver cutting-edge solutions that stand the test of time.",
      },
      {
        icon: <Shield className="w-10 h-10 text-[var(--chart-3)]" />,
        title: "Integrity & Transparency",
        description: "Honest communication, ethical practices, and transparent processes build the trust that forms the foundation of lasting partnerships.",
      },
      {
        icon: <Users className="w-10 h-10 text-[var(--chart-3)]" />,
        title: "Collaborative Spirit",
        description: "We work as an extension of your team, fostering open communication, knowledge sharing, and collaborative problem-solving.",
      },
      {
        icon: <Zap className="w-10 h-10 text-[var(--chart-3)]" />,
        title: "Agility & Adaptability",
        description: "In a fast-paced digital world, we remain flexible and responsive, quickly adapting to changing requirements and new opportunities.",
      },
      {
        icon: <Heart className="w-10 h-10 text-[var(--chart-3)]" />,
        title: "Quality & Craftsmanship",
        description: "We take pride in our work, paying attention to every detail and ensuring that every line of code meets our high standards.",
      },
    ],
  },

  team: {
    heading: "Meet Our Team",
    subheading: "Talented professionals passionate about technology",
    description: "Our diverse team of 75+ developers, designers, project managers, and strategists brings together decades of combined experience across industries and technologies. We're united by our passion for creating exceptional digital experiences and our commitment to client success.",
    teamSize: "75+ professionals across 15+ countries",
  },

  journey: {
    heading: "Our Journey",
    subheading: "Milestones that shaped who we are today",
    achievements: [
      {
        year: "2015",
        title: "Sea Smartz Founded",
        description: "Started with 3 co-founders and a vision to create meaningful technology solutions for businesses.",
      },
      {
        year: "2017",
        title: "First Major Enterprise Client",
        description: "Secured our first Fortune 500 client, validating our approach and opening doors to larger opportunities.",
      },
      {
        year: "2018",
        title: "Team Expansion",
        description: "Grew to 25 team members and established our first international office to better serve global clients.",
      },
      {
        year: "2019",
        title: "Industry Recognition",
        description: "Received 'Best Software Development Company' award and featured in leading tech publications.",
      },
      {
        year: "2020",
        title: "Remote-First Transition",
        description: "Successfully transitioned to remote-first model, enabling us to attract top talent from anywhere in the world.",
      },
      {
        year: "2021",
        title: "Healthcare Specialization",
        description: "Achieved HIPAA compliance certification and launched dedicated healthcare solutions division.",
      },
      {
        year: "2022",
        title: "100+ Projects Milestone",
        description: "Celebrated delivering our 100th successful project with 98% client satisfaction rate.",
      },
      {
        year: "2023",
        title: "AI & Innovation Lab",
        description: "Established R&D lab focused on AI, machine learning, and emerging technologies.",
      },
      {
        year: "2024",
        title: "Global Expansion",
        description: "Expanded operations to serve clients across 40+ countries with 75+ team members.",
      },
      {
        year: "2025",
        title: "500+ Projects & Growing",
        description: "Reached 500+ successful projects milestone, continuing to innovate and grow with our clients.",
      },
    ],
  },

  cta: {
    heading: "Ready to Work Together?",
    subheading: "Let's discuss how we can help bring your vision to life. Whether you have a detailed project plan or just an idea, we're here to collaborate and create something amazing.",
    primaryCTA: {
      text: "Start a Project",
      href: "/contact",
    },
    secondaryCTA: {
      text: "View Our Work",
      href: "/portfolio",
    },
  },
};
