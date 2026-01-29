// // Получение данных с Strapi
// async function getHomePageData() {
//     const strapiUrl =
//         process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

//     try {
//         const res = await fetch(`${strapiUrl}/api/home-page?populate=*`, {
//             cache: "no-store", // Для разработки, чтобы видеть изменения сразу
//         });

//         if (!res.ok) {
//             console.error("API error:", res.status, res.statusText);
//             return null;
//         }

//         const json = await res.json();
//         console.log("API Response:", JSON.stringify(json, null, 2));

//         return json.data;
//     } catch (error) {
//         console.error("Ошибка загрузки данных:", error);
//         return null;
//     }
// }

export default async function Home() {
    // const pageData = await getHomePageData();

    // console.log(pageData);

    // Если данных нет, показываем заглушку
    // if (!pageData) {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>БИЗАН</h1>
            <p>Главная страница (данные загружаются из Strapi)</p>
            <p>
                Перейдите в Strapi Admin и заполните контент:{" "}
                <a href="http://localhost:1337/admin">
                    http://localhost:1337/admin
                </a>
            </p>
        </div>
    );
    // }

    // Данные находятся в pageData.attributes
    // const attributes = pageData.attributes || pageData;
    // const {
    //     title,
    //     subtitle,
    //     services,
    //     projects,
    //     partners,
    //     media,
    //     team,
    //     contacts,
    // } = attributes;

    // console.log("Page attributes:", attributes);

    // return (
    //     <div
    //         style={{
    //             textAlign: "center",
    //             padding: "50px",
    //             maxWidth: "1200px",
    //             margin: "0 auto",
    //         }}
    //     >
    //         {/* Заголовок */}
    //         <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
    //             {title || "БИЗАН"}
    //         </h1>
    //         {subtitle && (
    //             <p style={{ fontSize: "20px", marginBottom: "60px" }}>
    //                 {subtitle}
    //             </p>
    //         )}

    //         {/* Услуги */}
    //         {services && services.length > 0 && (
    //             <section style={{ marginBottom: "80px" }}>
    //                 <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
    //                     Услуги
    //                 </h2>
    //                 <div>
    //                     {services.map((service: any, index: number) => (
    //                         <div key={index} style={{ marginBottom: "20px" }}>
    //                             <h3 style={{ fontSize: "24px" }}>
    //                                 {service.title}
    //                             </h3>
    //                             {service.description && (
    //                                 <p>{service.description}</p>
    //                             )}
    //                         </div>
    //                     ))}
    //                 </div>
    //             </section>
    //         )}

    //         {/* Проекты */}
    //         {projects && projects.length > 0 && (
    //             <section style={{ marginBottom: "80px" }}>
    //                 <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
    //                     Проекты
    //                 </h2>
    //                 <div>
    //                     {projects.map((project: any, index: number) => (
    //                         <div key={index} style={{ marginBottom: "20px" }}>
    //                             <h3 style={{ fontSize: "24px" }}>
    //                                 {project.title}
    //                             </h3>
    //                             {project.description && (
    //                                 <p>{project.description}</p>
    //                             )}
    //                         </div>
    //                     ))}
    //                 </div>
    //             </section>
    //         )}

    //         {/* Партнёры */}
    //         {partners && partners.length > 0 && (
    //             <section style={{ marginBottom: "80px" }}>
    //                 <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
    //                     Партнёры
    //                 </h2>
    //                 <div>
    //                     {partners.map((partner: any, index: number) => (
    //                         <div key={index} style={{ marginBottom: "20px" }}>
    //                             <h3 style={{ fontSize: "24px" }}>
    //                                 {partner.name}
    //                             </h3>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </section>
    //         )}

    //         {/* Медиа */}
    //         {media && media.length > 0 && (
    //             <section style={{ marginBottom: "80px" }}>
    //                 <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
    //                     Медиа
    //                 </h2>
    //                 <div>
    //                     {media.map((item: any, index: number) => (
    //                         <div key={index} style={{ marginBottom: "20px" }}>
    //                             <h3 style={{ fontSize: "24px" }}>
    //                                 {item.title}
    //                             </h3>
    //                             {item.excerpt && <p>{item.excerpt}</p>}
    //                         </div>
    //                     ))}
    //                 </div>
    //             </section>
    //         )}

    //         {/* Команда */}
    //         {team && team.length > 0 && (
    //             <section style={{ marginBottom: "80px" }}>
    //                 <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
    //                     Команда
    //                 </h2>
    //                 <div>
    //                     {team.map((member: any, index: number) => (
    //                         <div key={index} style={{ marginBottom: "20px" }}>
    //                             <h3 style={{ fontSize: "24px" }}>
    //                                 {member.name}
    //                             </h3>
    //                             {member.position && <p>{member.position}</p>}
    //                         </div>
    //                     ))}
    //                 </div>
    //             </section>
    //         )}

    //         {/* Контакты */}
    //         {contacts && (
    //             <section style={{ marginBottom: "80px" }}>
    //                 <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
    //                     Контакты
    //                 </h2>
    //                 <div>
    //                     {contacts.address && <p>{contacts.address}</p>}
    //                     {contacts.phone && <p>Телефон: {contacts.phone}</p>}
    //                     {contacts.email && <p>Email: {contacts.email}</p>}
    //                     {contacts.workingHours && (
    //                         <p>{contacts.workingHours}</p>
    //                     )}
    //                 </div>
    //             </section>
    //         )}
    //     </div>
    // );
}
