import TechCTA from '@/app/components/sections/TechCTA';
import TechFeatures from '@/app/components/sections/TechFeatures';
import TechHero from '@/app/components/sections/TechHero';
import TechSpecs from '@/app/components/sections/TechSpecs';
import TechUseCases from '@/app/components/sections/TechUseCases';
import { dotnetData } from '@/lib/data/technologies/techdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '.NET Core Development Services | SeaSmartz',
  description: 'Enterprise-grade applications with .NET Core. Expert .NET development services.',
};

export default function DotNetPage() {
  return (
    <main className="bg-background text-foreground">
      <TechHero data={dotnetData.hero} />
      <TechFeatures data={dotnetData.features} />
      <TechSpecs data={dotnetData.specs} />
      <TechUseCases data={dotnetData.useCases} />
      <TechCTA data={dotnetData.cta} />
    </main>
  );
}
