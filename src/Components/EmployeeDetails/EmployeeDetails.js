import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../../context/EmployeeContext';
import Style from './Employeedetail.module.css';


const EmployeeDetail = () => {
    const { id } = useParams();
    const { employees } = useContext(EmployeeContext);
    const employee = employees.find(emp => emp.id === parseInt(id));
    if (!employee) {
        return (
            <div>
                <h2>Employee not found</h2>
                <p>No employee with the ID {id} exists.</p>
            </div>
        );
    }
    return (
        <>
            <div class={Style.card}>
                <div class={Style.card_header}>
                    Personal details <i className={`fa fa-pencil ${Style.searchIcon}`} ></i>
                </div>
                <div class={Style.card_body}>
                    <div>
                        <img src={employee.profile} alt="Profile" className={Style.profile} />
                    </div>
                    <div class={Style.card_content}>
                        <div class={`row ${Style.rows}`}>
                            <div class={`col-4 ${Style.empname}`}>
                            <i className={`fa fa-mars ${Style.icon}`}></i>
                            {employee.employeeName}
                            </div>
                            <div class="col-4">
                            <i className={`fa fa-male ${Style.icon}`}></i>
                            {employee.marriedStatus}
                            </div>
                            <div class="col-4">
                            <i className={`fa fa-graduation-cap ${Style.icon}`}></i>
                            {employee.degree}
                            </div>
                        </div>
                        <div class={`row ${Style.rows}`}>
                            <div class="col-4">
                            <i className={`fa fa-map-marker ${Style.icon}`}></i>
                            {employee.location}
                            </div>
                            <div class="col-4">
                            <i className={`fa fa-birthday-cake ${Style.icon}`}></i>
                            {employee.dob}
                            </div>
                            <div class="col-4">
                            <i className={`fa fa-shield ${Style.icon}`}></i>
                            {employee.country}
                            </div>
                        </div>
                        <div class={`row ${Style.rows}`}>
                            <div class="col-4">
                            <i className={`fa fa-phone ${Style.icon}`}></i>
                            {employee.phone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={Style.card1}>
                <div class={Style.card_header }>
                    Employment details <i className={`fa fa-pencil ${Style.searchIcon}`} ></i>
                </div>
                <div class={Style.card_body}>
                    <div class={Style.card_content1}>
                        <div class={`row ${Style.rows1}`}>
                            <div class={`col-6 ${Style.colunm}`}>
                            <i className={`fa fa-briefcase ${Style.icon}`}></i>
                            Job Title
                            </div>
                            <div class={`col-6 ${Style.colunm1}`}>
                            {employee.jobTitle}
                            </div>
                        </div>
                        <div class={`row ${Style.rows1}`}>
                            <div  class={`col-6 ${Style.colunm}`}>
                            <i className={`fa fa-users ${Style.icon}`}></i>
                            Departments
                            </div>
                            <div class={`col-6 ${Style.colunm1}`}>
                            {employee.department}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeeDetail;
