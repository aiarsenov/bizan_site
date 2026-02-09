import { RequestModalProvider } from "@/components/RequestModalContext";

import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

export default async function Home() {
    return (
        <RequestModalProvider>
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        </RequestModalProvider>
    );
}
