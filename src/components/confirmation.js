import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const WrapperDiv = styled.div`
  background-image: url(https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  padding-bottom: 770px;
`;

function Confirmation(props) {
  const [clientInfo, setClientInfo] = useState([
    {
      first_name: '',
      last_name: '',
      Email: '',
      Username: '',
      Password: '',
      role: '',
    },
  ]);

  useEffect(() => {
    setClientInfo(props.newMember);
  }, [props.newMember]);
  return (
    <WrapperDiv>
      <div key={clientInfo.id}>
        <h2>Thanks for joining Anywhere Fitness!</h2>
        <p>First Name: {clientInfo.first_name}</p>
        <p>Last Name: {clientInfo.last_name}</p>
        <p>Email: {clientInfo.Email}</p>
        <p>Username: {clientInfo.Username}</p>
        <p>Password: {clientInfo.Password}</p>
        <p>Role:{clientInfo.role} </p>
      </div>
    </WrapperDiv>
  );
}

export default Confirmation;
