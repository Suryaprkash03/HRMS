import React, { createContext, useState } from 'react';

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([
        {
            id: 1000,
            employeeName: "mohammad Shihabudeen",
            jobTitle: "FrontEnd Developer",
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
            department:"Development"
        },
        {
            id: 1001,
            employeeName: "Suryaprakash R",
            jobTitle: "FrontEnd Developer",
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
            employeeName: "VigneshKumar S",
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
            employeeName: "Mohanprasath S",
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
        {
            id: 1004,
            employeeName: "Prakash N",
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

