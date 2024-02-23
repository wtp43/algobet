const teamss = [
  {
    teamAbbr: 'ATL',
    teamId: 1,
    teamName: 'Atlanta Hawks',
  },
  {
    teamAbbr: 'BOS',
    teamId: 2,
    teamName: 'Boston Celtics',
  },
  {
    teamAbbr: 'BRK',
    teamId: 3,
    teamName: 'Brooklyn Nets',
  },
  {
    teamAbbr: 'CHO',
    teamId: 4,
    teamName: 'Charlotte Hornets',
  },
  {
    teamAbbr: 'CHI',
    teamId: 5,
    teamName: 'Chicago Bulls',
  },
  {
    teamAbbr: 'CLE',
    teamId: 6,
    teamName: 'Cleveland Cavaliers',
  },
  {
    teamAbbr: 'DAL',
    teamId: 7,
    teamName: 'Dallas Mavericks',
  },
  {
    teamAbbr: 'DEN',
    teamId: 8,
    teamName: 'Denver Nuggets',
  },
  {
    teamAbbr: 'DET',
    teamId: 9,
    teamName: 'Detroit Pistons',
  },
  {
    teamAbbr: 'GSW',
    teamId: 10,
    teamName: 'Golden State Warriors',
  },
  {
    teamAbbr: 'HOU',
    teamId: 11,
    teamName: 'Houston Rockets',
  },
  {
    teamAbbr: 'IND',
    teamId: 12,
    teamName: 'Indiana Pacers',
  },
  {
    teamAbbr: 'LAC',
    teamId: 13,
    teamName: 'Los Angeles Clippers',
  },
  {
    teamAbbr: 'LAL',
    teamId: 14,
    teamName: 'Los Angeles Lakers',
  },
  {
    teamAbbr: 'MEM',
    teamId: 15,
    teamName: 'Memphis Grizzlies',
  },
  {
    teamAbbr: 'MIA',
    teamId: 16,
    teamName: 'Miami Heat',
  },
  {
    teamAbbr: 'MIL',
    teamId: 17,
    teamName: 'Milwaukee Bucks',
  },
  {
    teamAbbr: 'MIN',
    teamId: 18,
    teamName: 'Minnesota Timberwolves',
  },
  {
    teamAbbr: 'NOP',
    teamId: 19,
    teamName: 'New Orleans Pelicans',
  },
  {
    teamAbbr: 'NYK',
    teamId: 20,
    teamName: 'New York Knicks',
  },
  {
    teamAbbr: 'OKC',
    teamId: 21,
    teamName: 'Oklahoma City Thunder',
  },
  {
    teamAbbr: 'ORL',
    teamId: 22,
    teamName: 'Orlando Magic',
  },
  {
    teamAbbr: 'PHI',
    teamId: 23,
    teamName: 'Philadelphia 76ers',
  },
  {
    teamAbbr: 'PHO',
    teamId: 24,
    teamName: 'Phoenix Suns',
  },
  {
    teamAbbr: 'POR',
    teamId: 25,
    teamName: 'Portland Trail Blazers',
  },
  {
    teamAbbr: 'SAC',
    teamId: 26,
    teamName: 'Sacramento Kings',
  },
  {
    teamAbbr: 'SAS',
    teamId: 27,
    teamName: 'San Antonio Spurs',
  },
  {
    teamAbbr: 'TOR',
    teamId: 28,
    teamName: 'Toronto Raptors',
  },
  {
    teamAbbr: 'UTA',
    teamId: 29,
    teamName: 'Utah Jazz',
  },
  {
    teamAbbr: 'WAS',
    teamId: 30,
    teamName: 'Washington Wizards',
  },
];

for (let t of teamss) {
  console.log(
    "'" +
      t.teamAbbr +
      "'" +
      ':{ id:' +
      t.teamId +
      ", abbr:'" +
      t.teamAbbr +
      "', name:'" +
      t.teamName +
      "', src: '" +
      t.teamAbbr +
      ".png'},"
  );
}
