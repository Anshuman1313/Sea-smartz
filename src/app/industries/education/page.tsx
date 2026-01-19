import IndustryCaseStudy from '@/app/components/sections/IndustryCaseStudy';
import IndustryChallenges from '@/app/components/sections/IndustryChallenges';
import IndustryCTA from '@/app/components/sections/IndustryCTA';
import IndustryHero from '@/app/components/sections/IndustryHero';
import IndustrySolutions from '@/app/components/sections/IndustrySolutions';
import { educationData } from '@/lib/data/industries/industriesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education Technology Solutions | ',
  description: 'Learning management systems for modern education. LMS, virtual classrooms, and EdTech platforms.',
};

export default function EducationPage() {
  return (
    <main className="bg-background text-foreground">
      <IndustryHero data={educationData.hero} />
      <IndustryChallenges data={educationData.challenges} />
      <IndustrySolutions data={educationData.solutions} />
      <IndustryCaseStudy data={educationData.caseStudy} />
      <IndustryCTA data={educationData.cta} />
    </main>
  );
}
