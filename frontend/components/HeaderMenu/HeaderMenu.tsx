"use client";

import "./HeaderMenu.scss";

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

export default function HeaderMenu() {
    return (
        <ul className="header-menu">
            {MENU_ITEMS.map((item, index) => (
                <li key={index}>
                    <a
                        className="header-menu__item"
                        href={item.url}
                        aria-label={item.label}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}
