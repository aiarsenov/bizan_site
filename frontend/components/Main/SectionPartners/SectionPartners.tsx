import { motion } from "framer-motion";

import type { SectionData } from "@/types/sectionData";
import type { Image } from "@/types/image";

import Placeholder from "@/assets/placeholder.jpg";

import "./SectionPartners.scss";

type ListItem = {
    id: number;
    name: string | number;
    logo: Image;
};

export type SectionPartnersData = SectionData<ListItem>;

export default function SectionPartners({
    data,
}: {
    data: SectionPartnersData;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
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
                                    src={
                                        item.logo?.data?.attributes?.url
                                            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.logo.data.attributes.url}`
                                            : Placeholder.src
                                    }
                                    alt={String(item.name)}
                                    loading="lazy"
                                    key={item.id}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
