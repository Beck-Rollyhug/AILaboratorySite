import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="searching">
            <div className="searchBar">
                <div className="navbarToggler" id="filter" type="button">
                    <span className="navbarTogglerIcon"></span>
                </div>
                <input type="text" className="searchProject" placeholder="Найти проект..."/>
            </div>
            <div className="searchAdd" id="text">
                <div className="searchAddBar searchAddCurator">
                    <input className="addCurator" placeholder="Куратор..." value=""/>
                </div>
                <div className="searchAddBar searchAddTechno">
                    <input className="addTechno" placeholder="Технологии..." value=""/>
                </div>
                <div className="searchAddBar searchAddPartner">
                    <input className="addPartner" placeholder="Партнер..." value=""/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;