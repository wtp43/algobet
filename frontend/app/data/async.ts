import type { DataTableSortStatus } from 'mantine-datatable';
import request from 'graphql-request';
import dayjs, { type Dayjs } from 'dayjs';
import { get, sortBy } from 'lodash';
import _ from 'lodash';
import { recentBoxscoreQueryDocument, playerStatsQueryDocument } from '@/queries/queries';

//todo: error handling with next.js and tanstack query
// await new Promise((r) => setTimeout(r, 8000));
export const flattenPlayers = (arr: any) =>
  arr === undefined
    ? []
    : arr.map((e: any) => {
        let rows = e?.node;
        rows = _.merge(rows, rows.playerInfo);
        delete rows.playerInfo;
        return rows;
      });

export async function getBoxscores({ limit = 1 }: { limit?: number }) {
  try {
    var data = await request(
      process.env.NEXT_PUBLIC_GRAPHQL_API ?? 'https://algobet-production.up.railway.app/graphql',
      recentBoxscoreQueryDocument,
      {
        limit,
      }
    );
    return data;
  } catch (error) {
    return null;
  }
}
export async function getPlayerStats({
  limit = 10,
  playerId,
  startDate = '',
  endDate = '',
}: {
  limit?: number;
  playerId: number;
  startDate?: string;
  endDate?: string;
}) {
  try {
    const data = await request(
      process.env.NEXT_PUBLIC_GRAPHQL_API ?? 'https://algobet-production.up.railway.app/graphql',
      playerStatsQueryDocument,
      {
        limit,
        playerId,
        startDate,
        endDate,
      }
    );

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
