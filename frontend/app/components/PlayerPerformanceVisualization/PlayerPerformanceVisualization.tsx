'use client';

import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
import { Container, Loader } from '@mantine/core';
import dynamic from 'next/dynamic';
import PlayerAreaChartV3 from '@/components/LineChart/PlayerAreaChartV3';

import { getPlayerStats } from '@/data/async';
import { ChartData } from '@/types/types';

//todo: query key factory (https://tkdodo.eu/blog/effective-react-query-keys)
// const todoKeys = {
//   all: ['player_stats'] as const,
//
//   lists: () => [...todoKeys.all, 'list'] as const,
//
//   list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
//
//   details: () => [...todoKeys.all, 'detail'] as const,
//
//   detail: (id: number) => [...todoKeys.details(), id] as const,
// };
interface PlayerPerformanceVisualizationProps {
  playerId: number;
  col: string;
  limit?: number;
  startDate?: string;
  endDate?: string;
}

// const PlayerPerformanceVisualization = dynamic(
//   () =>
//     import('@/components/PlayerPerformanceVisualization/PlayerPerformanceVisualization').then(
//       (mod) => mod.PlayerPerformanceVisualization
//     ),
//   { ssr: false }
// );
export function PlayerPerformanceVisualization({
  playerId,
  col,
  limit = 100,
  startDate = '2020-01-01',
  endDate = '2020-12-31',
}: PlayerPerformanceVisualizationProps) {
  const [showPlayerChart, setShowPlayerChart] = useState(true);
  const { data } = useSuspenseQuery({
    queryKey: ['player_stats'],
    queryFn: async () => getPlayerStats({ playerId, limit, startDate, endDate }),
    select: (e: any) => e?.getPlayerPerformances,
    // notifyOnChangeProps: ['data'],
  });
  // const { isLoading, data } = useQuery({
  //   queryKey: ['player_stats'],
  //   queryFn: async () => getPlayerStats({ playerId }),
  //   notifyOnChangeProps: ['data'],
  // });
  // if (isLoading) return <Loader />;
  // if (!data) return <div>No data</div>;

  return (
    <>
      <Container h={400} px={0}>
        {showPlayerChart && (
          <ParentSize>
            {({ width, height }) => (
              <PlayerAreaChartV3 width={width} height={height} col="pts" data={data} />
            )}
          </ParentSize>
        )}
      </Container>
    </>
  );
}
