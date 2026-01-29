import type { Metadata } from "next";

import "@/styles/connected-fonts.scss";
import "@/styles/reset.scss";
import "@/styles/main.scss";

export const metadata: Metadata = {
    title: "Бизан",
    description: "Бизан | Исследования рынков | Корпоративные финансы",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`antialiased`}>
                <div className="wrapper">{children}</div>
            </body>
        </html>
    );
}
