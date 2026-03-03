import { AppProviders } from "./providers";
import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
    title: "Бизан | Превращаем данные в инструменты управления, объединяя аналитику и технологии",
    description: "Бизан | Превращаем данные в инструменты управления, объединяя аналитику и технологии",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(m,e,t,r,i,k,a){
                                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107093682', 'ym');

                            ym(107093682, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
                        `,
                    }}
                />
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/107093682"
                            style={{ position: 'absolute', left: '-9999px' }}
                            alt=""
                        />
                    </div>
                </noscript>
            </head>
            <body>
                <AppProviders>{children}</AppProviders>
            </body>
        </html>
    );
}
