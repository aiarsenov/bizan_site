"use client";

import { useState } from "react";

import SectionProjectsTextContent from "./SectionProjectsTextContent";
import SectionProjectsSlider from "./SectionProjectsSlider";

import "./SectionProjects.scss";

export default function SectionProjects({ data }: { data: object }) {
    const [active, setActive] = useState(0);

    return (
        <section className="section section-projects">
            <div className="container section-projects__container">
                <div className="section-projects__wrapper">
                    {data.list?.length > 0 && (
                        <>
                            <SectionProjectsTextContent
                                title={data.title}
                                slide={data.list[active]}
                            />

                            <SectionProjectsSlider
                                onChange={setActive}
                                slides={data.list}
                                isLast={active === data.list?.length - 1}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
