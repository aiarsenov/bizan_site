"use client";

import { useSelector } from "react-redux";

import "./Menu.scss";

export default function Menu() {
    const items = useSelector((state) => state.menu.items);

    return (
        <nav className="menu">
            {items?.length > 0 &&
                items
                    ?.filter((item) => item?.attributes?.isVisible)
                    .map((item) => (
                        <a
                            key={item.id}
                            className="menu__item"
                            href={item.attributes.url}
                            aria-label={item.attributes.title}
                        >
                            {item.attributes.title}
                        </a>
                    ))}
        </nav>
    );
}
