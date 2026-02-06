"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import SectionProjectsTextContent from "./SectionProjectsTextContent";
import SectionProjectsSlider from "./SectionProjectsSlider";

import "./SectionProjects.scss";

export default function SectionProjects({ data }: { data: object }) {
    const [active, setActive] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <section className="section section-projects" id="projects">
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
        </motion.div>
    );
}
