"use client";

import ButtonAction from "../../ui/buttons/ButtonAction";

import "./SectionMain.scss";

export default function SectionMain({ data }: { data: object }) {
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
