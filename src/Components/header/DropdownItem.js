// src/DropdownItem.js
import React from 'react';
import styles from './Header.module.css';

const DropdownItem = ({ profile, onSelect }) => (
    <div className={styles.dropdownItem} onClick={() => onSelect(profile)}>
        <img src={profile.profileImage} alt={profile.name} className={styles.profileImage} />
        <div className={styles.dropdownText}>
            <p className={styles.name}>{profile.name}</p>
            <p className={styles.position}>{profile.position}</p>
        </div>
    </div>
);

export default DropdownItem;
