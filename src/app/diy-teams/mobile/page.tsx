import TeamCTA from '@/app/components/sections/TeamCTA';
import TeamHero from '@/app/components/sections/TeamHero';
import TeamsGrid from '@/app/components/sections/TeamsGrid';
import { mobileData } from '@/lib/data/teams/teamsdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Mobile App Developers | SeaSmartz',
  description: 'Native & cross-platform specialists. Hire expert mobile developers.',
};

export default function MobileTeamPage() {
  return (
    <main className="bg-background text-foreground">
      <TeamHero data={mobileData.hero} />
      <TeamsGrid data={mobileData.teams} />
      <TeamCTA data={mobileData.cta} />
    </main>
  );
}
