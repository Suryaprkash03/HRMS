import React, { useState } from 'react';
import styles from './Attendance.module.css';

const Attendance = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [attendance, setAttendance] = useState([
    {
      date: 'Thu May 01 2024',
      checkInTimes: ['08:00:00 AM', '01:00:00 PM'],
      checkOutTimes: ['12:00:00 PM', '05:00:00 PM']
    },
    {
      date: 'Fri May 02 2024',
      checkInTimes: ['08:30:00 AM', '01:15:00 PM'],
      checkOutTimes: ['12:30:00 PM', '05:15:00 PM']
    },
    {
      date: 'Mon May 05 2024',
      checkInTimes: ['09:00:00 AM'],
      checkOutTimes: ['01:00:00 PM']
    },
    {
      date: 'Tue May 06 2024',
      checkInTimes: ['09:15:00 AM', '02:00:00 PM'],
      checkOutTimes: ['12:45:00 PM', '06:00:00 PM']
    },
    {
      date: 'Wed May 07 2024',
      checkInTimes: ['08:45:00 AM', '01:30:00 PM'],
      checkOutTimes: ['12:45:00 PM', '05:30:00 PM']
    },
    {
      date: 'Thu May 08 2024',
      checkInTimes: ['08:00:00 AM', '01:00:00 PM'],
      checkOutTimes: ['12:00:00 PM', '05:00:00 PM']
    },
    {
      date: 'Fri May 09 2024',
      checkInTimes: ['08:30:00 AM', '01:15:00 PM'],
      checkOutTimes: ['12:30:00 PM', '05:15:00 PM']
    },
    {
      date: 'Mon May 12 2024',
      checkInTimes: ['09:00:00 AM'],
      checkOutTimes: ['01:00:00 PM']
    },
    {
      date: 'Tue May 13 2024',
      checkInTimes: ['09:15:00 AM', '02:00:00 PM'],
      checkOutTimes: ['12:45:00 PM', '06:00:00 PM']
    },
    {
      date: 'Wed May 14 2024',
      checkInTimes: ['08:45:00 AM', '01:30:00 PM'],
      checkOutTimes: ['12:45:00 PM', '05:30:00 PM']
    },
    {
      date: 'Thu May 15 2024',
      checkInTimes: ['08:00:00 AM', '01:00:00 PM'],
      checkOutTimes: ['12:00:00 PM', '05:00:00 PM']
    },
    {
      date: 'Fri May 16 2024',
      checkInTimes: ['08:30:00 AM', '01:15:00 PM'],
      checkOutTimes: ['12:30:00 PM', '05:15:00 PM']
    },
    {
      date: 'Mon May 19 2024',
      checkInTimes: ['09:00:00 AM'],
      checkOutTimes: ['01:00:00 PM']
    },
    {
      date: 'Tue May 20 2024',
      checkInTimes: ['09:15:00 AM', '02:00:00 PM'],
      checkOutTimes: ['12:45:00 PM', '06:00:00 PM']
    },
    {
      date: 'Wed May 21 2024',
      checkInTimes: ['08:45:00 AM', '01:30:00 PM'],
      checkOutTimes: ['12:45:00 PM', '05:30:00 PM']
    },
    {
      date: 'Thu May 22 2024',
      checkInTimes: ['08:00:00 AM', '01:00:00 PM'],
      checkOutTimes: ['12:00:00 PM', '05:00:00 PM']
    }
  ]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const handleCheckInOut = () => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    const currentDate = now.toDateString();

    setAttendance(prevAttendance => {
      const existingRecord = prevAttendance.find(record => record.date === currentDate);

      if (existingRecord) {
        if (isCheckedIn) {
          if (existingRecord.checkInTimes.length > existingRecord.checkOutTimes.length) {
            existingRecord.checkOutTimes.unshift(currentTime);
          }
        } else {
          if (existingRecord.checkInTimes.length === existingRecord.checkOutTimes.length) {
            existingRecord.checkInTimes.unshift(currentTime);
          }
        }
      } else {
        return [{ date: currentDate, checkInTimes: [currentTime], checkOutTimes: [] }, ...prevAttendance];
      }

      return [...prevAttendance];
    });

    setIsCheckedIn(!isCheckedIn);
  };

  const handlePreviousMonth = () => {
    setSelectedMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      return newMonth;
    });
  };

  const handleCurrentMonth = () => {
    setSelectedMonth(new Date());
  };

  const handleMonthSelect = (event) => {
    const [year, month] = event.target.value.split('-');
    setSelectedMonth(new Date(year, month - 1));
  };

const filteredAttendance = attendance
  .filter(record => {
    const recordDate = new Date(record.date);
    return (
      recordDate.getMonth() === selectedMonth.getMonth() &&
      recordDate.getFullYear() === selectedMonth.getFullYear()
    );
  })
  .map(record => {
    return {
      ...record,
      checkInTimes: record.checkInTimes.slice().sort(),
      checkOutTimes: record.checkOutTimes.slice().sort()
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));


  return (
    <div className={styles.container}>
      <button
        className={`${styles.checkButton} ${isCheckedIn ? styles.checkOut : styles.checkIn}`}
        onClick={handleCheckInOut}
      >
        {isCheckedIn ? 'CHECK OUT' : 'CHECK IN'}
      </button>
      <div className={styles.tableContainer}>
        {filteredAttendance.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>DATE</th>
                <th>CHECK IN</th>
                <th>CHECK OUT</th>
              </tr>
            </thead>
            <tbody>
              {filteredAttendance.map((record, index) => (
                <React.Fragment key={index}>
                  {record.checkInTimes.map((checkIn, idx) => (
                    <tr key={`${record.date}-${idx}`} className={styles.trow}>
                      {idx === 0 && (
                        <td className={styles.dateCell} rowSpan={record.checkInTimes.length}>
                          {record.date}
                        </td>
                      )}
                      <td className={styles.cell}>
                        {checkIn || '-'}
                        <div className={styles.line}></div>
                      </td>
                      <td className={styles.cell}>
                        {record.checkOutTimes[idx] || '-'}
                        <div className={styles.line}></div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={styles.noData}>User not checked in this month</p>
        )}
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.navButton} onClick={handlePreviousMonth}>PREVIOUS MONTH</button>
        <button className={styles.navButton} onDoubleClick={handleCurrentMonth}>
          {selectedMonth.toLocaleString('default', { month: 'long' }).toUpperCase()}-{selectedMonth.getFullYear()}
        </button>
        <input
          type="month"
          className={styles.selectButton}
          onChange={handleMonthSelect}
          value={`${selectedMonth.getFullYear()}-${(selectedMonth.getMonth() + 1).toString().padStart(2, '0')}`}
        />
      </div>
    </div>
  );
};

export default Attendance;