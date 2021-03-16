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
  const [error, setError] = useState({show: false, msg: ""});

  // set with default value
  const toggleError = (show = false, msg = '') => {
    setError({ show, msg })
  }
  const searchGithubUser = async (user) => {
    // clean up existing error msg with predefined default value
    toggleError();
    setIsLoading(true)
    // fetch github user 
    const response = await axios(`${rootUrl}/users/${user}`)
      .catch(err => console.log(err));
    
    if (response) setGithubUser(response.data)
    else toggleError(true, "there is no user with that user name!")
    // console.log(githubUser)
    checkRequests();
    setIsLoading(false);
  }
  // check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let { remaining } = data.rate;
        setRequestCount(remaining);

        if (remaining === 0) {
          toggleError(true, "sorry, you've exceeded your hourly rate limit!")
          // hind button
        }
      })
      .catch(err => console.log(err))
  }

  
  useEffect(checkRequests,[]);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requestCount, error, searchGithubUser, isLoading }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext };
