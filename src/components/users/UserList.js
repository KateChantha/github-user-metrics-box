import React, {useEffect} from 'react';
import { GithubContext } from '../../context/context';
import UserItem from './UserItem';
import './UserList.css'

const UserList = () => {
  const { isLoading, setIsLoading, getAllGithubUsers, allGithubUsrs } = React.useContext(GithubContext);

  useEffect(() => {
    
    getAllGithubUsers()
    // async function fetchData() { 
    //   // setIsLoading(true)
    //   const users = await getAllGithubUsers()
    //   console.log(users)
    // }
    // fetchData();
  }, []);


  const userArray = [
    {
      login: "mojombo",
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
      followers_url: "https://api.github.com/users/mojombo/followers",
      gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
      starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      repos_url: "https://api.github.com/users/mojombo/repos",
      },
      {
        login: "defunkt",
        id: 2,
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
        followers_url: "https://api.github.com/users/defunkt/followers",
        gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
        starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        repos_url: "https://api.github.com/users/defunkt/repos",
        },
        {
          login: "pjhyett",
          id: 3,
          avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
          url: "https://api.github.com/users/pjhyett",
          html_url: "https://github.com/pjhyett",
          followers_url: "https://api.github.com/users/pjhyett/followers",
          gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
          starred_url: "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
          repos_url: "https://api.github.com/users/pjhyett/repos",
          },
  ]


  return (
    <div className="user-list--container">
      {allGithubUsrs.map(user => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  )
}

export default UserList
