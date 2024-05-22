import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import Style from './Employee.module.css';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([
        {
            id: 1000,
            employeeName: "Jerry Tomphson",
            jobTitle: "Marketing Assistant",
            salary: "2500 $",
            hireDate: "14.03.2022",
            contract: "Permanent",
            profile: '/assets/profile.svg'
        },
        {
            id: 1001,
            employeeName: "Jerry Tomphson",
            jobTitle: "Marketing Assistant",
            salary: "2500 $",
            hireDate: "14.03.2022",
            contract: "Permanent",
            profile: '/assets/profile.svg'
        },
        {
            id: 1002,
            employeeName: "Jerry Tomphson",
            jobTitle: "Marketing Assistant",
            salary: "2500 $",
            hireDate: "14.03.2022",
            contract: "Permanent",
            profile: '/assets/profile.svg'
        },
        {
            id: 1003,
            employeeName: "Jerry Tomphson",
            jobTitle: "Marketing Assistant",
            salary: "2500 $",
            hireDate: "14.03.2022",
            contract: "Permanent",
            profile: '/assets/profile.svg'
        },
    ]);

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
                                <img src={employee.profile} alt="employee" className={Style.profile} />
                                {employee.employeeName}
                                <div className={Style.line}></div>
                            </td>
                            <td className={Style.jt}>{employee.jobTitle}<div className={Style.line}></div></td>
                            <td className={Style.salary}>{employee.salary}<div className={Style.line}></div></td>
                            <td className={Style.hd}>{employee.hireDate}<div className={Style.line}></div></td>
                            <td>{employee.contract}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EmployeeTable;
