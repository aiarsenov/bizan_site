"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Menu from "../Menu/Menu";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

import "./Header.scss";

import Logo from "@/assets/logo.svg";
import Tg from "@/assets/telegram.svg";
import ButtonAction from "../ui/Buttons/ButtonAction";

export default function Header() {
    const [isActive, setIsActive] = useState(false);

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
                        title={isActive ? "Закрыть меню" : "Открыть меню"}
                        onClick={() => setIsActive(true)}
                    >
                        <span></span>
                    </button>
                </div>

                <HeaderMenu isActive={isActive} setIsActive={setIsActive} />
            </div>
        </header>
    );
}
