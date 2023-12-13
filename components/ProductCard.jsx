import React from "react";
import styled from "styled-components";
import colors from "@/assets/colors";

const Container = styled.div`
    position: relative;
    width: 250px;
    height: 280px;
    border-radius: 15px;
`;

const Front = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 15px;

`;

const Flipside = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: ease-in-out 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 35px;
    opacity: 0;
    &:hover {
        opacity: 0.5;
    }
    ${Container}:hover & {
        opacity: 1;
    }
`;

const Picture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;

`;

const Filter = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
    border-radius: 15px;
    ${Container}:hover & {
        opacity: 0.8;
    }
`;

const Title = styled.h3`
    z-index: 1000;
    opacity: 0;
    color: ${colors.primary};
    transition: opacity 0.3s ease-in-out;
    font-size: 30px;
    ${Container}:hover & {
        opacity: 1;
    }
`;

const Text = styled.p`
    z-index: 1000;
    opacity: 0;
    color: ${colors.primary};
    transition: opacity 0.3s ease-in-out;
    font-size: 22px;
    padding: 0px 15px;
    text-align: center;
    ${Container}:hover & {
        opacity: 1;
    }
`;

const ProductCard = ({ title, text, picture }) => {
    return (
        <Container>
            <Front>
                <Picture src={picture} alt={title} />
            </Front>
            <Flipside>
                <Filter />
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Flipside>
        </Container>
    );
};

export default ProductCard;
