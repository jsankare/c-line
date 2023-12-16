import react from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 5px;
    font-size: 20px;
`

const StyledInput = styled.input`
    border: none;
    border-radius: 3px;
    height: 30px;
`

const StyledLabel = styled.label``

const Input = ( {input, label} ) => {
    return (
        <Container>
            <StyledLabel for={input} >{label}</StyledLabel>
            <StyledInput type="text" name={input} />
        </Container>
    )
}

export default Input;
