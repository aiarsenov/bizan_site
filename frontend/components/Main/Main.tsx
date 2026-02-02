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
    partners: {
        title: "Работаем с компаниями среднего и крупного бизнеса",
        logos: [
            { src: "/partners/Logo-vtb.png", alt: "Логотип" },
            { src: "/partners/Logo-mandarin.png", alt: "Логотип" },
            { src: "/partners/Logo-h2o.png", alt: "Логотип" },
            { src: "/partners/Logo-rtk.png", alt: "Логотип" },
            { src: "/partners/Logo-coleman-group.png", alt: "Логотип" },
            { src: "/partners/Logo-yarmarka.png", alt: "Логотип" },
            { src: "/partners/Logo-sogaz.png", alt: "Логотип" },
            { src: "/partners/Logo-gazstroyprom.png", alt: "Логотип" },
            { src: "/partners/Logo-gemabank.png", alt: "Логотип" },
            { src: "/partners/Logo-united.png", alt: "Логотип" },
            { src: "/partners/Logo-alor.png", alt: "Логотип" },
            { src: "/partners/Logo-tretyakov-gallery.png", alt: "Логотип" },
            { src: "/partners/Logo-energo.png", alt: "Логотип" },
        ],
    },
    media: {
        title: "Медиа",
        subtitle: "Делимся своими подходами в СМИ",
        posts: [
            {
                id: 1,
                title: "Четыре проблемы управленческого учета в бизнесе",
                source: "РБК ПРО",
                read_time: "30 мин.",
                url: "#",
            },
            {
                id: 2,
                title: "Почему даже малому бизнесу нужна аналитика: примеры из практики",
                source: "Клерк",
                read_time: "30 мин.",
                url: "#",
            },
            {
                id: 3,
                title: "Какая у тебя маржа или рентабельность? Что должен знать каждый предприниматель",
                source: "РБК ПРО",
                read_time: "30 мин.",
                url: "#",
            },
            {
                id: 4,
                title: "Как выстроить финансовый план, если ситуация в бизнесе шаткая",
                source: "Executive.ru",
                read_time: "30 мин.",
                url: "#",
            },
            {
                id: 5,
                title: "Как проводить анализ рынка?",
                source: "vc.ru",
                read_time: "30 мин.",
                url: "#",
            },
            {
                id: 6,
                title: "Финансовая модель или бюджет: в чём разница и когда применять каждый инструмент",
                source: "Клерк",
                read_time: "30 мин.",
                url: "#",
            },
        ],
    },
};

export default function Main() {
    const [data, setData] = useState(LOCAL);

    useEffect(() => {
        const loadData = async () => {
            const response = await getHomePage();

            if (response.data) {
                setData(response.data);
            }
        };

        loadData();
    }, []);

    return (
        <main className="main">
            <SectionMain data={data.hero} />

            <SectionServices data={data.services} />

            <SectionProjects />

            <SectionPartners data={data.partners} />

            <SectionTeam />

            <SectionMedia data={data.media} />

            <SectionFAQ />
        </main>
    );
}
