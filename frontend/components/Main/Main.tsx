"use client";

import { useState, useEffect } from "react";

import { getHomePage } from "@/lib/api";

import SectionMain from "./SectionMain/SectionMain";
import SectionServices from "./SectionServices/SectionServices";
import SectionProjects from "./SectionProjects/SectionProjects";
import SectionPartners from "./SectionPartners/SectionPartners";
import SectionTeam from "./SectionTeam/SectionTeam";
import SectionMedia from "./SectionMedia/SectionMedia";
import FAQ from "../FAQ/FAQ";

import "./Main.scss";

type HomePageData = {
    hero: object;
    services: object;
    projects: object;
    partners: object;
    team: object;
    media: object;
    faq: object;
};

export default function Main() {
    const [data, setData] = useState<HomePageData | null>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const response = await getHomePage();

            if (response) {
                setData(response);
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    if (isLoading)
        return (
            <main
                className="main"
                style={{
                    background: "var(--color-blue-10)",
                    position: "fixed",
                    inset: 0,
                    zIndex: 100,
                }}
            ></main>
        );

    return (
        <main className="main">
            {data?.hero && <SectionMain data={data?.hero} />}

            {data?.services && <SectionServices data={data?.services} />}

            {data?.projects && <SectionProjects data={data?.projects} />}

            {data?.partners && <SectionPartners data={data?.partners} />}

            {data?.team && <SectionTeam data={data?.team} />}

            {data?.media && <SectionMedia data={data?.media} />}

            {data?.faq && <FAQ data={data?.faq} />}
        </main>
    );
}
