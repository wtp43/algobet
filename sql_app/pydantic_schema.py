from pydantic import BaseModel


class TeamInDBBase(BaseModel):
    team_id: int
    team_name: str
    active: float
    inactive: float
    team_abbr: str

    class Config:
        orm_mode = True
