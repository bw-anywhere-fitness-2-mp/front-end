import React, { useState, useEffect } from 'react';
import axios from 'axios';
import schema from '../validation/formSchema.js';
import * as yup from 'yup';
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
      .post(`https://reqres.in/api/orders`, newFriend)
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
      role: formValues.role.trim(),
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
        <label>
          username
          <input type="text" name="username" onChange={onChange} />
        </label>

        <label>
          Password
          <input type="text" name="password" onChange={onChange} />
        </label>

        <label>
          Email
          <input type="text" name="email" onChange={onChange} />
        </label>

        <label>
          <select name="role" value={formValues.role} onChange={onChange}>
            {console.log(formValues.role)}
            <option value="">--select role--</option>
            <option value="instructor">Instructor</option>
            <option value="client">Client</option>
          </select>
        </label>
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
}
