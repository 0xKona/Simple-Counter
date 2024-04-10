import CounterComponent from "./components/counter"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {

  return (
    <>
      <Container>
        <CounterComponent />
      </Container>
      <FooterText>
        Simple Counter made using Redux and Vite + React
      </FooterText>
    </>
  )
}

export default App
