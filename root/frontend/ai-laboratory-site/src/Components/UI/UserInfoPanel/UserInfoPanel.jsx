import React from 'react';
import "./UserInfoPanel.css"
import {Link} from "react-router-dom";

const UserInfoPanel = ({fullName, studyInfo, email, phoneNumber, otherContactLink}) => {
    return (
        <div className="userProfile">
            <h1 className="name">{fullName}</h1>
            <p>{studyInfo}</p>
            <p>Почта: {email}</p>
            <p>Номер: {phoneNumber}</p>
            <p>Другие контакты: {otherContactLink}</p>
            <Link className="btn" to="/profile/edit">НАСТРОИТЬ</Link>
        </div>
    );
};

export default UserInfoPanel;