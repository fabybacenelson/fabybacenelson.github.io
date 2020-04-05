import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){
    return (
    <div className="wrap">
        <Header></Header>
        <main></main>
        <Footer></Footer>
    </div>
        
    )
}

export default App;