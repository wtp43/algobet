'use client';

import { Code, Group, ScrollArea } from '@mantine/core';
import {
  IconNotes,
  IconGauge,
  IconPresentationAnalytics,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import { useState } from 'react';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import classes from './StatsNavBar.module.css';

const navbarItems = [
  { label: 'Dashboard', icon: IconGauge, link: '/stats' },
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

  // const [active, setActive] = useState('Dashboard');
  //
  // const links = navbarItems.map((item: any) => (
  //   <a
  //     className={classes.link}
  //     data-active={item.label === active || undefined}
  //     href={item.link}
  //     key={item.label}
  //     onClick={(event) => {
  //       event.preventDefault();
  //       setActive(item.label);
  //     }}
  //   >
  //     <item.icon className={classes.linkIcon} stroke={1.5} />
  //     <span>{item.label}</span>
  //   </a>
  // ));
  //
  // return <nav className={classes.navbarMain}>{links}</nav>;
}
