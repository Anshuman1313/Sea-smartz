import ServiceBenefits from '@/app/components/sections/ServiceBenefits';
import ServiceCTA from '@/app/components/sections/ServiceCTA';
import ServiceDeliverables from '@/app/components/sections/ServiceDeliverables';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ServicePackages from '@/app/components/sections/ServicePackages';
import ServiceProcess from '@/app/components/sections/ServiceProcess';
import { cloudSolutionsData } from '@/lib/data/services/servicesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Solutions Services | Sea Smartz',
  description: 'AWS, Azure & GCP cloud architecture experts. Cloud migration and managed services.',
};

export default function CloudSolutionsPage() {
  return (
    <main className="bg-background text-foreground">
      <ServiceHero data={cloudSolutionsData.hero} />
      <ServiceBenefits data={cloudSolutionsData.benefits} />
      <ServiceProcess data={cloudSolutionsData.process} />
      <ServiceDeliverables data={cloudSolutionsData.deliverables} />
      <ServicePackages data={cloudSolutionsData.packages} />
      <ServiceCTA data={cloudSolutionsData.cta} />
    </main>
  );
}
