import React from "react";
import n from "./listOfProjects.module.css";
import HeaderOfWorkPage from "../HeaderOfWorkPage/headerOfWorkPage";
import ListOfProjectsSection from "./listOfProjectsSection/listOfProjectsSection";

const ListOfProjects = () => {
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
      <div className={n.listOfProjectsSection}>
        <ListOfProjectsSection/>
      </div>
      </body>
  );
}

export default ListOfProjects;