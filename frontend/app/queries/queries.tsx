import { graphql } from '@/gql/gql';

export const playerStatsQueryDocument = graphql(/* GraphQL */ `
  query playerStatsQuery(
    $limit: Int
    $startDate: String = ""
    $endDate: String = ""
    $playerId: [Int!] = []
  ) {
    getPlayerPerformances(
      limit: $limit
      startDate: $startDate
      endDate: $endDate
      playerId: $playerId
    ) {
      playerInfo {
        playerName
        playerId
      }
      match {
        date
      }
      pts
      team {
        teamName
      }
    }
  }
`);

export const recentBoxscoreQueryDocument = graphql(/* GraphQL */ `
  query recentBoxscoreQuery($limit: Int!) {
    getMatches(limit: $limit) {
      homeTeam {
        teamAbbr
        teamName
      }
      awayTeam {
        teamAbbr
        teamName
      }
      homePlayers {
        edges {
          node {
            playerInfo {
              playerName
            }
            ast
            blkPct
            drb
            fg
            fga
            ft
            fta
            orb
            pts
            sp
            stl
            threep
            threepa
            tov
            trb
          }
        }
      }
      awayPlayers {
        edges {
          node {
            playerInfo {
              playerName
            }
            playerId
            ast
            blkPct
            drb
            fg
            fga
            ft
            fta
            orb
            pts
            sp
            stl
            threep
            threepa
            tov
            trb
          }
        }
      }
      homePts
      date
      awayPts
      homeMl
      awayMl
      prevHomeFgPctEma3
      prevHomeTovPctEma3
    }
  }
`);

export const boxscoreQueryDocument = graphql(/* GraphQL */ `
  query boxscoreQueryDocument {
    getMatches {
      homeTeam {
        teamAbbr
        teamName
      }
      awayTeam {
        teamAbbr
        teamName
      }
      homePlayers {
        edges {
          node {
            ast
            blkPct
            drb
            fg
            fga
            ft
            fta
            orb
            pts
            sp
            stl
            threep
            threepa
            tov
            trb
          }
        }
      }
      awayPlayers {
        edges {
          node {
            ast
            blkPct
            drb
            fg
            fga
            ft
            fta
            orb
            pts
            sp
            stl
            threep
            threepa
            tov
            trb
          }
        }
      }
      homePts
      date
      awayPts
      homeMl
      awayMl
    }
  }
`);
