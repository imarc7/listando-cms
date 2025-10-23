# Build stage
FROM node:20-bullseye-slim AS build
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends python3 build-essential && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
# BuildKit cache for npm (requires DOCKER_BUILDKIT=1)
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .
ENV NODE_ENV=production
RUN npm run build
RUN npm prune --omit=dev

# Runtime
FROM node:20-bullseye-slim
WORKDIR /app
ENV NODE_ENV=production
RUN apt-get update && apt-get install -y --no-install-recommends libvips && rm -rf /var/lib/apt/lists/*
COPY --from=build /app /app
RUN useradd -m strapi && chown -R strapi:strapi /app
USER strapi
EXPOSE 1370
CMD ["node", "node_modules/.bin/strapi", "start"]
