import AboutCTA from '@/app/components/sections/AboutCTA';
import AboutHero from '@/app/components/sections/AboutHero';
import AboutJourney from '@/app/components/sections/AboutJourney';
import AboutStory from '@/app/components/sections/AboutStory';
import AboutTeam from '@/app/components/sections/AboutTeam';
import { aboutData } from '@/lib/data/about/aboutdata';
import { Metadata } from 'next';
import AboutValues from '../components/sections/AboutValues';

export const metadata: Metadata = {
  title: 'About Us | Sea Smartz',
  description: 'Learn about Sea Smartz - your trusted partner in digital transformation. 10+ years of innovation, 500+ projects delivered.',
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <AboutHero data={aboutData.hero} />
      <AboutStory data={aboutData.story} />
      <AboutValues data={aboutData.values} />
      <AboutTeam data={aboutData.team} />
      <AboutJourney data={aboutData.journey} />
      <AboutCTA data={aboutData.cta} />
    </main>
  );
}
