import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const {repos} = React.useContext(GithubContext);
  
  /*** mostUsedLanguage and mostStarLangauge ***/
  const languages = repos.reduce((totalObj, item)=> {
    const { language, stargazers_count } = item;
    // handle null
    if (!language) return totalObj;
    // count language
    // set up key dynamicly
    !totalObj[language]
    ? totalObj[language] = {
      label: language, 
      value: 1,
      stars: stargazers_count
    }
    : totalObj[language] = {
      ...totalObj[language],
      value: totalObj[language].value + 1,
      stars: totalObj[language].stars + stargazers_count
    }
    // console.log(totalObj)
    return totalObj
  }, {})

  // top 5 most used languages
  const mostUsedLanguage = Object.values(languages)
    .sort((a,b) => b.value - a.value)
    .slice(0,5);
  
  // top 5 most stars per langauge
  // config object shape to be {label: , value: }
  const mostStarLanguage = Object.values(languages)
    .sort((a,b) => b.statrs - a.statrs)
    .slice(0,5)
    .map(item => ({ ...item, value: item.stars }));

  /*** End of mostUsedLanguage and mostStarLangauge ***/
  /*** mostStarsRepo and forks ***/
  let {stars, forks} = repos.reduce((totalObj, item)=>{
    const { stargazers_count, name, forks } = item;
    // shape of stars property
    // <number>star-count: {lable: <string>repo-name, value: <number>star-count}
    totalObj.stars[stargazers_count] = { label: name, value: stargazers_count }
    totalObj.forks[forks] = { label: name, value: forks}

    return totalObj;
  },{
    stars:{}, forks:{}
  })

  // console.log(stars) 
  // display key of <number>star-count in ascending order
  // top 5 repo stared & forked
  const mostStaredRepo = Object.values(stars).slice(-5).reverse();
  const mostForkedRepo = Object.values(forks).slice(-5).reverse();
  /*** End of mostStarsRepo and forks ***/


  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={mostUsedLanguage} />
        <Column3D data={mostStaredRepo} />
        <Doughnut2D data={mostStarLanguage}/>
        <Bar3D data={mostForkedRepo} />
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
