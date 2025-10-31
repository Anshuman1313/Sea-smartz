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
  python: TechnologyPageData;
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
  icon: ReactNode;
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
  description: string;
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
}
