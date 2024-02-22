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
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconBrandGraphql,
} from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@mantinex/dev-icons';
import { usePathname } from 'next/navigation';
import classes from './HeaderWithMenus.module.css';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

const dropdownData = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export function HeaderWithMenus() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = dropdownData.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
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
              <Group h="100%" gap={0} visibleFrom="md">
                {/* <Anchor component={Link} href="/" key="home" className={classes.link}> */}
                {/*   Home */}
                {/* </Anchor> */}
                <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                  <HoverCard.Target>
                    <Anchor component={Link} href="/stats" key="stats" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Stat Visualization
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
                      <Text fw={500}>Features</Text>
                      <Anchor href="#" fz="xs">
                        View all
                      </Anchor>
                    </Group>

                    <Divider my="sm" />

                    <SimpleGrid cols={2} spacing={0}>
                      {links}
                    </SimpleGrid>

                    <div className={classes.dropdownFooter}>
                      <Group justify="space-between">
                        <div>
                          <Text fw={500} fz="sm">
                            Get started
                          </Text>
                          <Text size="xs" c="dimmed">
                            Their food sources have decreased, and their numbers
                          </Text>
                        </div>
                        <Button variant="default">Get started</Button>
                      </Group>
                    </div>
                  </HoverCard.Dropdown>
                </HoverCard>

                <Anchor
                  component={Link}
                  href="/feature-engineering"
                  key="feature-engineering"
                  className={classes.link}
                >
                  Feature Engineering
                </Anchor>
                <Anchor component={Link} href="/predict" key="predict" className={classes.link}>
                  Predict
                </Anchor>
                <Anchor component={Link} href="/blog" key="blog" className={classes.link}>
                  Blog
                </Anchor>
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
                GraphQL
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

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
          </Group>
        </header>
        {/* Not yet implemented for mobile */}
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
        {/* </Group> */}
      </Container>
    </Box>
  );
}
