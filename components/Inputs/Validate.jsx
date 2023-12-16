import react from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    text-align: center;
`

const Validate = styled.button`
    width: 100%;
    font-size: 16px;
    max-width: 250px;
    height: 30px;
    border-radius: 5px;
    border: none;
    &:active {
        transform: scale(0.95);
    }
`

const ValidateInput = ( {text} ) => {
    return (
        <Container>
            <Validate type="submit">{text}</Validate>
        </Container>
    )
}

export default ValidateInput;
