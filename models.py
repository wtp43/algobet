# coding: utf-8
from sqlalchemy import (
    BigInteger,
    Boolean,
    Column,
    Date,
    DateTime,
    Float,
    ForeignKey,
    Integer,
    SmallInteger,
    Table,
    Text,
    text,
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()
metadata = Base.metadata


class Arena(Base):
    __tablename__ = "arena"

    team_id = Column(
        Integer,
        primary_key=True,
        server_default=text("nextval('arena_team_id_seq'::regclass)"),
    )
    home_arena_elevation = Column(Float, server_default=text("0"))
    active = Column(Float, server_default=text("0"))
    inactive = Column(Float, server_default=text("3000"))


class BetType(Base):
    __tablename__ = "bet_type"

    bet_type_id = Column(
        Integer,
        primary_key=True,
        server_default=text("nextval('bet_type_bet_type_id_seq'::regclass)"),
    )
    bet_type_desc = Column(Text, nullable=False)


class Player(Base):
    __tablename__ = "player"

    player_id = Column(
        Integer,
        primary_key=True,
        server_default=text("nextval('player_player_id_seq'::regclass)"),
    )
    player_name = Column(Text, nullable=False)
    bbref_endpoint = Column(Text, nullable=False)


class Season(Base):
    __tablename__ = "season"

    season = Column(SmallInteger, primary_key=True)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)


class Team(Base):
    __tablename__ = "team"

    team_id = Column(
        Integer,
        primary_key=True,
        server_default=text("nextval('team_team_id_seq'::regclass)"),
    )


class Match(Base):
    __tablename__ = "match"

    match_id = Column(
        Integer,
        primary_key=True,
        server_default=text("nextval('match_match_id_seq'::regclass)"),
    )
    date = Column(Date, nullable=False)
    away_pts = Column(Float, nullable=False)
    home_pts = Column(Float, nullable=False)
    away_id = Column(
        ForeignKey("team.team_id"),
        nullable=False,
        server_default=text("nextval('match_away_id_seq'::regclass)"),
    )
    home_id = Column(
        ForeignKey("team.team_id"),
        nullable=False,
        server_default=text("nextval('match_home_id_seq'::regclass)"),
    )
    playoff_game = Column(Float, nullable=False)
    elevation = Column(Float, server_default=text("0"))
    bbref_team = Column(Text, nullable=False)

    away = relationship("Team", primaryjoin="Match.away_id == Team.team_id")
    home = relationship("Team", primaryjoin="Match.home_id == Team.team_id")


class PlayerTeam(Base):
    __tablename__ = "player_team"

    player_id = Column(
        ForeignKey("player.player_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('player_team_player_id_seq'::regclass)"),
    )
    team_id = Column(
        ForeignKey("team.team_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('player_team_team_id_seq'::regclass)"),
    )
    season = Column(SmallInteger, primary_key=True, nullable=False)
    age = Column(Float)
    lg = Column(Text)
    pos = Column(Text)
    g = Column(Float)
    gs = Column(Float)
    mp = Column(Float)
    fg = Column(Float)
    fga = Column(Float)
    fg_pct = Column(Float)
    threep = Column(Float)
    threepa = Column(Float)
    threep_pct = Column(Float)
    twop = Column(Float)
    twopa = Column(Float)
    twop_pct = Column(Float)
    efg_pct = Column(Float)
    ft = Column(Float)
    fta = Column(Float)
    ft_pct = Column(Float)
    orb = Column(Float)
    drb = Column(Float)
    trb = Column(Float)
    ast = Column(Float)
    stl = Column(Float)
    blk = Column(Float)
    tov = Column(Float)
    pf = Column(Float)
    pts = Column(Float)

    player = relationship("Player")
    team = relationship("Team")


class TeamName(Base):
    __tablename__ = "team_name"

    team_id = Column(
        ForeignKey("team.team_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('team_name_team_id_seq'::regclass)"),
    )
    team_abbr = Column(Text, nullable=False)
    team_name = Column(Text, primary_key=True, nullable=False)
    active = Column(Float, primary_key=True, nullable=False, server_default=text("0"))
    inactive = Column(
        Float, primary_key=True, nullable=False, server_default=text("3000")
    )

    team = relationship("Team")


class Injury(Base):
    __tablename__ = "injury"

    player_id = Column(
        ForeignKey("player.player_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('injury_player_id_seq'::regclass)"),
    )
    match_id = Column(
        ForeignKey("match.match_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('injury_match_id_seq'::regclass)"),
    )
    injury = Column(Text)

    match = relationship("Match")
    player = relationship("Player")


