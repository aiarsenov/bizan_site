import type { SectionData } from "@/types/sectionData";

import { motion } from "framer-motion";

import Link from "next/link";

import "./SectionMedia.scss";

type ListItem = {
    id: number;
    link: string;
    title: string | number;
    source: string;
    read_time: string | number;
};

export type SectionMediaData = SectionData<ListItem>;

export default function SectionMedia({ data }: { data: SectionMediaData }) {
    return (
        <motion.div
            // initial={{ opacity: 0, y: -150 }}
            // whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            // viewport={{ once: true, amount: 0.3 }}
        >
            <section className="section section-media" id="media">
                <div className="container section-media__container">
                    <h2 className="title">{data.title}</h2>
                    <h3 className="subtitle">{data.subtitle}</h3>

                    <div className="section-media__content">
                        <ul className="section-media__content-list media-list">
                            {data.list?.length > 0 &&
                                data.list?.map(
                                    (item, index) =>
                                        index <= 8 && (
                                            <li key={item.id}>
                                                <Link
                                                    href={item.link ?? "#"}
                                                    className="media-list__item"
                                                >
                                                    <div className="media-list__item-header">
                                                        <span>
                                                            {item.source}
                                                        </span>
                                                        <span>
                                                            {item.read_time}
                                                        </span>
                                                    </div>

                                                    <div className="media-list__item-body">
                                                        {item.title}
                                                    </div>
                                                </Link>
                                            </li>
                                        ),
                                )}
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
