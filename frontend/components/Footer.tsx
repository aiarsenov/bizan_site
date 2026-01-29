import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">БИЗАН</h3>
            <p className="text-gray-400 leading-relaxed">
              Профессиональные решения для вашего бизнеса. Мы создаем
              инновационные продукты и услуги.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@bizan.pro"
                  className="hover:text-white transition-colors"
                >
                  info@bizan.pro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <a
                  href="tel:+79001234567"
                  className="hover:text-white transition-colors"
                >
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} БИЗАН. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
