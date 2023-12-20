import React, { useState } from 'react';
import style from './register.module.css';
import { db } from "../../firestore.js";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name) {
            setError("Name is Required")
            return;
        }
        if (!email) {
            setError("Email is Required")
            return
        }
        if (!password) {
            setError("Password is Required")
            return
        }
        try {

        } catch (e) {
            setError("Error in Submiting Data")
        }
        setError("")

    }
    return (
        <div className={style.formContainer}>
            <form className={style.LoginPage_form} onSubmit={handleSubmit}>
                <h2 className={style.loginTitle}>Sign Up</h2>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className={style.loginInput} placeholder="Enter Name" />
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={style.loginInput} placeholder="Enter Email" />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className={style.loginInput} placeholder="Enter Password" />
                {error && <span style={{ color: "red" }}>{error}</span>}
                <button className={style.loginBtn} type="submit">Sign In</button>
                <a className={style.anchor_color} href="/login" >
                    <p>Or SignIn instead</p>
                </a>
            </form>
        </div >
    )
}

export default Registration