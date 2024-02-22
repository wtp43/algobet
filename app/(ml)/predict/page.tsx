import {
  Box,
  Center,
  Title,
  Blockquote,
  Button,
  Text,
  Container,
  Group,
  Anchor,
} from '@mantine/core';
import Link from 'next/link';
import { IconInfoCircle } from '@tabler/icons-react';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './PredictPage.module.css';

export default function PredictPage() {
  const icon = <IconInfoCircle />;
  return (
    <Container size="80%">
      <Title size="2rem">Machine Learning Models</Title>
      <Blockquote color="blue" cite="Bot #84" icon={icon} mt="xl">
        <Text>Beep Boop. The robots are busy mining the magic formula.</Text>
      </Blockquote>
      <Button
        className={classes.button}
        component={Link}
        href={process.env.NEXT_PUBLIC_ML_GITHUB_URL}
        variant="default"
        radius="md"
        leftSection={<GithubIcon size={15} />}
      >
        Monitor their progress on github
      </Button>
    </Container>
  );
}
