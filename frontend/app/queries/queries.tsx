import { graphql } from '@/gql/gql';

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
            playerName
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
            playerName
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
