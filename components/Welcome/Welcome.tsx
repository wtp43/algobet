import { Group, Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Container className={classes.mainContainer} size="100%" px={0}>
      <Group visibleFrom="md">
        <Dots className={classes.dots} style={{ left: 120, top: 0 }} x={6} y={16} />
        <Dots className={classes.dots} style={{ left: 120, top: 0 }} x={8} y={8} />
        <Dots className={classes.dots} style={{ right: -20, top: 40 }} x={8} y={10} />
      </Group>
      <Container className={classes.wrapper} size="80%">
        <div className={classes.inner}>
          <Title className={classes.title}>
            NBA{' '}
            <Text
              component="span"
              className={classes.highlight}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              inherit
            >
              stat visualization
            </Text>
            {' and '}
            <Text
              component="span"
              className={classes.highlight}
              variant="gradient"
              gradient={{ from: 'pink', to: 'purple' }}
              inherit
            >
              predictions
            </Text>
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              Visualize historical data of NBA players or teams
            </Text>
            <Text size="lg" c="dimmed" className={classes.description}>
              Boost your predictions with extensive statistics for your favorite teams and players
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button className={classes.control} radius="md" size="md" variant="default">
              View Stats
            </Button>
            <Button className={classes.control} radius="md" size="md" color="cyan">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
}
