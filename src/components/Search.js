import React, {useState} from 'react';
import styled from 'styled-components';
import { MdSearch , MdClear } from 'react-icons/md';
import { GithubContext } from '../context/context';
const Search = () => {
  const { requestCount, error, searchSomeGithubUser, isLoading } = React.useContext(GithubContext);
  const [user, setUser] = useState('');
  
  // get things from global context
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (user) {
  //     searchGithubUser(user);
  //     // optional setUser('') after submit
  //   }
  // }

  // get some users ++++
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchSomeGithubUser(user);
      // optional setUser('') after submit
    }
  }

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="input-wrapper">
                <MdSearch/>
              <input 
                type="text" 
                placeholder="enter github user..."
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="button-wrapper">
              <button className="clear-btn" onClick={() => setUser('')}>
                <MdClear />
              </button>
              {(requestCount > 0 && !isLoading) && <button className="search-btn" type="submit">search</button> }
            </div>
          </div>
        </form>
        <h3>requests : {requestCount} / 60</h3>
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-primary-9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 0.5rem;
    border: solid 3px var(--clr-red-light);
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      background: var(--clr-primary-9);
      padding: 0.25rem 0.5rem;
      width: 100%
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    .search-btn {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }
    .clear-btn {
      cursor: pointer;
      border-color: transparent;
      background: none;
    }
    .input-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
    }
    .button-wrapper {
      display: flex;
      align-items: center;
    }
    svg {
      color: var(--clr-grey-5);
      margin: 0 4px;
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-10);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: var(--clr-red-light);
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
