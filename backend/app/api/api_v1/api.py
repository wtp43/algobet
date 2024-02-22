from app.api.api_v1.routers import graphql, teams
from app.core.config import settings
from fastapi import APIRouter

api_router = APIRouter()
api_router.include_router(graphql.graphql_router, prefix=settings.API_GRAPHQL_STR)
api_router.include_router(teams.router, prefix="/api")
