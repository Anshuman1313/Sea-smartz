import { ReactNode } from 'react';

// Hero Section Data with background option
export interface TechHeroData {
  title: string;
  tagline: string;
  description: string;
  badges: string[];
  ctaText: string;
  ctaHref: string;
  backgroundType?: 'gradient' | 'dots' | 'grid' | 'radial' | 'mesh'; // New!
}

// Feature Card
export interface FeatureCard {
  icon: ReactNode;
  title: string;
  description: string;
}

// Features Section
export interface TechFeaturesData {
  heading: string;
  subheading?: string;
  features: FeatureCard[];
}

// NEW: Technical Specifications Section
export interface TechSpecItem {
  label: string;
  value: string;
  description?: string;
}

export interface TechSpecsData {
  heading: string;
  subheading?: string;
  specs: TechSpecItem[];
  additionalInfo?: string;
}

// Use Case Card
export interface UseCaseCard {
  image: string;
  title: string;
  description: string;
  techStack: string[];
}

// Use Cases Section
export interface TechUseCasesData {
  heading: string;
  subheading?: string;
  useCases: UseCaseCard[];
}

// CTA Section
export interface TechCTAData {
  heading: string;
  subheading: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  stats?: { label: string; value: string }[];
}

// Complete Technology Page Data (now with 5 sections)
export interface TechnologyPageData {
  slug: string;
  hero: TechHeroData;
  features: TechFeaturesData;
  specs: TechSpecsData; // NEW!
  useCases: TechUseCasesData;
  cta: TechCTAData;
}

// All Technologies Data
export interface TechnologiesData {
  react: TechnologyPageData;
  nextjs: TechnologyPageData;
  vue: TechnologyPageData;
  nodejs: TechnologyPageData;
  dotnet: TechnologyPageData;
  dotnetcore: TechnologyPageData;
  python: TechnologyPageData;
  java: TechnologyPageData;
}


// Service Hero Section
export interface ServiceHeroData {
  title: string;
  tagline: string;
  description: string;
  badges: string[];
  ctaText: string;
  ctaHref: string;
  backgroundType?: 'gradient' | 'dots' | 'grid' | 'radial' | 'mesh';
}

// Service Benefits Card
export interface ServiceBenefitCard {
  icon: ReactNode;
  title: string;
  description: string;
}

// Service Benefits Section
export interface ServiceBenefitsData {
  heading: string;
  subheading?: string;
  benefits: ServiceBenefitCard[];
}

// Service Process Step
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

// Service Process Section
export interface ServiceProcessData {
  heading: string;
  subheading?: string;
  steps: ProcessStep[];
}

// Service Deliverables
export interface DeliverableItem {
  title: string;
  description?: string;
  items: string[];
}

// Service Deliverables Section
export interface ServiceDeliverablesData {
  heading: string;
  subheading?: string;
  deliverables: DeliverableItem[];
}

// Service Pricing/Package Card
export interface ServicePackage {
  name: string;
  description: string;
  features: string[];
  pricing?: string;
  badge?: string;
}

// Service Packages Section
export interface ServicePackagesData {
  heading: string;
  subheading?: string;
  packages: ServicePackage[];
}

// Service CTA Section
export interface ServiceCTAData {
  heading: string;
  subheading: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  stats?: { label: string; value: string }[];
}

// Complete Service Page Data (6 sections!)
export interface ServicePageData {
  slug: string;
  hero: ServiceHeroData;
  benefits: ServiceBenefitsData;
  process: ServiceProcessData;
  deliverables: ServiceDeliverablesData;
  packages: ServicePackagesData;
  cta: ServiceCTAData;
}

// All Services Data
export interface ServicesData {
  webDevelopment: ServicePageData;
  mobileApps: ServicePageData;
  apiDevelopment: ServicePageData;
  cloudSolutions: ServicePageData;
  devops: ServicePageData;
  consulting: ServicePageData;
  digitalMarketing: ServicePageData;
  aiMl: ServicePageData;
}


// DIY Team Hero Section
export interface TeamHeroData {
  title: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundType?: 'gradient' | 'dots' | 'grid' | 'radial' | 'mesh';
}

// Team Card
export interface TeamCard {
  icon: ReactNode;
  title: string;
  description: string;
  skills: string[];
  href: string;
}

// Teams Grid Section
export interface TeamsGridData {
  heading: string;
  subheading?: string;
  teams: TeamCard[];
}

// Team CTA Section
export interface TeamCTAData {
  heading: string;
  subheading: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

// Complete Team Page Data (3 sections)
export interface TeamPageData {
  slug: string;
  hero: TeamHeroData;
  teams: TeamsGridData;
  cta: TeamCTAData;
}

// All DIY Teams Data
export interface DIYTeamsData {
  frontend: TeamPageData;
  backend: TeamPageData;
  fullstack: TeamPageData;
  mobile: TeamPageData;
}
// Industry Hero Section
export interface IndustryHeroData {
  title: string;
  tagline: string;
  description: string;
  badges: string[];
  ctaText: string;
  ctaHref: string;
  backgroundType?: 'gradient' | 'dots' | 'grid' | 'radial' | 'mesh';
}

// Industry Challenge Card
export interface ChallengeCard {
  icon: ReactNode;
  title: string;
  description: string;
}

// Challenges Section
export interface IndustryChallengesData {
  heading: string;
  subheading?: string;
  challenges: ChallengeCard[];
}

// Industry Solution Card
export interface SolutionCard {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

// Solutions Section
export interface IndustrySolutionsData {
  heading: string;
  subheading?: string;
  solutions: SolutionCard[];
}

// Case Study
export interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  results: string[];
}

// Case Studies Section
export interface IndustryCaseStudiesData {
  heading: string;
  subheading?: string;
  caseStudy: CaseStudy;
}

// Industry CTA
export interface IndustryCTAData {
  heading: string;
  subheading: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  stats?: { label: string; value: string }[];
}

// Complete Industry Page Data (5 sections)
export interface IndustryPageData {
  slug: string;
  hero: IndustryHeroData;
  challenges: IndustryChallengesData;
  solutions: IndustrySolutionsData;
  caseStudy: IndustryCaseStudiesData;
  cta: IndustryCTAData;
}

// All Industries Data
export interface IndustriesData {
  healthcare: IndustryPageData;
  finance: IndustryPageData;
  ecommerce: IndustryPageData;
  education: IndustryPageData;
}
// About Hero Section
export interface AboutHeroData {
  title: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
  backgroundType?: 'gradient' | 'dots' | 'grid' | 'radial' | 'mesh';
}

// About Story Section
export interface AboutStoryData {
  heading: string;
  subheading?: string;
  story: string[];
  image?: string;
}

// Value Card
export interface ValueCard {
  icon: ReactNode;
  title: string;
  description: string;
}

// Values Section
export interface AboutValuesData {
  heading: string;
  subheading?: string;
  values: ValueCard[];
}

// Team Member
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

// Team Section
export interface AboutTeamData {
  heading: string;
  subheading?: string;
  description?: string;
  teamSize: string;
}

// Achievement
export interface Achievement {
  year: string;
  title: string;
  description: string;
}

// Journey Section
export interface AboutJourneyData {
  heading: string;
  subheading?: string;
  achievements: Achievement[];
}

// About CTA
export interface AboutCTAData {
  heading: string;
  subheading: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

// Complete About Page Data
export interface AboutPageData {
  hero: AboutHeroData;
  story: AboutStoryData;
  values: AboutValuesData;
  team: AboutTeamData;
  journey: AboutJourneyData;
  cta: AboutCTAData;
}
