'use client';

import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { Welcome } from '../components/Welcome/Welcome';
import { Boxscore } from '../components/Boxscore/Boxscore';

// import { MetaData } from 'next';

// export const metadata: Metadata = {
//   title: 'algobet',
//   description: 'data visualization for nba stats',
// };

export default function HomePage() {
  const { isPending, error, data } = useQuery({
    queryKey: ['recent_boxscores'],
    queryFn: async () =>
      request('http://127.0.0.1:8000/graphql', recentBoxscoreQueryDocument, {
        limit: 1,
      }),
  });
  return (
    <>
      <Welcome />
      {/* <div>{data && <ul>{data.getMatches?.map((e, i) => e.homePts)}</ul>}</div> */}
      <Boxscore />
    </>
  );
}
