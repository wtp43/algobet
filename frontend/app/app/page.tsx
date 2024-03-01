'use client';

import {
  Title,
  Stack,
  Paper,
  Group,
  Card,
  Container,
  AppShellMain,
  Text,
  Badge,
} from '@mantine/core';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { getBoxscores, flattenPlayers } from '@/data/async';
import { Welcome } from '@/components/Welcome/Welcome';
import { Boxscore } from '@/components/Boxscore/Boxscore';
import { BoxscoreTeamsCards } from '@/components/BoxscoreTeamsCards/BoxscoreTeamsCards';
import { StatsGrid } from '@/components/StatsGrid/StatsGrid';
import classes from './page.module.css';
import { ModelTable } from '@/types/types';
import { PlayerPerformanceVisualization } from '@/components/PlayerPerformanceVisualization/PlayerPerformanceVisualization';
// import { MetaData } from 'next';

// export const metadata: Metadata = {
//   title: 'algobet',
//   description: 'data visualization for nba stats',
// };

export default function HomePage() {
  const { data } = useSuspenseQuery({
    queryKey: ['recent_boxscores'],
    queryFn: async () => getBoxscores({ limit: 1 }),
  });

  const homeBoxscoreRows = data ? flattenPlayers(data.getMatches[0]?.homePlayers?.edges) : [];
  const awayBoxscoreRows = data ? flattenPlayers(data.getMatches[0]?.awayPlayers?.edges) : [];

  return (
    <>
      <AppShellMain>
        <Welcome />
        <Container size="80%" py={50} className={classes.pageContainer}>
          {/* <Text className={classes.supTitle}>Use cases</Text> */}
          <Paper radius="md" p="md" className={classes.titleCard}>
            <Title order={2} className={classes.title} ta="center" mt="sm">
              Look up statistics for historical NBA games
            </Title>
            <Suspense>
              <Paper radius="md">
                {data?.getMatches[0] && <BoxscoreTeamsCards data={data?.getMatches[0]} />}
              </Paper>
              <Boxscore data={homeBoxscoreRows} />
              <Boxscore data={awayBoxscoreRows} />
            </Suspense>
          </Paper>

          <Container py={50} className={classes.chartContainer}>
            <Paper radius="md" p="md" className={classes.titleCard}>
              <Title order={2} className={classes.titleChart} ta="center" mt="sm">
                Interactive Charts
              </Title>
              {/* <Title order={2} className={classes.sectionTitle} ta="center" mt="sm"> */}
              {/*   Interactive Charts */}
              {/* </Title> */}
              {/* temporarily display on home page until stats dashboard is fully implemented  */}
              <Container className={classes.chartContainer}>
                <Suspense>
                  <PlayerPerformanceVisualization
                    playerId={355}
                    col="pts"
                    startDate="2020-10-30"
                    endDate="2021-6-30"
                    limit={500}
                  ></PlayerPerformanceVisualization>
                </Suspense>
              </Container>
            </Paper>
          </Container>
          {/* todo: statgrid */}
        </Container>
      </AppShellMain>
    </>
  );
}
