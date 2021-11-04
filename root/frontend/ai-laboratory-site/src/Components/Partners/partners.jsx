import React from "react";
import Politeh from "../../img/politeh.jpg";
import URFU from "../../img/urfu.jpg";
import SPBGU from "../../img/spbgu.jpg";
import '../../App.css';

const Partners = () => {
  return(
      <section className="partners">
          <img src= {Politeh}/>
          <img src={URFU}/>
          <img src={SPBGU}/>
      </section>
  );
}

export default Partners;