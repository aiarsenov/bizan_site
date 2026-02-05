"use client";

import { useState, useEffect } from "react";

import { getMenuList } from "@/lib/api";

import "./Menu.scss";

type MenuItemAttributes = {
    title: string;
    url: string;
    order: number;
    isVisible: boolean;
};

type MenuItem = {
    id: number;
    attributes: MenuItemAttributes;
};

const MENU_ITEMS: MenuItem[] = [
    {
        id: 2,
        attributes: {
            title: "Услуги",
            url: "#services",
            order: 1,
            isVisible: true,
        },
    },
    {
        id: 3,
        attributes: {
            title: "Проекты",
            url: "#projects",
            order: 2,
            isVisible: true,
        },
    },
    {
        id: 7,
        attributes: {
            title: "Медиа",
            url: "#media",
            order: 4,
            isVisible: true,
        },
    },
    {
        id: 6,
        attributes: {
            title: "Команда",
            url: "#team",
            order: 3,
            isVisible: true,
        },
    },
];

export default function Menu() {
    const [data, setData] = useState(MENU_ITEMS);

    useEffect(() => {
        const loadData = async () => {
            const response = await getMenuList();

            if (response) {
                setData(response);
            }
        };

        loadData();
    }, []);

    return (
        <nav className="menu">
            {data.map((item) => (
                <a
                    className="menu__item"
                    href={item.attributes.url}
                    aria-label={item.attributes.title}
                    key={item.id}
                >
                    {item.attributes.title}
                </a>
            ))}
        </nav>
    );
}
