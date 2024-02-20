import { Container, AppShellMain } from '@mantine/core';
import { getBoxscores } from '@/data/async';
import { Welcome } from '@/components/Welcome/Welcome';
import { Boxscore } from '@/components/Boxscore/Boxscore';
// import { MetaData } from 'next';

// export const metadata: Metadata = {
//   title: 'algobet',
//   description: 'data visualization for nba stats',
// };

export default async function HomePage() {
  return (
    <>
      <Container size="100%" px={0}>
        <AppShellMain />
      </Container>
    </>
  );
}
