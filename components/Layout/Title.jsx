import react from "react";
import styled, { css } from "styled-components";
import colors from "@/assets/colors";

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

    ${(props) =>
        props.neon &&
        css`
              text-shadow:
                0 0 5px #fff,
                0 0 10px #fff,
                0 0 20px #fff,
                0 0 40px ${colors.primary},
                0 0 80px ${colors.primary},
                0 0 90px ${colors.primary},
                0 0 100px ${colors.primary},
                0 0 150px ${colors.primary};
            color: black;
    `};
`

const MainTitle = ({ title, size, weight, neon }) => {
    return (
        <>
            <Title size={size} weight={weight} neon={neon} >{title}</Title>
        </>
    );
};

export default MainTitle;
