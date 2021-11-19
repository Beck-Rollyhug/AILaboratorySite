import './App.css';
import React from "react";
import Landing from "./Components/landing";
import Login from "./Components/Login/login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Reg from "./Components/Registration/reg";


function App (props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/api/" element={<Landing />} />
                    <Route path="/api/login" element={<Login />} />
                    <Route path="/api/reg" element={<Reg />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
