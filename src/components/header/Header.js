import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';
import Himg from "../../images/home.png";
import SignIp from "../../images/signin.png";

const Header = () => {
    return (
        <div>
            <header>
                <nav className={style.navbar}>
                    <div className={style.navbar_container}></div>
                    <a className={style.navbar_logo}>Busy Buy</a>
                    <ul className={style.nav_menu}>
                        <li className={`${style.nav_item} active`}>
                            <NavLink to="/" className={`${style.nav_links}`}>
                                <span> <img className={style.icon_styles} src={Himg} alt={Himg} />Home</span>
                            </NavLink>
                        </li>
                        <li className={`${style.nav_item} active`}>
                            <NavLink to="login" className={`${style.nav_links}`}>
                                <span> <img className={style.icon_styles} src={SignIp} alt={SignIp} />SignIn</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header