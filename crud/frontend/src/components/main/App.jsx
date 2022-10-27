import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from "../template/Logo";
import Nav from "../template/Nav";
import Footer from "../template/Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";


const App = () => (
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
)

export default App;