import React from 'react';
import style from './register.module.css';

const Registration = () => {
    return (
        <div className={style.formContainer}>
            <form className={style.LoginPage_form}>
                <h2 className={style.loginTitle}>Sign Up</h2>
                <input type="text" name="name" className={style.loginInput} placeholder="Enter Name" />
                <input type="email" name="email" className={style.loginInput} placeholder="Enter Email" />
                <input type="password" name="password" className={style.loginInput} placeholder="Enter Password" />
                <button className={style.loginBtn}>Sign In</button>
                <a className={style.anchor_color} href="/login" >
                    <p>Or SignIn instead</p>
                </a>
            </form>
        </div >
    )
}

export default Registration