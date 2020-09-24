import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import SignUpPage from '../SignUp/SignUpPage';

//---------------------STYLED------------------------//
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80);
  height: 99vh;
  border-left: 3px solid black;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
`;
const PageTitle = styled.div`
  background-color: #2f4f4f;
  color: white;
  padding: 0.8%;
  border: 2px solid black;
  border-right: 5px solid black;
  border-left: 5px solid black;
`;
const Header = styled.div`
  border: 3px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 10vh;
  color: black;
`;
const Navigation = styled.div`
  padding: 2%;
  margin: 1%;
  &:hover {
    background-color: #dcdcdc;
    color: white;
    text-decoration: none;
    border-radius: 5%;
  }
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
  border: 5px solid black;
  width: 60%;
  margin: 10%;
  background-color: #dcdcdc;
  color: black;
`;
const IndividualForm = styled.div`
  margin: 8% 0%;
  width: 90%;
  font-size: 1.2rem;
`;

//------------------------FORM---------------------------//

const initialLogin = {
  email: '',
  password: '',
};

const initialDisabled = true;

//-------------------- app -------------------------//
const LoginPage = () => {
  const [login, setLogin] = useState(initialLogin);
  const [errors, setErrors] = useState({ ...initialLogin, terms: '' });
  const [post, setPost] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(initialDisabled);

  //onChange Handler
  const changeHandler = evt => {
    setLogin(evt.target.value);
  };

  //onSubmit Handler
  const submitHandler = evt => {
    evt.preventdefault();
  };
  const formSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <Container>
      <Header className="headerNav">
        <PageTitle>
          <h1>Anywhere Fitness</h1>
        </PageTitle>
        <Navigation>
          <Link to="/">HOME</Link>
          <Route exact path="/"></Route>
        </Navigation>
        <Navigation>
          <Link to="/about">ABOUT</Link>
          <Route path="/about"></Route>
        </Navigation>
        <Navigation>
          <Link to="/signup">REGISTRATION</Link>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        </Navigation>
        <Navigation>
          <Link to="/login">LOG IN</Link>
          <Route path="/login"></Route>
        </Navigation>
      </Header>

      <LoginContainer>
        <form onSubmit={submitHandler}>
          <h2>WELCOME BACK!</h2>
          <h3>Log into your account</h3>
          <IndividualForm>
            <label>
              Email
              <input
                type="text"
                name="email"
                value={login.email}
                onChange={changeHandler}
                error={errors}
              ></input>
            </label>
          </IndividualForm>

          <IndividualForm>
            <label>
              Password
              <input
                type="text"
                name="password"
                value={login.password}
                onChange={changeHandler}
                error={errors}
              ></input>
            </label>
          </IndividualForm>

          <button>Log In</button>
        </form>
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;