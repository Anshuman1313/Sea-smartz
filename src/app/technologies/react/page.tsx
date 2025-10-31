
import TechCTA from '@/app/components/sections/TechCTA';
import TechFeatures from '@/app/components/sections/TechFeatures';
import TechHero from '@/app/components/sections/TechHero';
import TechSpecs from '@/app/components/sections/TechSpecs';
import TechUseCases from '@/app/components/sections/TechUseCases';
import { reactData } from '@/lib/data/technologies/techdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'React.js Development Services | Sea Smartz',
  description: 'Build interactive UIs with React.js. Expert React development services.',
};

export default function ReactPage() {
  return (
    <main className="bg-background text-foreground">
      <TechHero data={reactData.hero} />
      <TechFeatures data={reactData.features} />
      <TechSpecs data={reactData.specs} /> {/* NEW SECTION! */}
      <TechUseCases data={reactData.useCases} />
      <TechCTA data={reactData.cta} />
    </main>
  );
}
