import React, {useState} from 'react';
import './SearchBar.css'

const SearchBar = () => {
    const [isActive, setIsActive] = useState(null);

    const handleClick = () => {
        setIsActive(current => !current);
    }

    return (
        <div className="searching">
            <div className="searchBar">
                <button className="navbarToggler" id="filter" type="button"
                onClick={handleClick}/>
                <input type="text" className="searchProject" placeholder="Найти проект..."/>
            </div>
            <div className="searchAdd" id="text"
            style={{
                display: isActive ? 'flex' : 'none',
            }}>
                <div className="searchAddBar searchAddCurator">
                    <label>Куратор</label>
                    <input className="addCurator" placeholder="ФИО..."/>
                </div>
                <div className="searchAddBar searchAddTechno">
                    <label>Технологии</label>
                    <input className="addTechno" placeholder="Название..."/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;