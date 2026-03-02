"use client";

import { useState, useEffect } from "react";

import { useLocalStorage } from "@/utils/useLocalStorage";

import ButtonAction from "../ui/Buttons/ButtonAction";
import Link from "next/link";

import "./CookieModal.scss";

export default function CookieModal() {
    const { setItem, getItem } = useLocalStorage();

    const [isAccepted, setIsAccepted] = useState<boolean | null>(null);

    const handleAcceptCookies = () => {
        setItem("cookieConsent", true);
        checkCookies();
    };

    const checkCookies = () => {
        const consent = getItem("cookieConsent");
        setIsAccepted(!!consent);
    };

    useEffect(() => {
        checkCookies();
    }, []);

    return (
        !isAccepted && (
            <div className="cookie-modal">
                <p>
                    Продолжая использовать сайт, Вы даете согласие на использование cookie и обработку своих данных. Вы можете удалить cookie-файлы с Вашего устройства через настройки браузера, а также заблокировать размещение cookie-файлов. Подробнее в{" "}
                    <Link href="/documents/privacy-policy.pdf" target="_blank">Политике в отношении обработки и защиты персональных данных</Link>.
                </p>

                <ButtonAction
                    label="Принять и закрыть"
                    onClick={handleAcceptCookies}
                />
            </div>
        )
    );
}
