import React, { useState, useEffect } from 'react';
import axios from 'axios';


const initialFormValues = {
    email: '',
    name: '',
    password: '',
    client: true,
    instructor: false
}

const SignUpApp = () => {
    const [formValue, setFormValue] = useState(initialFormValues);

    //onChange Handler
    const changeHandler = (evt) => {
        setFormValue(evt.target.value)
    };

    //onSubmit Handler
    const submitHandler = (evt) => {
        evt.preventdefault()
        const newCustomer = {
            emai: formValue.email.trim(),
            name: formValue.name.trim(),
            password: formValue.password.trim(),
            client: formValue.client.trim(),
            instructor: formValue.instructor.trim()
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <h3>Sign Up!</h3>
            <label>
                Email
                <input type='text' name='email' value={formValue.email} onChange={changeHandler} placeholder='Email'></input>
            </label>
            <label>
                Name
                <input type='text' name='name' value={formValue.name} onChange={changeHandler} placeholder='Full Name'></input>
            </label>
            <label>
                Create Your password
                <input type='text' name='password' value={formValue.password} onChange={changeHandler} placeholder='Password'></input>
            </label>
            <select id='customerType' name='customerType'>
                <option value='client'>Client</option>
                <option value='instructor'>Instructor</option>
            </select>

            <button>Submit</button>
        </form>
    )
}

export default SignUpPage;