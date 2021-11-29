import React from "react";
import n from "./profileHeader.module.css";
import iisLogo from "../../../img/IIS logo.png";

const ProfileHeader = () => {
  return(
      <header>
          <div className={n.containerTop}>
              <nav className={n.nav}>
                  <a className={n.navLink} href="lending.html">Главная</a>
                  <a className={n.navLink} href="profile.html">Проекты</a>
                  <img className={n.logoIIS} src={iisLogo} alt="ИИС"/>
                      <a className={n.navLink} href="#">Связаться с нами</a>
                      <a className={n.navLink} href="#">Техподдержка</a>
                      <a className={n.navLink} href="#">Выйти</a>
              </nav>
          </div>
      </header>
  );
}

export default ProfileHeader;