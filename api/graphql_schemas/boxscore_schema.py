from graphene import ID, Field, Int, ObjectType, Schema, String
from strawberry_sqlalchemy_mapper import StrawberrySQLAlchemyMapper

from ..sqlalchemy_models.models import models

# @strawberry_sqlalchemy_mapper.type(models.Team)
