import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";

const Container = styled.div`
    width: 100%;
    text-align: center;
`

const Validate = styled.button`
    width: 100%;
    font-size: 20px;
    max-width: 250px;
    height: 30px;
    border-radius: 5px;
    border: none;
    transition: ease-in-out 0.2s;
    &:hover {
        background-color: ${colors.primary};
    }
    &:active {
        font-size: 18px;
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
