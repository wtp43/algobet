/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date (isoformat) */
  Date: { input: any; output: any; }
};

export type Match = {
  __typename?: 'Match';
  awayId: Scalars['Int']['output'];
  awayPlayers: PlayerPerformanceConnection;
  awayPts: Scalars['Float']['output'];
  awayTeam: TeamName;
  bbrefTeam: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  elevation?: Maybe<Scalars['Float']['output']>;
  homeId: Scalars['Int']['output'];
  homePlayers: PlayerPerformanceConnection;
  homePts: Scalars['Float']['output'];
  homeTeam: TeamName;
  matchId: Scalars['Int']['output'];
  playoffGame: Scalars['Float']['output'];
};

export type MatchConnection = {
  __typename?: 'MatchConnection';
  edges: Array<MatchEdge>;
};

export type MatchEdge = {
  __typename?: 'MatchEdge';
  node: Match;
};

export type Model = {
  __typename?: 'Model';
  away3p?: Maybe<Scalars['Float']['output']>;
  away3pPct?: Maybe<Scalars['Float']['output']>;
  away3pa?: Maybe<Scalars['Float']['output']>;
  awayAst?: Maybe<Scalars['Float']['output']>;
  awayAstPct?: Maybe<Scalars['Float']['output']>;
  awayBlk?: Maybe<Scalars['Float']['output']>;
  awayBlkPct?: Maybe<Scalars['Float']['output']>;
  awayBpm?: Maybe<Scalars['Float']['output']>;
  awayDrb?: Maybe<Scalars['Float']['output']>;
  awayDrbPct?: Maybe<Scalars['Float']['output']>;
  awayDrtg?: Maybe<Scalars['Float']['output']>;
  awayEfgPct?: Maybe<Scalars['Float']['output']>;
  awayElo?: Maybe<Scalars['Float']['output']>;
  awayFg?: Maybe<Scalars['Float']['output']>;
  awayFgPct?: Maybe<Scalars['Float']['output']>;
  awayFt?: Maybe<Scalars['Float']['output']>;
  awayFtPct?: Maybe<Scalars['Float']['output']>;
  awayId: Scalars['Int']['output'];
  awayMl?: Maybe<Scalars['Float']['output']>;
  awayOrb?: Maybe<Scalars['Float']['output']>;
  awayOrbPct?: Maybe<Scalars['Float']['output']>;
  awayOrtg?: Maybe<Scalars['Float']['output']>;
  awayPer?: Maybe<Scalars['Float']['output']>;
  awayPlayers: PlayerPerformanceConnection;
  awayPsOdds?: Maybe<Scalars['Float']['output']>;
  awayPts: Scalars['Float']['output'];
  awaySpread?: Maybe<Scalars['Float']['output']>;
  awayStl?: Maybe<Scalars['Float']['output']>;
  awayStlPct?: Maybe<Scalars['Float']['output']>;
  awayTeam: TeamName;
  awayTov?: Maybe<Scalars['Float']['output']>;
  awayTovPct?: Maybe<Scalars['Float']['output']>;
  awayTrb?: Maybe<Scalars['Float']['output']>;
  awayTrbPct?: Maybe<Scalars['Float']['output']>;
  bbrefTeam: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  elevation?: Maybe<Scalars['Float']['output']>;
  favorite?: Maybe<Scalars['Boolean']['output']>;
  favoriteWon?: Maybe<Scalars['Boolean']['output']>;
  hWin?: Maybe<Scalars['Int']['output']>;
  home3p?: Maybe<Scalars['Float']['output']>;
  home3pPct?: Maybe<Scalars['Float']['output']>;
  home3pa?: Maybe<Scalars['Float']['output']>;
  homeAst?: Maybe<Scalars['Float']['output']>;
  homeAstPct?: Maybe<Scalars['Float']['output']>;
  homeBlk?: Maybe<Scalars['Float']['output']>;
  homeBlkPct?: Maybe<Scalars['Float']['output']>;
  homeBpm?: Maybe<Scalars['Float']['output']>;
  homeDrb?: Maybe<Scalars['Float']['output']>;
  homeDrbPct?: Maybe<Scalars['Float']['output']>;
  homeDrtg?: Maybe<Scalars['Float']['output']>;
  homeEfgPct?: Maybe<Scalars['Float']['output']>;
  homeElo?: Maybe<Scalars['Float']['output']>;
  homeFg?: Maybe<Scalars['Float']['output']>;
  homeFgPct?: Maybe<Scalars['Float']['output']>;
  homeFt?: Maybe<Scalars['Float']['output']>;
  homeFtPct?: Maybe<Scalars['Float']['output']>;
  homeId: Scalars['Int']['output'];
  homeMl?: Maybe<Scalars['Float']['output']>;
  homeOrb?: Maybe<Scalars['Float']['output']>;
  homeOrbPct?: Maybe<Scalars['Float']['output']>;
  homeOrtg?: Maybe<Scalars['Float']['output']>;
  homePer?: Maybe<Scalars['Float']['output']>;
  homePlayers: PlayerPerformanceConnection;
  homePsOdds?: Maybe<Scalars['Float']['output']>;
  homePts: Scalars['Float']['output'];
  homeSpread?: Maybe<Scalars['Float']['output']>;
  homeStl?: Maybe<Scalars['Float']['output']>;
  homeStlPct?: Maybe<Scalars['Float']['output']>;
  homeTeam: TeamName;
  homeTov?: Maybe<Scalars['Float']['output']>;
  homeTovPct?: Maybe<Scalars['Float']['output']>;
  homeTrb?: Maybe<Scalars['Float']['output']>;
  homeTrbPct?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  matchId: Scalars['Int']['output'];
  matchLength?: Maybe<Scalars['Float']['output']>;
  movl?: Maybe<Scalars['Float']['output']>;
  over?: Maybe<Scalars['Float']['output']>;
  past3AwayFavoriteWins?: Maybe<Scalars['Float']['output']>;
  past3HomeFavoriteWins?: Maybe<Scalars['Float']['output']>;
  playoffGame: Scalars['Float']['output'];
  postAway3pEma3?: Maybe<Scalars['Float']['output']>;
  postAway3pPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayAstEma3?: Maybe<Scalars['Float']['output']>;
  postAwayAstPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayBlkEma3?: Maybe<Scalars['Float']['output']>;
  postAwayBlkPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayBpmEma3?: Maybe<Scalars['Float']['output']>;
  postAwayDrbEma3?: Maybe<Scalars['Float']['output']>;
  postAwayDrbPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayDrtgEma3?: Maybe<Scalars['Float']['output']>;
  postAwayEfgPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayFgEma3?: Maybe<Scalars['Float']['output']>;
  postAwayFgPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayFtEma3?: Maybe<Scalars['Float']['output']>;
  postAwayFtPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayOrbEma3?: Maybe<Scalars['Float']['output']>;
  postAwayOrbPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayOrtgEma3?: Maybe<Scalars['Float']['output']>;
  postAwayPtsEma3?: Maybe<Scalars['Float']['output']>;
  postAwayStlEma3?: Maybe<Scalars['Float']['output']>;
  postAwayStlPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayTovEma3?: Maybe<Scalars['Float']['output']>;
  postAwayTovPctEma3?: Maybe<Scalars['Float']['output']>;
  postAwayTrbEma3?: Maybe<Scalars['Float']['output']>;
  postAwayTrbPctEma3?: Maybe<Scalars['Float']['output']>;
  postHome3pEma3?: Maybe<Scalars['Float']['output']>;
  postHome3pPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeAstEma3?: Maybe<Scalars['Float']['output']>;
  postHomeAstPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeBlkEma3?: Maybe<Scalars['Float']['output']>;
  postHomeBlkPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeBpmEma3?: Maybe<Scalars['Float']['output']>;
  postHomeDrbEma3?: Maybe<Scalars['Float']['output']>;
  postHomeDrbPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeDrtgEma3?: Maybe<Scalars['Float']['output']>;
  postHomeEfgPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeFgEma3?: Maybe<Scalars['Float']['output']>;
  postHomeFgPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeFtEma3?: Maybe<Scalars['Float']['output']>;
  postHomeFtPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeOrbEma3?: Maybe<Scalars['Float']['output']>;
  postHomeOrbPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeOrtgEma3?: Maybe<Scalars['Float']['output']>;
  postHomePtsEma3?: Maybe<Scalars['Float']['output']>;
  postHomeStlEma3?: Maybe<Scalars['Float']['output']>;
  postHomeStlPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeTovEma3?: Maybe<Scalars['Float']['output']>;
  postHomeTovPctEma3?: Maybe<Scalars['Float']['output']>;
  postHomeTrbEma3?: Maybe<Scalars['Float']['output']>;
  postHomeTrbPctEma3?: Maybe<Scalars['Float']['output']>;
  postHthAway3pEma2?: Maybe<Scalars['Float']['output']>;
  postHthAway3pPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayAstEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayAstPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayBlkEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayBlkPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayBpmEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayDrbEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayDrbPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayDrtgEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayEfgPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayFgEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayFgPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayFtEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayFtPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayOrbEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayOrbPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayOrtgEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayPtsEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayStlEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayStlPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayTovEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayTovPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayTrbEma2?: Maybe<Scalars['Float']['output']>;
  postHthAwayTrbPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHome3pEma2?: Maybe<Scalars['Float']['output']>;
  postHthHome3pPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeAstEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeAstPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeBlkEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeBlkPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeBpmEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeDrbEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeDrbPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeDrtgEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeEfgPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeFgEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeFgPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeFtEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeFtPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeOrbEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeOrbPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeOrtgEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomePtsEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeStlEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeStlPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeTovEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeTovPctEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeTrbEma2?: Maybe<Scalars['Float']['output']>;
  postHthHomeTrbPctEma2?: Maybe<Scalars['Float']['output']>;
  prev3AwayPer?: Maybe<Scalars['Float']['output']>;
  prev3HomePer?: Maybe<Scalars['Float']['output']>;
  prevAway3pEma3?: Maybe<Scalars['Float']['output']>;
  prevAway3pPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAway3pPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAway3pSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayAstEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayAstPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayAstPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayAstSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayBlkEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayBlkPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayBlkPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayBlkSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayBpmEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayBpmSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayDrbEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayDrbPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayDrbPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayDrbSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayDrtgEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayDrtgSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayEfgPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayEfgPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayElo?: Maybe<Scalars['Float']['output']>;
  prevAwayFgEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayFgPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayFgPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayFgSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayFtEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayFtPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayFtPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayFtSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayOrbEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayOrbPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayOrbPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayOrbSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayOrtgEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayOrtgSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayPtsEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayPtsSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayStlEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayStlPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayStlPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayStlSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayTovEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayTovPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayTovPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayTovSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayTrbEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayTrbPctEma3?: Maybe<Scalars['Float']['output']>;
  prevAwayTrbPctSma3?: Maybe<Scalars['Float']['output']>;
  prevAwayTrbSma3?: Maybe<Scalars['Float']['output']>;
  prevHome3pEma3?: Maybe<Scalars['Float']['output']>;
  prevHome3pPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHome3pPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHome3pSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeAstEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeAstPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeAstPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeAstSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeBlkEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeBlkPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeBlkPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeBlkSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeBpmEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeBpmSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeDrbEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeDrbPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeDrbPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeDrbSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeDrtgEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeDrtgSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeEfgPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeEfgPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeElo?: Maybe<Scalars['Float']['output']>;
  prevHomeFgEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeFgPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeFgPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeFgSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeFtEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeFtPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeFtPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeFtSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeOrbEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeOrbPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeOrbPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeOrbSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeOrtgEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeOrtgSma3?: Maybe<Scalars['Float']['output']>;
  prevHomePtsEma3?: Maybe<Scalars['Float']['output']>;
  prevHomePtsSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeStlEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeStlPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeStlPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeStlSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeTovEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeTovPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeTovPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeTovSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeTrbEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeTrbPctEma3?: Maybe<Scalars['Float']['output']>;
  prevHomeTrbPctSma3?: Maybe<Scalars['Float']['output']>;
  prevHomeTrbSma3?: Maybe<Scalars['Float']['output']>;
  prevHthAway3pEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAway3pPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAway3pPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAway3pSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayAstEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayAstPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayAstPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayAstSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayBlkEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayBlkPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayBlkPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayBlkSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayBpmEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayBpmSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayDrbEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayDrbPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayDrbPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayDrbSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayDrtgEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayDrtgSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayEfgPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayEfgPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayFgEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayFgPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayFgPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayFgSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayFtEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayFtPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayFtPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayFtSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayOrbEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayOrbPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayOrbPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayOrbSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayOrtgEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayOrtgSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayPer?: Maybe<Scalars['Float']['output']>;
  prevHthAwayPtsEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayPtsSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayStlEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayStlPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayStlPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayStlSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayTovEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayTovPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayTovPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayTovSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayTrbEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayTrbPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayTrbPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthAwayTrbSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHome3pEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHome3pPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHome3pPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHome3pSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeAstEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeAstPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeAstPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeAstSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeBlkEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeBlkPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeBlkPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeBlkSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeBpmEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeBpmSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeDrbEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeDrbPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeDrbPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeDrbSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeDrtgEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeDrtgSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeEfgPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeEfgPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeFgEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeFgPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeFgPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeFgSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeFtEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeFtPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeFtPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeFtSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeOrbEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeOrbPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeOrbPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeOrbSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeOrtgEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeOrtgSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomePer?: Maybe<Scalars['Float']['output']>;
  prevHthHomePtsEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomePtsSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeStlEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeStlPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeStlPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeStlSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeTovEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeTovPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeTovPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeTovSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeTrbEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeTrbPctEma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeTrbPctSma2?: Maybe<Scalars['Float']['output']>;
  prevHthHomeTrbSma2?: Maybe<Scalars['Float']['output']>;
  season?: Maybe<Scalars['Int']['output']>;
  spread?: Maybe<Scalars['Float']['output']>;
  under?: Maybe<Scalars['Float']['output']>;
};

