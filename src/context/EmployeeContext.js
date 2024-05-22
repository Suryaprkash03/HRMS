import React, { createContext, useState } from 'react';

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([
        {
            id: 1000,
            employeeName: "Jerry Tomphson",
            jobTitle: " Middle Marketing Assistant",
            salary: "2500 $",
            hireDate: "14.03.2022",
            contract: "Permanent",
            profile: '/assets/profile.svg',
            marriedStatus:"Single",
            degree:"Bachelor of Engineering",
            location:"Chennai",
            dob:"10.03.1999",
            country:"India",
            phone:"9876543210",
            department:"Marketing"
        },
        {
            id: 1001,
            employeeName: "Jerry Tomphson",
            jobTitle: "Marketing Assistant",
            salary: "2500 $",
            hireDate: "14.03.2022",
            contract: "Permanent",
            profile: '/assets/profile.svg',
            marriedStatus:"Single",
            degree:"Bachelor of Engineering",
            location:"Chennai",
            dob:"10.03.1999",
            country:"India",
            phone:"9876543210",
            department:"Marketing"
        },
        {
            id: 1002,
            employeeName: "Jerry Tomphson",
            jobTitle: "Marketing Assistant",
            salary: "2500 $",
            hireDate: "14.03.2022",
            contract: "Permanent",
            profile: '/assets/profile.svg',
            marriedStatus:"Single",
            degree:"Bachelor of Engineering",
            location:"Chennai",
            dob:"10.03.1999",
            country:"India",
            phone:"9876543210",
            department:"Marketing"
        },
        {
            id: 1003,
            employeeName: "Rose Marry",
            jobTitle: "Software Engineer",
            salary: "2500 $",
            hireDate: "14.03.2022",
            contract: "Permanent",
            profile: '/assets/profile.svg',
            marriedStatus:"Single",
            degree:"Bachelor of Engineering",
            location:"Chennai",
            dob:"10.03.1999",
            country:"India",
            phone:"9876543210",
            department:"Marketing"
        },
    ]);
    return (
        <EmployeeContext.Provider value={{ employees }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export { EmployeeContext, EmployeeProvider };

