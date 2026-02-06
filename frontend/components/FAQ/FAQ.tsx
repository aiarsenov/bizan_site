import FAQListItem from "./FAQListItem";

import { motion } from "framer-motion";

import "./FAQ.scss";

export default function FAQ({ data }: { data: object }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <section className="section section-faq">
                <div className="container section-faq__container">
                    <h3 className="subtitle section-faq__subtitle">
                        {data.title}
                    </h3>

                    <ul className="section-faq__list faq-list">
                        {data.list?.length > 0 &&
                            data.list?.map((item) => (
                                <FAQListItem key={item.id} item={item} />
                            ))}
                    </ul>
                </div>
            </section>
        </motion.div>
    );
}
