import ServiceBenefits from '@/app/components/sections/ServiceBenefits';
import ServiceCTA from '@/app/components/sections/ServiceCTA';
import ServiceDeliverables from '@/app/components/sections/ServiceDeliverables';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ServicePackages from '@/app/components/sections/ServicePackages';
import ServiceProcess from '@/app/components/sections/ServiceProcess';
import { consultingData } from '@/lib/data/services/servicesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Consulting Services | Sea Smartz',
  description: 'Strategic guidance for digital transformation. Expert technology consulting and architecture services.',
};

export default function ConsultingPage() {
  return (
    <main className="bg-background text-foreground">
      <ServiceHero data={consultingData.hero} />
      <ServiceBenefits data={consultingData.benefits} />
      <ServiceProcess data={consultingData.process} />
      <ServiceDeliverables data={consultingData.deliverables} />
      <ServicePackages data={consultingData.packages} />
      <ServiceCTA data={consultingData.cta} />
    </main>
  );
}
