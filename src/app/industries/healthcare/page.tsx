import IndustryCaseStudy from '@/app/components/sections/IndustryCaseStudy';
import IndustryChallenges from '@/app/components/sections/IndustryChallenges';
import IndustryCTA from '@/app/components/sections/IndustryCTA';
import IndustryHero from '@/app/components/sections/IndustryHero';
import IndustrySolutions from '@/app/components/sections/IndustrySolutions';
import { healthcareData } from '@/lib/data/industries/industriesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare IT Solutions | Sea Smartz',
  description: 'HIPAA-compliant healthcare technology solutions. EMR, telehealth, and patient management systems.',
};

export default function HealthcarePage() {
  return (
    <main className="bg-background text-foreground">
      <IndustryHero data={healthcareData.hero} />
      <IndustryChallenges data={healthcareData.challenges} />
      <IndustrySolutions data={healthcareData.solutions} />
      <IndustryCaseStudy data={healthcareData.caseStudy} />
      <IndustryCTA data={healthcareData.cta} />
    </main>
  );
}
