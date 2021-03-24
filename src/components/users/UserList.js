import React, {useEffect} from 'react';
import { GithubContext } from '../../context/context';
import UserItem from './UserItem';
import './UserList.css'

const UserList = () => {
  const { isLoading, setIsLoading, getAllGithubUsers, someGithubUsers } = React.useContext(GithubContext);


  useEffect(() => {
    getAllGithubUsers()
  }, []);

  return (
    <div className="user-list--container">
      {someGithubUsers.map(user => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  )
}

export default UserList
