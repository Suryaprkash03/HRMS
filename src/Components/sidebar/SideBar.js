import React, { useContext } from 'react';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import style from "./sidebar.module.css";

const SideBar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { setLogin } = useContext(DataContext);

    const handleLogout = (e) => {
        if (e.target.innerText === "Logout") {
            setLogin(false);
            navigate('/Login');
        }
    };

    const elements = [
        {
            id: 1,
            name: "Home",
            active: false,
            viewBox: "0 0 576 512",
            svgPath: ["M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]
        },
        {
            id: 2,
            name: "Employees",
            active: false,
            viewBox: "0 0 700 512",
            svgPath: ["M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"]
        },
        {
            id: 3,
            name: "Documents",
            active: false,
            viewBox: "0 0 24 24",
            svgPath: ["M7 18H17V16H7V18Z", "M17 14H7V12H17V14Z", "M7 10H11V8H7V10Z", "M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"]
        },
        {
            id: 4,
            name: "Performance",
            active: false,
            viewBox: "0 0 16 16",
            svgPath: ["M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"]
        },
        {
            id: 5,
            name: "Leave",
            active: false,
            viewBox: "0 0 1024 1024",
            svgPath: ["M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z M18 14v4h4 M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"]
        },
        {
            id: 6,
            name: "Attendance",
            active: false,
            viewBox: "0 0 1024 1024",
            svgPath: ["M63.504 959.76l.002-64.942c0-25.44 19.103-33.424 26.72-36.944l281.04-132.624c20.143-9.248 34.047-28.32 36.752-50.32 2.72-22-6.16-43.84-23.457-57.712-66.48-53.376-97.456-170.704-97.456-233.185v-159.92c0-66.864 116.4-159.856 224.128-159.856 108.672 0 223.936 91.536 223.936 159.856v159.92c0 61.552-25.6 179.312-94.256 233.376a63.99 63.99 0 0 0-23.967 57.808c2.624 22.16 16.591 41.313 36.847 50.624l162.24 77.248 38.144-54.064-173.664-81.344c88.656-69.776 118.656-206.849 118.656-283.665v-159.92C799.169 118.176 652.545.241 511.233.241S223.105 118.177 223.105 224.096v159.92c0 69.872 31.888 211.248 121.392 283.088L63.457 799.76S-.495 828.256-.495 863.728v96.032c0 35.344 28.64 63.968 63.951 63.968h639.712l-52-63.984zm948.706-236.253c-13.904-10.912-34.032-8.432-44.912 5.473L830.45 937.684l-85.056-85.073c-12.496-12.496-32.768-12.496-45.264 0s-12.496 32.752 0 45.248l113.136 113.136c12.496 12.496 32.752 12.496 45.248 0 3.04-3.024 5.312-6.544 6.88-10.288l152.304-232.304c10.88-13.904 8.432-34.016-5.488-44.896z"]
        },
        {
            id: 7,
            name: "Reports",
            active: false,
            viewBox: "0 0 256 256",
            svgPath: ["M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Z"]
        },
    ];


    const logoutElement = {
        id: 8,
        name: "Logout",
        active: false,
        viewBox: "0 0 24 24 ",
        svgPath: ["M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"]
    };

    return (
        <div className={`${style.outerContainer} ${isOpen ? style.open : style.closed}`} style={{ paddingTop: 60 }}>
            <div>
            <div className={style.toggleButton}>
                <button onClick={toggleSidebar}>
                    {isOpen ? <IoMdClose /> : <FaBars />}
                </button>
            </div>
                {elements.map(item => (
                    <Link to={`/${item.name}`} style={{ textDecoration: "none", color: "inherit" }} key={item.id} onClick={isOpen ? toggleSidebar:null}>
                        <div className={style.itemContainer}>
                            <div className={style.itemIcon}>
                                <svg
                                    stroke="currentColor"
                                    fill={location.pathname === '/' + item.name ? "url(#grad1)" : '#3a3a3a'}
                                    strokeWidth="0"
                                    viewBox={item.viewBox}
                                    height="18px"
                                    width="18px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: 'hsla(190, 68%, 50%, 1)', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: 'hsla(239, 34%, 47%, 1)', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    {item.svgPath.map((path, index) => (
                                        <path key={index} d={path}></path>
                                    ))}
                                </svg>
                            </div>
                            <p className={`${style.itemText} ps-2 ${location.pathname === '/' + item.name ? style.activeText : ''}`}>
                                {item.name}
                            </p>
                            {location.pathname === '/' + item.name && <div className={style.activeBar}></div>}
                        </div>
                    </Link>
                ))}
            </div>
            <div className={style.logoutContainer} onClick={handleLogout}>
                <div className={style.itemIcon}>
                    <svg
                        stroke="currentColor"
                        fill={location.pathname === '/Logout' ? "url(#grad1)" : '#3a3a3a'}
                        strokeWidth="0"
                        viewBox={logoutElement.viewBox}
                        height="18px"
                        width="18px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: 'hsla(190, 68%, 50%, 1)', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: 'hsla(239, 34%, 47%, 1)', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        {logoutElement.svgPath.map((path, index) => (
                            <path key={index} d={path}></path>
                        ))}
                    </svg>
                </div>
                <p className={`${style.itemText} ps-2 ${location.pathname === '/Logout' ? style.activeText : ''}`}>
                    {logoutElement.name}
                </p>
                {location.pathname === '/Logout' && <div className={style.activeBar}></div>}
            </div>
        </div>
    );
};

export default SideBar;
