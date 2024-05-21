import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import EmployeeTable from '../Employee Page/EmployeeTable';
import Home from '../home/Home';
import Maintenence from '../maintenance/Maintenence';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Home'>
                <Route index element={<Home />} />                
            </Route>
            <Route path='/Employees'>
                <Route index element={<EmployeeTable/>} />                
            </Route>
            <Route path='/Performance'>
                <Route index element={<Maintenence  name={"Performance"}/>}/>
            </Route>
            <Route path='/Reports'>
                <Route index element={<Maintenence  name={"Reports"}/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;