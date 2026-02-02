"use client";

import { useState, useEffect } from "react";

import { getHomePage } from "@/lib/api";

import SectionMain from "./SectionMain/SectionMain";
import SectionServices from "./SectionServices/SectionServices";
import SectionProjects from "./SectionProjects/SectionProjects";
import SectionPartners from "./SectionPartners/SectionPartners";
import SectionTeam from "./SectionTeam/SectionTeam";
import SectionMedia from "./SectionMedia/SectionMedia";
import SectionFAQ from "./SectionFAQ/SectionFAQ";

import "./Main.scss";

const LOCAL = {
    hero: {
        title: "Превращаем данные <br/> в инструменты управления объединяя аналитику и технологии",
        subtitle:
            "Не ждём ТЗ, а предлагаем решение: бизнес-логика, методология, проектирование, разработка и внедрение",
        stats: [
            { title: "90%", subtitle: "Рекомендуют" },
            { title: "12", subtitle: "Лет на рынке" },
            { title: "200+", subtitle: "Проектов" },
        ],
    },
    services: {
        title: "Услуги",
        subtitle:
            "Повышаем эффективность бизнеса за счёт цифровизации и управления на основе данных",
        list: [
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
    },
};

export default function Main() {
    const [data, setData] = useState(LOCAL);

    useEffect(() => {
        const response = getHomePage();

        if (response.data) {
            setData(response);
        }
    }, []);

    return (
        <main className="main">
            <SectionMain data={data.hero} />

            <SectionServices data={data.services} />
            {/* 
            <SectionProjects />

            <SectionPartners />

            <SectionTeam />

            <SectionMedia />

            <SectionFAQ /> */}
        </main>
    );
}
