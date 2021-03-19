import React from 'react'

const UserItem = ({user}) => {

  const {login, avatar_url, html_url} = user;
  return (  
    <div>
      <img src={avatar_url} 
        alt=''
        style={{width: "60px"}}
      />
      <h3>{login}</h3>
      <a href={html_url}>view more</a>
    </div>
  )
}

export default UserItem
