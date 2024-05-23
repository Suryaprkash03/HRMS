import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../../context/EmployeeContext';
import Style from './Employeedetail.module.css';

const EmployeeDetail = () => {
    const { id } = useParams();
    const { employees, setEmployees } = useContext(EmployeeContext);
    const employee = employees.find(emp => emp.id === parseInt(id));
    
    const [isEditingPersonal, setIsEditingPersonal] = useState(false);
    const [isEditingEmployment, setIsEditingEmployment] = useState(false);
    const [updatedEmployee, setUpdatedEmployee] = useState(employee);

    if (!employee) {
        return (
            <div>
                <h2>Employee not found</h2>
                <p>No employee with the ID {id} exists.</p>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedEmployee({ ...updatedEmployee, [name]: value });
    };

    const handlePersonalEditToggle = () => {
        setIsEditingPersonal(!isEditingPersonal);
    };

    const handleEmploymentEditToggle = () => {
        setIsEditingEmployment(!isEditingEmployment);
    };

    const handleSave = () => {
        const updatedEmployees = employees.map(emp =>
            emp.id === updatedEmployee.id ? updatedEmployee : emp
        );
        setEmployees(updatedEmployees);
        setIsEditingPersonal(false);
        setIsEditingEmployment(false);
    };

    return (
        <>
            <div className={Style.card}>
                <div className={Style.card_header}>
                    Personal details <i className={`fa fa-pencil ${Style.searchIcon}`} onClick={handlePersonalEditToggle}></i>
                    {(isEditingPersonal ) && (
                        <i className={`fa fa-save ${Style.save}`} onClick={handleSave}></i>            )}
                </div>
                <div className={Style.card_body}>
                    <div>
                        <img src={employee.profile} alt="Profile" className={Style.profile} />
                    </div>
                    <div className={Style.card_content}>
                        <div className={`row ${Style.rows}`}>
                            <div className={`col-4 ${Style.empname}`}>
                                <i className={`fa fa-mars ${Style.icon}`}></i>
                                {isEditingPersonal ? (
                                    <input
                                        className={Style.input}
                                        type="text"
                                        name="employeeName"
                                        value={updatedEmployee.employeeName}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.employeeName
                                )}
                            </div>
                            <div className="col-4">
                                <i className={`fa fa-male ${Style.icon}`}></i>
                                {isEditingPersonal ? (
                                    <input
                                        type="text"
                                        name="marriedStatus"
                                        value={updatedEmployee.marriedStatus}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.marriedStatus
                                )}
                            </div>
                            <div className="col-4">
                                <i className={`fa fa-graduation-cap ${Style.icon}`}></i>
                                {isEditingPersonal ? (
                                    <input
                                        type="text"
                                        name="degree"
                                        value={updatedEmployee.degree}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.degree
                                )}
                            </div>
                        </div>
                        <div className={`row ${Style.rows}`}>
                            <div className="col-4">
                                <i className={`fa fa-map-marker ${Style.icon}`}></i>
                                {isEditingPersonal ? (
                                    <input
                                        type="text"
                                        name="location"
                                        value={updatedEmployee.location}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.location
                                )}
                            </div>
                            <div className="col-4">
                                <i className={`fa fa-birthday-cake ${Style.icon}`}></i>
                                {isEditingPersonal ? (
                                    <input
                                        type="text"
                                        name="dob"
                                        value={updatedEmployee.dob}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.dob
                                )}
                            </div>
                            <div className="col-4">
                                <i className={`fa fa-shield ${Style.icon}`}></i>
                                {isEditingPersonal ? (
                                    <input
                                        type="text"
                                        name="country"
                                        value={updatedEmployee.country}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.country
                                )}
                            </div>
                        </div>
                        <div className={`row ${Style.rows}`}>
                            <div className="col-4">
                                <i className={`fa fa-phone ${Style.icon}`}></i>
                                {isEditingPersonal ? (
                                    <input
                                        type="text"
                                        name="phone"
                                        value={updatedEmployee.phone}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.phone
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.card1}>
                <div className={Style.card_header}>
                    Employment details <i className={`fa fa-pencil ${Style.searchIcon}`} onClick={handleEmploymentEditToggle}></i>
                    {(isEditingEmployment ) && (
                <i className={`fa fa-save ${Style.save}`} onClick={handleSave} ></i>
            )}
                </div>
                <div class={Style.card_body}>
                    <div class={Style.card_content1}>
                        <div class={`row ${Style.rowborder} ${Style.rows1} `}>
                            <div class={`col-6 ${Style.colunm}`}>
                            <i className={`fa fa-briefcase ${Style.icon}`}></i>
                            Job Title
                            </div>
                            <div className={`col-6 ${Style.colunm1}`}>
                                {isEditingEmployment ? (
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        value={updatedEmployee.jobTitle}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.jobTitle
                                )}
                            </div>
                        </div>
                        <div className={`row ${Style.rows1}`}>
                            <div className={`col-6 ${Style.colunm}`}>
                                <i className={`fa fa-users ${Style.icon}`}></i>
                                Departments
                            </div>
                            <div className={`col-6 ${Style.colunm1}`}>
                                {isEditingEmployment ? (
                                    <input
                                        type="text"
                                        name="department"
                                        value={updatedEmployee.department}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.department
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {(isEditingPersonal || isEditingEmployment) && (
                <button onClick={handleSave} className={Style.saveButton}>Save</button>
            )} */}
        </>
    );
};

export default EmployeeDetail;
