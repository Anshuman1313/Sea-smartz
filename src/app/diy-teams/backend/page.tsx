import TeamCTA from '@/app/components/sections/TeamCTA';
import TeamHero from '@/app/components/sections/TeamHero';
import TeamsGrid from '@/app/components/sections/TeamsGrid';
import { backendData } from '@/lib/data/teams/teamsdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Backend Developers | Sea Smartz',
  description: 'Node.js, .NET, Java & more specialists. Hire experienced backend developers.',
};

export default function BackendTeamPage() {
  return (
    <main className="bg-background text-foreground">
      <TeamHero data={backendData.hero} />
      <TeamsGrid data={backendData.teams} />
      <TeamCTA data={backendData.cta} />
    </main>
  );
}
