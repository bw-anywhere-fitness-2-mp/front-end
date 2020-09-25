import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import img from '../img/workout.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 99vh;
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

const LoginForm = styled.div`
  height: 30vh;
  font-size: 25px;
  font-weight: bold;
`;
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
  color: -webkit-link;
  cursor: pointer;
  text-decoration: none !important;
`;
const initialFormValues = {
  username: '',
  password: '',
};

const initialFormErrors = {
  username: '',
  password: '',
};
const initialUser = [];
const initialDisabled = true;

export default function LoginContainer() {
  const [user, setUser] = useState(initialUser);

  const [formValues, setFormValues] = useState(initialFormValues);

  // const getFriends = () => {
  //   axios.get(`https://anywhere-fitness-bw-2.herokuapp.com`)
  //    .then(res =>{
  //       console.log("this is",res)
  //    }
  //      )
  //      .catch(err => {

  //      })
  //     }
  const postNewFriend = newFriend => {
    console.log('this is new firend', newFriend);
    axios
      //.post(`https://reqres.in/api/orders`, newFriend) //dummy post
      .post(
        'https://anywhere-fitness-bw-2.herokuapp.com/api/auth/login',
        newFriend
      )
      .then(res => {
        console.log('this is res', res.data);

        setUser(user.concat(res.data));
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const change = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = () => {
    const newFriend = {
      name: formValues.username,
      password: formValues.password,
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

  return (
    <div className="this is login" id="sign-in-widget">
      <Header>
        <div className="Header">
          <h1>Anywhere Fitness</h1>
          <Navigation>
            <nav>
              <Link to="/">Home</Link>
            </nav>
          </Navigation>

          <Navigation>
            <nav>
              <Link to="/signup">Sign Up NOW!</Link>
            </nav>
          </Navigation>
        </div>
      </Header>
      <Container>
        <form className="form-container" onSubmit={onSubmit}>
          <LoginForm>
            <label>
              Username <br></br>
              <input type="text" name="username" onChange={onChange} />
            </label>
            <br></br>
            <label>
              Password <br></br>
              <input type="text" name="password" onChange={onChange} />
            </label>

            <button>Submit</button>
          </LoginForm>
        </form>
      </Container>
    </div>
  );
}
