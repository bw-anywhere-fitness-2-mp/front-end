import { ADD_CLASSES, ADD_CLASSES_SUCCESS, ADD_CLASSES_ERROR } from './index';
import axiosWithAuth from '../utils/axiosWithAuth';

const addClasses = id => dispatch => {
  dispatch({ type: ADD_CLASSES });

  axiosWithAuth()
    .post('/api/instructor/', id)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_CLASSES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_CLASSES_ERROR, payload: err });
    });
};

export default addClasses;
