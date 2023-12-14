import react from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    gap: 5px;
    font-size: 20px;
    width: 100%;
`

const StyledSelect = styled.select`
    border: none;
    border-radius: 3px;
    height: 30px;
`

const StyledOption = styled.option`
    background-color: #222020;
`

const StyledLabel = styled.label``

const SelectInput = ( {input, label, options} ) => {
    return (
        <Container>
            <StyledLabel for={input} >{label}</StyledLabel>
            <StyledSelect name={input}>
                {options.map((option, index) => (
                    <StyledOption key={index} value={option}>
                        {option}
                    </StyledOption>
                ))}
            </StyledSelect>
        </Container>
    )
}

export default SelectInput;
