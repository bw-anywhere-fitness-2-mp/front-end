import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const initialLogin = {
  email: '',
  password: '',
};

//---------------------STYLED------------------------//
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dcdcdc;
  height: 99vh;
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 10vh;
  color: white;
`;

//------------------------FORM---------------------------//
const LoginPage = () => {
  const [login, setLogin] = useState(initialLogin);

  //onChange Handler
  const changeHandler = evt => {
    setLogin(evt.target.value);
  };

  //onSubmit Handler
  const submitHandler = evt => {
    evt.preventdefault();
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={login.email}
            onChange={changeHandler}
          ></input>
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={login.password}
            onChange={changeHandler}
          ></input>
        </label>

        <button>Log In</button>
      </form>
    </Container>
  );
};

export default LoginPage;
