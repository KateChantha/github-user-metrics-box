import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading
  } = useAuth0();
  // console.log(isAuthenticated, user, isLoading)

  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      <h1>MatricsBox</h1>
      <div>
        <section>
           { isUser && user.picture && (<img src={user.picture} alt={user.name}/>) }
          {isUser && user.name && (<h4>Welcome, <strong>{user.name.toUpperCase()}</strong></h4>)}
        </section>
        {isUser 
          ? <button onClick={()=>logout({returnTo:window.location.origin})}>Log out</button>
          : <button onClick={loginWithRedirect}>Log in</button>
        }
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    width: 80%;
    padding-left: 15%;
    justify-content: space-between;
  }
  section {
    display: flex;
    align-items: center;
  }
  h1 {
    margin-bottom: 0;
    font-weight: 800;
    font-size: 1.5rem;
    color: var(--clr-red-light);
  }
  h4 {
    margin-bottom: 0;
    margin-left: 5px;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    border-bottom: 1px solid var(--clr-grey-5);
    padding: 3px; 
    font-size: 0.8rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
