import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import EmployeeTable from '../Employee Page/EmployeeTable';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';
import Home from '../home/Home';
import Maintenence from '../maintenance/Maintenence';
import Documents from '../documents/Documents';
import Education from '../documents/Education';
import Experience from '../documents/Experience';
import Certificates from '../documents/Certificates';
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
            <Route path='Documents'>
                <Route index element={<Documents/>} />
                <Route path='Education' element={<Education />}/>  
                <Route path='Experience' element={<Experience/>}/>
                <Route path='Certificates' element ={<Certificates/>}/>             
            </Route>
            <Route path='/Performance'>
                <Route index element={<Maintenence  name={"Performance"}/>}/>
            </Route>
            <Route path='/Reports'>
                <Route index element={<Maintenence  name={"Reports"}/>}/>
            </Route>
            <Route path="/" element={<EmployeeTable />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
    );
};

export default AppRoutes;