"use client";

import { useRequestModal } from "@/components/RequestModalContext";

import ParallaxElipses from "@/components/ui/ParallaxElipses/ParallaxElipses";
import ButtonAction from "../../ui/Buttons/ButtonAction";
import ScrollIcon from "@/components/ui/ScrollIcon/ScrollIcon";

import "./SectionMain.scss";

export default function SectionMain({ data }: { data: object }) {
    const { open } = useRequestModal();

    return (
        <section className="section-main">
            <div className="bg-active"></div>
            {/* <ParallaxElipses /> */}

            <div className="container section-main__container">
                <div className="section-main__top">
                    <h1
                        className="section-main__title"
                        dangerouslySetInnerHTML={{ __html: data?.title }}
                    />

                    <p>{data?.subtitle}</p>
                </div>

                {data?.stats && data?.stats?.length > 0 && (
                    <ul className="section-main__stats">
                        {data?.stats.map((item, index) => (
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
                    onClick={open}
                />

                <div className="scroll-icon__wrapper">
                    <ScrollIcon />
                </div>
            </div>
        </section>
    );
}
