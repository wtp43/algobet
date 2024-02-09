import type { DataTableSortStatus } from 'mantine-datatable';
import request from 'graphql-request';
import dayjs, { type Dayjs } from 'dayjs';
import { get, sortBy } from 'lodash';
import { recentBoxscoreQueryDocument } from '@/queries/queries';

export const flattenPlayers = (arr) => arr.map((e) => e.node);

export async function getBoxscores({ limit = 1 }: { limit?: number }) {
  return await request('http://127.0.0.1:8000/graphql', recentBoxscoreQueryDocument, {
    limit,
  });
}
