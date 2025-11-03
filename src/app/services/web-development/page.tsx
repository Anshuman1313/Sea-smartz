import ServiceBenefits from '@/app/components/sections/ServiceBenefits';
import ServiceCTA from '@/app/components/sections/ServiceCTA';
import ServiceDeliverables from '@/app/components/sections/ServiceDeliverables';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ServicePackages from '@/app/components/sections/ServicePackages';
import ServiceProcess from '@/app/components/sections/ServiceProcess';
import { webDevelopmentData } from '@/lib/data/services/servicesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services | Sea Smartz',
  description: 'Custom web applications built for scale. Responsive, scalable, and secure web solutions.',
};

export default function WebDevelopmentPage() {
  return (
    <main className="bg-background text-foreground">
      <ServiceHero data={webDevelopmentData.hero} />
      <ServiceBenefits data={webDevelopmentData.benefits} />
      <ServiceProcess data={webDevelopmentData.process} />
      <ServiceDeliverables data={webDevelopmentData.deliverables} />
      <ServicePackages data={webDevelopmentData.packages} />
      <ServiceCTA data={webDevelopmentData.cta} />
    </main>
  );
}
