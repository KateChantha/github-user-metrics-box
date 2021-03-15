import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

// const chartData = [
//   {
//     label: "JavaScript",
//     value: "290" 
//   },
//   {
//     label: "HTML",
//     value: "260"
//   },
//   {
//     label: "CSS",
//     value: "180"
//   },
// ];
const Repos = () => {
  const {repos} = React.useContext(GithubContext);
  
  let languages = repos.reduce((totalObj, item)=> {
    const { language } = item;
    // handle null
    if (!language) return totalObj;
    // count language
    // set up key dynamicly
    !totalObj[language] 
    ? totalObj[language] = {label: language, value: 1}
    : totalObj[language].value ++;
    return totalObj
  }, {})

  // sort to top 5 languages
  languages = Object.values(languages)
    .sort((a,b) => b.value - a.value)
    .slice(0,5)
  // console.log(languages)

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={languages} />
        
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
