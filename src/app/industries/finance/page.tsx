import IndustryCaseStudy from '@/app/components/sections/IndustryCaseStudy';
import IndustryChallenges from '@/app/components/sections/IndustryChallenges';
import IndustryCTA from '@/app/components/sections/IndustryCTA';
import IndustryHero from '@/app/components/sections/IndustryHero';
import IndustrySolutions from '@/app/components/sections/IndustrySolutions';
import { financeData } from '@/lib/data/industries/industriesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Services IT Solutions | SeaSmartz',
  description: 'Secure fintech applications. Digital banking, payment processing, and wealth management platforms.',
};

export default function FinancePage() {
  return (
    <main className="bg-background text-foreground">
      <IndustryHero data={financeData.hero} />
      <IndustryChallenges data={financeData.challenges} />
      <IndustrySolutions data={financeData.solutions} />
      <IndustryCaseStudy data={financeData.caseStudy} />
      <IndustryCTA data={financeData.cta} />
    </main>
  );
}
