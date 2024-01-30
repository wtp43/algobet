from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import Session
from strawberry.fastapi import GraphQLRouter

from .crud import crud
from .db.database import SessionLocal, get_session
from .graphql_schemas import schema
from .pydantic_schemas import pydantic_schemas

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/teams", response_model=list[pydantic_schemas.Team])
async def read_teams(session: AsyncSession = Depends(get_session)):
    try:
        teams = await crud.get_teams(session)
        return teams
    except Exception as e:
        print(f"Unexpected error: {e}")


# @app.get("/teams")
# def read(session: Session = Depends(get_db)):
#     return session.query(models.Team).all()


graphql_app = GraphQLRouter(schema.schema, context_getter=schema.get_context)
app.include_router(graphql_app, prefix="/graphql")
