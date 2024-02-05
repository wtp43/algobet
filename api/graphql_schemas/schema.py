from datetime import datetime
from typing import List, Optional

import strawberry
from fastapi import Depends
from sqlalchemy import and_, or_
from sqlalchemy.future import select
from strawberry.types import Info
from strawberry_sqlalchemy_mapper import (StrawberrySQLAlchemyLoader,
                                          StrawberrySQLAlchemyMapper)

from ..db.database import async_session, get_session
from ..sqlalchemy_models import models

strawberry_sqlalchemy_mapper = StrawberrySQLAlchemyMapper()


@strawberry_sqlalchemy_mapper.type(models.Team)
class Team:
    pass


@strawberry_sqlalchemy_mapper.type(models.TeamName)
class TeamName:
    pass


@strawberry_sqlalchemy_mapper.type(models.PlayerPerformance)
class PlayerPerformance:
    pass


@strawberry_sqlalchemy_mapper.type(models.Match)
class Match:
    pass


@strawberry_sqlalchemy_mapper.type(models.Season)
class Season:
    pass


@strawberry_sqlalchemy_mapper.type(models.Model)
class Model:
    pass


# model not yet implemented
# @strawberry_sqlalchemy_mapper.type(models.Odds)
# class Odds:
#     pass


@strawberry_sqlalchemy_mapper.type(models.Player)
class Player:
    __exlude_fields__ = ["bbref_endpoint"]


async def get_context(session=Depends(get_session)):
    return {
        "session": session,
        "sqlalchemy_loader": StrawberrySQLAlchemyLoader(
            async_bind_factory=async_session
        ),
    }


@strawberry.type
class Query:
    @strawberry.field
    async def get_teams(self, info: Info, team_ids: List[int] = []) -> List[TeamName]:
        if team_ids:
            q = select(models.TeamName).where(models.TeamName.team_id.in_(team_ids))
        else:
            q = select(models.TeamName)
        q = q.where(models.TeamName.inactive == 3000)
        try:
            result = await info.context["session"].scalars(q)
            return result.all()
        except Exception as e:
            raise RuntimeError(e) from e

    @strawberry.field
    async def get_matches(
        self,
        info: Info,
        team_ids: List[int] = [],
        limit: int = 10,
        offset: int = 0,
        start_date: str = "",
        end_date: str = "",
        head_to_head: bool = False,
    ) -> List[Model]:
        q = (
            select(models.Model)
            .order_by(models.Model.date.desc())
            .limit(limit)
            .offset(offset)
        )
        datetime_start = None
        datetime_end = None
        if head_to_head and not team_ids:
            raise ValueError("team_ids is required when head_to_head is True")
        if head_to_head and len(team_ids) != 2:
            raise ValueError(
                "team_ids must contain exactly 2 team ids for head_to_head comparison."
            )
        if start_date and end_date:
            try:
                datetime_start = datetime.strptime(start_date, "%y-%m-%d")
                datetime_end = datetime.strptime(end_date, "%y-%m-%d")
            except Exception as e:
                raise ValueError(e) from e

        if head_to_head:
            q = q.where(
                and_(
                    models.Model.home_id.in_(team_ids),
                    models.Model.away_id.in_(team_ids),
                )
            )
        elif team_ids:
            q = q.where(
                or_(
                    models.Model.home_id.in_(team_ids),
                    models.Model.away_id.in_(team_ids),
                )
            )
        if datetime_start and datetime_end:
            q = q.where(models.Model.date.between(datetime_start, datetime_end))
        try:
            result = await info.context["session"].scalars(q)
            return result.all()
        except Exception as e:
            raise RuntimeError(e) from e

    @strawberry.field
    async def get_players(
        self,
        info: Info,
        match_id: int,
        team_id: Optional[int] = None,
    ) -> List[PlayerPerformance]:
        q = select(models.PlayerPerformance).where(
            models.PlayerPerformance.match_id == match_id
        )
        if team_id:
            q = q.where(models.PlayerPerformance.team_id == team_id)
        try:
            result = await info.context["session"].scalars(q)
            return result.all()
        except Exception as e:
            raise RuntimeError(e) from e


strawberry_sqlalchemy_mapper.finalize()
schema = strawberry.Schema(query=Query)
