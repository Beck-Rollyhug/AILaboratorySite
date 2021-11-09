import './App.css';
import React from "react";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Information from "./Components/Information/information";
import Partners from "./Components/Partners/partners";


function App() {
  return (
    <div className="App">
        <Header />
        <Information/>
        <Partners/>
        <Footer />
    </div>
  );
}

export default App;
