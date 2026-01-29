'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'Проекты', href: '/projects' },
    { name: 'О компании', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            БИЗАН
          </Link>

          {/* Десктоп меню */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
