import { Box, Center, Blockquote, Button, Text, Container, Group, Anchor } from '@mantine/core';
import Link from 'next/link';
import { IconInfoCircle } from '@tabler/icons-react';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './PredictPage.module.css';

export default function PredictPage() {
  const icon = <IconInfoCircle />;
  return (
    <Container size="80%">
      <Blockquote color="blue" cite="Bot #84" icon={icon} mt="xl">
        <Text>Beep Boop. The robots are busy mining the magic formula.</Text>
      </Blockquote>
      <Button
        className={classes.button}
        component={Link}
        href="https://github.com/WJT98/NBA_ML"
        variant="default"
        radius="md"
        leftSection={<GithubIcon size={15} />}
      >
        Monitor their progress on github
      </Button>
    </Container>
  );
}
