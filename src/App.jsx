import React from 'react';
import {
    HashRouter,
    Switch,
    Route
  } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

function App(){
    return (
    <div className="wrap">
        
        <HashRouter>
            <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Projects></Projects>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route>
                        <NoMatch></NoMatch>
                    </Route>
                </Switch>
            <Footer></Footer>
        </HashRouter>
        
    </div>
        
    )
}

export default App;