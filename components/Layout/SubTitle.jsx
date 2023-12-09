import react from "react";
import styled from "styled-components";

const Title = styled.h2`
    font-size: ${(props) => {
        switch (props.size) {
            case "small":
                return "34px";
            case "medium":
                return "36px";
            case "big":
                return "40px";
            default:
                return "36px";
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

const SubTitle = ({ title, size, weight }) => {
    return (
        <>
            <Title>{title}</Title>
        </>
    )
}

export default SubTitle;
