import {
  PlayerPerformanceEdge,
  PlayerPerformance,
  Model,
  TeamName,
  PlayerPerformanceConnection,
} from '@/gql/graphql';

type Modify<T, R> = Omit<T, keyof R> & R;
export interface PlayerPerformanceConnectionOpt
  extends Modify<
    PlayerPerformanceConnection,
    {
      edges?: Array<PlayerPerformanceEdgeOpt>;
    }
  > {}
export interface PlayerPerformanceEdgeOpt
  extends Modify<
    PlayerPerformanceEdge,
    {
      node?: Partial<PlayerPerformance>;
    }
  > {}

export interface TeamNameTable extends Partial<TeamName> {}
export interface PlayerPerformanceTable extends Partial<PlayerPerformance> {}
export interface ModelTable
  extends Modify<
    Partial<Model>,
    {
      awayPlayers?: PlayerPerformanceConnectionOpt;
      homePlayers?: PlayerPerformanceConnectionOpt;
      homeTeam?: TeamNameTable;
      awayTeam?: TeamNameTable;
    }
  > {}

export type TableData = PlayerPerformanceTable | ModelTable;
