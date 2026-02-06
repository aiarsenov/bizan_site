import { motion } from "framer-motion";

import "./SectionServices.scss";

export default function SectionServices({ data }: { data: object }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <section className="section section-services" id="services">
                <div className="container section-services__container">
                    <div className="section-services__text-content">
                        <h2 className="title">{data.title}</h2>
                        <h3 className="subtitle">{data.subtitle}</h3>
                    </div>

                    <ul className="section-services__list">
                        {data.list?.length > 0 &&
                            data.list?.map((item) => (
                                <li key={item.id}>
                                    <a
                                        // href={item.url}
                                        className="section-services__list-item"
                                    >
                                        <strong>{item.title}</strong>

                                        <p>{item.subtitle}</p>

                                        {/* <div className="section-services__list-item-icon">
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
                                    </div> */}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
        </motion.div>
    );
}
