import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import UserList from '../components/users/UserList';

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      { isLoading 
        ? <img src={loadingImage} className="loading-img" alt="laoding" />
        : <React.Fragment>
            <UserList />
           
            <Info />
            <User />
            <Repos /> 
         </React.Fragment>
      }
    </main>
  );
};

export default Dashboard;
