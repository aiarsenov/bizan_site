"use client";

import Image from "next/image";
import Link from "next/link";

import Menu from "../Menu/Menu";

import "./Header.scss";

import Logo from "@/assets/logo.svg";
import Tg from "@/assets/telegram.svg";
import ButtonAction from "../ui/buttons/ButtonAction";

export default function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <Link
                    href="/"
                    className="header__logo image"
                    aria-label="Перейти на главную страницу"
                >
                    <Image
                        src={Logo}
                        alt="Логотип компании Бизан"
                        width={91}
                        height={28}
                    />
                </Link>

                <div className="header__content">
                    <Menu />

                    <a
                        href="https://t.me/bizanpro"
                        className="header__telegram-link"
                        target="_blank"
                    >
                        <span>
                            <Image
                                src={Tg}
                                alt="Логотип Telegram"
                                width={91}
                                height={28}
                            />
                        </span>
                        Telegram
                    </a>

                    <ButtonAction
                        label="Обсудить проект"
                        className="header__button-action"
                        onClick={() => console.log("Обсудить проект")}
                    />

                    <button
                        type="button"
                        className="header__menu-btn"
                        title="Открыть меню"
                    >
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
