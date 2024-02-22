import os

from dotenv import find_dotenv, load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import (AsyncSession, async_sessionmaker,
                                    create_async_engine)
from sqlalchemy.orm import declarative_base, sessionmaker

env_file = find_dotenv("app/.env.local")
load_dotenv(env_file)

# Async database connection
engine = create_async_engine(
    os.environ.get("DATABASE_URL"),
    # useful for debugging db calls
    echo=True,
)
async_session = async_sessionmaker(
    bind=engine,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)


async def get_session() -> AsyncSession:
    async with async_session() as session:
        try:
            yield session
        finally:
            await session.close()


# Synchronous database connection
sync_engine = create_engine(os.environ.get("DATABASE_URL2"))
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=sync_engine)

Base = declarative_base()
