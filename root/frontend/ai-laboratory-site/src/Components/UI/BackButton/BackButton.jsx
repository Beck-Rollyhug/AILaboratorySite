import React from 'react';
import "./BackButton.css"
import sprite from "../../img/burger-menu-dark.png"
import {Link} from "react-router-dom";

const BackButton = ({url}) => {
    return (
        <div className={"containerHeader"}>
            <Link to={url}>
                <img src={sprite} alt={"Go back"}/>
            </Link>
        </div>
    );
};

export default BackButton;