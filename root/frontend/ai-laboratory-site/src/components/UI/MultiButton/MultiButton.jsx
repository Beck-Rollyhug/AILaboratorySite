import React from 'react';
import "./MultiButton.css"

const MultiButton = ({text, OnClick}) => {
    return (
        <button className="btn" type="submit" onClick={OnClick}>
            {text}
        </button>
    );
};

export default MultiButton;