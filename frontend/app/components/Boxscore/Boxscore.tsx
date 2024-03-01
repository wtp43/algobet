'use client';

import sortBy from 'lodash/sortBy';
import { DataTable, useDataTableColumns, type DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Group, Button, Container, Paper } from '@mantine/core';
import { PlayerPerformanceTable } from '@/types/types';
import classes from './Boxscore.module.css';
import { colInfo } from '@/constants/constants';
// TODO: Migrate to PrimeReact Tables

export const dynamic = 'auto';

interface BoxscoreProps {
  data: PlayerPerformanceTable[];
}

export function Boxscore({ data }: BoxscoreProps) {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<PlayerPerformanceTable>>({
    columnAccessor: 'pts',
    direction: 'desc',
  });

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
        columns.unshift({
          accessor: keys[i],
          title: colInfo[keys[i] as keyof typeof colInfo].name,
          sortable: true,
          noWrap: true,
          // toggleable: true,
          width: '10%',
        });
      } else {
        columns.push({
          accessor: keys[i],
          title: colInfo[keys[i] as keyof typeof colInfo].name,
          sortable: true,
          ellipsis: true,
          // toggleable: true,
          width: 60,
        });
      }
    }
    return columns;
  }
  const key = 'toggle-players-columns';

  const { effectiveColumns } = useDataTableColumns<PlayerPerformanceTable>({
    key,
    columns: records ? getColumns(records[0]) : [],
  });
  return (
    <Container size="80%" className={classes.boxscoreContainer}>
      <div>
        <DataTable
          textSelectionDisabled
          height={240}
          fz="xs"
          highlightOnHover
          borderRadius="sm"
          withTableBorder
          withColumnBorders
          pinFirstColumn
          storeColumnsKey={key}
          columns={effectiveColumns}
          records={records}
          idAccessor="playerName"
          sortStatus={sortStatus}
          onSortStatusChange={handleSortStatusChange}
        />
      </div>
    </Container>
  );
}
