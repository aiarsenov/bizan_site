export default function Main() {
    return (
        <main className="main">
            <h1>БИЗАН</h1>
            <p>Главная страница (данные загружаются из Strapi)</p>
            <p>
                Перейдите в Strapi Admin и заполните контент:{" "}
                <a href="http://localhost:1337/admin">
                    http://localhost:1337/admin
                </a>
            </p>
        </main>
    );
}
