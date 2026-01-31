import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "БИЗАН | Профессиональные решения для бизнеса",
  description: "Инновационные продукты и услуги для вашего бизнеса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
