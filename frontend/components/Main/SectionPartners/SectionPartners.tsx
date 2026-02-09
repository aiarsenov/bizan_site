import { motion } from "framer-motion";
import Placeholder from "@/assets/placeholder.jpg";

import "./SectionPartners.scss";

export default function SectionPartners({ data }: { data: object }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <section className="section section-partners" id="partners">
                <div className="container section-partners__container">
                    <h3 className="subtitle section-partners__subtitle">
                        {data.title}
                    </h3>

                    <div className="section-partners__logos">
                        {data?.list?.length > 0 &&
                            data?.list?.map((item) => (
                                <img
                                    src={item.photo || Placeholder.src}
                                    alt={item.name}
                                    key={item.id}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
