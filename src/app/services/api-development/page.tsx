import ServiceBenefits from '@/app/components/sections/ServiceBenefits';
import ServiceCTA from '@/app/components/sections/ServiceCTA';
import ServiceDeliverables from '@/app/components/sections/ServiceDeliverables';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ServicePackages from '@/app/components/sections/ServicePackages';
import ServiceProcess from '@/app/components/sections/ServiceProcess';
import { apiDevelopmentData } from '@/lib/data/services/servicesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Development Services | SeaSmartz',
  description: 'RESTful & GraphQL APIs that power your applications. Secure, scalable, and well-documented APIs.',
};

export default function ApiDevelopmentPage() {
  return (
    <main className="bg-background text-foreground">
      <ServiceHero data={apiDevelopmentData.hero} />
      <ServiceBenefits data={apiDevelopmentData.benefits} />
      <ServiceProcess data={apiDevelopmentData.process} />
      <ServiceDeliverables data={apiDevelopmentData.deliverables} />
      <ServicePackages data={apiDevelopmentData.packages} />
      <ServiceCTA data={apiDevelopmentData.cta} />
    </main>
  );
}
