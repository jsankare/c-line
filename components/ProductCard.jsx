import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import colors from "@/assets/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    position: relative;
    width: 250px;
    height: 280px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    margin-bottom: 50px;
`

const Front = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`

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
`

const Picture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`

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
`

const Title = styled.h3`
    opacity: 0;
    color: ${colors.primary};
    transition: opacity 0.3s ease-in-out;
    transition: top 0.5s ease-in-out;
    font-size: 30px;
    position: absolute;
    top: 10%;
    max-width: 95%;
    ${Container}:hover & {
        opacity: 1;
    }
`

const Text = styled.p`
    opacity: 0;
    color: ${colors.primary};
    transition: opacity 0.3s ease-in-out;
    transition: top 0.5s ease-in-out;
    font-size: 22px;
    text-align: center;
    position: absolute;
    top: 80%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 95%;
    ${Container}:hover & {
        opacity: 1;
        top: 55%;
    }
`

const Price = styled.p`
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
`

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
    z-index: 999;
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

const AddOne = styled.button`
    border-radius: 5px;
    border: none;
    &:active {
        transform: scale(0.95);
    }
`

const RemoveOne = styled.button `
    border-radius: 5px;
    border: none;
    &:active {
        transform: scale(0.95);
    }
`

const NumberOfItems = styled.p`
    color: ${colors.fourth};
`


const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    position: absolute;
    z-index: 999;
    font-size: 20px;
    top: 10px;
    right: 10px;
    color: black;
    transition: ease-in-out 0.5s;
    width: 100%;
    max-width: 25px;
    &:hover {
        cursor: pointer;
    }
    ${Container}:hover & {
        color: ${colors.primary};
    }
`

const ProductCard = ({ title, text, picture, price, description, closeups }) => {

    const [addedToCart, setAddedToCart] = useState(false);
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleModal = (product) => {
        setSelectedProduct(product);
        setShowModal(!showModal);
      };

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
            updatedCart[title] = { price, quantity: numberOfItems, picture };
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
        if (numberOfItems == 1) {
            setAddedToCart(false)
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
            {isPriceAvailable && (
            <StyledFontAwesomeIcon onClick={() => toggleModal({ title, text, picture, price, description, closeups })} icon={faMagnifyingGlass} />
            )}
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
                        <RemoveOne onClick={decrementItem}><FontAwesomeIcon icon={faMinus} /></RemoveOne>
                        <NumberOfItems>{numberOfItems}</NumberOfItems>
                        <AddOne onClick={incrementItem}><FontAwesomeIcon icon={faPlus} /></AddOne>
                        
                    </CartPreview>
                )}
                {isPriceAvailable && addedToCart && (
                    <RemoveFromCart onClick={removeFromCart}>Retirer du panier</RemoveFromCart>
                )}
            </Flipside>
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                product={selectedProduct}
                closeups={closeups}
                description={text}
            />
        </Container>
    );
};

export default ProductCard;
