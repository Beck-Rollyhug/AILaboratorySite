import React from "react";
import n from "./pageOfProject.module.css";
import HeaderOfWorkPage from "../HeaderOfWorkPage/headerOfWorkPage";
import PageOfProjectSection from "./PageOfProjectSection/pageOfProjectSection";
import ListOfProjectsSection from "../ListOfProjects/listOfProjectsSection/listOfProjectsSection";

const PageOfProject = () => {
  return(
            <body className={n.body}>
            <div className={n.profileHeader}>
                <HeaderOfWorkPage first = "Главная" firstLink = "/"
                                  second = "Проекты" secondLink = "/listOfProjects"
                                  third = "Профиль" thirdLink ="/profile"
                                  fourth = "Связаться с нами" fourthLink="/contactus"
                                  fifth = "Выйти" fifthlink="#"
                />
            </div>
            <div className={n.pageOfProjectSection}>
                <PageOfProjectSection />
            </div>
            </body>
        );
    }
export default PageOfProject;