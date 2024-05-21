import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import Home from '../home/Home';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Home'>
                <Route index element={<Home />} />                
            </Route>
            <Route path='/Employees'>
                <Route index element={<div>Employees Page</div>} />                
            </Route>
        </Routes>
    );
};

export default AppRoutes;