'use client';

import { useState } from 'react';
import { Container, Anchor, Group, Box } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/stats', label: 'Stat Visualization' },
  { link: '/predict', label: 'Predict' },
  { link: '/about', label: 'About' },
];

enum LinkIndex {
  'stats' = 1,
  'predict' = 2,
  'about' = 3,
}

export function HeaderMenu() {
  // const [opened, { toggle }] = useDisclosure(false);

  const pathname = usePathname();

  const [active, setActive] = useState(() => {
    const arr = pathname.split('/');
    if (arr[1] !== '') {
      return LinkIndex[arr[1] as keyof typeof LinkIndex];
    }
    return 0;
  });

  const mainItems = links.map((item, index) => (
    <Anchor
      component={Link}
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={() => {
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container className={classes.inner}>
          <MantineLogo size={34} />
          {/* <a href="/"> */}
          {/*     <img src="logo.png"... /> */}
          {/* </a> */}
          <Box className={classes.links} visibleFrom="sm">
            <Group gap={0} justify="flex-end" className={classes.mainLinks}>
              {mainItems}
            </Group>
          </Box>
        </Container>
      </header>
    </>
  );
}
