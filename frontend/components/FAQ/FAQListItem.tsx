"use client";

import { useState } from "react";

export default function FAQListItem({ item }: { item: object }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={`faq-list__item ${isOpen ? "active" : ""}`}>
            <div
                className="faq-list__item-header"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {item.title}

                <div className="faq-list__item-icon"></div>
            </div>
            <div
                className="faq-list__item-footer"
                dangerouslySetInnerHTML={{
                    __html: item.text,
                }}
            />
        </li>
    );
}
