import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination, EffectCreative } from "swiper/modules";
import Link from "next/link";

export default function SectionProjectsSlider({ slides, onChange, isLast }) {
    return (
        <div className="relative">
            <div className="section-projects__slider-pagination"></div>

            <Swiper
                className="section-projects__slider"
                onSlideChange={(s) => onChange(s.activeIndex)}
                speed={800}
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        translate: [0, 0, -200],
                        scale: 0.95,
                    },
                    next: {
                        translate: [0, "100%", 0],
                    },
                }}
                pagination={{
                    el: ".section-projects__slider-pagination",
                    clickable: false,
                }}
                modules={[Mousewheel, Pagination, EffectCreative]}
            >
                {slides.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className="image section-projects__slider-slide"
                    >
                        {item.category && <span>{item.category}</span>}

                        <img src={item.src} alt={`${item.title} - фото`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link
                href="#"
                className={`section-projects__slider-link ${
                    isLast ? "active" : ""
                }`}
            >
                Больше проектов
                <span>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 12h18m0 0l-6.223 7M21 12l-6.223-7"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </Link>
        </div>
    );
}
