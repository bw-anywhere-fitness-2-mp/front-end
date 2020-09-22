import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
  background-color: #778899;
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
const SignUpContainer = styled.div`
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
        <PageTitle>
          <h1>Anywhere Fitness</h1>
        </PageTitle>
        <Navigation>
          <Router>
            <Link to="/">HOME</Link>
            <Route exact path="/"></Route>
          </Router>
        </Navigation>
        <Navigation>
          <Router>
            <Link to="/about">ABOUT</Link>
            <Route path="/about"></Route>
          </Router>
        </Navigation>
        <Navigation>
          <Router>
            <Link to="/signup">REGISTRATION</Link>
            <Route path="/signup"></Route>
          </Router>
        </Navigation>
        <Navigation>
          <Router>
            <Link to="/login">LOG IN</Link>
            <Route path="/login"></Route>
          </Router>
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
