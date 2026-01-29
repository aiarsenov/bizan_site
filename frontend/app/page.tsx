<<<<<<< HEAD
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";

export default async function Home() {
    return (
        <>
            <Header />

            <Main />

            <Footer />
        </>
    );
=======
import Link from 'next/link';
import { getHomePage } from '@/lib/api';
import { ArrowRight } from 'lucide-react';

export default async function Home() {
  const pageData = await getHomePage();

  // Если данных нет, показываем заглушку
  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">БИЗАН</h1>
          <p className="text-xl text-gray-600 mb-8">
            Добро пожаловать! Заполните контент в Strapi Admin.
          </p>
          <a
            href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/admin`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Открыть Strapi Admin →
          </a>
        </div>
      </div>
    );
  }

  const { title, subtitle, services, projects } = pageData;

  return (
    <div>
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">{title || 'БИЗАН'}</h1>
          {subtitle && (
            <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="flex gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Наши услуги
            </Link>
            <Link
              href="/contacts"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

      {/* Услуги (preview) */}
      {services && services.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Наши услуги
              </h2>
              <p className="text-xl text-gray-600">
                Профессиональные решения для вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service: any, index: number) => (
                <div
                  key={service.id || index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  {service.icon && (
                    <div className="text-4xl mb-4">{service.icon}</div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Все услуги <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Проекты (preview) */}
      {projects && projects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Наши проекты
              </h2>
              <p className="text-xl text-gray-600">
                Реализованные решения для клиентов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(0, 4).map((project: any, index: number) => (
                <div
                  key={project.id || index}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-gray-600">{project.description}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Все проекты <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA секция */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы подберем оптимальное решение для вашего
            бизнеса
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
>>>>>>> 25bc69520c379e5be7f1dc16a4ab9b9c60406867
}
