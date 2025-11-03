import ServiceBenefits from '@/app/components/sections/ServiceBenefits';
import ServiceCTA from '@/app/components/sections/ServiceCTA';
import ServiceDeliverables from '@/app/components/sections/ServiceDeliverables';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ServicePackages from '@/app/components/sections/ServicePackages';
import ServiceProcess from '@/app/components/sections/ServiceProcess';
import { devopsData } from '@/lib/data/services/servicesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps Services | Sea Smartz',
  description: 'CI/CD pipelines & automation for faster delivery. Infrastructure as Code and container orchestration.',
};

export default function DevOpsPage() {
  return (
    <main className="bg-background text-foreground">
      <ServiceHero data={devopsData.hero} />
      <ServiceBenefits data={devopsData.benefits} />
      <ServiceProcess data={devopsData.process} />
      <ServiceDeliverables data={devopsData.deliverables} />
      <ServicePackages data={devopsData.packages} />
      <ServiceCTA data={devopsData.cta} />
    </main>
  );
}
