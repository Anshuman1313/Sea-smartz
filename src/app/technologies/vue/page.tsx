import TechCTA from '@/app/components/sections/TechCTA';
import TechFeatures from '@/app/components/sections/TechFeatures';
import TechHero from '@/app/components/sections/TechHero';
import TechSpecs from '@/app/components/sections/TechSpecs';
import TechUseCases from '@/app/components/sections/TechUseCases';
import { vueData } from '@/lib/data/technologies/techdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vue.js Development Services | SeaSmartz',
  description: 'Progressive JavaScript framework development with Vue.js. Expert Vue development services.',
};

export default function VuePage() {
  return (
    <main className="bg-background text-foreground">
      <TechHero data={vueData.hero} />
      <TechFeatures data={vueData.features} />
      <TechSpecs data={vueData.specs} />
      <TechUseCases data={vueData.useCases} />
      <TechCTA data={vueData.cta} />
    </main>
  );
}
