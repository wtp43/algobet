'use client';

import sortBy from 'lodash/sortBy';
import { DataTable, useDataTableColumns, type DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Group, Button, Container, Paper } from '@mantine/core';
import { PlayerPerformanceTable } from '@/types/types';

export const dynamic = 'auto';

interface BoxscoreProps {
  data: PlayerPerformanceTable[];
}

export function Boxscore({ data }: BoxscoreProps) {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<PlayerPerformanceTable>>({
    columnAccessor: 'playerName',
    direction: 'asc',
  });

  // const [records, setRecords] = useState<any[]>(
  //   flattenPlayers(data.getMatches[0]?.homePlayers?.edges)
  // );
  const [records, setRecords] = useState<PlayerPerformanceTable[]>(data);

  useEffect(() => {
    const sorted = sortBy(records, sortStatus.columnAccessor) as PlayerPerformanceTable[];
    setRecords(sortStatus.direction === 'desc' ? sorted.reverse() : sorted);
  }, [sortStatus]);

  const handleSortStatusChange = (status: DataTableSortStatus<PlayerPerformanceTable>) => {
    // setPage(1);
    setSortStatus(status);
  };
  function getColumns(row: PlayerPerformanceTable) {
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

  const { effectiveColumns, resetColumnsWidth, resetColumnsToggle } =
    useDataTableColumns<PlayerPerformanceTable>({
      key,
      columns: records ? getColumns(records[0]) : [],
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
