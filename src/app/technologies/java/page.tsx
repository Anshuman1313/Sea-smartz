import TechCTA from '@/app/components/sections/TechCTA';
import TechFeatures from '@/app/components/sections/TechFeatures';
import TechHero from '@/app/components/sections/TechHero';
import TechSpecs from '@/app/components/sections/TechSpecs';
import TechUseCases from '@/app/components/sections/TechUseCases';
import { javaData } from '@/lib/data/technologies/techdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Java Development Services | SeaSmartz',
  description: 'Enterprise-grade applications with Java. Expert Java development services.',
};

export default function JavaPage() {
  return (
    <main className="bg-background text-foreground">
      <TechHero data={javaData.hero} />
      <TechFeatures data={javaData.features} />
      <TechSpecs data={javaData.specs} />
      <TechUseCases data={javaData.useCases} />
      <TechCTA data={javaData.cta} />
    </main>
  );
}
