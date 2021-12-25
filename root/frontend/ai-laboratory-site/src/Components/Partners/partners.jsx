import React from "react";
import Politeh from "../../img/politeh.jpg";
import URFU from "../../img/urfu.jpg";
import SPBGU from "../../img/spbgu.jpg";
import n from "./partners.module.css"

const Partners = () => {
    return(
        <section className={n.partners}>
            <img src= {Politeh}/>
            <img src={URFU}/>
            <img src={SPBGU}/>
        </section>
    );
}

export default Partners;