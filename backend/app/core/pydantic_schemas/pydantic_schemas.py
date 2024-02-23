from pydantic import BaseModel


class Team(BaseModel):
    team_id: int

    class Config:
        from_attributes = True
