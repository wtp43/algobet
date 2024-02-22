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
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { getBoxscores, flattenPlayers } from '@/data/async';
import { Welcome } from '@/components/Welcome/Welcome';
import { Boxscore } from '@/components/Boxscore/Boxscore';
import { BoxscoreTeamsCards } from '@/components/BoxscoreTeamsCards/BoxscoreTeamsCards';
import { StatsGrid } from '@/components/StatsGrid/StatsGrid';
import classes from './page.module.css';
// import { testdata } from '@/constants/test';
// import { LineChart } from '@/components/LineChart/LineChart';
import { ModelTable } from '@/types/types';
// import { MetaData } from 'next';

// export const metadata: Metadata = {
//   title: 'algobet',
//   description: 'data visualization for nba stats',
// };

export default function HomePage() {
  const { error, data } = useSuspenseQuery({
    queryKey: ['recent_boxscores'],
    queryFn: async () => getBoxscores({ limit: 1 }),
  });

  const homeBoxscoreRows = flattenPlayers(data.getMatches[0]?.homePlayers?.edges);
  const awayBoxscoreRows = flattenPlayers(data.getMatches[0]?.awayPlayers?.edges);
  return (
    <>
      <AppShellMain>
        <Welcome />
        <Container size="80%" px={0}>
          <Text className={classes.supTitle}>Use cases</Text>
          <Paper radius="md" p="xl" className={classes.titleCard}>
            <Title order={2} className={classes.title} ta="center" mt="sm">
              Look up statistics for any NBA game
            </Title>
            <Text c="dimmed" className={classes.description} ta="center" mt="md">
              Be well informed about the latest NBA games
            </Text>{' '}
          </Paper>
          <Paper withBorder radius="md" className={classes.card}>
            {data?.getMatches[0] && <BoxscoreTeamsCards data={data?.getMatches[0]} />}
          </Paper>
          <Boxscore data={homeBoxscoreRows} />
          <Boxscore data={awayBoxscoreRows} />
          <Group>
            <Paper withBorder radius="md" p="xl">
              <Title order={4} className={classes.cardTitle} ta="center" mt="sm">
                Extensive Statistics
              </Title>
              <Paper radius="md">
                <StatsGrid diff={9} value={56} title="Change in ema" />
              </Paper>
            </Paper>
            <Paper withBorder radius="md" p="xl" className={classes.chartContainer}>
              <Title order={4} className={classes.cardTitle} ta="center" mt="sm">
                Interactive Charts
              </Title>
              {/* <ParentSize> */}
              {/*   {(parent) => ( */}
              {/*     <LineChart */}
              {/*       width={parent.width} */}
              {/*       height={parent.height} */}
              {/*       data={testdata} */}
              {/*       // parentTop={parent.top} */}
              {/*       // parentLeft={parent.left} */}
              {/*       // // this is the referrer to the wrapper component */}
              {/*       // parentRef={parent.ref} */}
              {/*       // // this function can be called inside MyVisxChart to cause a resize of the wrapper component */}
              {/*       // resizeParent={parent.resize} */}
              {/*     /> */}
              {/*   )} */}
              {/* </ParentSize> */}
            </Paper>
          </Group>
        </Container>
      </AppShellMain>
    </>
  );
}
