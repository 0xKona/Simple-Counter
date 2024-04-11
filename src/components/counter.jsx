import { useDispatch, useSelector } from "react-redux"
import { decremented, incremented } from "../redux/counterSlice";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import styled from "styled-components";

const Container = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 100%;
    background-color: ${props => props.countColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ContainerGap = styled(Container)`
    width: 510px;
    height: 510px;
    background-color: white;
`
const ContainerOuter = styled(Container)`
    width: 530px;
    height: 530px;
    background-color: ${props => props.countColor};
`
const CountContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
`
const ValueText = styled.h1`
    font-size: 100px;
    color: ${props => props.fontColor};
`
const IncrementButton = styled.button`
    height: 75%;
    aspect-ratio: 1/1;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${props => props.fontColor};
    transition: ease-in-out 0.5;
    &:hover{
        transform: scale(1.05)
    }
`

const CounterComponent = () => {
    const dispatch = useDispatch(); // useDispatch gives you access to the dispatch function to update state
    const counter = useSelector(state => state.counter.value); // Access the state with useSelector
    
    const backgroundColor = () => {
        if (counter > 0) return 'green'
        if (counter < 0) return 'red'
        else return 'lightgrey'
    }
    const textColor = () => counter == 0 ? 'black' : 'white';

    return (
        <ContainerOuter countColor={backgroundColor()}>
            <ContainerGap>
                <Container countColor={backgroundColor()}>
                    <h2 style={{color: textColor()}}>VALUE</h2>
                    <CountContainer>
                        <IncrementButton fontColor={textColor()} onClick={() => dispatch(decremented())}><CiCircleMinus size={100}/></IncrementButton>
                        <ValueText fontColor={textColor()}>{counter}</ValueText>
                        <IncrementButton fontColor={textColor()} onClick={() => dispatch(incremented())}><CiCirclePlus size={100}/></IncrementButton>
                    </CountContainer>
                </Container>
            </ContainerGap>
        </ContainerOuter>
    )
}

export default CounterComponent;