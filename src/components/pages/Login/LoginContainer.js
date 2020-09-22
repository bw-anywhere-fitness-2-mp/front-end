import React, { useState } from 'react';

const initialFormValues = {
  email: '',
  password: '',
};

const initialFormErrors = {
  email: '',
  password: '',
};
const initialUser = [];
const initialDisabled = true;

export default function LoginContainer() {
  const [user, setUser] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const [disabled, setDisabled] = useState(initialDisabled);

  //  const validate = (name,value) =>{
  //    yup
  //    .reach(schema,name)
  //    .validate(value)
  //    .then(valid => {
  //      setFormErrors({...formErrors, [name]: ""})
  //    })
  //    .catch(err =>{
  //      setFormErrors({
  //        ...formErrors, [name]: err.errors[0]
  //      });
  //    });
  //  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //  const inputChange = (name, value) => {

  //    validate(name,value)
  //    setFormValues({
  //      ...formValues,
  //      [name]: value
  //    })
  //  }

  //  const formSubmit = () => {
  //    const newFriend = {
  //      size: formValues.size.trim(),

  //      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
  //    }
  //    postNewFriend(newFriend)

  //  }

  return (
    <div className="this is login" id="sign-in-widget">
      <form>
        <label>
          Login
          <input
            type="text"
            name="Login"
            //onChange = {onChange}
          />
        </label>

        <label>
          Password
          <input
            type="text"
            name="password"
            //onChange = {onChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
