import * as yup from 'yup';

export default yup.object().shape({
  username: yup
    .string()
    .required('Username must be a string')
    .min(5, 'Username must be at least 5 character'),
  email: yup
    .string()
    .email('Needs to be a valid email')
    .required('Email is needed'),
  password: yup
    .string()
    .required('Must use alphanumeric character')
    .min(6, 'password must be at least 6 characters'),
  //checkbox
  role: yup.string().oneOf(['instructor', 'client'], 'Must Select Role'),
});
