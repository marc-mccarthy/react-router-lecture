import React from 'react';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function App() {
    return (
        <div className="App">
            <Header/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#/Animals">Animals</a></li>
                <li><a href="/#/Plants">Plants</a></li>
            </ul>
            <HashRouter>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/animals">
                    <Animals/>
                </Route>
                <Route path="/plants">
                    <Plants/>
                </Route>
            </HashRouter>
            <Footer/>
        </div>
    );
}

export default App;
