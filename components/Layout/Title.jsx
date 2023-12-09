import react from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: ${(props) => {
        switch (props.size) {
            case "small":
                return "38px";
            case "medium":
                return "42px";
            case "big":
                return "48px";
            default:
                return "42px";
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
`

const MainTitle = ({ title, size, weight }) => {
    return (
        <>
            <Title size={size} weight={weight} >{title}</Title>
        </>
    );
};

export default MainTitle;
