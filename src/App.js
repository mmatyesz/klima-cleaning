import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Fooldal from './components/fooldal';
import UgyfelV from './components/ugyfel_velemenyek';
import QnA from './components/kerdesek_es_valaszok';
import SzA from './components/szolgaltatasok_es_arak';
import Footer from './components/footer.js'
import AdatK from './components/adatkezelesi_tajekoztato'
import './components/style.css';
import logo from './components/images/logo_sideways_hatternelkul.svg';

function bejon(){
    document.getElementsByClassName('mobile-nav-linkek')[0].classList.toggle('bejon');
}

function App(){
    return(
        <div id="body">
        <Router>
            <nav>
                <a href="/"><img src={ logo }alt="Logo" height="50px"/></a>
                <div id="nav-linkek">
                <NavLink to="/" className="nav-link">Főoldal</NavLink>
                <NavLink to="szolgaltatasok_es_arak" className="nav-link">Szolgáltatások és árak</NavLink>
                <NavLink to="kerdesek_es_valaszok" className="nav-link">Kérdések és válaszok</NavLink>
                <NavLink to="ugyfel_velemenyek" className="nav-link">Ügyfél vélemények</NavLink>
                </div>
                <i className="fa-solid fa-bars" onClick={bejon}></i>
            </nav>
            <div className="mobile-nav-linkek">
                <NavLink to="/" className="nav-link" onClick={bejon}>Főoldal</NavLink>
                <NavLink to="szolgaltatasok_es_arak" className="nav-link" onClick={bejon}>Szolgáltatások és árak</NavLink>
                <NavLink to="kerdesek_es_valaszok" className="nav-link" onClick={bejon}>Kérdések és válaszok</NavLink>
                <NavLink to="ugyfel_velemenyek" className="nav-link" onClick={bejon}>Ügyfél vélemények</NavLink>
            </div>
            <Routes>
                <Route path="/" element={ <Fooldal/> } />
                <Route path="/szolgaltatasok_es_arak" element={ <SzA/> } />
                <Route path="/kerdesek_es_valaszok" element={ <QnA/> } />
                <Route path="/ugyfel_velemenyek" element={ <UgyfelV/> } />
                <Route path="/adatkezelesi_tajekoztato" element={ <AdatK/> } />
            </Routes>
            <Footer></Footer>
        </Router>
        </div>
    );
}

export default App;