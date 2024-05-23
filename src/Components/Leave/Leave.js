import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import style from './Leave.module.css';

const Leave = () => {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [days, setDays] = useState('');
    const [fullDay, setFullDay] = useState('');
    const [reason, setReason] = useState('');
    const formRef = useRef(null);

    const leaveOptions = [
        { value: 'full', label: 'Full Day' },
        { value: 'half', label: 'Half Day' }
    ];

    useEffect(() => {
        if (fromDate && toDate) {
            const timeDifference = toDate - fromDate;
            const dayDifference = timeDifference / (1000 * 3600 * 24);
            setDays(Math.ceil(dayDifference));
        } else {
            setDays('');
        }
    }, [fromDate, toDate]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (fromDate && toDate && toDate < fromDate) {
            alert('To Date cannot be before From Date');
            return;
        }

        if (formRef.current.checkValidity()) {
            console.log('From Date:', fromDate);
            console.log('To Date:', toDate);
            console.log('Number of Days:', days);
            console.log('Day Type:', fullDay);
            console.log('Leave Reason:', reason);

            alert('Form Submitted!');
            handleReset();
        } else {
            formRef.current.reportValidity();
        }
    };

    const handleReset = () => {
        setFromDate(null);
        setToDate(null);
        setDays('');
        setFullDay('');
        setReason('');
    };

    return (
        <div className={style.container}>
            <form ref={formRef} onSubmit={handleAdd} className={`${style.leave_form}`} noValidate>
                <div className='row'>
                    <div className='col-6'>
                        <label htmlFor="fromDate"><span className={style.required}>*</span>From:</label>
                        <div className={style.datePickerContainer}>
                            <DatePicker
                                selected={fromDate}
                                onChange={(date) => setFromDate(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                placeholderText="Select From Date"
                                className={style.datePickerInput}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-6'>
                        <label htmlFor="toDate"><span className={style.required}>*</span>To:</label>
                        <div className={style.datePickerContainer}>
                            <DatePicker
                                selected={toDate}
                                onChange={(date) => setToDate(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                                placeholderText="Select To Date"
                                className={style.datePickerInput}
                                minDate={fromDate}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <label htmlFor="days">Number of Days:</label>
                        <input
                            type="number"
                            id="days"
                            value={days}
                            readOnly
                            className={style.Input}
                        />
                    </div>
                    <div className='col-6'>
                        <label htmlFor="fullDay"><span className={style.required}>*</span>Choose day type:</label>
                        <select
                            id="fullDay"
                            value={fullDay}
                            onChange={(e) => setFullDay(e.target.value)}
                            required
                            className={style.Input}
                        >
                            <option value="">Select</option>
                            {leaveOptions.map(option => (
                                <option key={option.value} value={option.value} className={style.drop}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className={`col ${style.arealabel}`}>
                        <label htmlFor="reason"><span className={style.required}>*</span>Leave Reason:</label>
                        <textarea
                            id="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                            className={style.textarea}
                        />
                    </div>
                </div>
                <div className={style.buttons}>
                    <button type="submit">Apply</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default Leave;
