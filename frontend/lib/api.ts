/**
 * API хелпер для работы со Strapi
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

/**
 * Базовая функция для запросов к Strapi API
 */
async function fetchAPI(
  path: string,
  options: RequestInit = {}
): Promise<any> {
  const url = `${STRAPI_URL}/api${path}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    throw error;
  }
}

/**
 * Получить данные главной страницы
 */
export async function getHomePage() {
  const data = await fetchAPI('/home-page?populate=deep', {
    cache: 'no-store',
  });
  return data.data?.attributes || null;
}

/**
 * Получить услуги
 */
export async function getServices() {
  const homePage = await getHomePage();
  return homePage?.services || [];
}

/**
 * Получить проекты
 */
export async function getProjects() {
  const homePage = await getHomePage();
  return homePage?.projects || [];
}

/**
 * Получить партнеров
 */
export async function getPartners() {
  const homePage = await getHomePage();
  return homePage?.partners || [];
}

/**
 * Получить медиа/новости
 */
export async function getMedia() {
  const homePage = await getHomePage();
  return homePage?.media || [];
}

/**
 * Получить команду
 */
export async function getTeam() {
  const homePage = await getHomePage();
  return homePage?.team || [];
}

/**
 * Получить контакты
 */
export async function getContacts() {
  const homePage = await getHomePage();
  return homePage?.contacts || null;
}

/**
 * Типы данных (для TypeScript)
 */

export interface Service {
  id: number;
  title: string;
  description?: string;
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description?: string;
  link?: string;
  image?: any;
}

export interface Partner {
  id: number;
  name: string;
  website?: string;
  logo?: any;
}

export interface MediaItem {
  id: number;
  title: string;
  excerpt?: string;
  publishedDate?: string;
  link?: string;
  image?: any;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio?: string;
  email?: string;
  phone?: string;
  photo?: any;
}

export interface Contacts {
  id: number;
  address?: string;
  phone?: string;
  email?: string;
  workingHours?: string;
}
