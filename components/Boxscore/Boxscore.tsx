'use client';

import sortBy from 'lodash/sortBy';
import { DataTable, type DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { PlayerPerformance } from '@/gql/graphql';

export function Boxscore({ playerRows }) {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<PlayerPerformance>>({
    columnAccessor: 'name',
    direction: 'asc',
  });
  const [records, setRecords] = useState(sortBy(playerRows, 'name'));

  useEffect(() => {
    const data = sortBy(playerRows, sortStatus.columnAccessor) as PlayerPerformance[];
    setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);
  return (
    <>
      {playerRows && (
        <DataTable
          textSelectionDisabled
          withTableBorder
          withColumnBorders
          records={records}
          columns={
            [
              // { accessor: 'name', width: '40%', sortable: true },
            ]
          }
          defaultColumnRender={(row, _, accessor) => {
            const data = row[accessor as keyof typeof row];
            // return typeof data === 'string' ? data : dayjs(data);
            return data;
          }}
          defaultColumnProps={{
            textAlign: 'left',
            noWrap: true,
            ellipsis: true,
            sortable: true,
          }}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
        />
      )}
    </>
  );
}
