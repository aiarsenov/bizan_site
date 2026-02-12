type SlideItem = {
    id: number;
    title: string | number;
    description: string | number;
};

type SectionProjectsTextContentProps = {
    title: string | number;
    slide: SlideItem;
};

export default function SectionProjectsTextContent({
    title,
    slide,
}: SectionProjectsTextContentProps) {
    return (
        <div className="section-projects__text-content">
            <h2 className="title">{title}</h2>

            <div key={slide.id} className="fade">
                <h3 className="subtitle">{slide.title}</h3>

                <p>{slide.description}</p>

                {/* <a href={slide.url} className="button-link">
                    Подробнее о проекте
                </a> */}
            </div>

            <div className="section-projects__slider-pagination"></div>
        </div>
    );
}
