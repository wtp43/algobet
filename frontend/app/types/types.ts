import {
  PlayerPerformanceEdge,
  PlayerPerformance,
  Match,
  Model,
  TeamName,
  PlayerPerformanceConnection,
  Player,
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
      node?: PlayerPerformanceTable;
    }
  > {}

export interface MatchTable extends Partial<Match> {}
export interface TeamNameTable extends Partial<TeamName> {}
export interface PlayerInfoTable extends Partial<Player> {}
export interface PlayerPerformanceTable
  extends Modify<
    Partial<PlayerPerformance>,
    {
      match?: MatchTable;
      playerInfo?: PlayerInfoTable;
      team?: TeamNameTable;
    }
  > {}
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

export interface ChartData
  extends Modify<
    Partial<PlayerPerformanceTable>,
    {
      playerName?: string;
      date?: Date;
    }
  > {}
