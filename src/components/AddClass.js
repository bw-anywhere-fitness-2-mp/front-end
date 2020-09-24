import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import addClasses from '../actions/addClasses';
import { connect } from 'react-redux';
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

const AddClass = props => {
  const [item, setItem] = useState(initialItem);
  const history = useHistory();

  const handleChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addClasses(item);
    history.push('/classList');
  };
  return (
    <Styledform onSubmit={handleSubmit}>
      <Styledlabel>
        Class name
        <StyledInput name="name" value={item.name} onChange={handleChange} />
      </Styledlabel>
      <Styledlabel>
        Instructor name:
        <StyledInput
          name="instructor_name"
          value={item.instructor_name}
          onChange={handleChange}
        />
      </Styledlabel>
      <Styledlabel>
        Class date:
        <StyledInput name="date" value={item.date} onChange={handleChange} />
      </Styledlabel>
      <Styledlabel>
        Class time:
        <StyledInput
          name="start_time"
          value={item.start_time}
          onChange={handleChange}
        />
      </Styledlabel>
      <Styledlabel>
        Class Duration:
        <StyledInput
          name="duration"
          value={item.duration}
          onChange={handleChange}
        />
      </Styledlabel>
      <Styledlabel>
        Class Location:
        <StyledInput
          name="location"
          value={item.location}
          onChange={handleChange}
        />
      </Styledlabel>
      <Styledlabel>
        Class Intensity:
        <StyledInput
          name="intensity"
          value={item.intensity}
          onChange={handleChange}
        />
      </Styledlabel>

      <Styledlabel>
        Currently enrolled?
        <StyledInput
          name="current"
          value={item.current}
          onChange={handleChange}
        />
      </Styledlabel>

      <Styledlabel>
        Max class Participants:
        <StyledInput
          name="maximum"
          value={item.maximum}
          onChange={handleChange}
        />
      </Styledlabel>
      <button>Add Class</button>
    </Styledform>
  );
};
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { addClasses })(AddClass);
