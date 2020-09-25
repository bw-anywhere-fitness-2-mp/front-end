import React, { useState, useEffect } from 'react';
import axios from 'axios';
import schema from '../validation/formSchema.js';
import styled from 'styled-components';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const Navigation = styled.div`
  padding: 2%;
  margin: 1%;
  text-align: center;
  &:hover {
    background-color: #dcdcdc;
    color: white;
    text-decoration: none;
    border-radius: 5%;
  }
  color: black !important;
  cursor: pointer;
  text-decoration: none !important;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #dcdcdc;
  width: 100%;
  text-align: right;
  font-size: 25px;
`;
const IndividualForm = styled.div`
  margin: 8% 0%;
  width: 90%;
  font-size: 1.2rem;
`;

const initialFormValues = {
  username: '',
  email: ',',
  password: '',
  role: '',
};

const initialFormErrors = {
  username: '',
  email: ',',
  password: '',
  role: '',
};
const initialUser = [];
const initialDisabled = true;
export default function SignUp() {
  const [user, setUser] = useState(initialUser);

  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({ ...formErrors, [name]: '' });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const postNewFriend = newFriend => {
    console.log(newFriend);
    axios
      .post(
        `https://anywhere-fitness-bw-2.herokuapp.com/api/auth/register`,
        newFriend
      )
      .then(res => {
        console.log('this is res', res.data);
        //setUser([...user],res.data)
        setUser(user.concat(res.data));
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const change = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
    };
    postNewFriend(newFriend);
    console.log(newFriend);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  };

  const onChange = evt => {
    //we do this because the value checkbox returns is "ON" and not true so we need to have a use case
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  };

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);
  return (
    <div className="this is signup">
      <Header>
        <div className="Header">
          <h1>Anywhere Fitness</h1>
          <Navigation>
            <nav>
              <Link to="/">Home</Link>
            </nav>
          </Navigation>
        </div>
      </Header>
      <div className="errors">
        <p>{formErrors.username}</p>
        <p>{formErrors.email}</p>
        <p>{formErrors.password}</p>
        <p>{formErrors.role}</p>
      </div>
      <div className="signup">
        <h1>Sign Up Now!</h1>
      </div>

      <form className="form-container" onSubmit={onSubmit}>
        <IndividualForm>
          <label>
            username
            <input type="text" name="username" onChange={onChange} />
          </label>{' '}
        </IndividualForm>
        <IndividualForm>
          {' '}
          <label>
            Password
            <input type="text" name="password" onChange={onChange} />
          </label>{' '}
        </IndividualForm>

        <IndividualForm>
          {' '}
          <label>
            Email
            <input type="text" name="email" onChange={onChange} />
          </label>
        </IndividualForm>

        <IndividualForm>
          {' '}
          <label>
            <select name="role" value={formValues.role} onChange={onChange}>
              {console.log(formValues.role)}
              <option value="">--select role--</option>
              <option value="instructor">Instructor</option>
              <option value="client">Client</option>
            </select>
          </label>{' '}
        </IndividualForm>
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
}
