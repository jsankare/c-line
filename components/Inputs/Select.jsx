import react from "react";
import styled from "styled-components";
import colors from "@/assets/colors";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    font-size: 20px;
    width: 100%;
`

const StyledSelect = styled.select`
    border: none;
    border-radius: 3px;
    height: 30px;
    font-size: 16px;
`

const StyledOption = styled.option``

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
