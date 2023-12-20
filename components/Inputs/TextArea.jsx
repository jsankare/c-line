import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 5px;
    font-size: 20px;
`;

const StyledInput = styled.textarea`
    border: none;
    border-radius: 3px;
    height: 100px;
    resize: vertical;
`;

const StyledLabel = styled.label``;

const TextArea = ({ input, label, placeholder }) => {
    return (
        <Container>
            <StyledLabel htmlFor={input} placeholder={placeholder} >{label}</StyledLabel>
            <StyledInput name={input} />
        </Container>
    );
};

export default TextArea;
