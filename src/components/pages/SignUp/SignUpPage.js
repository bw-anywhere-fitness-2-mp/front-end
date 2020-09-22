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

//--------------------------STYLING-------------------------//
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
    border-radius: 5%;
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
const IndividualForm = styled.div`
  margin: 8% 0%;
  width: 90%;
  font-size: 1.2rem;
`;

//----------------------------- FORM --------------------------------//

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
          <nav>
            <a exact path="/">
              HOME
            </a>
          </nav>
        </Navigation>
        <Navigation>
          <nav>
            <a path="/about">ABOUT</a>
          </nav>
        </Navigation>
        <Navigation>
          <nav>
            <a path="/signup">REGISTRATION</a>
          </nav>
        </Navigation>
        <Navigation>
          <nav>
            <a path="/login">LOG IN</a>
          </nav>
        </Navigation>
      </Header>

      <SignUpContainer className="signUpForm">
        <form onSubmit={submitHandler}>
          <h2> LET'S GET STARTED!</h2>
          <h3>SIGN UP</h3>
          <IndividualForm>
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
          </IndividualForm>

          <IndividualForm>
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
          </IndividualForm>

          <IndividualForm>
            <label>
              Create Your Password
              <input
                type="text"
                name="password"
                value={formValue.password}
                onChange={changeHandler}
                placeholder="Password"
              ></input>
            </label>
          </IndividualForm>

          <IndividualForm>
            <select id="customerType" name="customerType">
              <option value="default">-Select-</option>
              <option value="client">Client</option>
              <option value="instructor">Instructor</option>
            </select>
          </IndividualForm>

          <IndividualForm>
            <button>Submit</button>
          </IndividualForm>
        </form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUpPage;
