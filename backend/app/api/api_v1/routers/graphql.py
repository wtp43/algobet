from app.core.graphql_schemas import schema
from strawberry.fastapi import GraphQLRouter

graphql_router = GraphQLRouter(schema.schema, context_getter=schema.get_context)
