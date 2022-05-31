import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import UserList from "./components/UserList";

function App () {
    return (
        <div className="App">
            <UserList/>
        </div>
    );
}

export default App;
