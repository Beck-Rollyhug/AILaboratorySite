import React from "react";
import n from "./card.module.css"

const Card = (props) => {
  return(
              <div class={n.card}>
                        <img class={n.cardImg}/>
                        <img src={props.img} class="card-img-top" alt={props.alt}/>
                        <div class={n.cardBody}>
                            <h1>{props.name}</h1>
                            <p>{props.text}</p>
                        </div>
                </div>
  );
}

export default Card;