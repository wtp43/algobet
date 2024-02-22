import type { DataTableSortStatus } from 'mantine-datatable';
import request from 'graphql-request';
import dayjs, { type Dayjs } from 'dayjs';
import { get, sortBy } from 'lodash';
import { recentBoxscoreQueryDocument } from '@/queries/queries';

export const flattenPlayers = (arr: any) => (arr === undefined ? [] : arr.map((e: any) => e?.node));

export async function getBoxscores({ limit = 1 }: { limit?: number }) {
  //todo: try catch exceptions
  const data = await request(
    process.env.NEXT_PUBLIC_GRAPHQL_API ?? 'https://www.algobet.app/grahql',
    recentBoxscoreQueryDocument,
    {
      limit,
    }
  );

  return data;
}
