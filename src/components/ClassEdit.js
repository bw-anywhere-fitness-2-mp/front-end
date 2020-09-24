import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Styledform = styled.form`
  max-width: 320px;
  padding: 2rem;
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  max-width: remy(380px);
  background-color: #fff;
  border-radius: $radius;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  h2 {
    margin-bottom: 3rem;
  }
`;
const Styledlabel = styled.label`
  margin-top: 24px;
  margin-bottom: 8px;
  display: block;
  color: black;
`;
const StyledInput = styled.input`
  padding: 8px;
  width: 80 %;
  border- top: 0;
  border- right: 0;
  border- bottom: 1px solid #bdc3c7;
  border- left: 0;
  transition: border - bottom - color 0.15s ease -in;
`;

const initialItem = {
  name: '',
  instructor_name: '',
  class_date: '',
  start_time: '',
  duration: '',
  intensity: '',
  location: '',
  current: '',
  maximum: '',
};

const ClassEdit = props => {
  const history = useHistory();

  const { id } = useParams();
  const [classes, setClasses] = useState(initialItem);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/client/${id}`)
      .then(res => {
        console.log(res);
        setClasses(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/instructor/${id}`)
      .then(() => {
        history.push('/classList');
      })
      .catch(err => console.log(err));
  };

  const editHandler = e => {
    e.preventDefault();
    console.log(classes);
    axiosWithAuth()
      .put(`/api/instructor/${id}`, classes)
      .then(() => {
        history.push('/classList');
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setClasses({
      ...classes,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Styledform>
        <Styledlabel>
          Class name
          <input name="name" value={classes.name} onChange={handleChange} />
        </Styledlabel>
        <Styledlabel>
          Instructor name:
          <StyledInput
            name="instructor"
            value={classes.instructor}
            onChange={handleChange}
          />
        </Styledlabel>
        <Styledlabel>
          Class date:
          <StyledInput
            name="date"
            value={classes.date}
            onChange={handleChange}
          />
        </Styledlabel>
        <Styledlabel>
          Class time:
          <StyledInput
            name="start_time"
            value={classes.start_time}
            onChange={handleChange}
          />
        </Styledlabel>
        <Styledlabel>
          Class Duration:
          <StyledInput
            name="duration"
            value={classes.duration}
            onChange={handleChange}
          />
        </Styledlabel>
        <Styledlabel>
          Class Location:
          <StyledInput
            name="location"
            value={classes.location}
            onChange={handleChange}
          />
        </Styledlabel>
        <Styledlabel>
          Class Intensity:
          <StyledInput
            name="intensity"
            value={classes.intensity}
            onChange={handleChange}
          />
        </Styledlabel>

        <Styledlabel>
          Currently enrolled?
          <StyledInput
            name="current"
            value={classes.current}
            onChange={handleChange}
          />
        </Styledlabel>

        <Styledlabel>
          Max class Participants:
          <StyledInput
            name="maximum"
            value={classes.maximum}
            onChange={handleChange}
          />
        </Styledlabel>
        <button onClick={editHandler}>Edit Class</button>
        <br />
        <br />
        <button onClick={deleteHandler}> Delete</button>
      </Styledform>
    </div>
  );
};

export default ClassEdit;
