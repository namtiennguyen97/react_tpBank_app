import './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from "./components/Login";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/login" element={localStorage.getItem('tp_token') !== null ?  <Navigate to="/" replace /> : <Login /> }  />
            <Route exact path="/"  element={ <Home /> } />
            {/*<Route exact path="/credit-card"  element={<CreditCard />} />*/}

            {/*default all unknown path will return home*/}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    </BrowserRouter>
);
reportWebVitals();
