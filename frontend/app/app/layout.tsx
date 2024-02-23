import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import * as React from 'react';
import { AppShell, AppShellHeader, Group, MantineProvider, ColorSchemeScript } from '@mantine/core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { theme } from '../theme';
import { HeaderWithMenus } from '@/components/HeaderMenu/HeaderWithMenus';
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider/ReactQueryClientProvider';

import { getBoxscores } from '@/data/async';

export const metadata = {
  title: 'Algobet',
  description: 'Visualize NBA Stats',
};

export default async function RootLayout({ children }: { children: any }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['recent_boxscores'],
    queryFn: async () => getBoxscores({ limit: 1 }),
  });
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
        <ReactQueryClientProvider>
          <MantineProvider theme={theme}>
            <AppShell padding="md" header={{ height: 64 }}>
              <AppShellHeader withBorder>
                <HeaderWithMenus />
              </AppShellHeader>
              <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
            </AppShell>
          </MantineProvider>
          <ReactQueryDevtools />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
