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
  const [allGithubUsrs, setAllGithubUsers] = useState([]);
  const [someGithubUsers, setSomeGithubUsers] = useState([]);
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

  // Get all users +++
  const getAllGithubUsers = async () => {
    // setIsLoading(true);
    const res = await axios.get(`${rootUrl}/users`);
    console.log(res)
    setIsLoading(false);
    setAllGithubUsers(res.data);
    return res.data
  }

  // Get some user from search box +++
  const searchSomeGithubUser = async (user) => {
    const res = await axios.get(`${rootUrl}/search/users?q=${user}`)

    // console.log(res.data.items)
    setSomeGithubUsers(res.data.items);
  }

  const searchGithubUser = async (user) => {
    // clean up existing error msg with predefined default value
    toggleError();
    setIsLoading(true)
    // fetch github user 
    const response = await axios(`${rootUrl}/users/${user}`)
      .catch(err => console.log(err));
    
    if (response) { 
      setGithubUser(response.data)
      const {login, followers_url} = response.data;

      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`), 
        axios(`${followers_url}?per_page=100`)
      ]).then(results => {
        const [repoPromise, followesPromise] = results;
        const status = 'fulfilled';
        if (repoPromise.status === status) 
          setRepos(repoPromise.value.data)
        if (followesPromise.status === status) 
          setFollowers(followesPromise.value.data)
      }).catch(error => console.log(error));
      
    } else { 
      toggleError(true, "there is no user with that user name!")
    }
    
    checkRequests();
    setIsLoading(false);
  }

  // check remaining request 
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let { remaining } = data.rate;
        setRequestCount(remaining);

        if (remaining === 0) {
          toggleError(true, "sorry, you've exceeded your hourly rate limit!")
        }
      })
      .catch(err => console.log(err))
  }

  // get the remaining request once, after page loaded
  useEffect(checkRequests,[]);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requestCount, error, searchGithubUser, setIsLoading, isLoading, getAllGithubUsers, allGithubUsrs, searchSomeGithubUser, someGithubUsers }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext };
