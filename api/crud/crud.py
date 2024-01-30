from typing import List

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from ..sqlalchemy_models import models


async def get_teams(session: AsyncSession):
    try:
        q = select(models.Team)
        result = await session.execute(q)
        return result.scalars().all()
    except Exception as e:
        print(f"CRUD Error: {e}")
        return None
