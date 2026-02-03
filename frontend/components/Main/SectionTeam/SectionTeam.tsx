"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./SectionTeam.scss";

export default function SectionTeam({ data }: { data: object }) {
    return (
        <section className="section section-team">
            <div className="circle-bg">
               <svg width="1920" height="2025" viewBox="0 0 1920 2025" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse opacity=".2" cx="960" cy="1490.78" rx="1247" ry="533.5" transform="rotate(-180 960 1490.78)" fill="url(#prefix__paint0_linear_1015_737)" fill-opacity=".2"/><ellipse opacity=".2" cx="960" cy="1381.78" rx="1247" ry="533.5" transform="rotate(-180 960 1381.78)" fill="url(#prefix__paint1_linear_1015_737)" fill-opacity=".29"/><g opacity=".69" filter="url(#prefix__filter0_f_1015_737)"><ellipse cx="527.11" cy="725.34" rx="527.11" ry="725.34" transform="matrix(0 -1 .99884 .0481 235 1420.5)" fill="#3C2CED" fill-opacity=".3"/></g><defs><linearGradient id="prefix__paint0_linear_1015_737" x1="958.031" y1="957.28" x2="958.032" y2="1437.23" gradientUnits="userSpaceOnUse"><stop stop-color="#3C2CED"/><stop offset="1" stop-color="#131729"/></linearGradient><linearGradient id="prefix__paint1_linear_1015_737" x1="958.031" y1="848.28" x2="958.032" y2="1328.23" gradientUnits="userSpaceOnUse"><stop stop-color="#3C2CED"/><stop offset="1" stop-color="#131729"/></linearGradient><filter id="prefix__filter0_f_1015_737" x="-165" y="0" width="2249" height="1856.57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_1015_737"/></filter></defs></svg>
            </div>

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
                                        <img src={slide.src} alt={slide.name} />
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

                <Link href="#" className="button-link section-team__read-more">
                    Больше о команде
                </Link>
            </div>
        </section>
    );
}
