FROM node:18-alpine AS base
ARG NEXT_PUBLIC_APP_GITHUB_URL
ARG NEXT_PUBLIC_ETL_GITHUB_URL
ARG NEXT_PUBLIC_GRAPHQL_API
ARG NEXT_PUBLIC_ML_GITHUB_URL
# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /code

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  # if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  if [ -f yarn.lock ]; then yarn; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /code
COPY --from=deps /code/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /code

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /code/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /code/next.config.mjs ./
COPY --from=builder --chown=nextjs:nodejs /code/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /code/.next/static ./.next/static

USER nextjs

ARG PORT
EXPOSE ${PORT} 


# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD PORT=${PORT} HOSTNAME=${HOSTNAME} node server.js 
