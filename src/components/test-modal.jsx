import { useDispatch } from "react-redux";
import { closeModal } from "../redux/modalOpenSlice";
import styled from "styled-components";
import { Button } from "./styled-components/global-styles";

const Container = styled.div`
    width: 400px;
    height: 210px;
    display: flex;
    flex-direction: column;
    background-color: lightgrey;
    padding: 20px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
`
const ContainerGap = styled(Container)`
    width: 410px;
    height: 210px;
    background-color: white;
    justify-content: center;
    align-items: center;
`
const ContainerOuter = styled(Container)`
    width: 430px;
    height: 230px;
    background-color: lightgrey;
    justify-content: center;
    align-items: center;
`

const Text = styled.h1`
`

const TestModal = () => {

    const dispatch = useDispatch();

    return (
        <ContainerOuter>
            <ContainerGap>
                <Container>
                    <Text>This is a modal</Text>
                    <Button onClick={() => dispatch(closeModal())}>Close Modal</Button>
                </Container>
            </ContainerGap>
        </ContainerOuter>
    )
}

export default TestModal;