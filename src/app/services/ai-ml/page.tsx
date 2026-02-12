import ServiceBenefits from '@/app/components/sections/ServiceBenefits';
import ServiceCTA from '@/app/components/sections/ServiceCTA';
import ServiceDeliverables from '@/app/components/sections/ServiceDeliverables';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ServicePackages from '@/app/components/sections/ServicePackages';
import ServiceProcess from '@/app/components/sections/ServiceProcess';
import {  aiMlData } from '@/lib/data/services/servicesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Sea Smartz',
  description:
    'Performance-driven digital marketing services including SEO, PPC, paid ads, social media marketing, ORM, and ABM to grow traffic, leads, and revenue.',
};

export default function DigitalMarketingPage() {
  return (
    <main className="bg-background text-foreground">
      <ServiceHero data={aiMlData.hero} />
      <ServiceBenefits data={aiMlData.benefits} />
      <ServiceProcess data={aiMlData.process} />
      <ServiceDeliverables data={aiMlData.deliverables} />
      <ServicePackages data={aiMlData.packages} />
      <ServiceCTA data={aiMlData.cta} />
    </main>
  );
}
