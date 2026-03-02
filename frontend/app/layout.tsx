import { AppProviders } from "./providers";
import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
    title: "Бизан | Превращаем данные в инструменты управления, объединяя аналитику и технологии",
    description: "Бизан | Превращаем данные в инструменты управления, объединяя аналитику и технологии",
    icons: {
        icon: '/icon.svg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <AppProviders>{children}</AppProviders>
            </body>
        </html>
    );
}
