import { useQuery, dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import request from 'graphql-request';
import { Welcome } from '@/components/Welcome/Welcome';
import { Boxscore } from '@/components/Boxscore/Boxscore';
import { recentBoxscoreQueryDocument, boxscoreQueryDocument } from '@/queries/queries';
import { Model } from '@/gql/graphql';
import { getBoxscores } from '@/data/async';
// import { MetaData } from 'next';

// export const metadata: Metadata = {
//   title: 'algobet',
//   description: 'data visualization for nba stats',
// };

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['recent_boxscores'],
    queryFn: async () => getBoxscores({ limit: 1 }),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Welcome />
        <Boxscore />
      </HydrationBoundary>
    </>
  );
}
