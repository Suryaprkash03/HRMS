import React, { useState } from 'react';
import style from './Header.module.css';
import { FaBell, FaSearch } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import DropdownItem from './DropdownItem';

const profiles = [
    { profileImage: './assets/LogoMain.png', name: 'Saravanan', position: 'Software Engineer' },
    { profileImage: './assets/LogoMain.png', name: 'Jane Smith', position: 'Product Manager' }
    // Add more profiles as needed
];

const Header = () => {
    const [selected, setSelected] = useState(profiles[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (profile) => {
        setSelected(profile);
        setIsOpen(false);
    };

    return (
        <header className={style.container}>
            <div className={style.logo}>
                <img src="./assets/LogoMain.png" alt="Logo" className={style.logoImg} />
            </div>
            <div className={style.searchbox}>
                <FaSearch color="gray" />
                <input type="text" placeholder='Search here...' />
            </div>
            <div className={style.alerts}>
                <FaBell color="gray" />
            </div>
            <div className={style.mail}>
                <IoMdMailUnread color="gray" />
            </div>
            <div className={style.dropdown}>
                <button className={style.dropdownButton} onClick={() => setIsOpen(!isOpen)}>
                    <img src={selected.profileImage} alt="Profile" className={style.profileImage} />
                    <div className={style.dropdownText}>
                        <p className={style.name}>{selected.name}</p>
                        <p className={style.position}>{selected.position}</p>
                    </div>
                    <span className={style.arrow}>&#9662;</span>
                </button>
                {isOpen && (
                    <div className={style.dropdownContent}>
                        {profiles.map((profile, index) => (
                            <DropdownItem
                                key={index}
                                profile={profile}
                                onSelect={handleSelect}
                            />
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
