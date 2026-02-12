"use client";

import { useState } from "react";

type Item = {
    question: string | number;
    answer: string | number;
};

export default function FAQListItem({ item }: { item: Item }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={`faq-list__item ${isOpen ? "active" : ""}`}>
            <div
                className="faq-list__item-header"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <b>{item.question}</b>

                <div className="faq-list__item-icon"></div>
            </div>
            <div
                className="faq-list__item-footer"
                dangerouslySetInnerHTML={{
                    __html: item.answer,
                }}
            />
        </li>
    );
}
