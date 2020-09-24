import React from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const StyledLink2 = styled(Link)`
  background-color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-left: 15px;
  margin-right: 40px;
`;

class ClassList extends React.Component {
  state = {
    classes: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/api/client')
      .then(res => {
        console.log(res);
        this.setState({
          classes: res.data,
        });
      })
      .catch(err => console.log(err));
  };
  clicksubmit = id => {
    this.props.history.push(`/classEdit/${id}`);
  };
  render() {
    return (
      <div className="ClassListpage">
        <StyledLink2 to="/addClass">Add Class</StyledLink2>
        {this.state.classes.map(classes => {
          return (
            <div className="box">
              <div
                key={classes.class_id}
                onClick={() => {
                  this.clicksubmit(classes.class_id);
                }}
              >
                <h4>Class name: {classes.name}</h4>
                <p>Instructor name: {classes.instructor}</p>
                <p>Class date: {classes.date}</p>
                <p>Class time: {classes.start_time}</p>
                <p>Class Duration: {classes.duration}</p>
                <p>Class Location: {classes.location}</p>
                <p>Class Intensity: {classes.intensity}</p>
                <p>Currently enrolled in class: {classes.current}</p>
                <p>Max class Participants: {classes.maximum}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClassList;
