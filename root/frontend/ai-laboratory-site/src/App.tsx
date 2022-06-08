import './components/styles/App.css';

import React from "react";

import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import AdminNavbar from "./components/UI/admin_navbar/admin_navbar"

function App () {
    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
