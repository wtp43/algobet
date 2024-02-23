import '@mantine/core/styles.layer.css';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { AppShellNavbar, AppShellMain } from '@mantine/core';
import { StatsNavBar } from '@/components/StatsNavBar/StatsNavBar';

export default function StatLayout({ children }: { children: any }) {
  return (
    <>
      <AppShellNavbar>
        <StatsNavBar />
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </>
  );
}
