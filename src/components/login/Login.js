import React from 'react';
import style from './login.module.css';

const Login = () => {
    return (

        <div className={style.formContainer}>
            <form className={style.LoginPage_form}>
                <h2 className={style.loginTitle}>Sign In</h2>
                <input type="email" name="email" className={style.loginInput} placeholder="Enter Email" />
                <input type="password" name="password" className={style.loginInput} placeholder="Enter Password" />
                <button className={style.loginBtn}>Sign In</button>
                <a className={style.anchor_color} href="/signup" >
                    <p>Or SignUp instead</p>
                </a>
            </form>
        </div >


    )
}

export default Login