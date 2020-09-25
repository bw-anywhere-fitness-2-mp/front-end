import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as Yup from 'yup';

//--------------------------STYLING-------------------------//

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(https://images.unsplash.com/photo-1557564437-0995702f88fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80);
  background-size: cover;
  height: 75vh;
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
  a:visited {
    text-decoration: none;
  }
  &:hover {
    background-color: #dcdcdc;
    color: white;
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

const initialFormValues = {
  email: '',
  username: '',
  password: '',
  role: '',
};

const initialDisabled = true;

//--------------------------- start of app --------------------------//
const SignUpPage = () => {
  const [formValue, setFormValue] = useState(initialFormValues);
  const [customers, setCustomers] = useState([]);
  const [errors, setErrors] = useState({ ...initialFormValues, terms: '' });
  const [post, setPost] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(initialDisabled);
  // const [newCustomer, setNewCustomer] = useState([]);

  //////////////////////////// Helpers////////////////////////
  const getCustomers = () => {
    axios
      .get('https://anywhere-fitness-bw-2.herokuapp.com/')
      .then(res => {
        setCustomers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const postCustomers = newClient => {
    axios
      .post(
        'https://anywhere-fitness-bw-2.herokuapp.com/api/auth/register',
        newClient
      )
      .then(res => {
        setCustomers([...customers, res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  };
  ////////////////////////////////////////////////////////////////////////////

  // Yup
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email('Must be valid email')
      .required('Email is required'),
    username: Yup.string()
      .required('Full Name required')
      .min('Name must be 3 characters or longer'),
    password: Yup.string().required('Please enter password'),
    role: Yup.string().oneOf(['Client', 'Instructor'], 'Role is required'),
  });

  useEffect(() => {
    formSchema.isValid(formValue).then(valid => setButtonDisabled(!valid));
  }, [formValue]);

  // Validation
  const validation = evt => {
    Yup.reach(formSchema, evt.target.name)
      .validate(evt.target.value)
      .then(valid => {
        setErrors({ ...errors, [evt.target.name]: '' });
      })
      .catch(err => {
        console.log('ErRoR!');
        setErrors({ ...errors, [evt.target.name]: err.errors[0] });
      });
  };

  //onChange Handler
  const changeHandler = evt => {
    //validation(evt.target.name, evt.target.value);
    setFormValue({ ...formValue, [evt.target.name]: evt.target.value });
  };

  //onSubmit Handler
  const submitHandler = evt => {
    evt.preventDefault();
    console.log('submit submitted');

    const newCustomer = {
      email: formValue.email,
      username: formValue.username,
      password: formValue.password,
      role: formValue.role,
    };
    postCustomers(newCustomer);
    setFormValue(initialFormValues);
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
          <Route path="/signup"></Route>
        </Navigation>
        <Navigation>
          <Link to="/login">LOG IN</Link>
          <Route path="/login"></Route>
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
                type="email"
                name="email"
                value={formValue.email}
                onChange={changeHandler}
                placeholder="Email"
                error={errors}
              ></input>
            </label>
          </IndividualForm>

          <IndividualForm>
            <label>
              UserName
              <input
                type="text"
                name="username"
                value={formValue.username}
                onChange={changeHandler}
                placeholder="Full Name"
                error={errors}
              ></input>
            </label>
          </IndividualForm>

          <IndividualForm>
            <label>
              Create Your Password
              <input
                type="password"
                name="password"
                value={formValue.password}
                onChange={changeHandler}
                placeholder="Password"
                error={errors}
              ></input>
            </label>
          </IndividualForm>

          <IndividualForm>
            <select id="customerType" name="role" onChange={changeHandler}>
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
