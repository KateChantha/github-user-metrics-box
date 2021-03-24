import React from 'react';
import { Link } from 'react-router-dom';
import { GithubContext } from '../../context/context';
import './UserItem.css';

const UserItem = ({user}) => {
  const { login, avatar_url } = user;

  const { searchGithubUser } = React.useContext(GithubContext);

  const handleViewMoreClick = () => {
    if (login) {
      searchGithubUser(login);
      // optional setUser('') after submit
    }
  }
  
  return (  
    <div className="user-item--container">
      <img src={avatar_url} 
        alt=''
        style={{width: "60px"}}
      />
      <h3>{login}</h3>
      <button onClick={handleViewMoreClick}>
        <Link to={`/users/${login}`}>
          <h4>view user metrics</h4>
        </Link>
      </button>
    </div>
  )
}

export default UserItem
