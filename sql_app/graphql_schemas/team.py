from graphene import ID, Field, Int, ObjectType, Schema, String
from graphene_sqlalchemy import SQLAlchemyObjectType

from .sqlmodels import Team as TeamModel


class Team(SQLAlchemyObjectType):
    class Meta:
        model = TeamModel
        interfaces = (ObjectType,)
        # use `only_fields` to only expose specific fields ie "name"
        # only_fields = ("name",)
        # use `exclude_fields` to exclude specific fields ie "last_name"
        # exclude_fields = ("last_name",)


class Query(ObjectType):
    team = Field

    def resolve_boxscore(self, info):
        query = Boxscore.get_query(info)  # SQLAlchemy query
        return query.all()


schema = Schema(query=Query)
