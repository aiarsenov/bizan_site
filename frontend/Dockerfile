# Dockerfile для Next.js (Production)
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

# Отключаем телеметрию Next.js
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# 3. Production образ
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем необходимые файлы
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
