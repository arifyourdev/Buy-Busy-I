import React from 'react';
import style from './header.module.css';
import { Link, NavLink } from 'react-router-dom';
import Himg from "../../images/home.png";
import SignIp from "../../images/signin.png";
import CardImg from "../../images/cart.png";
import OrdImg from "../../images/order.png";
import logImg from "../../images/logout.png";
import { useAuth } from '../context/authContext';

const Header = () => {
    const [auth] = useAuth();
    return (
        <div>
            <header>
                <nav className={style.navbar}>
                    <div className={style.navbar_container}></div>
                    <Link to="/" className={style.navbar_logo}>Busy Buy</Link>
                    <ul className={style.nav_menu}>
                        <li className={`${style.nav_item} active`}>
                            <NavLink to="/" className={`${style.nav_links}`}>
                                <span className={style.nav_span}> <img className={style.icon_styles} src={Himg} alt={Himg} />Home</span>
                            </NavLink>
                        </li>
                        {!auth.user ? (
                            <li className={`${style.nav_item}`}>
                                <NavLink to="login" className={`${style.nav_links}`}>
                                    <span className={style.nav_span}> <img className={style.icon_styles} src={SignIp} alt={SignIp} />SignIn</span>
                                </NavLink>
                            </li>
                        ) : (
                            <>
                                <li className={`${style.nav_item}`}>
                                    <NavLink to="login" className={`${style.nav_links}`}>
                                        <span className={style.nav_span}> <img className={style.icon_styles} src={OrdImg} alt={OrdImg} />My Order</span>
                                    </NavLink>
                                </li>
                                <li className={`${style.nav_item}`}>
                                    <NavLink to="login" className={`${style.nav_links}`}>
                                        <span className={style.nav_span}> <img className={style.icon_styles} src={CardImg} alt={CardImg} />Cart</span>
                                    </NavLink>
                                </li>
                                <li className={`${style.nav_item}`}>
                                    <NavLink to="login" className={`${style.nav_links}`}>
                                        <span className={style.nav_span}> <img className={style.icon_styles} src={logImg} alt={logImg} />Logout</span>
                                    </NavLink>
                                </li>
                            </>
                        )}


                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header