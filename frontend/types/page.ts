import { SectionMainData } from "@/components/Main/SectionMain/SectionMain";
import { SectionServicesData } from "@/components/Main/SectionServices/SectionServices";
import { SectionProjectsData } from "@/components/Main/SectionProjects/SectionProjects";
import { SectionPartnersData } from "@/components/Main/SectionPartners/SectionPartners";
import { SectionTeamData } from "@/components/Main/SectionTeam/SectionTeam";
import { SectionMediaData } from "@/components/Main/SectionMedia/SectionMedia";
import { FAQData } from "@/components/FAQ/FAQ";

export type MainPageData = {
    hero?: SectionMainData;
    services?: SectionServicesData;
    projects?: SectionProjectsData;
    partners?: SectionPartnersData;
    team?: SectionTeamData;
    media?: SectionMediaData;
    faq?: FAQData;
};
