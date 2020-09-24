import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Form from './components/clientReg';
import Login from './components/login';
import Home from './components/home';
import Confirmation from './components/confirmation';
import ClassList from './components/ClassList';
import AddClass from './components/AddClass';
import ClassEdit from './components/ClassEdit';
import About from './components/about';
import styled from 'styled-components';

const Footer = styled.div`
  background: #08090c;
  padding: 8vh;
`;

const StyledLink2 = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin: 1.618rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  vertical-align: middle;
  white-space: nowrap;
  background-color: gray;
`;

function App(props) {
  const [newMember, setNewMember] = useState([
    {
      first_name: '',
      last_name: '',
      Email: '',
      Username: '',
      Password: '',
      role: '',
    },
  ]);
  const clientDataSetup = data => {
    setNewMember({
      ...newMember,
      first_name: data.first_name,
      last_name: data.last_name,
      Email: data.Email,
      Username: data.Username,
      Password: data.Password,
      role: data.role,
    });
  };

  return (
    <div className="App">
      <div className="wrapper">
        <nav>
          <StyledLink2 to="/">Home</StyledLink2>
          <StyledLink2 to="/about">About</StyledLink2>
        </nav>
      </div>

      <Switch>
        <Route exact path="/clientReg">
          <Form
            newMember={newMember}
            setNewMember={setNewMember}
            clientDataSetup={clientDataSetup}
          />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/confirmation">
          {console.log('new', newMember)}
          <Confirmation
            newMember={newMember}
            clientDataSetup={clientDataSetup}
          />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />

        <Route
          render={props => <ClassList {...props} />}
          exact
          path="/classList"
        ></Route>
        <Route exact path="/addClass">
          <AddClass />
        </Route>
        <Route exact path="/classEdit/:id">
          <ClassEdit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
