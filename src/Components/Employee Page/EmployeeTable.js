import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../../context/EmployeeContext';
import Style from './Employee.module.css';

const EmployeeTable = () => {
    const { employees } = useContext(EmployeeContext);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredEmployees = employees.filter(employee =>
        employee.employeeName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className={Style.search}>
                <input
                    className={Style.searchbar}
                    placeholder="Enter the name of the employee..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <i className={`fa fa-search ${Style.searchIcon}`} ></i>
            </div>
            <table className={Style.table}>
                <thead>
                    <tr>
                        <th>Employee's name</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                        <th>Hire date</th>
                        <th>Contract</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map((employee) => (
                        <tr key={employee.id} className={Style.trow}>
                            <td className={Style.ename}>
                                <Link to={`/employee/${employee.id}`} className={Style.rowLink}>
                                    <img src={employee.profile} alt="employee" className={Style.profile} />
                                    {employee.employeeName}
                                    <div className={Style.line}></div>
                                </Link>
                            </td>
                            <td className={Style.jt}>
                                <Link to={`/employee/${employee.id}`} className={Style.rowLink}>
                                    {employee.jobTitle}
                                    <div className={Style.line}></div>
                                </Link>
                            </td>
                            <td className={Style.salary}>
                                <Link to={`/employee/${employee.id}`} className={Style.rowLink}>
                                    {employee.salary}
                                    <div className={Style.line}></div>
                                </Link>
                            </td>
                            <td className={Style.hd}>
                                <Link to={`/employee/${employee.id}`} className={Style.rowLink}>
                                    {employee.hireDate}
                                    <div className={Style.line}></div>
                                </Link>
                            </td>
                            <td>{employee.contract}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EmployeeTable;
