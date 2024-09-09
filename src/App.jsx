import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Input from "./ui/Input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aliceblue;
  margin-left: 20px;
`;

const StyledApp = styled.div`
  background-color: aliceblue;
  margin: 10rem;
  border: 1px solid blue;
  border-radius: 5px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading>The Wild Oasis</Heading>
        <Heading as="h2">Check in</Heading>
        <Heading as="h3">Check out</Heading>
        <Input />
        <Button onClick={() => alert("Hello")}>Contact us</Button>
        <Button
          size="medium"
          variation="primary"
          onClick={() => alert("Hello")}
        >
          Contact us
        </Button>
      </StyledApp>
    </>
  );
}

export default App;
