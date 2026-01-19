import TeamCTA from '@/app/components/sections/TeamCTA';
import TeamHero from '@/app/components/sections/TeamHero';
import TeamsGrid from '@/app/components/sections/TeamsGrid';
import { fullstackData } from '@/lib/data/teams/teamsdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Full Stack Developers | SeaSmartz',
  description: 'End-to-end development expertise. Hire versatile full stack developers.',
};

export default function FullStackTeamPage() {
  return (
    <main className="bg-background text-foreground">
      <TeamHero data={fullstackData.hero} />
      <TeamsGrid data={fullstackData.teams} />
      <TeamCTA data={fullstackData.cta} />
    </main>
  );
}
