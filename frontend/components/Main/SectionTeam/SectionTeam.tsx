"use client";

import type { SectionData } from "@/types/sectionData";
import type { Image } from "@/types/image";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import Placeholder from "@/assets/placeholder.jpg";

import "swiper/css";
import "./SectionTeam.scss";

type ListItem = {
    id: number;
    name: string | number;
    position: string | number;
    photo: Image;
    photo2: Image;
};

export type SectionTeamData = SectionData<ListItem>;

export default function SectionTeam({ data }: { data: SectionTeamData }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <section className="section section-team" id="team">
                <div className="circle-bg"></div>

                <div className="container section-team__container">
                    <div className="section-team__header">
                        <h2 className="title">{data.title}</h2>
                        <h3 className="subtitle">{data.subtitle}</h3>
                    </div>

                    <div className="section-team__slider slider-team">
                        {data.list?.length > 0 && (
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1.05}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2.05,
                                        spaceBetween: 15,
                                    },
                                    1280: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {data.list?.map((slide) => (
                                    <SwiperSlide
                                        key={slide.id}
                                        className="slider-team__slide"
                                    >
                                        <div className="image slider-team__image">
                                            <img
                                                className="slider-team__image_first"
                                                src={
                                                    slide.photo?.data
                                                        ?.attributes?.url
                                                        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${slide.photo.data.attributes.url}`
                                                        : Placeholder.src
                                                }
                                                alt={String(slide.name)}
                                                loading="lazy"
                                            />

                                            <img
                                                src={
                                                    slide.photo2?.data
                                                        ?.attributes?.url
                                                        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${slide.photo2.data.attributes.url}`
                                                        : Placeholder.src
                                                }
                                                alt={String(slide.name)}
                                                loading="lazy"
                                            />
                                        </div>

                                        <div className="slider-team__name">
                                            {slide.name}
                                        </div>

                                        <div className="slider-team__position">
                                            {slide.position}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>

                    {/* <Link href="#" className="button-link section-team__read-more">
                    Больше о команде
                </Link> */}
                </div>
            </section>
        </motion.div>
    );
}
