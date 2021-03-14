## About MetricsBox

Github User Metrics Visualization.

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