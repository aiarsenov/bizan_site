"use client";

import "./Menu.scss";

type MenuItem = {
    url: string;
    label: string;
};

const MENU_ITEMS: MenuItem[] = [
    {
        url: "#services",
        label: "Услуги",
    },
    {
        url: "#projects",
        label: "Проекты",
    },
    {
        url: "#about",
        label: "О компании",
    },
    {
        url: "#team",
        label: "Команда",
    },
    {
        url: "#media",
        label: "Медиа",
    },
    {
        url: "#contacts",
        label: "Контакты",
    },
];

export default function Menu() {
    return (
        <nav className="menu">
            {MENU_ITEMS.map((item, index) => (
                <a
                    className="menu__item"
                    href={item.url}
                    aria-label={item.label}
                    key={index}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}
