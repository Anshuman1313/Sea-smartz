import ServiceBenefits from '@/app/components/sections/ServiceBenefits';
import ServiceCTA from '@/app/components/sections/ServiceCTA';
import ServiceDeliverables from '@/app/components/sections/ServiceDeliverables';
import ServiceHero from '@/app/components/sections/ServiceHero';
import ServicePackages from '@/app/components/sections/ServicePackages';
import ServiceProcess from '@/app/components/sections/ServiceProcess';
import { mobileAppsData } from '@/lib/data/services/servicesdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | Sea Smartz',
  description: 'iOS & Android solutions for modern businesses. Native and cross-platform mobile applications.',
};

export default function MobileAppsPage() {
  return (
    <main className="bg-background text-foreground">
      <ServiceHero data={mobileAppsData.hero} />
      <ServiceBenefits data={mobileAppsData.benefits} />
      <ServiceProcess data={mobileAppsData.process} />
      <ServiceDeliverables data={mobileAppsData.deliverables} />
      <ServicePackages data={mobileAppsData.packages} />
      <ServiceCTA data={mobileAppsData.cta} />
    </main>
  );
}
