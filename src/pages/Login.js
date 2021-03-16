import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import { FcComboChart } from 'react-icons/fc';

const Login = () => {
  const { loginWithRedirect} = useAuth0();

  return (
    <Wrapper>
      <div className="container">
        {/* <img src={loginImg} alt='log in' /> */}
        <FcComboChart/>
        <h1>MetricsBox</h1>
        <h3>github user data visualization</h3>
        <button 
          className='btn'
          onClick={loginWithRedirect}
        >
          login / sign up
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    color: var(--clr-red-light);
  }
  h3 {
    margin-bottom: 1.5rem;
    color: var(--clr-grey-7);
  }
  svg {
      font-size: 15rem;
  }
  button {
    background-color: var(--clr-red-light);
  }
`;
export default Login;
