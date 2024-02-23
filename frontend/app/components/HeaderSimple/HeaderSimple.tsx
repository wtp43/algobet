'use client';

import { useState } from 'react';
import { Anchor, Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/stats', label: 'Stat Visualization' },
  { link: '/about', label: 'About' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      renderRoot={(props) => <Link href={link.link} {...props} />}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
