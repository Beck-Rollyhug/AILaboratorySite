import React from "react";
import n from "./card.module.css"

const Card = (props) => {
  return(
              <div class={n.card}>
                        <img src={props.img} class={n.cardImg} alt={props.alt}/>
                        <div class={n.cardBody}>
                            <div className={n.header}>
                                <h1>{props.name}</h1>
                            </div>
                            <div className={n.text}>
                                <p>{props.text}</p>
                            </div>

                        </div>
                </div>
  );
}

export default Card;