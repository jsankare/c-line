import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "@/assets/colors";

const Container = styled.div`
    position: relative;
    width: 250px;
    height: 280px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
    top: 80%;
    ${Container}:hover & {
        opacity: 1;
        top: 50%;
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
    bottom: 10px;
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

const CartPreview = styled.div`
    position: absolute;
    display: flex;
    gap: 10px;
    bottom: 10%;
`

const AddOne = styled.button``

const RemoveOne = styled.button ``

const NumberOfItems = styled.p`
    color: ${colors.fourth};
`

const ProductCard = ({ title, text, picture, price }) => {

    const [addedToCart, setAddedToCart] = useState(false);
    const [numberOfItems, setNumberOfItems] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || {}
        const cartItem = cart[title]

        if (cartItem) {
            setAddedToCart(true)
            setNumberOfItems(cartItem.quantity)
        }
    }, [title]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        const updatedCart = { ...cart };
    
        if (addedToCart) {
            updatedCart[title] = { price, quantity: numberOfItems };
        } else {
            delete updatedCart[title];
        }
    
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }, [title, addedToCart, numberOfItems, price]);

    const incrementItem = () => {
        setNumberOfItems(numberOfItems + 1)
    }

    const decrementItem = () => {
        if (numberOfItems > 0) {
            setNumberOfItems(numberOfItems - 1)
        }
    }

    const addToCart = () => {
        setAddedToCart(true);
        setNumberOfItems(1)
    };

    const removeFromCart = () => {
        setAddedToCart(false);
        setNumberOfItems(0);
    };

    const isPriceAvailable = price !== undefined && price !== null && price !== '';

    return (
        <Container>
            <Front>
                <Picture src={picture} alt={title} />
            </Front>
            <Flipside>
                <Filter />
                <Title>{title}</Title>
                <Text>{text}</Text>
                {isPriceAvailable && <Price>{price}€</Price>}
                {isPriceAvailable && !addedToCart && (
                    <AddtoCart onClick={addToCart}>Ajouter au panier</AddtoCart>
                )}
                {isPriceAvailable && addedToCart && (
                    <CartPreview>
                        <RemoveOne onClick={decrementItem}>-</RemoveOne>
                        <NumberOfItems>{numberOfItems}</NumberOfItems>
                        <AddOne onClick={incrementItem}>+</AddOne>
                    </CartPreview>
                )}
                {isPriceAvailable && addedToCart && (
                    <RemoveFromCart onClick={removeFromCart}>Retirer du panier</RemoveFromCart>
                )}
            </Flipside>
        </Container>
    );
};

export default ProductCard;
