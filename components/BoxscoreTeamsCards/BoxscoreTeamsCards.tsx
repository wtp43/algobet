import { Card, Container, Title, Paper, Text, rem, Badge, Group, Flex } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './BoxscoreTeamsCards.module.css';
import { ModelTable } from '@/types/types';
import { teamInfo } from '@/constants/constants';

interface BoxscoreTeamsCardsProps {
  data: ModelTable;
}
export function BoxscoreTeamsCards({ data }: BoxscoreTeamsCardsProps) {
  const homeTeam = data?.homeTeam;
  const awayTeam = data?.awayTeam;
  const homeTeamWon = data ? data?.homePts > data?.awayPts : true;
  return (
    <Container size="100%" px={0}>
      <Card>
        <Group justify="space-between" h="100%">
          <Paper withBorder radius="md" className={classes.homeCard}>
            <Container className={classes.cardContainer}>
              <Flex direction="row">
                <Image
                  src={homeTeam ? teamInfo[homeTeam?.teamAbbr].src : 'logo.png'}
                  height={110}
                  width={110}
                  alt="NBA logo"
                  className={classes.homeLogo}
                />
                <Title
                  className={
                    homeTeamWon === true ? classes.highlightWinner : classes.highlightLoser
                  }
                  size="5rem"
                  mt="xs"
                >
                  {data?.homePts}
                </Title>
              </Flex>
              <Group className={classes.cardContainer}>
                <Text className={classes.highlightTeam} ta="right" size="xl" fw={700}>
                  {homeTeam?.teamName}
                </Text>
                {homeTeamWon && <Badge color="lime.5">Won</Badge>}
                {!homeTeamWon && <Badge color="pink.6">Lost</Badge>}
              </Group>
            </Container>
          </Paper>
          <Paper withBorder radius="md" className={classes.awayCard}>
            <Container className={classes.cardContainer}>
              <Flex direction="row-reverse">
                <Image
                  src={awayTeam ? teamInfo[awayTeam?.teamAbbr].src : 'logo.png'}
                  height={110}
                  width={110}
                  alt="NBA logo"
                  className={classes.awayLogo}
                />
                <Title
                  className={
                    homeTeamWon === false ? classes.highlightWinner : classes.highlightLoser
                  }
                  size="5rem"
                  mt="xs"
                >
                  {data?.awayPts}
                </Title>
              </Flex>
              <Group className={classes.cardContainer}>
                {!homeTeamWon && <Badge color="lime.5">Won</Badge>}
                {homeTeamWon && <Badge color="pink.6">Lost</Badge>}
                <Text className={classes.highlightTeam} ta="right" size="xl" fw={700}>
                  {awayTeam?.teamName}
                </Text>
              </Group>
            </Container>
          </Paper>
        </Group>
      </Card>
    </Container>
  );
}
