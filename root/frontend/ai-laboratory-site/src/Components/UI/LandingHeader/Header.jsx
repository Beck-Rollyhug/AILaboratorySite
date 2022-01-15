import React from 'react';
import "./Header.css"
import background from "../../img/boy_pic_original.jpg"
import burger_menu from "../../img/burger-menu.png"
import {Link} from "react-router-dom";

const Header = () => {
    const PressBurgerMenu = () => {
        console.log("Burger menu pressed");
    }
    
    return (
        <header className="main-title">
            <img alt={"background"} src={background}
            style={{
                    position: "absolute",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#010101",
                    backgroundSize: "cover",
                }}/>
            <div className="container">
                <div className="menu-top">
                    <img
                        className={"burgerMenu icon"}
                        src={burger_menu}
                        alt={"burger_menu"}
                        onClick={PressBurgerMenu}
                    />
                    <div className="headerTitle">
                        <h2>Хочу всё понять.</h2>
                        <p>эта идея создаёт ученых</p>
                    </div>
                    <Link to={"/login"}>Войти</Link>
                </div>
                <p className="promo">ИИС приглашает волонтёров и студентов в свои проекты,
                    с применением искусственного интеллекта
                    в исследовании нашей жизни.</p>
                {/*<a href="#section02" className="scroll">
                    <div className="left"></div>
                    <div className="right"></div>
                </a>*/}
            </div>
        </header>
    );
};

export default Header;