export default function SectionProjectsTextContent({ slide }) {
    return (
        <div className="section-projects__text-content">
            <div key={slide.id} className="fade">
                <h3 className="subtitle">{slide.title}</h3>

                <p>{slide.text}</p>

                <a href={slide.url} className="button-link">
                    Подробнее о проекте
                </a>
            </div>
        </div>
    );
}
