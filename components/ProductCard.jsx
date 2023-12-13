import React from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import { useState } from "react";

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
    transition: ease-in-out 0.3s;
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
    transition: top 0.5s ease-in-out;
    font-size: 30px;
    position: absolute;
    top: 15%;
    ${Container}:hover & {
        opacity: 1;
    }
`;

const Text = styled.p`
    z-index: 1000;
    opacity: 0;
    color: ${colors.primary};
    transition: opacity 0.3s ease-in-out;
    transition: top 0.5s ease-in-out;
    font-size: 22px;
    padding: 0px 15px;
    text-align: center;
    position: absolute;
    top: 60%;
    ${Container}:hover & {
        opacity: 1;
        top: 40%;
    }
`;

const Price = styled.p`
    z-index: 1000;
    opacity: 0;
    color: ${colors.primary};
    transition: opacity 0.3s ease-in-out;
    transition: top 0.5s ease-in-out;
    font-size: 22px;
    padding: 0px 15px;
    text-align: center;
    position: absolute;
    top: 60%;
    ${Container}:hover & {
        opacity: 1;
        top: 40%;
    }
`;

const AddtoCart = styled.button`
    cursor: pointer;
    bottom: 0px;
    padding: 10px 15px;
    position: absolute;
    border: none;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
    background-color: black;
    font-size: 18px;
    color: ${colors.primary};
    ${Container}:hover & {
        bottom: 25px;
    }
`

const RemoveFromCart = styled.button`
    cursor: pointer;
    bottom: -50px;
    padding: 10px 15px;
    position: absolute;
    border: none;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
    background-color: black;
    font-size: 18px;
    color: ${colors.primary};
`

const ProductCard = ({ title, text, picture, price }) => {

    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = () => {
        setAddedToCart(true);
        console.log("totoaddtocart")
    };

    const removeFromCart = () => {
        setAddedToCart(false);
        console.log("Removed from cart");
    };

    return (
        <Container>
            <Front>
                <Picture src={picture} alt={title} />
            </Front>
            <Flipside>
                <Filter />
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Price>{price}</Price>
                {!addedToCart && <AddtoCart onClick={addToCart}>Ajouter au panier</AddtoCart>}
                {addedToCart && <RemoveFromCart onClick={removeFromCart}>Retirer du panier</RemoveFromCart>}
            </Flipside>
        </Container>
    );
};

export default ProductCard;
