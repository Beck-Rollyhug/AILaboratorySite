import React from "react";
import n from "./profile.module.css";
import HeaderOfWorkPage from "../HeaderOfWorkPage/headerOfWorkPage";
import ProfileSection from "./ProfileSection/profileSection";

const Profile = () => {
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
        <div className={n.profileSection}>
            <ProfileSection />
        </div>
      </body>
  );
}

export default Profile;