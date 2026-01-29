# 🚀 Deployment Guide - Руководство по деплою

Инструкция по настройке production сервера и автоматического деплоя.

---

## 📋 Production сервер

**Сервер:** Yandex Cloud  
**IP:** 89.169.139.39  
**Домен:** dev.bizan.pro  
**ОС:** Ubuntu 22.04  
**Ресурсы:** 2 vCPU, 4GB RAM  

---

## 🐳 Что установлено на сервере

- **Docker** - контейнеризация
- **Docker Compose** - оркестрация контейнеров
- **Nginx** - reverse proxy
- **Certbot** - SSL сертификаты (Let's Encrypt)
- **Git** - клонирование репозитория

---

## 📦 Контейнеры на production

Запущено **4 Docker контейнера**:

1. **bizan_postgres_prod** - PostgreSQL 15 (БД)
2. **bizan_redis_prod** - Redis 7 (кэш)
3. **bizan_strapi_prod** - Strapi 4.17 (CMS)
4. **bizan_frontend_prod** - Next.js 15 (Frontend)

---

## 🔐 Доступ к серверу

### SSH подключение:

```bash
# Через Yandex Cloud CLI
yc compute ssh --id fhmvicueh4mbqtqvdjsd

# Или напрямую
ssh vasiliy_arsenov@89.169.139.39
```

---

## 📂 Структура на сервере

```
/opt/bizan_site/          # Корень проекта
├── .env                   # Production переменные (НЕ в Git!)
├── docker/
│   └── docker-compose.prod.yml
├── frontend/
├── backend/
└── ...
```

---

## 🔄 Автоматический деплой (GitHub Actions)

### Как работает:

1. Push в `main` → GitHub Actions запускается
2. Подключается к серверу по SSH
3. Выполняет `git pull`
4. Пересобирает Docker образы
5. Перезапускает контейнеры

### Секреты в GitHub:

Настроены в https://github.com/aiarsenov/bizan_site/settings/secrets/actions:

- `SERVER_SSH_KEY` - SSH ключ для подключения
- `SERVER_HOST` - 89.169.139.39
- `SERVER_USER` - vasiliy_arsenov

---

## 🛠️ Ручной деплой (если нужно)

### На сервере:

```bash
# 1. Подключиться к серверу
ssh vasiliy_arsenov@89.169.139.39

# 2. Перейти в папку проекта
cd /opt/bizan_site

# 3. Получить обновления
git pull

# 4. Пересобрать и перезапустить
docker-compose -f docker/docker-compose.prod.yml --env-file .env up -d --build

# 5. Посмотреть логи
docker-compose -f docker/docker-compose.prod.yml logs -f

# 6. Проверить статус
docker ps
```

---

## 📊 Полезные команды на сервере

### Docker контейнеры:

```bash
# Посмотреть статус всех контейнеров
docker ps

# Логи конкретного контейнера
docker logs bizan_strapi_prod -f
docker logs bizan_frontend_prod -f

# Перезапустить контейнер
docker-compose -f docker/docker-compose.prod.yml restart strapi
docker-compose -f docker/docker-compose.prod.yml restart frontend

# Остановить все
docker-compose -f docker/docker-compose.prod.yml down

# Запустить все
docker-compose -f docker/docker-compose.prod.yml --env-file .env up -d
```

### Nginx:

```bash
# Проверить конфигурацию
sudo nginx -t

# Перезагрузить конфигурацию
sudo systemctl reload nginx

# Перезапустить Nginx
sudo systemctl restart nginx

# Посмотреть логи
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### SSL сертификат:

```bash
# Проверить срок действия
sudo certbot certificates

# Обновить вручную
sudo certbot renew

# Тест обновления
sudo certbot renew --dry-run
```

---

## 🔥 Troubleshooting

### Проблема: Сайт не открывается

```bash
# Проверить что контейнеры запущены
docker ps

# Проверить что Nginx работает
sudo systemctl status nginx

# Проверить логи Nginx
sudo tail -50 /var/log/nginx/error.log
```

### Проблема: 502 Bad Gateway

```bash
# Проверить логи контейнеров
docker-compose -f docker/docker-compose.prod.yml logs frontend
docker-compose -f docker/docker-compose.prod.yml logs strapi

# Перезапустить контейнеры
docker-compose -f docker/docker-compose.prod.yml restart
```

### Проблема: SSL не работает

```bash
# Проверить сертификат
sudo certbot certificates

# Обновить сертификат
sudo certbot renew --force-renewal

# Перезагрузить Nginx
sudo systemctl reload nginx
```

---

## 🌐 URLs

- **Frontend:** https://dev.bizan.pro
- **Strapi Admin:** https://dev.bizan.pro/admin
- **Strapi API:** https://dev.bizan.pro/api

---

## 📞 Контакты

- **GitHub:** https://github.com/aiarsenov/bizan_site
- **Email:** venom13@live.ru

---

**Последнее обновление:** 29 января 2026
