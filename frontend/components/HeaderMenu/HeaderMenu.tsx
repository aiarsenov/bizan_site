"use client";

import { useState, useEffect } from "react";

import getData from "@/utils/getData";

export default function HeaderMenu() {
    const [menuItems, setMenuItems] = useState([]);

    const getMenuItems = () => {
        const strapiUrl =
            process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

        return getData(`${strapiUrl}/api/menu-items?sort=order:asc`, {
            Accept: "application/json",
        })
            .then((response) => {
                if (response.status === 200) {
                    setMenuItems(response.data.data);
                }
            })
            .catch((error) => {
                console.error(error.message || "Ошибка загрузки меню");
            });
    };

    useEffect(() => {
        getMenuItems();
    }, []);

    return (
        <ul className="header-menu">
            {menuItems.length > 0 &&
                menuItems.map((item) => (
                    <li key={item.id}>{item.attributes.title}</li>
                ))}
        </ul>
    );
}
