import "./SectionPartners.scss";

export default function SectionPartners({ data }: { data: object }) {
    return (
        <section className="section section-partners">
            <div className="container section-partners__container">
                <h3 className="subtitle section-partners__subtitle">
                    {data.title}
                </h3>

                {/* {data?.logos?.length > 0 && (
                    <img src={logo} alt="client logo" />
                )} */}
            </div>
        </section>
    );
}
