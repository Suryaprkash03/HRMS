import React from 'react'
import styles from './Documents.module.css'
import { Link } from 'react-router-dom'
const Card = ({ name, icon, link }) => {
    return (
        <div className={`${styles.card} col-sm-4`}>
            <div className={`${styles.first}`}>
                <p className={`${styles.name}`}>{name}</p>
            </div>
            <div className={`${styles.second}`}>
                {icon}
                <Link to={link}>View</Link>
            </div>
        </div>
    )
}

export default Card
