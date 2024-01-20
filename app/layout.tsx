import '@mantine/core/styles.layer.css';
import React from 'react';
import { AppShell, AppShellHeader, Group, MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';

export const metadata = {
  title: 'Algobet',
  description: 'Visualize NBA Stats',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell header={{ height: 84 }} navbar={{ width: 200, breakpoint: 'sm' }} padding="md">
            <AppShellHeader>
              <HeaderMenu />
            </AppShellHeader>
            {children}
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
