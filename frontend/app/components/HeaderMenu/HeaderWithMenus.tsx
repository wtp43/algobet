'use client';

import {
  Container,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  ActionIcon,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconCode,
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconBrandGraphql,
} from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './HeaderWithMenus.module.css';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

//todo: jupyter notebook to html
//link to github for now
const dropdownData = [
  {
    icon: IconChartPie3,
    title: 'Exploratory Data Analysis',
    description: 'Analyze historical NBA to gain insight on Basketball as a sport. ',
    // link: '/ml/exploratory-data-analysis',
    link: 'https://github.com/wtp43/NBA-Machine-Learning-Research',
  },
  {
    icon: IconBook,
    title: 'Feature Engineering',
    description: 'Process new features from data for use in machine learning models.',
    // link: '/ml/feature-engineering',
    //
    link: 'https://github.com/wtp43/NBA-ETL-Pipeline',
  },
  {
    icon: IconCode,
    title: 'Machine Learning Models',
    description:
      'Train models solely for prediction performance determined by time series cross-validation.',
    // 'Fine tune and train models for prediction performance. Best prediction performance determined by time series cross-validation.',
    // link: '/ml/model-training',
    link: 'https://github.com/wtp43/NBA-Machine-Learning-Research',
  },
  {
    icon: IconCode,
    title: 'Predictions and Bet Sizing',
    description:
      'Under construction: get predictions for value bets and bet sizing given recent stats.',
    link: '/ml/predict',
  },
];

export function HeaderWithMenus() {
  // const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  // const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = dropdownData.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <Anchor component={Link} underline="never" href={item.link} key={item.title}>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Anchor>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <Container size="80%" px={0}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%" className={classes.logoGroup}>
            <Group justify="flex-start" h="100%">
              <Link href="/">
                <Image
                  className={classes.icon}
                  priority
                  src="/logo.png"
                  height={43}
                  width={114}
                  alt="logo"
                />
              </Link>
              <Anchor component={Link} href="/stats" key="stats" className={classes.link}>
                Stat Visualization
              </Anchor>
              <Group h="100%" gap={0} visibleFrom="md">
                <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                  <HoverCard.Target>
                    <Anchor component={Link} href="/ml-predict" key="ml" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Machine Learning Research
                        </Box>
                        <IconChevronDown
                          style={{ width: rem(16), height: rem(16) }}
                          color={theme.colors.blue[6]}
                        />
                      </Center>
                    </Anchor>
                  </HoverCard.Target>

                  <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                    <Group justify="space-between" px="md">
                      <Text fw={500}>Jupyter Notebooks</Text>
                    </Group>

                    <Divider my="sm" />

                    <SimpleGrid cols={2} spacing={0}>
                      {links}
                    </SimpleGrid>

                    <div className={classes.dropdownFooter}>
                      <Group justify="space-between">
                        <div>
                          <Text fw={500} fz="sm">
                            Open source
                          </Text>
                          <Text size="xs" c="dimmed"></Text>
                        </div>
                        <Button variant="default">Learn More</Button>
                      </Group>
                    </div>
                  </HoverCard.Dropdown>
                </HoverCard>

                {/* todo: implement blogs/post page */}
                {/* <Anchor component={Link} href="/blog" key="blog" className={classes.link}> */}
                {/*   Blog */}
                {/* </Anchor> */}
              </Group>
            </Group>

            <Group visibleFrom="md">
              <Button
                component="a"
                href={process.env.NEXT_PUBLIC_GRAPHQL_API}
                size="xs"
                variant="default"
                className={classes.control}
                leftSection={<IconBrandGraphql size={20} />}
              >
                Graph<i>i</i>QL
              </Button>
              <ActionIcon
                className={classes.control}
                component={Link}
                href={process.env.NEXT_PUBLIC_APP_GITHUB_URL ?? 'https://github.com'}
                variant="outline"
                color="blue"
                size="lg"
                aria-label="Toggle color scheme"
                radius="md"
              >
                <GithubIcon size={20} />
              </ActionIcon>
              <ColorSchemeToggle />
            </Group>

            {/* todo: drawers for mobile */}
            {/* <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" /> */}
          </Group>
        </header>
        {/* Not yet implemented for mobile */}
        {/* <Drawer */}
        {/*   opened={drawerOpened} */}
        {/*   onClose={closeDrawer} */}
        {/*   size="100%" */}
        {/*   padding="md" */}
        {/*   title="Navigation" */}
        {/*   hiddenFrom="sm" */}
        {/*   zIndex={1000000} */}
        {/* > */}
        {/*   <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md"> */}
        {/*     <Divider my="sm" /> */}
        {/**/}
        {/*     <a href="#" className={classes.link}> */}
        {/*       Home */}
        {/*     </a> */}
        {/*     <UnstyledButton className={classes.link} onClick={toggleLinks}> */}
        {/*       <Center inline> */}
        {/*         <Box component="span" mr={5}> */}
        {/*           Features */}
        {/*         </Box> */}
        {/*         <IconChevronDown */}
        {/*           style={{ width: rem(16), height: rem(16) }} */}
        {/*           color={theme.colors.blue[6]} */}
        {/*         /> */}
        {/*       </Center> */}
        {/*     </UnstyledButton> */}
        {/*     <Collapse in={linksOpened}>{links}</Collapse> */}
        {/*     <a href="#" className={classes.link}> */}
        {/*       Learn */}
        {/*     </a> */}
        {/*     <a href="#" className={classes.link}> */}
        {/*       Academy */}
        {/*     </a> */}
        {/**/}
        {/*     <Divider my="sm" /> */}
        {/**/}
        {/*     <Group justify="center" grow pb="xl" px="md"> */}
        {/*       <Button variant="default">Log in</Button> */}
        {/*       <Button>Sign up</Button> */}
        {/*     </Group> */}
        {/*   </ScrollArea> */}
        {/* </Drawer> */}
      </Container>
    </Box>
  );
}
