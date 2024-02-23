from app.core.crud import crud
from app.core.pydantic_schemas import pydantic_schemas
from app.dependencies import get_session
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.get("/teams", response_model=list[pydantic_schemas.Team])
async def read_teams(session: AsyncSession = Depends(get_session)):
    try:
        teams = await crud.get_teams(session)
        return teams
    except Exception as e:
        print(f"Unexpected error: {e}")