class Odd(Base):
    __tablename__ = "odds"

    match_id = Column(
        ForeignKey("match.match_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('odds_match_id_seq'::regclass)"),
    )
    team_id = Column(
        Integer,
        primary_key=True,
        nullable=False,
        server_default=text("nextval('odds_team_id_seq'::regclass)"),
    )
    over_under = Column(Text)
    datetime = Column(DateTime(True), primary_key=True, nullable=False)
    spread = Column(Float, server_default=text("0"))
    sportsbook = Column(Text, primary_key=True, nullable=False)
    bet_type_id = Column(
        ForeignKey("bet_type.bet_type_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('odds_bet_type_id_seq'::regclass)"),
    )
    decimal_odds = Column(Float, nullable=False)
    vegas_odds = Column(Float, nullable=False)

    bet_type = relationship("BetType")
    match = relationship("Match")


class OpeningOdd(Base):
    __tablename__ = "opening_odds"

    match_id = Column(
        ForeignKey("match.match_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('opening_odds_match_id_seq'::regclass)"),
    )
    team_id = Column(
        Integer,
        primary_key=True,
        nullable=False,
        server_default=text("nextval('opening_odds_team_id_seq'::regclass)"),
    )
    over_under = Column(Text)
    datetime = Column(DateTime(True), primary_key=True, nullable=False)
    spread = Column(Float, primary_key=True, nullable=False, server_default=text("0"))
    sportsbook = Column(Text, primary_key=True, nullable=False)
    bet_type_id = Column(
        ForeignKey("bet_type.bet_type_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('opening_odds_bet_type_id_seq'::regclass)"),
    )
    decimal_odds = Column(Float, nullable=False)
    vegas_odds = Column(Float, nullable=False)

    bet_type = relationship("BetType")
    match = relationship("Match")


class PlayerPerformance(Base):
    __tablename__ = "player_performance"

    player_id = Column(
        ForeignKey("player.player_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('player_performance_player_id_seq'::regclass)"),
    )
    match_id = Column(
        ForeignKey("match.match_id"),
        primary_key=True,
        nullable=False,
        server_default=text("nextval('player_performance_match_id_seq'::regclass)"),
    )
    team_id = Column(
        ForeignKey("team.team_id"),
        nullable=False,
        server_default=text("nextval('player_performance_team_id_seq'::regclass)"),
    )
    sp = Column(Float, server_default=text("0"))
    inactive = Column(Float, server_default=text("0"))
    ts_pct = Column(Float, server_default=text("0"))
    efg_pct = Column(Float, server_default=text("0"))
    threepar = Column(Float, server_default=text("0"))
    ftr = Column(Float, server_default=text("0"))
    orb_pct = Column(Float, server_default=text("0"))
    drb_pct = Column(Float, server_default=text("0"))
    trb_pct = Column(Float, server_default=text("0"))
    ast_pct = Column(Float, server_default=text("0"))
    stl_pct = Column(Float, server_default=text("0"))
    blk_pct = Column(Float, server_default=text("0"))
    tov_pct = Column(Float, server_default=text("0"))
    usg_pct = Column(Float, server_default=text("0"))
    ortg = Column(Float, server_default=text("0"))
    drtg = Column(Float, server_default=text("0"))
    bpm = Column(Float, server_default=text("0"))
    starter = Column(SmallInteger, server_default=text("0"))
    fg = Column(Float, server_default=text("0"))
    fga = Column(Float, server_default=text("0"))
    fg_pct = Column(Float, server_default=text("0"))
    threep = Column(Float, server_default=text("0"))
    threepa = Column(Float, server_default=text("0"))
    threep_pct = Column(Float, server_default=text("0"))
    ft = Column(Float, server_default=text("0"))
    fta = Column(Float, server_default=text("0"))
    ft_pct = Column(Float, server_default=text("0"))
    orb = Column(Float, server_default=text("0"))
    drb = Column(Float, server_default=text("0"))
    trb = Column(Float, server_default=text("0"))
    ast = Column(Float, server_default=text("0"))
    stl = Column(Float, server_default=text("0"))
    blk = Column(Float, server_default=text("0"))
    tov = Column(Float, server_default=text("0"))
    pf = Column(Float, server_default=text("0"))
    pts = Column(Float, server_default=text("0"))
    pm = Column(Float, server_default=text("0"))

    match = relationship("Match")
    player = relationship("Player")
    team = relationship("Team")
