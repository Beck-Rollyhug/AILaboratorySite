import React from 'react';

const GeneralSettings = () => {
    return (
        <main className="formSignin">
            <form>
                <label htmlFor="floatingName">Почта для писем из блока "Связаться с нами":</label>
                <div className="formFloating">
                    <input className="formControl" type="text" id="floatingName" placeholder="Почта..."/>
                </div>
                <label htmlFor="floatingTel">Почта для писем из блока "Техподдержка":</label>
                <div className="formFloating">
                    <input type="email" className="formControl" id="floatingTel" placeholder="Почта..."/>
                </div>
                <button className="btnn" type="submit">Сохранить</button>
            </form>
        </main>
    );
};

export default GeneralSettings;