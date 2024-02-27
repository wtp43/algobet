/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query playerStatsQuery(\n    $limit: Int\n    $startDate: String = \"\"\n    $endDate: String = \"\"\n    $playerId: [Int!] = []\n  ) {\n    getPlayerPerformances(\n      limit: $limit\n      startDate: $startDate\n      endDate: $endDate\n      playerId: $playerId\n    ) {\n      playerInfo {\n        playerName\n        playerId\n      }\n      match {\n        date\n      }\n      pts\n      team {\n        teamName\n      }\n    }\n  }\n": types.PlayerStatsQueryDocument,
    "\n  query recentBoxscoreQuery($limit: Int!) {\n    getMatches(limit: $limit) {\n      homeTeam {\n        teamAbbr\n        teamName\n      }\n      awayTeam {\n        teamAbbr\n        teamName\n      }\n      homePlayers {\n        edges {\n          node {\n            playerInfo {\n              playerName\n            }\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      awayPlayers {\n        edges {\n          node {\n            playerInfo {\n              playerName\n            }\n            playerId\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      homePts\n      date\n      awayPts\n      homeMl\n      awayMl\n      prevHomeFgPctEma3\n      prevHomeTovPctEma3\n    }\n  }\n": types.RecentBoxscoreQueryDocument,
    "\n  query boxscoreQueryDocument {\n    getMatches {\n      homeTeam {\n        teamAbbr\n        teamName\n      }\n      awayTeam {\n        teamAbbr\n        teamName\n      }\n      homePlayers {\n        edges {\n          node {\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      awayPlayers {\n        edges {\n          node {\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      homePts\n      date\n      awayPts\n      homeMl\n      awayMl\n    }\n  }\n": types.BoxscoreQueryDocumentDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query playerStatsQuery(\n    $limit: Int\n    $startDate: String = \"\"\n    $endDate: String = \"\"\n    $playerId: [Int!] = []\n  ) {\n    getPlayerPerformances(\n      limit: $limit\n      startDate: $startDate\n      endDate: $endDate\n      playerId: $playerId\n    ) {\n      playerInfo {\n        playerName\n        playerId\n      }\n      match {\n        date\n      }\n      pts\n      team {\n        teamName\n      }\n    }\n  }\n"): (typeof documents)["\n  query playerStatsQuery(\n    $limit: Int\n    $startDate: String = \"\"\n    $endDate: String = \"\"\n    $playerId: [Int!] = []\n  ) {\n    getPlayerPerformances(\n      limit: $limit\n      startDate: $startDate\n      endDate: $endDate\n      playerId: $playerId\n    ) {\n      playerInfo {\n        playerName\n        playerId\n      }\n      match {\n        date\n      }\n      pts\n      team {\n        teamName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query recentBoxscoreQuery($limit: Int!) {\n    getMatches(limit: $limit) {\n      homeTeam {\n        teamAbbr\n        teamName\n      }\n      awayTeam {\n        teamAbbr\n        teamName\n      }\n      homePlayers {\n        edges {\n          node {\n            playerInfo {\n              playerName\n            }\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      awayPlayers {\n        edges {\n          node {\n            playerInfo {\n              playerName\n            }\n            playerId\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      homePts\n      date\n      awayPts\n      homeMl\n      awayMl\n      prevHomeFgPctEma3\n      prevHomeTovPctEma3\n    }\n  }\n"): (typeof documents)["\n  query recentBoxscoreQuery($limit: Int!) {\n    getMatches(limit: $limit) {\n      homeTeam {\n        teamAbbr\n        teamName\n      }\n      awayTeam {\n        teamAbbr\n        teamName\n      }\n      homePlayers {\n        edges {\n          node {\n            playerInfo {\n              playerName\n            }\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      awayPlayers {\n        edges {\n          node {\n            playerInfo {\n              playerName\n            }\n            playerId\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      homePts\n      date\n      awayPts\n      homeMl\n      awayMl\n      prevHomeFgPctEma3\n      prevHomeTovPctEma3\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query boxscoreQueryDocument {\n    getMatches {\n      homeTeam {\n        teamAbbr\n        teamName\n      }\n      awayTeam {\n        teamAbbr\n        teamName\n      }\n      homePlayers {\n        edges {\n          node {\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      awayPlayers {\n        edges {\n          node {\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      homePts\n      date\n      awayPts\n      homeMl\n      awayMl\n    }\n  }\n"): (typeof documents)["\n  query boxscoreQueryDocument {\n    getMatches {\n      homeTeam {\n        teamAbbr\n        teamName\n      }\n      awayTeam {\n        teamAbbr\n        teamName\n      }\n      homePlayers {\n        edges {\n          node {\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      awayPlayers {\n        edges {\n          node {\n            ast\n            blkPct\n            drb\n            fg\n            fga\n            ft\n            fta\n            orb\n            pts\n            sp\n            stl\n            threep\n            threepa\n            tov\n            trb\n          }\n        }\n      }\n      homePts\n      date\n      awayPts\n      homeMl\n      awayMl\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;