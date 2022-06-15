import React from 'react';
import {Link} from "react-router-dom";

const UsersManager = () => {
    return (
        <section className="main-menu">
            <div className="containerMenu">
                <input type="text" className="searchUser" placeholder="Найти пользователя..."/>
                <div className="usersList">
                    <table className={'table table-striped'}>
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
                            <td className="username">Иванов Иван Иванович</td>
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