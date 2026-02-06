"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./SectionTeam.scss";

export default function SectionTeam({ data }: { data: object }) {
    return (
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
                                        <img src={slide.photo} alt={slide.name} />
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
    );
}
