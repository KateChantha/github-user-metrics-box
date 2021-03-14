## About MetricsBox

Github User Metrics Visualization built using React, Context API


## App Features

## App Dependencies
- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)
- [Styled-Components - Main Docs](https://styled-components.com/)
- fusioncharts
- react-fusioncharts
- Auth0

## App Documentation
### React Router Dom
[react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)
- version used - "react-router-dom": "^5.2.0"

```
- <Route path='/somepathname' exact={true}> exact also be useful when having a nested route
- A <Route path="*"> always matches, use case for handleing 404 page not found
- <Switch> renders the first child <Route> that matches. This to avoid rendering <Error path="*"> in every route/page
```

### Styled Components
[Styled-Components - Main Docs](https://styled-components.com/)
- Example of setting up react component with styled-components.

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
  return (
    <StyledWrapper>
      {some content}
    </StyledWrapper>
 );
};


const StyledWrapper = styled.htmlElement`
  write your styles here
`
export default ReactComponent
```

### Context API
##### in context.js
1. use react createContext() hooks to have an access to Provider & Consumer.
2. Instead of using GithubContext.Provider to wrap all the children directly, we create a HOC to customize the logic and that HOC returns GithubContext.Provider.
```jsx
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  /* logic here */
  return (
    <GithubContext.Provider value={ ... }>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext };
```
- in index.js is wrapped by GithubProvider
```jsx
ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```
- in chlidren component - Info.js. get data/ value from GithubContext
```jsx
import { GithubContext } from '../context/context';

const UserInfo = () => {
  const data = React.useContext(GithubContext);
  return <h2>user info component: {data}</h2>;
};
```

### Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests. 

### Styling Scrollbars
[Styling scrollbars for the Safari/Chrome](https://css-tricks.com/almanac/properties/s/scrollbar/)
[Styling Scrollbars CSS tricks](https://css-tricks.com/the-current-state-of-styling-scrollbars/)