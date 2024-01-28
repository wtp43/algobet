from graphene import ID, Field, Int, ObjectType, Schema, String
from graphene_sqlalchemy import SQLAlchemyObjectType

from .models import Match as BoxscoreModel


class Boxscore(SQLAlchemyObjectType):
    class Meta:
        model = BoxscoreModel
        interfaces = (ObjectType,)
        # use `only_fields` to only expose specific fields ie "name"
        # only_fields = ("name",)
        # use `exclude_fields` to exclude specific fields ie "last_name"
        # exclude_fields = ("last_name",)


class Query(ObjectType):
    boxscore = Field

    def resolve_boxscore(self, info):
        query = Boxscore.get_query(info)  # SQLAlchemy query
        return query.all()


schema = Schema(query=Query)
