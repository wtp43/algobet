import {
  Blockquote,
  Button,
  Center,
  Container,
  Group,
  Loader,
  Paper,
  Skeleton,
  Text,
  Title,
} from '@mantine/core';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { IconProgressAlert } from '@tabler/icons-react';
import classes from './page.module.css';
import { BoxscoreForm } from '@/components/BoxscoreForm/BoxscoreForm';
import { PlayerPerformanceVisualization } from '@/components/PlayerPerformanceVisualization/PlayerPerformanceVisualization';

export default function Page() {
  const icon = <IconProgressAlert />;
  return (
    <>
      <Container size="80%" px={0}>
        <Title size="2rem" style={{ color: 'var(--mantine-color-blue-6);' }}>
          Data Visualization Dashboard Status
        </Title>
        <Blockquote color="blue" icon={icon} mt="xl">
          <Text>Under construction, coming soon.</Text>
        </Blockquote>
        <BoxscoreForm />
        <Container className={classes.chartContainer}>
          {/* <Suspense> */}
          {/*   <PlayerPerformanceVisualization */}
          {/*     playerId={355} */}
          {/*     col="pts" */}
          {/*   ></PlayerPerformanceVisualization> */}
          {/* </Suspense> */}
        </Container>
      </Container>
    </>
  );
}
