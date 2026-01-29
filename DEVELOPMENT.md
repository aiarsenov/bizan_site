# 👨‍💻 Development Guide - Руководство по разработке

Руководство для frontend разработчиков по работе с проектом БИЗАН.

---

## 🚀 Быстрый старт

```bash
# 1. Клонировать репозиторий
git clone https://github.com/aiarsenov/bizan_site.git
cd bizan_site

# 2. Установить Node.js 20 LTS
nvm install 20
nvm use 20
nvm alias default 20

# 3. Установить зависимости
npm install

# 4. Настроить .env файлы (скопировать из .example)
# См. подробнее в README.md

# 5. Запустить БД (PostgreSQL + Redis)
npm run db:start

# 6. Запустить все сервисы (Strapi + Next.js)
npm run dev
```

**Готово!** 🎉
- Frontend: http://localhost:3000
- Strapi Admin: http://localhost:1337/admin
- Strapi API: http://localhost:1337/api

---

## 📁 Структура проекта

```
bizan_site/
├── frontend/              # Next.js 15 приложение
│   ├── app/              # App Router (страницы и layouts)
│   │   ├── page.tsx     # Главная страница
│   │   ├── layout.tsx   # Корневой layout
│   │   ├── services/    # Страница услуг
│   │   ├── projects/    # Страница проектов
│   │   ├── about/       # О компании
│   │   └── contacts/    # Контакты
│   │
│   ├── components/       # React компоненты
│   │   ├── Header.tsx   # Шапка сайта
│   │   ├── Footer.tsx   # Подвал
│   │   └── ...          # Другие компоненты
│   │
│   ├── lib/             # Утилиты и хелперы
│   │   ├── api.ts       # API для работы со Strapi
│   │   └── utils.ts     # Общие утилиты
│   │
│   └── public/          # Статические файлы
│
├── backend/              # Strapi 4.17 CMS
│   ├── src/
│   │   ├── api/         # API endpoints
│   │   └── components/  # Strapi компоненты
│   └── config/          # Конфигурация Strapi
│
└── docker/              # Docker конфигурации
```

---

## 🎨 Разработка Frontend

### Создание новой страницы

**Пример: Создать страницу "О компании"**

