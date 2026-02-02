#!/bin/bash

# Скрипт для коммита и деплоя на production сервер

set -e

echo "🚀 Начинаем деплой..."

# Проверка что мы в git репозитории
if [ ! -d .git ]; then
  echo "❌ Это не git репозиторий! Инициализируем..."
  git init
  git remote add origin https://github.com/aiarsenov/bizan_site.git
  git branch -M main
fi

# Добавляем все файлы
echo "📦 Добавляем файлы..."
git add .

# Показываем статус
echo "📋 Статус:"
git status

# Создаем коммит
echo ""
read -p "💬 Введите сообщение коммита: " commit_message

if [ -z "$commit_message" ]; then
  commit_message="Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

git commit -m "$commit_message"

# Push в репозиторий
echo "⬆️  Отправляем на GitHub..."
git push origin main

echo "✅ Код отправлен на GitHub!"
echo ""
echo "🔄 GitHub Actions автоматически задеплоит изменения на сервер."
echo "📊 Следите за процессом: https://github.com/aiarsenov/bizan_site/actions"
echo ""
echo "🌐 После деплоя проверьте:"
echo "   - Frontend: https://dev.bizan.pro"
echo "   - Strapi Admin: https://dev.bizan.pro/admin"
echo ""
echo "✨ Готово!"
