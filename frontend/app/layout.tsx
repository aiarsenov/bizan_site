import type { Metadata } from "next";
<<<<<<< HEAD
=======
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
>>>>>>> 25bc69520c379e5be7f1dc16a4ab9b9c60406867

import "@/styles/connected-fonts.scss";
import "@/styles/reset.scss";
import "@/styles/globals.scss";

export const metadata: Metadata = {
<<<<<<< HEAD
    title: "Бизан",
    description: "Бизан | Исследования рынков | Корпоративные финансы",
=======
  title: "БИЗАН | Профессиональные решения для бизнеса",
  description: "Инновационные продукты и услуги для вашего бизнеса",
>>>>>>> 25bc69520c379e5be7f1dc16a4ab9b9c60406867
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
<<<<<<< HEAD
    return (
        <html lang="ru">
            <body className={`antialiased`}>
                <div className="wrapper">{children}</div>
            </body>
        </html>
    );
=======
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
>>>>>>> 25bc69520c379e5be7f1dc16a4ab9b9c60406867
}
