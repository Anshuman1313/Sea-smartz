import TeamCTA from '@/app/components/sections/TeamCTA';
import TeamHero from '@/app/components/sections/TeamHero';
import TeamsGrid from '@/app/components/sections/TeamsGrid';
import { frontendData } from '@/lib/data/teams/teamsdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Frontend Developers | Sea Smartz',
  description: 'React, Angular, Vue experts for your team. Hire skilled frontend developers.',
};

export default function FrontendTeamPage() {
  return (
    <main className="bg-background text-foreground">
      <TeamHero data={frontendData.hero} />
      <TeamsGrid data={frontendData.teams} />
      <TeamCTA data={frontendData.cta} />
    </main>
  );
}
