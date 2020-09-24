import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const WrapperDiv = styled.div`
  background-image: url(https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
  height: 75vh;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
  border: 5px solid black;
  width: 60%;
  margin: 10%;
  background-color: #dcdcdc;
  color: black;
`;

const Button = styled.button`
  background: #45a4f2;
  color: white;
`;

export default function Login() {
  const defaultState = { Username: '', Password: '' };

  const [loginState, setLoginState] = useState(defaultState);

  const [errors, setErrors] = useState({ ...defaultState });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [post, setPost] = useState([]);

  const history = useHistory();

  const loginSchema = Yup.object().shape({
    Username: Yup.string().required('Must enter Username'),
    Password: Yup.string().required('Must provide Password'),
  });

  useEffect(() => {
    loginSchema.isValid(loginState).then(valid => setButtonDisabled(!valid));
  }, [loginState]);

  const loginSubmit = e => {
    e.preventDefault();
    console.log('submitted');

    axios
      .post('https://reqres.in/api/users', loginState)
      .then(res => {
        setPost(res.data);
        console.log('Form submitted successfully!', res.data);
        history.push('/classList');
      })
      .catch(err => console.log(err));
  };

  const inputChange = e => {
    e.persist();
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
    Yup.reach(loginSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({ ...errors, [e.target.name]: '' });
      })
      .catch(err => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  return (
    <WrapperDiv>
      <FormWrapper>
        <form onSubmit={loginSubmit}>
          <h2>WELCOME BACK!</h2>
          <h3>Log into your account</h3>
          <label>
            Username
            <input
              type="text"
              name="Username"
              id="usernameInput"
              placeholder="Username"
              onChange={inputChange}
              error={errors}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Password
            <input
              type="password"
              name="Password"
              id="passwordInput"
              placeholder="Password"
              onChange={inputChange}
              error={errors}
            />
          </label>
          <br></br>
          <br></br>
          <Button disabled={buttonDisabled}>Login</Button>
        </form>
      </FormWrapper>
    </WrapperDiv>
  );
}
