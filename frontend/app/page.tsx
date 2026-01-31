import Link from 'next/link';
import { getHomePage } from '@/lib/api';
import { ArrowRight } from 'lucide-react';

export default async function Home() {
  const pageData = await getHomePage();

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
            От
    );
  }

  const { title, subtitle, services, projects } = pageData;

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">{title || 'БИЗАН'}</h1>
          {subtitle && (
            <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {services && services.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Наши услуги
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service: any, index: number) => (
                <div key={servicclassName="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-gray-600">{service.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {projects && projects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Наши проекты
              </h2>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
