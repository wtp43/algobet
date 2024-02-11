'use client';

import sortBy from 'lodash/sortBy';
import { DataTable, useDataTableColumns, type DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Group, Button, Container, Paper } from '@mantine/core';
import { PlayerPerformance } from '@/gql/graphql';
import { getBoxscores, flattenPlayers } from '@/data/async';

export const dynamic = 'auto';
export function Boxscore() {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<any>>({
    columnAccessor: 'playerName',
    direction: 'asc',
  });
  const { error, data, isFetching } = useSuspenseQuery({
    queryKey: ['recent_boxscores'],
    queryFn: async () => getBoxscores({ limit: 1 }),
  });

  const [records, setRecords] = useState<any[]>(
    flattenPlayers(data.getMatches[0]?.homePlayers?.edges)
  );

  useEffect(() => {
    const sorted = sortBy(records, sortStatus.columnAccessor) as any[];
    setRecords(sortStatus.direction === 'desc' ? sorted.reverse() : sorted);
  }, [sortStatus]);

  const handleSortStatusChange = (status: DataTableSortStatus<any>) => {
    // setPage(1);
    setSortStatus(status);
  };
  function getColumns(row: any) {
    const columns = [];
    if (row === undefined) {
      return [];
    }
    const keys = Object.keys(row);
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i] === 'playerName') {
        columns.push({
          accessor: keys[i],
          sortable: true,
          ellipsis: false,
          // toggleable: true,
          width: '10%',
        });
      } else {
        columns.push({
          accessor: keys[i],
          sortable: true,
          ellipsis: true,
          // toggleable: true,
          width: 60,
        });
      }
    }
    return columns;
  }
  const key = 'toggle-home-players-columns';

  const { effectiveColumns, resetColumnsWidth, resetColumnsToggle } = useDataTableColumns<any>({
    key,
    columns: getColumns(data?.getMatches[0]?.homePlayers?.edges[0].node),
  });
  console.count('counter');
  return (
    <Container>
      {/* <Carousel> */}
      {/* <Carousel.Slide> */}
      <div>
        <DataTable
          textSelectionDisabled
          height={250}
          fz="xs"
          highlightOnHover
          withTableBorder
          withColumnBorders
          pinFirstColumn
          storeColumnsKey={key}
          columns={effectiveColumns}
          records={records}
          // defaultColumnRender={(row, _, accessor) => {
          //   const datatype = row[accessor as keyof typeof row];
          //   // return typeof data === 'string' ? data : dayjs(data);
          //   return datatype;
          // }}
          fetching={isFetching}
          idAccessor="playerName"
          sortStatus={sortStatus}
          onSortStatusChange={handleSortStatusChange}
        />
        <Group justify="right">
          <Button onClick={resetColumnsWidth}>Reset</Button>
        </Group>
      </div>
      {/*   </Carousel.Slide> */}
      {/* </Carousel> */}
    </Container>
  );
}
