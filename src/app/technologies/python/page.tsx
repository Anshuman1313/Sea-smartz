import TechCTA from '@/app/components/sections/TechCTA';
import TechFeatures from '@/app/components/sections/TechFeatures';
import TechHero from '@/app/components/sections/TechHero';
import TechSpecs from '@/app/components/sections/TechSpecs';
import TechUseCases from '@/app/components/sections/TechUseCases';
import { pythonData } from '@/lib/data/technologies/techdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Python Development Services | SeaSmartz',
  description: 'Versatile Python development for web, AI, and automation. Expert Python development services.',
};

export default function PythonPage() {
  return (
    <main className="bg-background text-foreground">
      <TechHero data={pythonData.hero} />
      <TechFeatures data={pythonData.features} />
      <TechSpecs data={pythonData.specs} />
      <TechUseCases data={pythonData.useCases} />
      <TechCTA data={pythonData.cta} />
    </main>
  );
}
