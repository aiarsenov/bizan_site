import "./SectionPartners.scss";

export default function SectionPartners({ data }: { data: object }) {
    return (
        <section className="section section-partners" id="partners">
            <div className="container section-partners__container">
                <h3 className="subtitle section-partners__subtitle">
                    {data.title}
                </h3>

                <div className="section-partners__logos">
                    {data?.list?.length > 0 &&
                        data?.list?.map((item) => (
                            <img
                                src={item.photo}
                                alt={item.name}
                                key={item.id}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}
