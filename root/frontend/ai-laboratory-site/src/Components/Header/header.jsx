import React from "react";
import n from "./header.module.css"
import Burger from "./BurgerMenu/burgerMenu";

const Header = () => {
  return(
      <header className={n.mainTitle}>
          <div className={n.container}>
              <div className={n.menuTop}>
                  <Burger/>

                  <nav></nav>
                  <div className={n.title}>
                      <h2>Хочу всё понять.</h2>
                      <p>эта идея создаёт ученых</p>
                  </div>
              </div>
              <p className={n.promo}>ИИС приглашает волонтёров и студентов в свои проекты,
                  с применением искусственного интеллекта
                  в исследовании нашей жизни.</p>

              <a href={"#section02"} className={n.scroll}>
                  <div className={n.left}></div>
                  <div className={n.right}></div>
              </a>
          </div>
      </header>
  );
}

export default Header;