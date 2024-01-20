'use client';

import { useState } from 'react';
import { Container, Anchor, Group, Box } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import Link from 'next/link';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/stats', label: 'Stat Visualization' },
  { link: '/predict', label: 'Predict' },
  { link: '/about', label: 'About' },
];

export function HeaderMenu() {
  // const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

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
