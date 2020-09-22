import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const initialFormValues = {
  email: '',
  name: '',
  password: '',
  client: true,
  instructor: false,
};

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
const Navigation = styled.div`
  padding: 2%;
  margin: 1%;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
  border: 5px solid black;
  width: 60%;
  margin: 10%;
  background-color: #778899;
  color: white;
`;

const SignUpPage = () => {
  const [formValue, setFormValue] = useState(initialFormValues);

  //onChange Handler
  const changeHandler = evt => {
    setFormValue(evt.target.value);
  };

  //onSubmit Handler
  const submitHandler = evt => {
    evt.preventdefault();
    const newCustomer = {
      emai: formValue.email.trim(),
      name: formValue.name.trim(),
      password: formValue.password.trim(),
      client: formValue.client.trim(),
      instructor: formValue.instructor.trim(),
    };
  };

  return (
    <Container>
      <Header className="headerNav">
        <Navigation>
          <nav>HOME</nav>
        </Navigation>
        <Navigation>
          <nav>ABOUT</nav>
        </Navigation>
        <Navigation>
          <nav>REGISTRATION</nav>
        </Navigation>
        <Navigation>
          <nav>SIGN IN</nav>
        </Navigation>
      </Header>

      <SignUpContainer className="signUpForm">
        <form onSubmit={submitHandler}>
          <h3>SIGN UP</h3>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={formValue.email}
              onChange={changeHandler}
              placeholder="Email"
            ></input>
          </label>
          <br></br>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formValue.name}
              onChange={changeHandler}
              placeholder="Full Name"
            ></input>
          </label>
          <br></br>
          <label>
            Create Your password
            <input
              type="text"
              name="password"
              value={formValue.password}
              onChange={changeHandler}
              placeholder="Password"
            ></input>
          </label>
          <br></br>
          <select id="customerType" name="customerType">
            <option value="default">-Select-</option>
            <option value="client">Client</option>
            <option value="instructor">Instructor</option>
          </select>
          <br></br>

          <button>Submit</button>
        </form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUpPage;
