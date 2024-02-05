from typing import List, Optional

import strawberry
from fastapi import Depends
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
    async def get_teams(
        self, info: Info, team_ids: Optional[List[int]] = None
    ) -> List[TeamName]:
        if team_ids:
            q = select(models.TeamName).where(models.TeamName.team_id.in_(team_ids))
        else:
            q = select(models.TeamName)

        result = await info.context["session"].scalars(q)
        print(info.selected_fields)
        return result.all()

    @strawberry.field
    async def get_recent_matches(
        self, info: Info, limit: int, offset: int
    ) -> List[Model]:
        q = (
            select(models.Model.away_id)
            .order_by(models.Model.date.desc())
            .limit(limit)
            .offset(offset)
        )
        result = await info.context["session"].scalars(q)
        print(info.selected_fields)
        return result.all()


strawberry_sqlalchemy_mapper.finalize()
schema = strawberry.Schema(query=Query)
