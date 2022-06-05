import './App.css';

import React from "react";

import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";

function App () {
    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
