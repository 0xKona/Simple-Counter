import { useDispatch, useSelector } from "react-redux"
import CounterComponent from "./components/counter"
import { openModal } from "./redux/modalOpenSlice"
import styled from "styled-components"
import TestModal from "./components/test-modal"
import { Button } from "./components/styled-components/global-styles"

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
const OpenTestModal = styled(Button)`
  position: absolute;
  left: 5px;
  top: 5px;
`

const App = () => {

  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.modal.value)
  
  return (
    <>
      {modalOpen ? 
        <>
          <Container>
            <TestModal />
          </Container>
          </>
      :
        <>
          <OpenTestModal onClick={() => dispatch(openModal())}>Open Test Modal</OpenTestModal>
          <Container>
            <CounterComponent />
          </Container>
        </>}
        <FooterText>
          Simple Counter made using Redux and Vite + React
        </FooterText>
    </>
  )
}

export default App
