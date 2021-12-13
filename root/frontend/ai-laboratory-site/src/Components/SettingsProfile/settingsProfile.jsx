import React from "react";
import n from "./settingsProfile.module.css";
import HeaderOfWorkPage from "../HeaderOfWorkPage/headerOfWorkPage";
import SettingsProfileForm from "./settingsProfileForm/settingsProfileForm";

const SettingsProfile = () => {
  return(
      <body className={n.body}>
      <div>
          <HeaderOfWorkPage first = "Главная" firstLink = "/"
                            second = "Проекты" secondLink = "/listOfProjects"
                            third = "Профиль" thirdLink ="/profile"
                            fourth = "Связаться с нами" fourthLink="/contactus"
                            fifth = "Выйти" fifthlink="#"
          />
      </div>
      <div className={n.settingsProfileForm}>
          <SettingsProfileForm />
      </div>
      </body>
  );
}

export default SettingsProfile;