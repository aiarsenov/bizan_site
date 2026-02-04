"use client";

import Image from "next/image";
import Link from "next/link";

import Menu from "../Menu/Menu";

import Logo from "@/assets/logo.svg";
import ButtonAction from "../ui/Buttons/ButtonAction";

import "./Footer.scss";

export default function Footer() {
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
                            onClick={() => console.log("Написать")}
                        />
                    </div>

                    <div className="footer__col">
                        <a
                            href="https://t.me/bizanpro"
                            className="footer__link"
                            target="_blank"
                        >
                            t.me/bizanpro
                        </a>
                        <a href="mailto:hi@bizan.pro" className="footer__link">
                            hi@bizan.pro
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__bottom-left">
                        <p>ООО «Бизан»</p>
                        <p>ИНН 7453321781</p>
                        <span>© 2025 Бизан</span>
                    </div>

                    <Menu />

                    <div className="footer__bottom-right">
                        <Link href="/">
                            Согласие на обработку <br /> персональных данных
                        </Link>

                        <Link href="/">Политика конфиденциальности</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
