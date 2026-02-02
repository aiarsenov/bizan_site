import SectionMain from "./SectionMain/SectionMain";
import SectionServices from "./SectionServices/SectionServices";
import SectionProjects from "./SectionProjects/SectionProjects";
import SectionPartners from "./SectionPartners/SectionPartners";
import SectionTeam from "./SectionTeam/SectionTeam";
import SectionMedia from "./SectionMedia/SectionMedia";
import SectionFAQ from "./SectionFAQ/SectionFAQ";

import "./Main.scss";

export default function Main() {
    return (
        <main className="main">
            <SectionMain />

            <SectionServices />
{/* 
            <SectionProjects />

            <SectionPartners />

            <SectionTeam />

            <SectionMedia />

            <SectionFAQ /> */}
        </main>
    );
}
