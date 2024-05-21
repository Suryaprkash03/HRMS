import React from 'react'
import styles from './home.module.css'
const Card = ({ name, count, icon, link }) => {
    return (
        <div className={`${styles.card} col-sm-4`}>
            <div className={`${styles.first}`}>
                <p className={`${styles.name}`}>{name}</p>
                <p className={`${styles.count}`}>{count}</p>
            </div>
            <div className={`${styles.second}`}>
                {icon}
                <a href={link}>View</a>
            </div>
        </div>
    )
}

export default Card
