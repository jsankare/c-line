import React from "react";
import styled, { css } from "styled-components";
import colors from "@/assets/colors";

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

    ${(props) =>
        props.neon &&
        css`
            text-shadow: 0 0 10px ${colors.primary};
            color: black;
        `};
`;

const Paragraph = ({ text, size, weight, neon }) => {
    return (
        <>
            <Text size={size} weight={weight} neon={neon}>
                {text}
            </Text>
        </>
    );
};

export default Paragraph;
