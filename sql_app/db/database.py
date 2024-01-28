import os
from pathlib import Path

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlslchemy.ext.declarative import declarative_base

basepath = Path()
envars = load_dotenv(basepath / "supabase_db.env")
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
print(SQLALCHEMY_DATABASE_URL)

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
