import React from "react";
import n from "./techSupport.module.css";
import HeaderOfWorkPage from "../HeaderOfWorkPage/headerOfWorkPage";
import TechSupportSection from "./TechSupport/TechSupportSection";

const TechSupport = () => {
  return(
      <body className={n.body}>
      <div className={n.profileHeader}>
          <HeaderOfWorkPage first = "Главная" firstLink = "/"
                            second = "Проекты" secondLink = "/profile"
                            third = "Профиль" thirdLink ="/"
                            fourth = "Связаться с нами" fourthLink="/contactus"
                            fifth = "Выйти" fifthlink="#"
          />
      </div>
        <div className={n.profileSection}>
            <TechSupportSection />
        </div>
      </body>
  );
}

export default TechSupport;