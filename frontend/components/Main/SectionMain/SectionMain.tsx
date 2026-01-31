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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getHomePage();

                if (response) {
                    // Формируем данные из API
                    const apiData: any = {
                        title: response.title?.replace(/\n/g, '<br/>') || data.title,
                        subtitle: response.subtitle || data.subtitle,
                        stats: []
                    };

                    // Если есть stats компонент
                    if (response.stats) {
                        apiData.stats = [
                            { title: `${response.stats.years}`, subtitle: "Лет на рынке" },
                            { title: `${response.stats.projects}+`, subtitle: "Проектов" },
                            { title: `${response.stats.employees}`, subtitle: "Сотрудников" },
                        ];
                    }
                    // Иначе используем services как статистику (временно)
                    else if (response.services && response.services.length > 0) {
                        apiData.stats = response.services.slice(0, 3).map((service: any) => ({
                            title: service.title,
                            subtitle: service.description
                        }));
                    }

                    setData(apiData);
                }
            } catch (error) {
                console.error('Error fetching home page data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
