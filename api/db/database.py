import os

from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import (AsyncSession, async_sessionmaker,
                                    create_async_engine)
from sqlalchemy.orm import declarative_base, sessionmaker

# Async database connection
SQLALCHEMY_DATABASE_URL = os.environ.get("DATABASE_URL")
engine = create_async_engine(
    SQLALCHEMY_DATABASE_URL,
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
SQLALCHEMY_DATABASE_URL2 = os.environ.get("DATABASE_URL2")
sync_engine = create_engine(SQLALCHEMY_DATABASE_URL2)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=sync_engine)

Base = declarative_base()