1. Создайте файл `frontend/app/about/page.tsx`:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании | БИЗАН',
  description: 'Информация о компании БИЗАН',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">О компании</h1>
          <p className="text-xl text-blue-100">
            БИЗАН - ваш надежный партнер в бизнесе
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Текст о миссии компании...
          </p>
        </div>
      </section>
    </div>
  );
}
```

2. Страница автоматически доступна на `/about`

---

### Создание компонента

**Пример: Создать карточку услуги**

Создайте файл `frontend/components/ServiceCard.tsx`:

```tsx
interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon 
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      {icon && (
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-3xl">{icon}</span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-800 mb-3">
        {title}
      </h3>
      
      {description && (
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
```

**Использование:**

```tsx
import ServiceCard from '@/components/ServiceCard';

<ServiceCard 
  title="Консалтинг"
  description="Профессиональная консультация"
  icon="🎯"
/>
```

---

### Работа с API Strapi

Используйте готовые функции из `lib/api.ts`:

```tsx
import { getServices, getProjects } from '@/lib/api';

export default async function MyPage() {
  // Получить услуги
  const services = await getServices();
  
  // Получить проекты
  const projects = await getProjects();
  
  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
```

**Доступные функции:**

- `getHomePage()` - Все данные главной страницы
- `getServices()` - Список услуг
- `getProjects()` - Список проектов
- `getPartners()` - Список партнеров
- `getMedia()` - Медиа/новости
- `getTeam()` - Команда
- `getContacts()` - Контакты

---

## 🎨 Styling (TailwindCSS)

Проект использует TailwindCSS для стилей.

**Основные классы:**

```tsx
// Контейнер
<div className="container mx-auto px-4">

// Кнопка
<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">

// Карточка
<div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">

// Заголовки
<h1 className="text-4xl font-bold text-gray-900">
<h2 className="text-3xl font-semibold text-gray-800">

// Текст
<p className="text-gray-600 leading-relaxed">

// Сетка
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

---

## 🔄 Server Components vs Client Components

Next.js 15 использует Server Components по умолчанию.

### Server Component (по умолчанию)

```tsx
// ✅ Server Component - может делать fetch напрямую
export default async function Page() {
  const data = await fetch('...');
  return <div>{data}</div>;
}
```

### Client Component (с интерактивностью)

```tsx
'use client'; // ⚡ Директива для Client Component

import { useState } from 'react';

export default function InteractiveButton() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

**Когда использовать Client Component:**
- `useState`, `useEffect`, другие React hooks
- Обработчики событий (`onClick`, `onChange`)
- Browser APIs (`window`, `localStorage`)

---

## 📝 TypeScript

Проект использует TypeScript. Типы для Strapi API определены в `lib/api.ts`.

**Пример типизированного компонента:**

```tsx
import { Service } from '@/lib/api';

interface ServiceListProps {
  services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 🛠️ Полезные команды

```bash
# Разработка
npm run dev                 # Запустить всё (Strapi + Next.js)
npm run dev:frontend        # Только Next.js
npm run dev:backend         # Только Strapi

# База данных
npm run db:start            # Запустить PostgreSQL + Redis
npm run db:stop             # Остановить БД
npm run db:logs             # Логи БД

# Билд
npm run build               # Билд всего проекта
cd frontend && npm run build  # Билд только frontend

# Линтинг
cd frontend && npm run lint   # Проверить код
```

---

## 🐛 Отладка

### Просмотр логов Next.js

Логи отображаются в терминале где запущен `npm run dev:frontend`

### Просмотр логов Strapi

```bash
npm run dev:backend
```

### Проверка API Strapi

Откройте в браузере:
- http://localhost:1337/api/home-page?populate=*

### Очистка кеша Next.js

```bash
cd frontend
rm -rf .next
npm run dev
```

---

## 📦 Добавление зависимостей

### Frontend зависимости

```bash
cd frontend
npm install <package-name>
```

**Популярные пакеты:**
- UI: `shadcn/ui`, `@radix-ui/react-*`
- Формы: `react-hook-form`, `zod`
- Иконки: `lucide-react`
- Анимации: `framer-motion`

### Backend зависимости

```bash
cd backend
npm install <package-name>
```

---

## 🚢 Деплой изменений

### Локальная разработка → Production

1. **Коммит изменений:**

```bash
git add .
git commit -m "feat: добавить страницу о компании"
git push origin main
```

2. **Автодеплой (если настроен):**
   - GitHub Actions автоматически задеплоит на сервер

3. **Ручной деплой (если нужно):**

```bash
# На сервере
ssh user@server
cd /opt/bizan_site
git pull
docker-compose -f docker/docker-compose.prod.yml --env-file .env up -d --build
```

---

## 🔗 Полезные ссылки

- **Next.js 15 Docs:** https://nextjs.org/docs
- **Strapi Docs:** https://docs.strapi.io
- **TailwindCSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **React 19:** https://react.dev

---

## 💡 Best Practices

1. **Используйте Server Components где возможно** - быстрее и эффективнее
2. **Типизируйте все данные** - используйте TypeScript интерфейсы
3. **Переиспользуйте компоненты** - создавайте в `components/`
4. **Следуйте структуре проекта** - держите код организованным
5. **Тестируйте локально** - перед пушем проверяйте что всё работает
6. **Пишите понятные коммиты** - используйте conventional commits

---

## 📞 Поддержка

Вопросы и проблемы:
- GitHub Issues: https://github.com/aiarsenov/bizan_site/issues
- Email: venom13@live.ru

---

**Последнее обновление:** 29 января 2026
