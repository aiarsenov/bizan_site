# ⚡ Быстрый старт за 5 минут

Краткая инструкция для опытных разработчиков.

## Требования
- Node.js 20 LTS (через nvm)
- Docker Desktop

## Команды

```bash
# 1. Установить Node.js 20 (если нет)
nvm install 20 && nvm use 20 && nvm alias default 20

# 2. Клонировать и установить зависимости
git clone https://github.com/aiarsenov/bizan_site.git
cd bizan_site
npm install
cd backend && npm install && cd ..
cd frontend && npm install && cd ..

# 3. Запустить БД (PostgreSQL + Redis)
npm run db:start

# Подождать 10 секунд для инициализации БД

# 4. Запустить Strapi (первый раз)
cd backend
npm run develop
# Создать админа в браузере: http://localhost:1337/admin
# После создания Ctrl+C

# 5. Запустить всё (в новом терминале)
cd /path/to/bizan_site
npm run dev

# Готово!
# Frontend: http://localhost:3000
# Strapi Admin: http://localhost:1337/admin
```

## После первого запуска

```bash
# Каждый раз:
npm run db:start  # Если БД не запущена
npm run dev       # Запустить всё
```

## Остановить

```bash
Ctrl+C           # Остановить dev серверы
npm run db:stop  # Остановить БД
```

Полная документация: [README.md](./README.md)
