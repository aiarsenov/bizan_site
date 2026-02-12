import { AppProviders } from "./providers";
import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
    title: "БИЗАН | Профессиональные решения для бизнеса",
    description: "Инновационные продукты и услуги для вашего бизнеса",
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
