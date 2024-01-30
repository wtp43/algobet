from typing import List, Optional

import strawberry
from fastapi import Depends
from sqlalchemy.future import select
from strawberry.types import Info
from strawberry_sqlalchemy_mapper import (StrawberrySQLAlchemyLoader,
                                          StrawberrySQLAlchemyMapper)

from ..db.database import get_session
from ..sqlalchemy_models import models

strawberry_sqlalchemy_mapper = StrawberrySQLAlchemyMapper()


async def get_context(session=Depends(get_session)):
    return {
        "session": session,
        "sqlalchemy_loader": StrawberrySQLAlchemyLoader(bind=session),
    }


@strawberry_sqlalchemy_mapper.type(models.TeamName)
class TeamName:
    pass


@strawberry.type
class Query:
    @strawberry.field
    async def get_teams(self, info: Info) -> List[TeamName]:
        q = select(models.TeamName)
        result = await info.context["session"].scalars(q)
        return [
            TeamName(
                team_id=r.team_id,
                team_name=r.team_name,
                team_abbr=r.team_abbr,
                active=r.active,
                inactive=r.inactive,
            )
            for r in result.all()
        ]


strawberry_sqlalchemy_mapper.finalize()
schema = strawberry.Schema(query=Query)
