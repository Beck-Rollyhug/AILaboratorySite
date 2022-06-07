import React from 'react';
import {Link} from "react-router-dom";

const UsersManager = () => {
    return (
        <section className="main-menu">
            <div className="containerMenu">
                <div className="searchBar">
                    <button className="navbar-toggler iconSetting" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="true"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <input type="text" className="searchUser" placeholder="Найти пользователя..."/>
                </div>
                <div className="usersList">
                    <table className={'table'}>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ФИО</th>
                            <th scope="col">Почта</th>
                            <th scope="col">Роль</th>
                        </tr>
                        </thead>
                        <tr>
                            <th scope="row">1</th>
                            <td className="username"><Link to={'/profile'}>Иванов Иван Иванович</Link></td>
                            <td>email@mail.ru</td>
                            <td>Пользователь</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td className="username">Иванов Иван Иванович</td>
                            <td>email@mail.ru</td>
                            <td>Пользователь</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td className="username">Иванов Иван Иванович</td>
                            <td>email@mail.ru</td>
                            <td>Пользователь</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td className="username">Иванов Иван Иванович</td>
                            <td>email@mail.ru</td>
                            <td>Пользователь</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td className="username">Иванов Иван Иванович</td>
                            <td>email@mail.ru</td>
                            <td>Пользователь</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td className="username">Иванов Иван Иванович</td>
                            <td>email@mail.ru</td>
                            <td>Пользователь</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td className="username">Иванов Иван Иванович</td>
                            <td>email@mail.ru</td>
                            <td>Пользователь</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default UsersManager;