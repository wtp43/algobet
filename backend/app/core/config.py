from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "algobet-api"
    API_GRAPHQL_STR: str = "/graphql"
    API_V1_STR: str = ""

    BACKEND_CORS_ORIGINS: list[str] = [
        "http://localhost:3000",
        "https://www.algobet.app",
        "https://algobet.app",
        "nextjs-production-d0d2.up.railway.app",
    ]


settings = Settings()
