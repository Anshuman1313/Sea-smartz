import IndustryCaseStudy from '@/app/components/sections/IndustryCaseStudy';
import IndustryChallenges from '@/app/components/sections/IndustryChallenges';
import IndustryCTA from '@/app/components/sections/IndustryCTA';
import IndustryHero from '@/app/components/sections/IndustryHero';
import IndustrySolutions from '@/app/components/sections/IndustrySolutions';
import { ecommerceData } from '@/lib/data/industries/industriesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Solutions | Sea Smartz',
  description: 'Scalable online stores that drive sales. Custom e-commerce platforms and marketplaces.',
};

export default function EcommercePage() {
  return (
    <main className="bg-background text-foreground">
      <IndustryHero data={ecommerceData.hero} />
      <IndustryChallenges data={ecommerceData.challenges} />
      <IndustrySolutions data={ecommerceData.solutions} />
      <IndustryCaseStudy data={ecommerceData.caseStudy} />
      <IndustryCTA data={ecommerceData.cta} />
    </main>
  );
}
