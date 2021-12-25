import React from 'react';
import './MultiInput.css'

const MultiInput = () => {
    return (
        <div className="formFloating">
            <input className="formControl" type="text" id="floatingName" placeholder="Ваше имя..."/>
            <label htmlFor="floatingName"></label>
        </div>
    );
};

export default MultiInput;