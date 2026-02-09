import Link from "next/link";

import { motion } from "framer-motion";

import "./SectionMedia.scss";

export default function SectionMedia({ data }: { data: object }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <section className="section section-media" id="media">
                <div className="container section-media__container">
                    <h2 className="title">{data.title}</h2>
                    <h3 className="subtitle">{data.subtitle}</h3>

                    <div className="section-media__content">
                        <ul className="section-media__content-list media-list">
                            {data.list?.length > 0 &&
                                data.list?.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link ?? "#"}
                                            className="media-list__item"
                                        >
                                            <div className="media-list__item-header">
                                                <span>{item.source}</span>
                                                <span>{item.read_time}</span>
                                            </div>

                                            <div className="media-list__item-body">
                                                {item.title}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                        </ul>

                        {/* <Link href="#" className="button-link section-media__read-more">
                        Смотреть другие публикации
                    </Link> */}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
