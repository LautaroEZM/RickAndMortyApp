import React, { useState } from "react";
import style from "./Forms.module.css";
import logo from "./logo.png";
import { validateForm } from "./validation.js";

export default function Form(props) {
    const [UserData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));

        const updatedErrors = validateForm({
            ...UserData,
            [event.target.name]: event.target.value
        });


        setErrors(updatedErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(UserData);

    }

    return (
        <div className={style.container}>
            <div className={style.logoContainer}>
                <img src={logo} alt="" />
            </div>
            <h1>Login into your account</h1>
            <p>
                Log in to your account to access all the features of the application.
            </p>
            <form onSubmit={handleSubmit}>
                <div className={style.mailContainer}>
                    <label>Email:</label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email..."
                        value={UserData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className={style.error}>{errors.email}</div>}
                </div>
                <div className={style.passContainer}>
                    <label>Password:</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        value={UserData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className={style.error}>{errors.password}</div>}
                </div>
                <div>
                    <button type="submit" className={style.btnSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}