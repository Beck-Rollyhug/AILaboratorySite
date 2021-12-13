import React from "react";
import n from "./contactUs.module.css";
import HeaderOfWorkPage from "../HeaderOfWorkPage/headerOfWorkPage";
import ContactUsSection from "./ContactUs/ContactUsSection";

const ContactUs = () => {
  return(
      <body className={n.body}>
      <div className={n.profileHeader}>
          <HeaderOfWorkPage first = "Главная" firstLink = "/"
                            second = "Проекты" secondLink = "/profile"
                            third = "Профиль" thirdLink ="/"
                            fourth = "Техподдержка" fourthLink="/techsupport"
                            fifth = "Выйти" fifthlink="/"
          />
      </div>
        <div className={n.profileSection}>
            <ContactUsSection />
        </div>
      </body>
  );
}

export default ContactUs;