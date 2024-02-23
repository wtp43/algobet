import '@mantine/core/styles.layer.css';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { AppShellNavbar, AppShellMain, AppShell, AppShellHeader } from '@mantine/core';
import { StatsNavBar } from '@/components/StatsNavBar/StatsNavBar';

export default async function StatLayout({ children }: { children: any }) {
  return (
    <>
      <AppShell navbar={{ width: 200, breakpoint: 'sm' }} padding="md">
        <AppShellNavbar>
          <StatsNavBar />
        </AppShellNavbar>
        <AppShellMain>{children}</AppShellMain>
      </AppShell>
    </>
  );
}
