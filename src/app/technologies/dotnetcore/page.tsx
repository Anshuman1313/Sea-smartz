import TechCTA from '@/app/components/sections/TechCTA';
import TechFeatures from '@/app/components/sections/TechFeatures';
import TechHero from '@/app/components/sections/TechHero';
import TechSpecs from '@/app/components/sections/TechSpecs';
import TechUseCases from '@/app/components/sections/TechUseCases';
import { dotnetcoreData } from '@/lib/data/technologies/techdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '.NET Core Development Services | SeaSmartz',
  description: 'Enterprise-grade applications with .NET Core. Expert .NET development services.',
};

export default function DotNetCorePage() {
  return (
    <main className="bg-background text-foreground">
      <TechHero data={dotnetcoreData.hero} />
      <TechFeatures data={dotnetcoreData.features} />
      <TechSpecs data={dotnetcoreData.specs} />
      <TechUseCases data={dotnetcoreData.useCases} />
      <TechCTA data={dotnetcoreData.cta} />
    </main>
  );
}
