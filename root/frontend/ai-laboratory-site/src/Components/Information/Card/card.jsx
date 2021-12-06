import React from "react";
import n from "./card.module.css"

const Card = (props) => {
    return(
        <div ClassName={n.card}>
            <img src={props.img} ClassName={n.cardImg} alt={props.alt}/>
            <div ClassName={n.cardBody}>
                <div ClassName={n.header}>
                    <h1>{props.name}</h1>
                </div>
                <div ClassName={n.text}>
                    <p>{props.text}</p>
                </div>

            </div>
        </div>
    );
}

export default Card;