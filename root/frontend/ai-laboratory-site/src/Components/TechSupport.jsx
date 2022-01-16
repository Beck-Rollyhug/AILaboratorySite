import React from 'react';
import './Styles/TechSupport.css'

const TechSupport = ({userId}) => {
    return (
        <main className="formSignin">
            <form>
                <div className="formFloating">
                    <input className="formControl" type="text" id="floatingName" placeholder="Тема..."/>
                </div>
                <div className="formFloating">
                    <textarea name="msg" placeholder="Текст..."></textarea>
                </div>
                <button className="btnn" type="submit">ОТПРАВИТЬ</button>
            </form>
        </main>
    );
};

export default TechSupport;