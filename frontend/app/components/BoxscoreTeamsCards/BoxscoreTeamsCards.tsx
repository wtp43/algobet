import { Card, Stack, Center, Container, Title, Text, Badge, Group, Flex } from '@mantine/core';
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
  // Typescript: nullish coalescing operator has lower precedence than comparison operator
  const homeTeamWon = (data?.homePts ?? 0) > (data?.awayPts ?? 0);
  return (
    <Container size="100%" px={0}>
      {/* <Group justify="space-between" h="100%"> */}
      {/* <Paper withBorder radius="md" className={classes.homeCard}> */}
      <Group justify="space-between" className={classes.cardContainer}>
        <Flex direction="row">
          <Image
            src={
              teamInfo[
                (homeTeam?.teamAbbr as keyof typeof teamInfo) ?? ('ATL' as keyof typeof teamInfo)
              ].src
            }
            height={110}
            width={110}
            alt="NBA logo"
            className={classes.homeLogo}
          />
          <Title
            className={homeTeamWon === true ? classes.highlightWinner : classes.highlightLoser}
            size="3rem"
            mt="xs"
          >
            {data?.homePts}
          </Title>
        </Flex>
        <Stack>
          <Center>
            <Text size="3rem">-</Text>
          </Center>

          <Center>
            <Badge variant="light" size="lg">
              {data?.date}
            </Badge>
          </Center>
        </Stack>
        <Flex direction="row-reverse">
          <Image
            src={
              teamInfo[
                (awayTeam?.teamAbbr as keyof typeof teamInfo) ?? ('ATL' as keyof typeof teamInfo)
              ].src
            }
            height={110}
            width={110}
            alt="NBA logo"
            className={classes.awayLogo}
          />
          <Title
            className={homeTeamWon === false ? classes.highlightWinner : classes.highlightLoser}
            size="3rem"
            mt="xs"
          >
            {data?.awayPts}
          </Title>
        </Flex>
        {/* </Flex> */}
        {/* <Group className={classes.cardContainer}> */}
        {/*   <Text className={classes.highlightTeam} ta="right" size="xl" fw={600}> */}
        {/*     {homeTeam?.teamName.toUpperCase()} */}
        {/*   </Text> */}
        {/*   {homeTeamWon && <Badge color="lime.5">Won</Badge>} */}
        {/*   {!homeTeamWon && <Badge color="pink.6">Lost</Badge>} */}
        {/* </Group> */}
      </Group>
      <Group className={classes.cardContainer}>
        <Badge variant="light" size="lg">
          <Text className={classes.highlightTeam} ta="right" size="md" fw={600}>
            {homeTeam?.teamName}
          </Text>
        </Badge>
        {/*   {homeTeamWon && <Badge color="lime.5">Won</Badge>} */}
        {/*   {!homeTeamWon && <Badge color="pink.6">Lost</Badge>} */}

        <Badge variant="light" size="lg">
          <Text className={classes.highlightTeam} ta="right" size="md" fw={600}>
            {awayTeam?.teamName}
          </Text>
        </Badge>
      </Group>

      {/* <Group className={classes.cardContainer}> */}
      {/*   {homeTeamWon && <Badge color="lime.5">Won</Badge>} */}
      {/*   {!homeTeamWon && <Badge color="pink.6">Lost</Badge>} */}
      {/*   {!homeTeamWon && <Badge color="lime.5">Won</Badge>} */}
      {/*   {homeTeamWon && <Badge color="pink.6">Lost</Badge>} */}
      {/* </Group> */}

      {/* <Divider my="xs" /> */}
      {/* // </Paper> */}
      {/* // </Group> */}
    </Container>
  );
}
