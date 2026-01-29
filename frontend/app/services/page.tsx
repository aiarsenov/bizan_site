import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги | БИЗАН',
  description: 'Наши услуги и решения',
};

// Функция для получения данных из Strapi
async function getServices() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page?populate=*`,
      {
        cache: 'no-store', // Не кешировать, всегда свежие данные
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch services');
    }

    const data = await res.json();
    return data.data?.attributes?.services || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header секция */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Наши услуги</h1>
          <p className="text-xl text-blue-100">
            Профессиональные решения для вашего бизнеса
          </p>
        </div>
      </section>

      {/* Список услуг */}
      <section className="container mx-auto px-4 py-16">
        {services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Услуги пока не добавлены. Добавьте их в Strapi Admin.
            </p>
            <a
              href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/admin`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Открыть Strapi Admin →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <div
                key={service.id || index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {/* Иконка (если есть) */}
                {service.icon && (
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                )}

                {/* Заголовок */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>

                {/* Описание */}
                {service.description && (
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
