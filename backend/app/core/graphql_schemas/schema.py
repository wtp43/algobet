from datetime import datetime
from typing import List, Optional, Union

import strawberry
from app.core.sqlalchemy_models import models
from app.dependencies import async_session, get_session
from fastapi import Depends
from sqlalchemy import and_, or_
from sqlalchemy.future import select
from strawberry.types import Info
from strawberry_sqlalchemy_mapper import (StrawberrySQLAlchemyLoader,
                                          StrawberrySQLAlchemyMapper)

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
                datetime_start = datetime.strptime(start_date, "%Y-%m-%d").date()
                datetime_end = datetime.strptime(end_date, "%Y-%m-%d").date()
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
    async def get_player_performances(
        self,
        info: Info,
        player_id: List[int],
        limit: Optional[int] = 10,
        start_date: Optional[str] = None,
        end_date: Optional[str] = None,
    ) -> List[PlayerPerformance]:

        q = (
            select(models.PlayerPerformance, models.Match)
            .join(models.Match)
            .where(models.PlayerPerformance.player_id.in_(player_id))
            .order_by(models.Model.date.asc())
            .limit(limit)
        )
        if start_date and end_date:
            try:
                datetime_start = datetime.strptime(start_date, "%Y-%m-%d").date()
                print(datetime_start)

                if end_date:
                    datetime_end = datetime.strptime(end_date, "%Y-%m-%d").date()
                else:
                    datetime_end = datetime.today()
                q = q.where(models.Match.date.between(datetime_start, datetime_end))

            except Exception as e:
                raise ValueError(e) from e
        try:
            result = await info.context["session"].scalars(q)
            return result.all()
        except Exception as e:
            raise RuntimeError(e) from e


strawberry_sqlalchemy_mapper.finalize()
schema = strawberry.Schema(query=Query)
