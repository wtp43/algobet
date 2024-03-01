import '@mantine/core/styles.layer.css';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { AppShellNavbar, AppShellMain, AppShell } from '@mantine/core';
import { StatsNavBar } from '@/components/StatsNavBar/StatsNavBar';

export default function StatLayout({ children }: { children: any }) {
  return (
    <>
      <AppShell padding="md" header={{ height: 64 }} navbar={{ width: 200, breakpoint: 'sm' }}>
        <AppShellNavbar>
          <StatsNavBar />
        </AppShellNavbar>
        <AppShellMain>{children}</AppShellMain>
      </AppShell>
    </>
  );
}
