import React, {useState} from "react";
import n from "./header.module.css"
import Menu from "./BurgerMenu/Menu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
    const items = [{value: "Главная", href: "/main", icon: 1},{value: "Главная", href: "/main", icon: 1},{value: "Главная", href: "/main", icon: 1}]
    

    return(
      <header className={n.mainTitle}>
          <div className={n.container}>

              <div className={n.menuTop}>
                  <nav>
                      <div className={n.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                          <span/>
                      </div>
                  </nav>
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
          <Menu active={menuActive} setActive={setMenuActive} header={"Бургер меню"} items={items}/>
      </header>
  );
}

export default Header;