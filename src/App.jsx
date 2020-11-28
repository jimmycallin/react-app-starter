import styled from "styled-components";

const AppContainer = styled.div`
  width: 80vw;
  display: "grid";
  margin: vw auto;
`;

const Header = styled.header`
  font-size: 5em;
`;

function App() {
  return (
    <AppContainer>
      <Header>React Boilerplate</Header>
    </AppContainer>
  );
}

export default App;
