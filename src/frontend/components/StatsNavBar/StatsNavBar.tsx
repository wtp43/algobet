'use client';

import { ScrollArea } from '@mantine/core';
import { IconNotes, IconGauge, IconPresentationAnalytics } from '@tabler/icons-react';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import classes from './StatsNavBar.module.css';

const navbarItems = [
  { label: 'Dashboard', icon: IconGauge, link: '/stats/dashboard' },
  { label: 'Box Scores', icon: IconPresentationAnalytics, link: '/stats/boxscores' },
  {
    label: 'Player Stats',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Recent', link: '/stats/recent' },
      { label: 'Trends', link: '/stats/trends' },
    ],
  },
];

export function StatsNavBar() {
  const links = navbarItems.map((item, index) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
}
