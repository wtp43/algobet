# coding: utf-8
from sqlalchemy import (BigInteger, Boolean, Column, Date, DateTime, Float,
                        ForeignKey, Integer, SmallInteger, Table, Text, text)
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
    player_matches = relationship(
        "PlayerPerformance",
        primaryjoin="Player.player_id == PlayerPerformance.player_id",
        back_populates="player_info",
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

    away_team = relationship(
        "TeamName",
        primaryjoin="Match.away_id == Team.team_id",
        back_populates="match_away",
    )

    home_team = relationship(
        "TeamName",
        primaryjoin="Match.home_id == Team.team_id",
        back_populates="match_home",
    )
    away_players = relationship(
        "PlayerPerformance",
        primaryjoin="and_(Match.match_id == PlayerPerformance.match_id, Match.away_id == PlayerPerformance.team_id)",
        back_populates="match",
    )
    home_players = relationship(
        "PlayerPerformance",
        primaryjoin="and_(Match.match_id == PlayerPerformance.match_id, Match.home_id== PlayerPerformance.team_id)",
        back_populates="match",
        overlaps="away_players",
    )


class Model(Match):
    __tablename__ = "model"

    index = Column(BigInteger, index=True)
    match_id = Column(ForeignKey("match.match_id"), primary_key=True, unique=True)
    home_ml = Column(Float(53))
    away_ml = Column(Float(53))
    home_spread = Column(Float(53))
    away_spread = Column(Float(53))
    home_ps_odds = Column(Float(53))
    away_ps_odds = Column(Float(53))
    over = Column(Float(53))
    under = Column(Float(53))
    spread = Column(Float(53))
    season = Column(BigInteger)
    movl = Column(Float(53))
    h_win = Column(BigInteger)
    away_per = Column(Float(53))
    home_per = Column(Float(53))
    prev_3_home_per = Column(Float(53))
    prev_3_away_per = Column(Float(53))
    prev_hth_home_per = Column(Float(53))
    prev_hth_away_per = Column(Float(53))
    match_length = Column(Float(53))
    home_bpm = Column(Float(53))
    away_bpm = Column(Float(53))
    home_fg = Column(Float(53))
    away_fg = Column(Float(53))
    home_fg_pct = Column(Float(53))
    away_fg_pct = Column(Float(53))
    home_3p = Column(Float(53))
    away_3p = Column(Float(53))
    home_3pa = Column(Float(53))
    away_3pa = Column(Float(53))
    home_3p_pct = Column(Float(53))
    away_3p_pct = Column(Float(53))
    home_ft = Column(Float(53))
    away_ft = Column(Float(53))
    home_ft_pct = Column(Float(53))
    away_ft_pct = Column(Float(53))
    home_orb = Column(Float(53))
    away_orb = Column(Float(53))
    home_orb_pct = Column(Float(53))
    away_orb_pct = Column(Float(53))
    home_drb = Column(Float(53))
    away_drb = Column(Float(53))
    home_drb_pct = Column(Float(53))
    away_drb_pct = Column(Float(53))
    home_trb = Column(Float(53))
    away_trb = Column(Float(53))
    home_trb_pct = Column(Float(53))
    away_trb_pct = Column(Float(53))
    home_tov = Column(Float(53))
    away_tov = Column(Float(53))
    home_tov_pct = Column(Float(53))
    away_tov_pct = Column(Float(53))
    home_ast = Column(Float(53))
    away_ast = Column(Float(53))
    home_ast_pct = Column(Float(53))
    away_ast_pct = Column(Float(53))
    home_stl = Column(Float(53))
    away_stl = Column(Float(53))
    home_stl_pct = Column(Float(53))
    away_stl_pct = Column(Float(53))
    home_blk = Column(Float(53))
    away_blk = Column(Float(53))
    home_blk_pct = Column(Float(53))
    away_blk_pct = Column(Float(53))
    home_drtg = Column(Float(53))
    away_drtg = Column(Float(53))
    home_ortg = Column(Float(53))
    away_ortg = Column(Float(53))
    home_efg_pct = Column(Float(53))
    away_efg_pct = Column(Float(53))
    post_hth_home_pts_ema2 = Column(Float(53))
    post_hth_away_pts_ema2 = Column(Float(53))
    post_hth_home_bpm_ema2 = Column(Float(53))
    post_hth_away_bpm_ema2 = Column(Float(53))
    post_hth_home_fg_ema2 = Column(Float(53))
    post_hth_away_fg_ema2 = Column(Float(53))
    post_hth_home_fg_pct_ema2 = Column(Float(53))
    post_hth_away_fg_pct_ema2 = Column(Float(53))
    post_hth_home_3p_ema2 = Column(Float(53))
    post_hth_away_3p_ema2 = Column(Float(53))
    post_hth_home_3p_pct_ema2 = Column(Float(53))
    post_hth_away_3p_pct_ema2 = Column(Float(53))
    post_hth_home_ft_ema2 = Column(Float(53))
    post_hth_away_ft_ema2 = Column(Float(53))
    post_hth_home_ft_pct_ema2 = Column(Float(53))
    post_hth_away_ft_pct_ema2 = Column(Float(53))
    post_hth_home_orb_ema2 = Column(Float(53))
    post_hth_away_orb_ema2 = Column(Float(53))
    post_hth_home_orb_pct_ema2 = Column(Float(53))
    post_hth_away_orb_pct_ema2 = Column(Float(53))
    post_hth_home_drb_ema2 = Column(Float(53))
    post_hth_away_drb_ema2 = Column(Float(53))
    post_hth_home_drb_pct_ema2 = Column(Float(53))
    post_hth_away_drb_pct_ema2 = Column(Float(53))
    post_hth_home_trb_ema2 = Column(Float(53))
    post_hth_away_trb_ema2 = Column(Float(53))
    post_hth_home_trb_pct_ema2 = Column(Float(53))
    post_hth_away_trb_pct_ema2 = Column(Float(53))
    post_hth_home_tov_ema2 = Column(Float(53))
    post_hth_away_tov_ema2 = Column(Float(53))
    post_hth_home_tov_pct_ema2 = Column(Float(53))
    post_hth_away_tov_pct_ema2 = Column(Float(53))
    post_hth_home_ast_ema2 = Column(Float(53))
    post_hth_away_ast_ema2 = Column(Float(53))
    post_hth_home_ast_pct_ema2 = Column(Float(53))
    post_hth_away_ast_pct_ema2 = Column(Float(53))
    post_hth_home_stl_ema2 = Column(Float(53))
    post_hth_away_stl_ema2 = Column(Float(53))
    post_hth_home_stl_pct_ema2 = Column(Float(53))
    post_hth_away_stl_pct_ema2 = Column(Float(53))
    post_hth_home_blk_ema2 = Column(Float(53))
    post_hth_away_blk_ema2 = Column(Float(53))
    post_hth_home_blk_pct_ema2 = Column(Float(53))
    post_hth_away_blk_pct_ema2 = Column(Float(53))
    post_hth_home_drtg_ema2 = Column(Float(53))
    post_hth_away_drtg_ema2 = Column(Float(53))
    post_hth_home_ortg_ema2 = Column(Float(53))
    post_hth_away_ortg_ema2 = Column(Float(53))
    post_hth_home_efg_pct_ema2 = Column(Float(53))
    post_hth_away_efg_pct_ema2 = Column(Float(53))
    prev_hth_home_pts_sma2 = Column(Float(53))
    prev_hth_away_pts_sma2 = Column(Float(53))
    prev_hth_home_pts_ema2 = Column(Float(53))
    prev_hth_away_pts_ema2 = Column(Float(53))
    prev_hth_home_bpm_sma2 = Column(Float(53))
    prev_hth_away_bpm_sma2 = Column(Float(53))
    prev_hth_home_bpm_ema2 = Column(Float(53))
    prev_hth_away_bpm_ema2 = Column(Float(53))
    prev_hth_home_fg_sma2 = Column(Float(53))
    prev_hth_away_fg_sma2 = Column(Float(53))
    prev_hth_home_fg_ema2 = Column(Float(53))
    prev_hth_away_fg_ema2 = Column(Float(53))
    prev_hth_home_fg_pct_sma2 = Column(Float(53))
    prev_hth_away_fg_pct_sma2 = Column(Float(53))
    prev_hth_home_fg_pct_ema2 = Column(Float(53))
    prev_hth_away_fg_pct_ema2 = Column(Float(53))
    prev_hth_home_3p_sma2 = Column(Float(53))
    prev_hth_away_3p_sma2 = Column(Float(53))
    prev_hth_home_3p_ema2 = Column(Float(53))
    prev_hth_away_3p_ema2 = Column(Float(53))
    prev_hth_home_3p_pct_sma2 = Column(Float(53))
    prev_hth_away_3p_pct_sma2 = Column(Float(53))
    prev_hth_home_3p_pct_ema2 = Column(Float(53))
    prev_hth_away_3p_pct_ema2 = Column(Float(53))
    prev_hth_home_ft_sma2 = Column(Float(53))
    prev_hth_away_ft_sma2 = Column(Float(53))
    prev_hth_home_ft_ema2 = Column(Float(53))
    prev_hth_away_ft_ema2 = Column(Float(53))
    prev_hth_home_ft_pct_sma2 = Column(Float(53))
    prev_hth_away_ft_pct_sma2 = Column(Float(53))
    prev_hth_home_ft_pct_ema2 = Column(Float(53))
    prev_hth_away_ft_pct_ema2 = Column(Float(53))
    prev_hth_home_orb_sma2 = Column(Float(53))
    prev_hth_away_orb_sma2 = Column(Float(53))
    prev_hth_home_orb_ema2 = Column(Float(53))
    prev_hth_away_orb_ema2 = Column(Float(53))
    prev_hth_home_orb_pct_sma2 = Column(Float(53))
    prev_hth_away_orb_pct_sma2 = Column(Float(53))
    prev_hth_home_orb_pct_ema2 = Column(Float(53))
    prev_hth_away_orb_pct_ema2 = Column(Float(53))
    prev_hth_home_drb_sma2 = Column(Float(53))
    prev_hth_away_drb_sma2 = Column(Float(53))
    prev_hth_home_drb_ema2 = Column(Float(53))
    prev_hth_away_drb_ema2 = Column(Float(53))
    prev_hth_home_drb_pct_sma2 = Column(Float(53))
    prev_hth_away_drb_pct_sma2 = Column(Float(53))
    prev_hth_home_drb_pct_ema2 = Column(Float(53))
    prev_hth_away_drb_pct_ema2 = Column(Float(53))
    prev_hth_home_trb_sma2 = Column(Float(53))
    prev_hth_away_trb_sma2 = Column(Float(53))
    prev_hth_home_trb_ema2 = Column(Float(53))
    prev_hth_away_trb_ema2 = Column(Float(53))
    prev_hth_home_trb_pct_sma2 = Column(Float(53))
    prev_hth_away_trb_pct_sma2 = Column(Float(53))
    prev_hth_home_trb_pct_ema2 = Column(Float(53))
    prev_hth_away_trb_pct_ema2 = Column(Float(53))
    prev_hth_home_tov_sma2 = Column(Float(53))
    prev_hth_away_tov_sma2 = Column(Float(53))
    prev_hth_home_tov_ema2 = Column(Float(53))
    prev_hth_away_tov_ema2 = Column(Float(53))
    prev_hth_home_tov_pct_sma2 = Column(Float(53))
    prev_hth_away_tov_pct_sma2 = Column(Float(53))
    prev_hth_home_tov_pct_ema2 = Column(Float(53))
    prev_hth_away_tov_pct_ema2 = Column(Float(53))
    prev_hth_home_ast_sma2 = Column(Float(53))
    prev_hth_away_ast_sma2 = Column(Float(53))
    prev_hth_home_ast_ema2 = Column(Float(53))
    prev_hth_away_ast_ema2 = Column(Float(53))
    prev_hth_home_ast_pct_sma2 = Column(Float(53))
    prev_hth_away_ast_pct_sma2 = Column(Float(53))
    prev_hth_home_ast_pct_ema2 = Column(Float(53))
    prev_hth_away_ast_pct_ema2 = Column(Float(53))
    prev_hth_home_stl_sma2 = Column(Float(53))
    prev_hth_away_stl_sma2 = Column(Float(53))
    prev_hth_home_stl_ema2 = Column(Float(53))
    prev_hth_away_stl_ema2 = Column(Float(53))
    prev_hth_home_stl_pct_sma2 = Column(Float(53))
    prev_hth_away_stl_pct_sma2 = Column(Float(53))
    prev_hth_home_stl_pct_ema2 = Column(Float(53))
    prev_hth_away_stl_pct_ema2 = Column(Float(53))
    prev_hth_home_blk_sma2 = Column(Float(53))
    prev_hth_away_blk_sma2 = Column(Float(53))
    prev_hth_home_blk_ema2 = Column(Float(53))
    prev_hth_away_blk_ema2 = Column(Float(53))
    prev_hth_home_blk_pct_sma2 = Column(Float(53))
    prev_hth_away_blk_pct_sma2 = Column(Float(53))
    prev_hth_home_blk_pct_ema2 = Column(Float(53))
    prev_hth_away_blk_pct_ema2 = Column(Float(53))
    prev_hth_home_drtg_sma2 = Column(Float(53))
    prev_hth_away_drtg_sma2 = Column(Float(53))
    prev_hth_home_drtg_ema2 = Column(Float(53))
    prev_hth_away_drtg_ema2 = Column(Float(53))
    prev_hth_home_ortg_sma2 = Column(Float(53))
    prev_hth_away_ortg_sma2 = Column(Float(53))
    prev_hth_home_ortg_ema2 = Column(Float(53))
    prev_hth_away_ortg_ema2 = Column(Float(53))
    prev_hth_home_efg_pct_sma2 = Column(Float(53))
    prev_hth_away_efg_pct_sma2 = Column(Float(53))
    prev_hth_home_efg_pct_ema2 = Column(Float(53))
    prev_hth_away_efg_pct_ema2 = Column(Float(53))
    post_home_pts_ema3 = Column(Float(53))
    post_away_pts_ema3 = Column(Float(53))
    post_home_bpm_ema3 = Column(Float(53))
    post_away_bpm_ema3 = Column(Float(53))
    post_home_fg_ema3 = Column(Float(53))
    post_away_fg_ema3 = Column(Float(53))
    post_home_fg_pct_ema3 = Column(Float(53))
    post_away_fg_pct_ema3 = Column(Float(53))
    post_home_3p_ema3 = Column(Float(53))
    post_away_3p_ema3 = Column(Float(53))
    post_home_3p_pct_ema3 = Column(Float(53))
    post_away_3p_pct_ema3 = Column(Float(53))
    post_home_ft_ema3 = Column(Float(53))
    post_away_ft_ema3 = Column(Float(53))
    post_home_ft_pct_ema3 = Column(Float(53))
    post_away_ft_pct_ema3 = Column(Float(53))
    post_home_orb_ema3 = Column(Float(53))
    post_away_orb_ema3 = Column(Float(53))
    post_home_orb_pct_ema3 = Column(Float(53))
    post_away_orb_pct_ema3 = Column(Float(53))
    post_home_drb_ema3 = Column(Float(53))
    post_away_drb_ema3 = Column(Float(53))
    post_home_drb_pct_ema3 = Column(Float(53))
    post_away_drb_pct_ema3 = Column(Float(53))
    post_home_trb_ema3 = Column(Float(53))
    post_away_trb_ema3 = Column(Float(53))
    post_home_trb_pct_ema3 = Column(Float(53))
    post_away_trb_pct_ema3 = Column(Float(53))
    post_home_tov_ema3 = Column(Float(53))
    post_away_tov_ema3 = Column(Float(53))
    post_home_tov_pct_ema3 = Column(Float(53))
    post_away_tov_pct_ema3 = Column(Float(53))
    post_home_ast_ema3 = Column(Float(53))
    post_away_ast_ema3 = Column(Float(53))
    post_home_ast_pct_ema3 = Column(Float(53))
    post_away_ast_pct_ema3 = Column(Float(53))
    post_home_stl_ema3 = Column(Float(53))
    post_away_stl_ema3 = Column(Float(53))
    post_home_stl_pct_ema3 = Column(Float(53))
    post_away_stl_pct_ema3 = Column(Float(53))
    post_home_blk_ema3 = Column(Float(53))
    post_away_blk_ema3 = Column(Float(53))
    post_home_blk_pct_ema3 = Column(Float(53))
    post_away_blk_pct_ema3 = Column(Float(53))
    post_home_drtg_ema3 = Column(Float(53))
    post_away_drtg_ema3 = Column(Float(53))
    post_home_ortg_ema3 = Column(Float(53))
    post_away_ortg_ema3 = Column(Float(53))
    post_home_efg_pct_ema3 = Column(Float(53))
    post_away_efg_pct_ema3 = Column(Float(53))
    prev_away_pts_sma3 = Column(Float(53))
    prev_away_pts_ema3 = Column(Float(53))
    prev_away_bpm_sma3 = Column(Float(53))
    prev_away_bpm_ema3 = Column(Float(53))
    prev_away_fg_sma3 = Column(Float(53))
    prev_away_fg_ema3 = Column(Float(53))
    prev_away_fg_pct_sma3 = Column(Float(53))
    prev_away_fg_pct_ema3 = Column(Float(53))
    prev_away_3p_sma3 = Column(Float(53))
    prev_away_3p_ema3 = Column(Float(53))
    prev_away_3p_pct_sma3 = Column(Float(53))
    prev_away_3p_pct_ema3 = Column(Float(53))
    prev_away_ft_sma3 = Column(Float(53))
    prev_away_ft_ema3 = Column(Float(53))
    prev_away_ft_pct_sma3 = Column(Float(53))
    prev_away_ft_pct_ema3 = Column(Float(53))
    prev_away_orb_sma3 = Column(Float(53))
    prev_away_orb_ema3 = Column(Float(53))
    prev_away_orb_pct_sma3 = Column(Float(53))
    prev_away_orb_pct_ema3 = Column(Float(53))
    prev_away_drb_sma3 = Column(Float(53))
    prev_away_drb_ema3 = Column(Float(53))
    prev_away_drb_pct_sma3 = Column(Float(53))
    prev_away_drb_pct_ema3 = Column(Float(53))
    prev_away_trb_sma3 = Column(Float(53))
    prev_away_trb_ema3 = Column(Float(53))
    prev_away_trb_pct_sma3 = Column(Float(53))
    prev_away_trb_pct_ema3 = Column(Float(53))
    prev_away_tov_sma3 = Column(Float(53))
    prev_away_tov_ema3 = Column(Float(53))
    prev_away_tov_pct_sma3 = Column(Float(53))
    prev_away_tov_pct_ema3 = Column(Float(53))
    prev_away_ast_sma3 = Column(Float(53))
    prev_away_ast_ema3 = Column(Float(53))
    prev_away_ast_pct_sma3 = Column(Float(53))
    prev_away_ast_pct_ema3 = Column(Float(53))
    prev_away_stl_sma3 = Column(Float(53))
    prev_away_stl_ema3 = Column(Float(53))
    prev_away_stl_pct_sma3 = Column(Float(53))
    prev_away_stl_pct_ema3 = Column(Float(53))
    prev_away_blk_sma3 = Column(Float(53))
    prev_away_blk_ema3 = Column(Float(53))
    prev_away_blk_pct_sma3 = Column(Float(53))
    prev_away_blk_pct_ema3 = Column(Float(53))
    prev_away_drtg_sma3 = Column(Float(53))
    prev_away_drtg_ema3 = Column(Float(53))
    prev_away_ortg_sma3 = Column(Float(53))
    prev_away_ortg_ema3 = Column(Float(53))
    prev_away_efg_pct_sma3 = Column(Float(53))
    prev_away_efg_pct_ema3 = Column(Float(53))
    prev_home_pts_sma3 = Column(Float(53))
    prev_home_pts_ema3 = Column(Float(53))
    prev_home_bpm_sma3 = Column(Float(53))
    prev_home_bpm_ema3 = Column(Float(53))
    prev_home_fg_sma3 = Column(Float(53))
    prev_home_fg_ema3 = Column(Float(53))
    prev_home_fg_pct_sma3 = Column(Float(53))
    prev_home_fg_pct_ema3 = Column(Float(53))
    prev_home_3p_sma3 = Column(Float(53))
    prev_home_3p_ema3 = Column(Float(53))
    prev_home_3p_pct_sma3 = Column(Float(53))
    prev_home_3p_pct_ema3 = Column(Float(53))
    prev_home_ft_sma3 = Column(Float(53))
    prev_home_ft_ema3 = Column(Float(53))
    prev_home_ft_pct_sma3 = Column(Float(53))
    prev_home_ft_pct_ema3 = Column(Float(53))
    prev_home_orb_sma3 = Column(Float(53))
    prev_home_orb_ema3 = Column(Float(53))
    prev_home_orb_pct_sma3 = Column(Float(53))
    prev_home_orb_pct_ema3 = Column(Float(53))
    prev_home_drb_sma3 = Column(Float(53))
    prev_home_drb_ema3 = Column(Float(53))
    prev_home_drb_pct_sma3 = Column(Float(53))
    prev_home_drb_pct_ema3 = Column(Float(53))
    prev_home_trb_sma3 = Column(Float(53))
    prev_home_trb_ema3 = Column(Float(53))
    prev_home_trb_pct_sma3 = Column(Float(53))
    prev_home_trb_pct_ema3 = Column(Float(53))
    prev_home_tov_sma3 = Column(Float(53))
    prev_home_tov_ema3 = Column(Float(53))
    prev_home_tov_pct_sma3 = Column(Float(53))
    prev_home_tov_pct_ema3 = Column(Float(53))
    prev_home_ast_sma3 = Column(Float(53))
    prev_home_ast_ema3 = Column(Float(53))
    prev_home_ast_pct_sma3 = Column(Float(53))
    prev_home_ast_pct_ema3 = Column(Float(53))
    prev_home_stl_sma3 = Column(Float(53))
    prev_home_stl_ema3 = Column(Float(53))
    prev_home_stl_pct_sma3 = Column(Float(53))
    prev_home_stl_pct_ema3 = Column(Float(53))
    prev_home_blk_sma3 = Column(Float(53))
    prev_home_blk_ema3 = Column(Float(53))
    prev_home_blk_pct_sma3 = Column(Float(53))
    prev_home_blk_pct_ema3 = Column(Float(53))
    prev_home_drtg_sma3 = Column(Float(53))
    prev_home_drtg_ema3 = Column(Float(53))
    prev_home_ortg_sma3 = Column(Float(53))
    prev_home_ortg_ema3 = Column(Float(53))
    prev_home_efg_pct_sma3 = Column(Float(53))
    prev_home_efg_pct_ema3 = Column(Float(53))
    favorite = Column(Boolean)
    favorite_won = Column(Boolean)
    past_3_home_favorite_wins = Column(Float(53))
    past_3_away_favorite_wins = Column(Float(53))
    home_elo = Column(Float(53))
    away_elo = Column(Float(53))
    prev_home_elo = Column(Float(53))
    prev_away_elo = Column(Float(53))


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


class TeamName(Team):
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

    match_home = relationship(
        "Match", back_populates="home_team", primaryjoin="Match.home_id == Team.team_id"
    )
    match_away = relationship(
        "Match", back_populates="away_team", primaryjoin="Match.away_id == Team.team_id"
    )


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
    player_info = relationship(
        "Player",
        primaryjoin="Player.player_id == PlayerPerformance.player_id",
        back_populates="player_matches",
    )
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
    match = relationship(
        "Match",
        primaryjoin="PlayerPerformance.match_id==Match.match_id",
    )
    team = relationship(
        "TeamName",
        primaryjoin="PlayerPerformance.team_id==Team.team_id",
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
