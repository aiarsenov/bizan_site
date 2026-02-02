"use client";

import { useState, useEffect } from "react";

import { getServices } from "@/lib/api";

import "./SectionServices.scss";

export default function SectionServices() {
    const [data, setData] = useState({
        title: "Услуги",
        subtitle:
            "Повышаем эффективность бизнеса за счёт цифровизации и управления на основе данных",
        services: [
            {
                id: 1,
                title: "Разрабатываем цифровые аналитические сервисы",
                subtitle:
                    "Рыбатекст используется дизайнерами, проектировщиками",
                url: "#",
            },
            {
                id: 2,
                title: "Создаём системы корпоративной аналитики",
                subtitle:
                    "Рыбатекст используется дизайнерами, проектировщиками",
                url: "#",
            },
            {
                id: 3,
                title: "Разрабатываем финансовые модели и бизнес-планы",
                subtitle:
                    "Рыбатекст используется дизайнерами, проектировщиками",
                url: "#",
            },
            {
                id: 4,
                title: "Исследуем рынки, клиентов и конкурентов",
                subtitle:
                    "Рыбатекст используется дизайнерами, проектировщиками",
                url: "#",
            },
            {
                id: 5,
                title: "Проводим экономический анализ бизнеса",
                subtitle:
                    "Рыбатекст используется дизайнерами, проектировщиками",
                url: "#",
            },
        ],
    });

    // useEffect(() => {
    //     const response = getHomePage();

    //     if (response) {
    //         setData(response);
    //     }
    // }, []);

    return (
        <section className="section-services">
            <div className="container section-services__container">
                <div className="section-services__text-content">
                    <h2 className="title">{data.title}</h2>
                    <h3 className="subtitle">{data.subtitle}</h3>
                </div>

                <ul className="section-services__list">
                    {data.services.length > 0 &&
                        data.services.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.url}
                                    className="section-services__list-item"
                                >
                                    <strong>{item.title}</strong>

                                    <p>{item.subtitle}</p>

                                    <div className="section-services__list-item-icon">
                                        <svg
                                            width="16"
                                            height="12"
                                            viewBox="0 0 16 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 6h14m0 0l-4.84 5M15 6l-4.84-5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    );
}
