import react from "react";
import styled, { css } from "styled-components";

const Title = styled.h2`
    font-size: ${(props) => {
        switch (props.size) {
            case "small":
                return "30px";
            case "medium":
                return "34px";
            case "big":
                return "38px";
            default:
                return "34px";
        }
    }};
    font-weight: ${(props) => {
        switch (props.weight) {
            case "light":
                return "lighter";
            case "normal":
                return "normal";
            case "bold":
                return "bold";
            default:
                return "normal"
        }
    }};

    ${(props) =>
        props.neon &&
        css`
            text-shadow: 0 0 10px ${colors.primary};
            color: black;
    `};
`

const SubTitle = ({ title, size, weight }) => {
    return (
        <>
            <Title size={size} weight={weight} >{title}</Title>
        </>
    )
}

export default SubTitle;
