import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import Style from './Employee.module.css';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([
        {
            id: 1000,
            employeeName: "John Thampshon",
            jobTitle: "Software Engineer",
            salary: "2500 $",
            hireDate: "10-10-2023",
            contract: "Permanent",
            profile: '/assets/profile.svg'
        },
        {
            id: 1001,
            employeeName: "Thomsan William",
            jobTitle: "Software Engineer",
            salary: "2500 $",
            hireDate: "10-10-2023",
            contract: "Permanent",
            profile: '/assets/profile.svg'
        },
        {
            id: 1002,
            employeeName: "Jonny Joe",
            jobTitle: "Software Engineer",
            salary: "2500 $",
            hireDate: "10-10-2023",
            contract: "Permanent",
            profile: '/assets/profile.svg'
        },
        {
            id: 1003,
            employeeName: " Rose Marry",
            jobTitle: "Software Engineer",
            salary: "2500 $",
            hireDate: "10-10-2023",
            contract: "Permanent",
            profile: '/assets/profile.svg'
        },
        {
            id: 1004,
            employeeName: "Alva Edition",
            jobTitle: "Software Engineer",
            salary: "2500 $",
            hireDate: "10-10-2023",
            contract: "Permanent",
            profile: '/assets/profile.svg'
        }
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
                        <th>Employee's Name</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                        <th>Hire Date</th>
                        <th>Contract</th>
                    </tr>
                </thead>
                <tbody className={Style.tb}>
                    {filteredEmployees.map((employee) => (
                        <tr key={employee.id} className={Style.trow}>
                            <td className={Style.ename}>
                                <img src={employee.profile} alt="employee" className={Style.profile} />
                                {employee.employeeName}
                            </td>
                            <td className={Style.jt}>{employee.jobTitle}</td>
                            <td className={Style.salary}>{employee.salary}</td>
                            <td className={Style.hd}>{employee.hireDate}</td>
                            <td>{employee.contract}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EmployeeTable;
