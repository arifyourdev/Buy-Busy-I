import React, { useState } from 'react';
import style from './login.module.css';
import { toast } from 'react-toastify';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate("");
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }
        setError("");
        try {
            const usersRef = collection(db, 'users');
            const q = query(usersRef, where('email', '==', email));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                if (userData.password === password) {
                    setAuth({
                        user: userData
                    });
                    localStorage.setItem("user_auth", JSON.stringify(userData));
                    navigate("/");
                }
            });

            setError("Invalid email or password");
        } catch (e) {
            toast.error("Error in Code")
        }

    }

    return (
        <div className={style.formContainer}>
            <form className={style.LoginPage_form} onSubmit={handleLogin}>
                <h2 className={style.loginTitle}>Sign In</h2>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={style.loginInput}
                    placeholder="Enter Email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Set password state here
                    className={style.loginInput}
                    placeholder="Enter Password"
                />
                {error && <span style={{ color: "red" }}>{error}</span>}
                <button className={style.loginBtn} type='submit'>Sign In</button>
                <a className={style.anchor_color} href="/signup">
                    <p>Or SignUp instead</p>
                </a>
            </form>
        </div>
    )
}

export default Login;
