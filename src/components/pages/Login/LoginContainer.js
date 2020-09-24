import React, { useState } from 'react';
import axios from 'axios';
import schema from '../validation/formSchema.js';
import * as yup from 'yup';

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
    console.log(newFriend);
    axios
      .post(`https://reqres.in/api/orders`, newFriend)
      .then(res => {
        console.log('this is res', res.data);
        //setUser([...user],res.data)
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
    //validate(name,value)
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
  //getFriends()

  return (
    <div className="this is login" id="sign-in-widget">
      <form className="form-container" onSubmit={onSubmit}>
        <label>
          username
          <input type="text" name="username" onChange={onChange} />
        </label>

        <label>
          Password
          <input type="text" name="password" onChange={onChange} />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}