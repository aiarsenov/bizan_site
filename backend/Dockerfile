# Dockerfile для Strapi (Production)
# Используется в docker-compose.prod.yml

FROM node:20-alpine AS base

# 1. Установка зависимостей
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --production

# 2. Сборка приложения
FROM base AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV NODE_ENV=production

RUN npm run build

# 3. Production образ
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 strapi
RUN adduser --system --uid 1001 strapi

# Копируем необходимые файлы
COPY --from=builder --chown=strapi:strapi /app/node_modules ./node_modules
COPY --from=builder --chown=strapi:strapi /app/build ./build
COPY --from=builder --chown=strapi:strapi /app/config ./config
COPY --from=builder --chown=strapi:strapi /app/database ./database
COPY --from=builder --chown=strapi:strapi /app/public ./public
COPY --from=builder --chown=strapi:strapi /app/package*.json ./

# Создаем папку для uploads
RUN mkdir -p /app/public/uploads && chown -R strapi:strapi /app/public/uploads

USER strapi

EXPOSE 1337

CMD ["npm", "run", "start"]
