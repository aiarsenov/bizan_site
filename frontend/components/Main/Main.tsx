import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SectionMain from "./SectionMain/SectionMain";

import "./Main.scss";

export default function Main() {
    return (
        <>
            <Header />
            <main className="main">
                <SectionMain />
            </main>
            <Footer />
        </>
    );
}
