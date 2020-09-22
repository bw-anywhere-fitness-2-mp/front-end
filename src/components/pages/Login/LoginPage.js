import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialLogin = {
    email: '',
    password: ''
}

const LoginApp = () => {
    const [login, setLogin] = useState(initialLogin);

    //onChange Handler
    const changeHandler = (evt) => {
        setFormValue(evt.target.value)
    };

    //onSubmit Handler
    const submitHandler = (evt) => {
        evt.preventdefault()
    }

    return(
        <form onSubmit={submitHandler}>
            <label>
                Email
                <input type='text' name='email' value={login.email} onChange={changeHandler}></input>
            </label>
            <label>
                Password 
                <input type='text' name='password' value={login.password} onChange={changeHandler}></input>
            </label>

            <button>Log In</button>
        </form>
    )
}

export default LoginPage;