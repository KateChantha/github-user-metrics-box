import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

// have an access to Provider, Consumer 
const GithubContext = React.createContext();

// create GithubProvider to customize the logic and return GithubContext.Provider
const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // request loading
  const [requestCount, setRequestCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // error

  // check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let { remaining } = data.rate;
        setRequestCount(remaining);
        if (remaining === 0) {
          // throw an error
          // hind button
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(checkRequests,[]);

  return (
    <GithubContext.Provider value={{githubUser, repos, followers, requestCount}}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext };
