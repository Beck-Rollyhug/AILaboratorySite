import React from "react";
import '../../App.css';
import Burger from "./BurgerMenu/burgerMenu";

const Header = () => {
  return(
      <header className="main-title">
          <div className="container">
              <div className="menu-top">
                  {/*<button className="burger-menu" type="button">
                      <span className="icon"></span>
                  </button>*/}
                  <Burger/>

                  <nav></nav>
                  <div className="title">
                      <h2>Хочу всё понять.</h2>
                      <p>эта идея создаёт ученых</p>
                  </div>
              </div>
              <p className="promo">ИИС приглашает волонтёров и студентов в свои проекты,
                  с применением искусственного интеллекта
                  в исследовании нашей жизни.</p>
              <a href="#section02" className="scroll">
                  <div className="left"></div>
                  <div className="right"></div>
              </a>
          </div>
      </header>
  );
}

export default Header;