"use client";

import { useState, useEffect } from "react";

import ButtonAction from "../../ui/buttons/ButtonAction";

import { getHomePage } from "@/lib/api";

import "./SectionMain.scss";

export default function SectionMain() {
    const [data, setData] = useState({
        title: "Превращаем данные <br/> в инструменты управления объединяя аналитику и технологии",
        subtitle:
            "Не ждём ТЗ, а предлагаем решение: бизнес-логика, методология, проектирование, разработка и внедрение",
        stats: [
            { title: "90%", subtitle: "Рекомендуют" },
            { title: "12", subtitle: "Лет на рынке" },
            { title: "200+", subtitle: "Проектов" },
        ],
    });

    // useEffect(() => {
    //     const response = getHomePage();

    //     if (response) {
    //         setData(response);
    //     }
    // }, []);

    return (
        <section className="section-main">
            <div className="bg-active"></div>

            <div className="container section-main__container">
                <div className="section-main__top">
                    <h1
                        className="section-main__title"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    />

                    <p>{data.subtitle}</p>
                </div>

                {data.stats && data.stats?.length > 0 && (
                    <ul className="section-main__stats">
                        {data.stats.map((item, index) => (
                            <li key={index}>
                                <strong>{item.title}</strong>
                                <small>{item.subtitle}</small>
                            </li>
                        ))}
                    </ul>
                )}

                <ButtonAction
                    label="Обсудить проект"
                    className="section-main__button-action"
                    onClick={() => console.log("Обсудить проект")}
                />

                <div className="scroll-icon"></div>
            </div>
        </section>
    );
}
