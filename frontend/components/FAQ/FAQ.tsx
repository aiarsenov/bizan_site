import "./FAQ.scss";
import FAQListItem from "./FAQListItem";

export default function FAQ({ data }: { data: object }) {
    return (
        <section className="section section-faq">
            <div className="container section-faq__container">
                <h3 className="subtitle section-faq__subtitle">{data.title}</h3>

                <ul className="section-faq__list faq-list">
                    {data.list?.length > 0 &&
                        data.list?.map((item) => (
                            <FAQListItem key={item.id} item={item} />
                        ))}
                </ul>
            </div>
        </section>
    );
}
