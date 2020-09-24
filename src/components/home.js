import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink2 = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin: 1.618rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: slategray;
  vertical-align: middle;
  white-space: nowrap;
  background-color: black;
`;

const H1 = styled.h1`
  font-size: 50px;
  color: slategray;
`;
const StyledDiv = styled.div`
  opacity: 0.5;
`;

const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1517931524326-bdd55a541177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
`;

export default function Home() {
  return (
    <Container>
      <div className="homepage">
        <StyledDiv>
          <H1>ANYWHERE FITNESS</H1>
        </StyledDiv>
        <StyledLink2 to="/clientReg">Sign up</StyledLink2>
        <StyledLink2 to="/login">Login</StyledLink2>
      </div>
    </Container>
  );
}
