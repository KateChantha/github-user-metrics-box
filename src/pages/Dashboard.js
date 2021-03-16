import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      { isLoading 
        ? <img src={loadingImage} className="loading-img" alt="laoding" />
        : <React.Fragment>
            <Info />
            <User />
            <Repos />
         </React.Fragment>
      }
    </main>
  );
};

export default Dashboard;
