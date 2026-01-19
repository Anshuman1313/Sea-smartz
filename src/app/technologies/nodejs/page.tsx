import TechCTA from '@/app/components/sections/TechCTA';
import TechFeatures from '@/app/components/sections/TechFeatures';
import TechHero from '@/app/components/sections/TechHero';
import TechSpecs from '@/app/components/sections/TechSpecs';
import TechUseCases from '@/app/components/sections/TechUseCases';
import { nodejsData } from '@/lib/data/technologies/techdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Node.js Development Services | SeaSmartz',
  description: 'Scalable backend development with Node.js. Expert Node.js development services.',
};

export default function NodeJsPage() {
  return (
    <main className="bg-background text-foreground">
      <TechHero data={nodejsData.hero} />
      <TechFeatures data={nodejsData.features} />
      <TechSpecs data={nodejsData.specs} />
      <TechUseCases data={nodejsData.useCases} />
      <TechCTA data={nodejsData.cta} />
    </main>
  );
}
