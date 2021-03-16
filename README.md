## About MetricsBox

Github User Metrics Visualization built with React, Context API.


## App Features

## App Dependencies
- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)
- [Styled-Components - Main Docs](https://styled-components.com/)
- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [react-fusioncharts](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
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

- Root Endpoint - https://api.github.com
- Get User - https://api.github.com/users/${ ... }
- Repos - https://api.github.com/users/${ ... }/repos?per_page=100
- Followers - https://api.github.com/users/${ ... }/followers
- Rate Limit - https://api.github.com/rate_limit

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests. 

### Styling Scrollbars
- [Styling scrollbars for the Safari/Chrome](https://css-tricks.com/almanac/properties/s/scrollbar/)
- [Styling Scrollbars CSS tricks](https://css-tricks.com/the-current-state-of-styling-scrollbars/)

### Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

- Render the chart (see ExampleChart.js)
- NOTE: in Repos.js 
- organize object data shape to be {label: , value: } because that's what the charts looking for.
```
{
  label: <string>,
  value: <number>
}
```

### Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!

- Connections
  email,social

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)
#### cacheLocation in index.js
- [REACT cacheLocation](https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html#cachelocation) The location to use when storing cache data. Valid values are memory or localstorage. The default setting is memory. This to solve an issue, so that we can still keep user login while navigating from 404 page not found back to home/ dashboard page.

#### Page loaded -> Login -> Logout : state that is happening
- in Navbar.js, when page is loaded 
```
isAuthenticated -> false 
user -> undefined
isLoading -> true
```
- when user click on 'Log in' button
```
isAuthenticated -> true
user -> {...}
isLoading -> false
```

- when user click on 'Log out' button
```
isAuthenticated -> false
user -> false
isLoading -> false
```

### context.js
- fetch data from github api. Store data , set error and loading status.

### Search.js
- have it's own local state to collect data from input search.
- from the global state will get the function that call



