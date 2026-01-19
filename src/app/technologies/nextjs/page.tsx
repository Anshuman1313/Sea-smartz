import TechCTA from '@/app/components/sections/TechCTA';
import TechFeatures from '@/app/components/sections/TechFeatures';
import TechHero from '@/app/components/sections/TechHero';
import TechSpecs from '@/app/components/sections/TechSpecs';
import TechUseCases from '@/app/components/sections/TechUseCases';
import { nextjsData } from '@/lib/data/technologies/techdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Development Services | SeaSmartz',
  description: 'Build production-ready web applications with Next.js. Expert Next.js development services.',
};

export default function NextJsPage() {
  return (
    <main className="bg-background text-foreground">
      <TechHero data={nextjsData.hero} />
      <TechFeatures data={nextjsData.features} />
      <TechSpecs data={nextjsData.specs} />
      <TechUseCases data={nextjsData.useCases} />
      <TechCTA data={nextjsData.cta} />
    </main>
  );
}
