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
    align-items: center;
    gap: 10px;
`

const Item = styled.div`
    margin-bottom: 10px;
`

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 15px;
    text-align: center;
    min-width: 500px;
`

const ItemDetails = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const ItemName = styled.p`
    font-weight: bold;
`

const ItemValue = styled.p`
`


const TotalPrice = styled.p`
    font-weight: bold;
    text-align: right;
    margin-top: 20px;
`

const ItemDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

const ItemDetailFlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
`

const EmptyCartAlert = styled.p`
    font-size: 18px;
`

const ModifyCartItemButton = styled.button`
    background-color: ${colors.fourth};
    border: none;
    width: fit-content;
    height: 30px;
    border-radius: 5px;
    background-color: ${colors.primary};
    font-size: 18px;
    &:active{
        font-size: 16px;
    }
`

const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
                {Object.keys(cart).length > 0 ? (
                    Object.keys(cart).map((title, index) => {
                        const { price, quantity } = cart[title];
                        const itemTotal = price * quantity;
                        totalPrice += itemTotal;

                        return (
                            <Item key={index}>
                                <ItemWrapper>
                                    <ItemDetails>
                                        <ItemDetailWrapper>
                                            <ItemName>Produit</ItemName>{" "}
                                            <ItemValue>{title}</ItemValue>{" "}
                                        </ItemDetailWrapper>
                                        <ItemDetailFlexWrapper>
                                            <ModifyCartItemButton onClick={() => removeItem(title)}>-</ModifyCartItemButton>
                                                <QuantityWrapper>
                                                    <ItemName>Quantité</ItemName>{" "}
                                                    <ItemValue>{quantity}</ItemValue>{" "}
                                                </QuantityWrapper>
                                            <ModifyCartItemButton onClick={() => addItem(title)}>+</ModifyCartItemButton>
                                        </ItemDetailFlexWrapper>
                                        <ItemDetailWrapper>
                                            <ItemName>Prix</ItemName>{" "}
                                            <ItemValue>{price}€</ItemValue>{" "}
                                        </ItemDetailWrapper>
                                    </ItemDetails>
                                </ItemWrapper>
                            </Item>
                        );
                    })
                ) : (
                    <EmptyCartAlert>Votre panier est vide</EmptyCartAlert>
                )}
                {Object.keys(cart).length > 0 && (
                    <>
                         <ModifyCartItemButton onClick={emptyCart} >Vider tout le panier</ModifyCartItemButton> 
                        <TotalPrice>Total: {totalPrice} €</TotalPrice>
                    </>
                )}
            </CartWrapper>

        </Container>
    );
};

export default Cart;