import '@mantine/core/styles.layer.css';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { AppShellNavbar, AppShellMain, AppShell, AppShellHeader } from '@mantine/core';
import { StatsNavBar } from '@/components/StatsNavBar/StatsNavBar';

export default async function MlLayout({ children }: { children: any }) {
  return (
    <>
      <AppShell padding="md">
        <AppShellMain>{children}</AppShellMain>
      </AppShell>
    </>
  );
}