export type PlayerPerformance = {
  __typename?: 'PlayerPerformance';
  ast?: Maybe<Scalars['Float']['output']>;
  astPct?: Maybe<Scalars['Float']['output']>;
  bbrefEndpoint: Scalars['String']['output'];
  blk?: Maybe<Scalars['Float']['output']>;
  blkPct?: Maybe<Scalars['Float']['output']>;
  bpm?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  drbPct?: Maybe<Scalars['Float']['output']>;
  drtg?: Maybe<Scalars['Float']['output']>;
  efgPct?: Maybe<Scalars['Float']['output']>;
  fg?: Maybe<Scalars['Float']['output']>;
  fgPct?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  ft?: Maybe<Scalars['Float']['output']>;
  ftPct?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftr?: Maybe<Scalars['Float']['output']>;
  inactive?: Maybe<Scalars['Float']['output']>;
  match: Match;
  matchId: Scalars['Int']['output'];
  orb?: Maybe<Scalars['Float']['output']>;
  orbPct?: Maybe<Scalars['Float']['output']>;
  ortg?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  playerId: Scalars['Int']['output'];
  playerName: Scalars['String']['output'];
  pm?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  sp?: Maybe<Scalars['Float']['output']>;
  starter?: Maybe<Scalars['Int']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  stlPct?: Maybe<Scalars['Float']['output']>;
  team: TeamName;
  teamId: Scalars['Int']['output'];
  threep?: Maybe<Scalars['Float']['output']>;
  threepPct?: Maybe<Scalars['Float']['output']>;
  threepa?: Maybe<Scalars['Float']['output']>;
  threepar?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
  tovPct?: Maybe<Scalars['Float']['output']>;
  trb?: Maybe<Scalars['Float']['output']>;
  trbPct?: Maybe<Scalars['Float']['output']>;
  tsPct?: Maybe<Scalars['Float']['output']>;
  usgPct?: Maybe<Scalars['Float']['output']>;
};

export type PlayerPerformanceConnection = {
  __typename?: 'PlayerPerformanceConnection';
  edges: Array<PlayerPerformanceEdge>;
};

export type PlayerPerformanceEdge = {
  __typename?: 'PlayerPerformanceEdge';
  node: PlayerPerformance;
};

export type Query = {
  __typename?: 'Query';
  getMatches: Array<Model>;
  getPlayers: Array<PlayerPerformance>;
  getTeams: Array<TeamName>;
};


export type QueryGetMatchesArgs = {
  endDate?: Scalars['String']['input'];
  headToHead?: Scalars['Boolean']['input'];
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  startDate?: Scalars['String']['input'];
  teamIds?: Array<Scalars['Int']['input']>;
};


export type QueryGetPlayersArgs = {
  matchId: Scalars['Int']['input'];
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTeamsArgs = {
  teamIds?: Array<Scalars['Int']['input']>;
};

export type TeamName = {
  __typename?: 'TeamName';
  active: Scalars['Float']['output'];
  inactive: Scalars['Float']['output'];
  matchAway: MatchConnection;
  matchHome: MatchConnection;
  teamAbbr: Scalars['String']['output'];
  teamId: Scalars['Int']['output'];
  teamName: Scalars['String']['output'];
};
