import React from "react";
import n from "./headerOfWorkPage.module.css";
import iisLogo from "../../../img/IIS logo.png";

const HeaderOfWorkPage = (props) => {
  return(
      <header>
          <div className={n.containerTop}>
              <nav className={n.nav}>
                  <a className="nav-link" href={props.firstLink}>{props.first}</a>
                  <a className="nav-link" href={props.secondLink}>{props.second}</a>
                  <a className="nav-link" href={props.thirdLink}>{props.third}</a>
                  <img className="logo-IIS" src={iisLogo}/>
                  <a className="nav-link" href={props.fourthLink}>{props.fourth}</a>
                  <a className="nav-link" href={props.fifthLink}>{props.fifth}</a>
              </nav>
          </div>
      </header>
  );
}

export default HeaderOfWorkPage;