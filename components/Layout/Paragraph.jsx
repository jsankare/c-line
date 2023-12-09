import react from "react";
import styled from "styled-components";

const Text = styled.p`
    font-size: ${(props) => {
        switch (props.size) {
            case "small":
                return "16px";
            case "medium":
                return "18px";
            case "big":
                return "22px";
            default:
                return "18px";
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

const Paragraph = ({ text, size, weight }) => {
    return (
        <>
            <Text size={size} weight={weight} >{text}</Text>
        </>
    )
}

export default Paragraph;
