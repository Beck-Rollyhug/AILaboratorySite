import React from 'react';
import "./MultiLink.css"
import {Link} from "react-router-dom";

const MultiLink = ({url, text}) => {
    return (
        <Link className={"link"} to={url}>
            {text}
        </Link>
    );
};

export default MultiLink;