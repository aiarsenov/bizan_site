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
                    Используя сайт, вы соглашаетесь на обработку данных в
                    Cookies для корректной работы сайта, вашей персонализации, и
                    лругих целей, предусмотренных{" "}
                    <Link href="#">Политикой</Link>
                </p>

                <ButtonAction
                    label="Принять и закрыть"
                    onClick={handleAcceptCookies}
                />
            </div>
        )
    );
}
