import React from 'react'
import styles from './home.module.css'
import { FaRegEdit, FaUsers } from "react-icons/fa";
import Card from './Card';
import { LuClipboardCheck } from 'react-icons/lu';

const Home = () => {
    const activities = [
        { id: 1, user: 'Vijay', action: 'Applied leave', time: '2 Days ago' },
        { id: 2, user: 'Mathew', action: 'submitted a report', time: '2 Days ago' },
        { id: 3, user: 'Aravind', action: 'requested for payslip', time: '2 Days ago' },
        { id: 4, user: 'Karthik', action: 'Applied leave', time: '2 Days ago' },
    ];
    return (
        <div>
            <div className={`${styles.card_container} row`}>
                <Card name={"Employees"} count={1000} icon={<FaUsers />} link={"#"} />
                <Card name={"Tasks"} count={50} icon={<LuClipboardCheck />} link={"#"} />
                <Card name={"Reports"} count={1500} icon={<FaRegEdit />} link={"#"} />
            </div>
            <div className={styles.activitiesCard}>
                <p>Recent Activities</p>
                <ul className={styles.activitiesList}>
                    {activities.map((activity) => (
                        <li key={activity.id} className={styles.activityItem}>
                            <div className={styles.activityAvatar}></div>
                            <div className={styles.activityDetails}>
                                <span className={styles.activityUser}>{activity.user}</span> {activity.action}
                            </div>
                            <div className={styles.activityTime}>{activity.time}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home
