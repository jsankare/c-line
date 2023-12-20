import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "@/assets/colors";
import MainTitle from "./Layout/Title";

const Container = styled.section`
    padding: 20px;
    background-color: ${colors.secondary};
    border-radius: 10px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
`

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Item = styled.div`
    margin-bottom: 10px;
`

const ItemDetails = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 100px;
    font-size: 20px;
    font-weight: bold;
`

const ItemValue = styled.p`
    font-weight: bold;
`


const TotalPrice = styled.p`
    font-weight: bold;
    text-align: right;
    margin-top: 20px;
`

const ItemDetailFlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const ItemDetailCollumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    max-width: 200px;
`

const EmptyCartAlert = styled.p`
    font-size: 18px;
    text-align: center;
`

const CollumnHeader = styled.p`
    font-weight: bold;
    font-size: 20px;
`

const ModifyCartItemButton = styled.button`
    background-color: ${colors.fourth};
    border: none;
    width: fit-content;
    height: 30px;
    border-radius: 5px;
    background-color: ${colors.secondary};
    font-size: 18px;
    &:hover {
        cursor: pointer;
    }
    &:active{
        font-size: 16px;
    }
`

const EmptyCartItemButton = styled.button`
    background-color: ${colors.fourth};
    border: none;
    width: fit-content;
    height: 30px;
    border-radius: 5px;
    background-color: ${colors.secondary};
    font-size: 18px;
    background-color: ${colors.primary};
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
    &:active{
        font-size: 16px;
    }
`

const ProductImage = styled.img`
    width: 100%;
    max-width: 250px;
    max-height: 200px;
`

const Cart = () => {
    const [cart, setCart] = useState({});
    let totalPrice = 0;

    useEffect(() => {
        if (typeof window !== "undefined") {
            const cartData = JSON.parse(localStorage.getItem("cart")) || {};
            setCart(cartData);
        }
    }, []);

    const removeItem = (title) => {
        const updatedCart = { ...cart };
        if (updatedCart[title].quantity > 1) {
            updatedCart[title].quantity -= 1;
        } else {
            delete updatedCart[title];
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const addItem = (title) => {
        const updatedCart = { ...cart };
        if (updatedCart[title]) {
            updatedCart[title].quantity += 1;
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const emptyCart = () => {
        const updatedCart = {};
        setCart(updatedCart)
        localStorage.removeItem("cart")
    };

    return (
        <Container>
            <MainTitle title="Votre panier" />
            <CartWrapper>
                {Object.keys(cart).length > 0 && (
                    <ItemDetails>
                        <CollumnHeader>Produit</CollumnHeader>
                        <CollumnHeader>Prix</CollumnHeader>
                        <CollumnHeader>Quantité</CollumnHeader>
                        <CollumnHeader>Total</CollumnHeader>
                    </ItemDetails>
                )}

                {Object.keys(cart).length > 0 ? (
                    Object.keys(cart).map((title, index) => {
                        const { price, quantity, picture } = cart[title];
                        const itemTotal = price * quantity;
                        totalPrice += itemTotal;

                        return (
                            <Item key={index}>
                                    <ItemDetails>
                                        <ItemDetailCollumnWrapper>
                                        <ProductImage
                                            src={picture}
                                            alt={title}
                                            width="50"
                                            height="50"
                                        />
                                            <ItemValue>{title}</ItemValue>{" "}
                                        </ItemDetailCollumnWrapper>
                                        <ItemDetailFlexWrapper>
                                            <ModifyCartItemButton onClick={() => removeItem(title)}>-</ModifyCartItemButton>
                                            <ItemValue>{quantity}</ItemValue>{" "}
                                            <ModifyCartItemButton onClick={() => addItem(title)}>+</ModifyCartItemButton>
                                        </ItemDetailFlexWrapper>
                                        <ItemValue>{price} €</ItemValue>{" "}
                                        <ItemValue>{price * quantity} €</ItemValue>
                                    </ItemDetails>
                            </Item>
                        );
                    })
                ) : (
                    <EmptyCartAlert>Votre panier est vide</EmptyCartAlert>
                )}
            </CartWrapper>
            {Object.keys(cart).length > 0 && (
                    <>
                         <EmptyCartItemButton onClick={emptyCart} >Vider tout le panier</EmptyCartItemButton> 
                        <TotalPrice>Total: {totalPrice} €</TotalPrice>
                    </>
                )}

        </Container>
    );
};

export default Cart;
