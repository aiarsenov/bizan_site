"use client";

import Image from "next/image";
import Link from "next/link";

import { useRequestModal } from "../RequestModalContext";

import Menu from "../Menu/Menu";
import ButtonAction from "../ui/Buttons/ButtonAction";

import Logo from "@/assets/logo.svg";

import "./Footer.scss";

export default function Footer() {
    const { open } = useRequestModal();

    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__top">
                    <Link
                        href="/"
                        className="footer__logo image"
                        aria-label="Перейти на главную страницу"
                    >
                        <Image
                            src={Logo}
                            alt="Логотип компании Бизан"
                            width={130}
                            height={40}
                        />
                    </Link>

                    <div className="footer__col">
                        <p>
                            Расскажите <br /> о вашем проекте
                        </p>

                        <ButtonAction
                            label="Написать"
                            className="footer__button-action"
                            onClick={open}
                        />
                    </div>

                    <div className="footer__col">
                        <a href="mailto:hi@bizan.pro" className="footer__link">
                            hi@bizan.pro
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__bottom-left">
                        <p>ООО «Бизан»</p>
                        <p>ИНН 7453321781</p>
                        <span>© {new Date().getFullYear()} Бизан</span>
                    </div>

                    <Menu />

                    <div className="footer__bottom-right">
                        <a href="/documents/privacy-policy.pdf" target="_blank">
                            Политика в отношении обработки <br /> и защиты персональных данных
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
