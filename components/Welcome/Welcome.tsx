import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Container className={classes.wrapper} size="md">
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} x={4} y={14} />
      <Dots className={classes.dots} style={{ left: 40, top: 0 }} x={4} y={10} />
      <Dots className={classes.dots} style={{ right: -200, top: 40 }} x={5} y={10} />
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
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} radius="md" size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button className={classes.control} radius="md" size="lg">
            Purchase a license
          </Button>
        </div>
      </div>
    </Container>
  );
}
